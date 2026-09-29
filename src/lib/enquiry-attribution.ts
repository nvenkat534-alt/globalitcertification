// Only campaign metadata belongs here. Never copy arbitrary URL parameters or PII.
export function cleanAttribution(input: unknown): Record<string, string> {
  if (!input || typeof input !== "object" || Array.isArray(input)) return {};
  const source = input as Record<string, unknown>;
  const result: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const value = source[key];
    if (typeof value === "string" && /^[a-zA-Z0-9_./+ -]{1,150}$/.test(value)) result[key] = value;
  }
  for (const key of ["gclid", "gbraid", "wbraid"]) {
    const value = source[key];
    if (typeof value === "string" && /^[a-zA-Z0-9_-]{1,512}$/.test(value)) result[key] = value;
  }
  if (typeof source.adgroup_id === "string" && /^\d{1,20}$/.test(source.adgroup_id)) result.adgroup_id = source.adgroup_id;
  if (["m", "c", "t"].includes(String(source.device))) result.device = String(source.device);
  if (["e", "p", "b"].includes(String(source.matchtype))) result.matchtype = String(source.matchtype);
  return result;
}

export function isGoogleAttribution(values: Record<string, string>) {
  return values.utm_source === "google" || Boolean(values.gclid || values.gbraid || values.wbraid);
}

export function whatsappReferenceUrl(href: string, reference: string) {
  const url = new URL(href);
  if (url.protocol !== "https:" || url.hostname !== "wa.me" || url.pathname !== "/919392828155") return null;
  const original = (url.searchParams.get("text") || "Hi Global Certs IT! Please share certification details.")
    .replace(/\nRef: GC-[a-f0-9]{16}\b/g, "");
  url.searchParams.set("text", `${original}\nRef: ${reference}`);
  return url.toString();
}
