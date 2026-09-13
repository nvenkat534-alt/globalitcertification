import { getJobFeed } from "@/lib/jobs";
export const dynamic = "force-dynamic";
export const maxDuration = 40;
export async function GET() {
  const feed = await getJobFeed();
  return Response.json(feed, { status: feed.sources.some(s => s.status === "ok") ? 200 : 503, headers: { "Cache-Control": "public, s-maxage=600, stale-while-revalidate=60" } });
}
