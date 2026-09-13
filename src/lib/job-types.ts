export type JobSourceId = "remotive" | "arbeitnow";
export type Job = { id: string; title: string; company: string; location: string; remote: boolean; url: string; source: JobSourceId; postedAt: string; tags: string[]; excerpt: string; searchText: string };
export type JobFeed = { jobs: Job[]; checkedAt: string; sources: { id: JobSourceId; name: string; status: "ok" | "unavailable"; count: number; coverage: string }[] };
export function plainText(value: unknown) {
  return String(value ?? "").replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim();
}
export function normaliseJob(row: Record<string, unknown>, source: JobSourceId, now = Date.now()): Job | null {
  const title = plainText(row.title).slice(0, 200), company = plainText(row.company_name).slice(0, 160);
  if (!title || !company || typeof row.url !== "string") return null;
  let url: URL;
  try { url = new URL(row.url); } catch { return null; }
  const hosts = source === "remotive" ? ["remotive.com", "www.remotive.com"] : ["arbeitnow.com", "www.arbeitnow.com"];
  if (url.protocol !== "https:" || !hosts.includes(url.hostname) || url.username || url.password) return null;
  const date = source === "remotive" ? Date.parse(String(row.publication_date) + (/Z$|[+-]\d\d:\d\d$/.test(String(row.publication_date)) ? "" : "Z")) : Number(row.created_at) * 1000;
  if (!Number.isFinite(date) || date > now + 86400000 || date < now - 45 * 86400000) return null;
  const tags = Array.isArray(row.tags) ? row.tags.slice(0, 10).map(plainText) : [];
  const description = plainText(row.description);
  return { id: `${source}-${String(row.id || row.slug || url.pathname)}`, title, company, location: plainText(source === "remotive" ? row.candidate_required_location : row.location) || "Check location on listing", remote: source === "remotive" || row.remote === true, url: url.href, source, postedAt: new Date(date).toISOString(), tags, excerpt: description.slice(0, 280), searchText: `${title} ${tags.join(" ")} ${description.slice(0, 2500)}`.toLowerCase() };
}
