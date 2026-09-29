import { put } from "@vercel/blob";
import { createEnquiryLimiter } from "@/lib/enquiry-rate-limit";
import { receiveEnquiryIntent } from "@/lib/enquiry-intent-handler";

export const runtime = "nodejs";
export const maxDuration = 15;
const permit = createEnquiryLimiter();

export async function POST(request: Request) {
  const origins = ["https://www.globalcertsit.com", "https://globalcertsit.com"];
  if (process.env.VERCEL_URL) origins.push(`https://${process.env.VERCEL_URL}`);
  if (process.env.VERCEL_BRANCH_URL) origins.push(`https://${process.env.VERCEL_BRANCH_URL}`);
  if (process.env.NODE_ENV === "development") origins.push("http://localhost:3000", "http://localhost:3100");
  return receiveEnquiryIntent(request, {
    origins, configured: Boolean(process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN), permit,
    write: async record => {
      const prefix = process.env.VERCEL_ENV === "production" ? "enquiry-intents" : "verification/intents";
      await put(`${prefix}/${record.reference}.json`, JSON.stringify(record), {
        access: "private", contentType: "application/json", addRandomSuffix: false, allowOverwrite: false,
      });
    },
  });
}
