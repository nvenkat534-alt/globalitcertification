import { put, head } from "@vercel/blob";
import { createEnquiryLimiter } from "@/lib/enquiry-rate-limit";
import { receiveEnquiry } from "@/lib/enquiry-handler";

export const runtime = "nodejs";
export const maxDuration = 30;
const permit = createEnquiryLimiter();

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
    permit,
  });
}
