import { certKey, providers, type Certification } from "./certifications.ts";

// Editorial display order, led by Global Certs IT's main certification audiences.
// This is not a claim about measured sales or worldwide exam volumes.
export const providerOrder = [
  "pmi", "aws", "microsoft", "google-cloud", "salesforce", "servicenow",
  "cisco", "comptia", "databricks", "snowflake", "peoplecert", "scrum-alliance",
  "scrum-org", "safe", "istqb", "ec-council", "fortinet", "isaca", "isc2",
  "sap", "oracle", "vmware", "red-hat", "linux-foundation", "hashicorp",
  "juniper", "uipath", "iiba", "togaf", "splunk", "nvidia", "asq", "iapp", "anthropic",
];
export const popularCertKeys = [
  "pmi/pmp", "aws/solutions-architect-associate", "microsoft/azure-administrator",
  "google-cloud/associate-cloud-engineer", "salesforce/platform-administrator",
  "servicenow/certified-system-administrator", "cisco/ccna", "comptia/security-plus",
  "databricks/data-engineer-associate", "snowflake/snowpro-core",
  "peoplecert/itil-foundation", "scrum-alliance/csm", "scrum-org/psm-i",
  "safe/safe-agilist", "istqb/ctfl", "ec-council/ceh", "fortinet/nse-4",
  "sap/s4hana-sales", "oracle/oci-architect-associate", "linux-foundation/cka",
  "hashicorp/terraform-associate", "isaca/cisa", "isc2/cissp",
];
export const catalogueCategories = [
  "All fields", "Project Management & Agile", "Cloud", "AI", "Data & Analytics",
  "Cybersecurity", "Business Apps & Automation", "Networking", "Testing & QA",
  "DevOps & Linux", "Business Analysis & Architecture", "Quality & Six Sigma",
] as const;
export type CatalogueCategory = typeof catalogueCategories[number];
export type CatalogueSort = "popular" | "name" | "provider";
const rank = (list: readonly string[], value: string) => {
  const index = list.indexOf(value);
  return index < 0 ? list.length : index;
};
export const orderedProviders = [...providers].sort((a, b) => rank(providerOrder, a.id) - rank(providerOrder, b.id) || a.name.localeCompare(b.name));
const normalise = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
export function inCatalogueCategory(c: Certification, category: string) {
  switch (category) {
    case "Project Management & Agile": return ["pmi", "peoplecert", "safe", "scrum-alliance", "scrum-org"].includes(c.provider);
    case "Cloud": return Boolean(c.roles["cloud-engineer"] || c.roles["cloud-architect"]);
    case "AI": return Boolean(c.ai);
    case "Data & Analytics": return Boolean(c.roles["data-engineer"] || c.roles["data-analyst"] || c.roles["ml-engineer"]);
    case "Cybersecurity": return Boolean(c.roles.cybersecurity);
    case "Business Apps & Automation": return ["sap", "salesforce", "servicenow", "uipath"].includes(c.provider);
    case "Networking": return Boolean(c.roles["network-engineer"]);
    case "Testing & QA": return c.provider === "istqb";
    case "DevOps & Linux": return Boolean(c.roles.devops) || ["linux-foundation", "red-hat", "hashicorp"].includes(c.provider);
    case "Business Analysis & Architecture": return ["iiba", "togaf"].includes(c.provider) || Boolean(c.roles["business-analyst"]);
    case "Quality & Six Sigma": return c.provider === "asq";
    default: return true;
  }
}
export function filterCatalogue(items: Certification[], {query = "", provider = "all", category = "All fields", sort = "popular"}: {query?: string; provider?: string; category?: string; sort?: CatalogueSort} = {}) {
  const words = normalise(query).split(/\s+/).filter(Boolean);
  return items.filter(c => {
    const p = providers.find(p => p.id === c.provider);
    const haystack = normalise([c.name, c.exam, c.provider, p?.name, ...(c.aliases || []), ...c.skills].join(" "));
    return (provider === "all" || c.provider === provider) && inCatalogueCategory(c, category) && words.every(word => haystack.includes(word));
  }).sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "popular") {
      const difference = rank(popularCertKeys, certKey(a)) - rank(popularCertKeys, certKey(b));
      if (difference) return difference;
    }
    return rank(providerOrder, a.provider) - rank(providerOrder, b.provider) || a.stage - b.stage || a.name.localeCompare(b.name);
  });
}
