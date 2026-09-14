import { createHash } from "node:crypto";
import { validateEnquiry, type Enquiry } from "./enquiry-validation";

export type EnquiryRecord = { id: string; createdAt: string; status: "new"; environment: "production" | "verification"; enquiry: Enquiry };
export type EnquiryDependencies = {
  configured: boolean; origins: string[]; production: boolean;
  write: (path: string, record: EnquiryRecord) => Promise<void>;
  exists: (path: string) => Promise<boolean>;
  permit: (request: Request) => boolean | { allowed: boolean; retryAfter: number };
};
export async function receiveEnquiry(request: Request, deps: EnquiryDependencies): Promise<Response> {
  const reply = (data: object, status = 200, extraHeaders: Record<string, string> = {}) => Response.json(data, { status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", ...extraHeaders } });
  if (!deps.origins.includes(request.headers.get("origin") || "")) return reply({ error: "Please submit the form from our website." }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply({ error: "Unsupported form format." }, 415);
  if (!deps.configured) return reply({ error: "Online enquiries are temporarily unavailable. Please contact us on WhatsApp." }, 503);
  const decision = deps.permit(request);
  if (decision === false || (typeof decision === "object" && !decision.allowed)) {
    const retryAfter = typeof decision === "object" ? decision.retryAfter : 60;
    return reply({ error: `Too many attempts. Please try again in ${Math.ceil(retryAfter / 60)} minute(s), or continue on WhatsApp.`, retryAfter }, 429, { "Retry-After": String(retryAfter) });
  }
  const declaredLength = request.headers.get("content-length");
  if (declaredLength && Number(declaredLength) > 12_000) return reply({ error: "This enquiry is too long." }, 413);
  let parsed;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply({ error: "Please complete the enquiry form." }, 400);
    const chunks: Uint8Array[] = []; let total = 0;
    while (true) {
      const { value, done } = await reader.read(); if (done) break;
      total += value.byteLength;
      if (total > 12_000) { await reader.cancel(); return reply({ error: "This enquiry is too long." }, 413); }
      chunks.push(value);
    }
    parsed = validateEnquiry(JSON.parse(Buffer.concat(chunks).toString("utf8")));
  } catch (error) {
    return reply({ error: error instanceof SyntaxError ? "Please check the form and try again." : error instanceof Error ? error.message : "Please check the form." }, 400);
  }
  const now = Date.now();
  if (now - parsed.startedAt < 2000 || now - parsed.startedAt > 86_400_000) return reply({ error: "Please review the form, then submit it again. Refresh the page if it has been open since yesterday." }, 400);
  const digest = createHash("sha256").update(JSON.stringify(parsed.enquiry)).digest("hex").slice(0, 24);
  const environment = deps.production ? "production" : "verification";
  const path = `${environment === "production" ? "enquiries" : "verification"}/${parsed.requestId}-${digest}.json`;
  const record: EnquiryRecord = { id: parsed.requestId, createdAt: new Date(now).toISOString(), status: "new", environment, enquiry: parsed.enquiry };
  try {
    await deps.write(path, record);
  } catch {
    // A retry may follow a successful write whose HTTP response was lost.
    // Never overwrite a received enquiry or report success on a storage failure.
    try { if (!await deps.exists(path)) return reply({ error: "We couldn't save your enquiry. Please try again or contact us on WhatsApp." }, 503); }
    catch { return reply({ error: "We couldn't save your enquiry. Please try again or contact us on WhatsApp." }, 503); }
  }
  return reply({ received: true, receiptId: record.id });
}
