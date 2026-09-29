import { cleanAttribution } from "./enquiry-attribution";

// Match the purchased keyword, never guess the specific exam for a broad provider query.
const routes: Record<string, Array<[RegExp, string]>> = {
  aws: [
    [/\bcloud practitioner\b/, "cloud-practitioner"],
    [/\bai practitioner\b/, "ai-practitioner"],
    [/\bdata engineer\b/, "data-engineer-associate"],
  ],
  microsoft: [
    [/\bpower bi\b/, "power-bi-data-analyst"],
    [/\baz[ -]?104\b/, "azure-administrator"],
    [/\baz[ -]?305\b/, "azure-solutions-architect"],
  ],
  comptia: [
    [/\ba\+/, "a-plus"], [/\bnetwork\+/, "network-plus"],
    [/\bsecurity\+/, "security-plus"], [/\bcysa\+/, "cysa-plus"],
  ],
  cisco: [[/\bccna\b/, "ccna"]],
  isaca: [[/\bcisa\b/, "cisa"], [/\bcism\b/, "cism"], [/\bcrisc\b/, "crisc"]],
};

export function googleExamRoute(provider: string, params: Record<string, string | string[] | undefined>) {
  const tags = cleanAttribution(params);
  if (tags.utm_source !== "google" || tags.utm_campaign !== "24224408074") return null;
  const keyword = (tags.utm_term || "").toLowerCase().replace(/\s+/g, " ").trim();
  const exam = routes[provider]?.find(([pattern]) => pattern.test(keyword))?.[1];
  if (!exam) return null;
  return `/certifications/${provider}/${exam}?${new URLSearchParams(tags).toString()}`;
}
