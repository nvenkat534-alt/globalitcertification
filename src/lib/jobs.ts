import { unstable_cache } from "next/cache";
import { normaliseJob, type JobFeed, type JobSourceId } from "./job-types";

const sources: { id: JobSourceId; name: string; url: string; coverage: string }[] = [
  { id: "remotive", name: "Remotive", url: "https://remotive.com/api/remote-jobs", coverage: "Remote roles with country restrictions. Public listings are delayed by 24 hours at source." },
  { id: "arbeitnow", name: "Arbeitnow", url: "https://www.arbeitnow.com/api/job-board-api", coverage: "Latest 250 listings from the Europe-focused feed, primarily Germany. Includes non-remote roles." },
];
async function loadSource(source: typeof sources[number]) {
  const response = await fetch(source.url, { signal: AbortSignal.timeout(15000), cache: "no-store", headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`Job source ${source.id} unavailable`);
  const body = await response.text();
  if (body.length > 15000000) throw new Error("Job feed exceeds expected size");
  const data = JSON.parse(body);
  const rows: unknown = source.id === "remotive" ? data.jobs : data.data;
  if (!Array.isArray(rows)) throw new Error("Unexpected job feed format");
  return rows.slice(0, 500).map(row => row && typeof row === "object" ? normaliseJob(row, source.id) : null).filter((job): job is NonNullable<typeof job> => Boolean(job));
}
export async function getJobFeed(): Promise<JobFeed> {
  const day = new Date().toISOString().slice(0, 10);
  // Cache failures as explicit unavailable states too, so reloads cannot hammer a provider.
  const results = await Promise.allSettled(sources.map(source => unstable_cache(async () => {
    try { return { jobs: await loadSource(source), checkedAt: new Date().toISOString(), status: "ok" as const }; }
    catch { return { jobs: [], checkedAt: new Date().toISOString(), status: "unavailable" as const }; }
  }, ["career-jobs-v1", source.id, day], { revalidate: 86400 })()));
  const jobs = results.flatMap(r => r.status === "fulfilled" ? r.value.jobs : []);
  const checked = results.flatMap(r => r.status === "fulfilled" ? [r.value.checkedAt] : []);
  return { jobs: [...new Map(jobs.map(j => [j.url, j])).values()].sort((a, b) => b.postedAt.localeCompare(a.postedAt)), checkedAt: checked.sort()[0] || new Date().toISOString(), sources: sources.map((source, i) => ({ id: source.id, name: source.name, status: results[i].status === "fulfilled" ? results[i].value.status : "unavailable", count: results[i].status === "fulfilled" ? results[i].value.jobs.length : 0, coverage: source.coverage })) };
}
