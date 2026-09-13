import { getJobFeed } from "@/lib/jobs";
export const dynamic = "force-dynamic";
export const maxDuration = 40;
// The cron warms the same bounded daily cache as visitors; it cannot invalidate it.
export async function GET() {
  const feed = await getJobFeed();
  return Response.json({ checkedAt: feed.checkedAt, sources: feed.sources }, { status: feed.sources.some(s => s.status === "ok") ? 200 : 503 });
}
