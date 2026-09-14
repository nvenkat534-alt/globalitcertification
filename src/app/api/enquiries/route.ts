import { put, head } from "@vercel/blob";
import { createHash, randomBytes } from "node:crypto";
import { receiveEnquiry } from "@/lib/enquiry-handler";

export const runtime = "nodejs";
const requests = new Map<string, { count: number; until: number }>();
const salt = randomBytes(16).toString("hex");

export async function POST(request: Request) {
  const origins = ["https://www.globalcertsit.com", "https://globalcertsit.com"];
  if (process.env.VERCEL_URL) origins.push(`https://${process.env.VERCEL_URL}`);
  if (process.env.VERCEL_BRANCH_URL) origins.push(`https://${process.env.VERCEL_BRANCH_URL}`);
  if (process.env.NODE_ENV === "development") origins.push("http://localhost:3000", "http://localhost:3100");
  return receiveEnquiry(request, {
    configured: Boolean(process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN),
    production: process.env.VERCEL_ENV === "production", origins,
    write: async (path, record) => {
      await put(path, JSON.stringify(record), { access: "private", contentType: "application/json", addRandomSuffix: false, allowOverwrite: false });
    },
    exists: async path => { try { await head(path); return true; } catch { return false; } },
    permit: req => {
      const now = Date.now();
      if (requests.size > 10_000) for (const [key, value] of requests) if (value.until < now) requests.delete(key);
      const key = createHash("sha256").update(salt + (req.headers.get("x-vercel-forwarded-for") || req.headers.get("x-forwarded-for") || "unknown").split(",")[0]).digest("hex");
      let entry = requests.get(key);
      if (!entry && requests.size >= 10_000) return false;
      if (!entry || entry.until < now) { entry = { count: 0, until: now + 3_600_000 }; requests.set(key, entry); }
      entry.count += 1;
      return entry.count <= 10;
    },
  });
}
