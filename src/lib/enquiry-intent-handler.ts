import { cleanAttribution, isGoogleAttribution } from "./enquiry-attribution";
import type { RateDecision } from "./enquiry-rate-limit";

export type EnquiryIntent = {
  reference: string; createdAt: string; kind: "whatsapp_click"; status: "unconfirmed";
  attribution: Record<string, string>; landingPath: string; consent: true;
};
export async function receiveEnquiryIntent(request: Request, deps: {
  origins: string[]; configured: boolean;
  permit: (request: Request) => RateDecision;
  write: (record: EnquiryIntent) => Promise<void>;
}) {
  const reply = (data: object, status = 200) => Response.json(data, { status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
  if (!deps.origins.includes(request.headers.get("origin") || "")) return reply({ recorded: false }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply({ recorded: false }, 415);
  if (!deps.configured) return reply({ recorded: false }, 503);
  if (!deps.permit(request).allowed) return reply({ recorded: false }, 429);
  let data: Record<string, unknown>;
  try {
    const reader = request.body?.getReader(); if (!reader) return reply({ recorded: false }, 400);
    const chunks: Uint8Array[] = []; let length = 0;
    while (true) {
      const { done, value } = await reader.read(); if (done) break;
      length += value.byteLength;
      if (length > 4096) { await reader.cancel(); return reply({ recorded: false }, 413); }
      chunks.push(value);
    }
    data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!data || typeof data !== "object" || Array.isArray(data)) return reply({ recorded: false }, 400);
  } catch { return reply({ recorded: false }, 400); }
  const attribution = cleanAttribution(data.attribution);
  if (data.consent !== true || typeof data.reference !== "string" || !/^GC-[a-f0-9]{16}$/.test(data.reference) || !isGoogleAttribution(attribution)) return reply({ recorded: false }, 400);
  if (typeof data.landingPath !== "string" || !/^\/[a-zA-Z0-9/_-]{0,199}$/.test(data.landingPath)) return reply({ recorded: false }, 400);
  const record: EnquiryIntent = { reference: data.reference, createdAt: new Date().toISOString(), kind: "whatsapp_click", status: "unconfirmed", consent: true, attribution, landingPath: data.landingPath };
  try { await deps.write(record); } catch { return reply({ recorded: false }, 503); }
  return reply({ recorded: true, reference: record.reference });
}
