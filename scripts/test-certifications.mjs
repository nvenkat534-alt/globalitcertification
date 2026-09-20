import assert from "node:assert/strict";
import { getRegistrationGuide } from "../src/lib/registration.ts";
import { filterCatalogue, orderedProviders, inCatalogueCategory } from "../src/lib/catalogue.ts";
import {
  certifications,
  certKey,
  getMatches,
  isAvailable,
  fitScore,
  whatsappUrl,
  providers,
  roles,
} from "../src/lib/certifications.ts";
const keys = certifications.map(certKey);
const selectedProviders = ["istqb", "peoplecert", "safe", "scrum-alliance", "ec-council", "fortinet", "vmware", "juniper", "uipath", "iiba", "togaf", "splunk", "nvidia", "asq", "salesforce", "oracle", "sap", "linux-foundation", "hashicorp", "scrum-org"];
for (const provider of selectedProviders) {
  assert.ok(certifications.filter(c => c.provider === provider).length >= 2, `${provider} must expose actual credential choices`);
}
assert.equal(new Set(orderedProviders.map(p => p.id)).size, providers.length, "The provider directory must include every provider exactly once");
const catalogue = filterCatalogue(certifications);
assert.deepEqual(catalogue.slice(0, 4).map(certKey), ["pmi/pmp", "aws/solutions-architect-associate", "microsoft/azure-administrator", "google-cloud/associate-cloud-engineer"]);
assert.equal(filterCatalogue(certifications, {query: "AI testing ISTQB"})[0]?.id, "ct-ai");
assert.equal(filterCatalogue(certifications, {query: "SAP MM"})[0]?.id, "s4hana-sourcing-procurement");
assert.equal(filterCatalogue(certifications, {query: "Terraform Professional"})[0]?.id, "terraform-advanced");
assert.ok(filterCatalogue(certifications, {provider: "iiba"}).every(c => c.provider === "iiba"));
assert.ok(filterCatalogue(certifications, {category: "Networking"}).some(c => c.provider === "juniper"));
assert.ok(filterCatalogue(certifications, {category: "Project Management & Agile"}).some(c => c.provider === "scrum-alliance"));
assert.ok(filterCatalogue(certifications, {category: "Testing & QA"}).every(c => c.provider === "istqb"));
assert.equal(filterCatalogue(certifications, {query: "no-matching-credential-xyz"}).length, 0);
assert.equal(filterCatalogue(certifications, {provider: "asq", category: "Testing & QA"}).length, 0);
const awsFoundation = filterCatalogue(certifications, {provider: "aws", level: "Foundation"});
assert.ok(awsFoundation.length > 0 && awsFoundation.every(c => c.provider === "aws" && c.level === "Foundation"));
assert.equal(filterCatalogue(certifications, {provider: "istqb", level: "Expert"}).length, 0);
assert.ok(filterCatalogue(certifications, {query: "AZ-104", level: "Associate"}).some(c => c.id === "azure-administrator"));
const alphabetical = filterCatalogue(certifications, {sort: "name"});
assert.ok(alphabetical.every((c, i) => i === 0 || alphabetical[i - 1].name.localeCompare(c.name) <= 0));
assert.ok(inCatalogueCategory(certifications.find(c => c.id === "vault-associate"), "DevOps & Linux"));
assert.equal(new Set(keys).size, keys.length, "Catalog keys must be unique");
assert.ok(
  certifications.length >= 55,
  "Catalog should include the researched role coverage",
);
for (const c of certifications) {
  assert.ok(providers.some((p) => p.id === c.provider));
  assert.ok(Object.keys(c.roles).every((r) => roles.some((x) => x.id === r)));
  assert.equal(new URL(c.source).protocol, "https:");
  assert.ok(c.why && c.readiness && c.eligibility);
  const guide = getRegistrationGuide(c);
  assert.equal(new URL(guide.url).protocol, "https:");
  assert.ok(guide.steps.length >= 3 && guide.note);
}
// Learners must see access restrictions and current names when searching familiar terms.
const claude = getMatches({ query: "Claude" });
assert.equal(claude.length, 4);
assert.ok(claude.every(c => c.access === "Partner access" && c.ai));
assert.ok(claude.every(c => /partner/i.test(getRegistrationGuide(c).note)));
assert.equal(getMatches({ query: "Data Cloud Consultant" })[0]?.id, "data-360-consultant");
assert.equal(getMatches({ query: "AIGP" })[0]?.provider, "iapp");
assert.ok(getMatches({ query: "DevNet" }).every(c => c.name.includes("Automation")));
assert.equal(getMatches({ query: "CASP+" })[0]?.id, "securityx");
assert.ok(getMatches({ provider: "comptia" }).every(c => c.sourceKind === "Issuer badge" && /current exam code/.test(c.note)));
const pmiOptions = getMatches({ provider: "pmi" });
assert.ok(pmiOptions.some(c => c.id === "pgmp") && pmiOptions.some(c => c.id === "pmi-cpmai"));
const de = getMatches({ role: "data-engineer", today: "2026-09-13" });
assert.ok(
  de.every((c) => c.roles["data-engineer"]),
  "Role filter must exclude unrelated credentials",
);
for (const platform of [
  "aws",
  "microsoft",
  "google-cloud",
  "databricks",
  "snowflake",
])
  assert.ok(
    de.some((c) => c.provider === platform),
    `Data engineering should cover ${platform}`,
  );
assert.ok(
  getMatches({ provider: "microsoft", role: "data-engineer", query: "DP-700" })
    .length === 1,
);
assert.equal(getMatches({ query: "thereisnosuchcertification" }).length, 0);
assert.equal(
  getMatches({ query: "AI-900" }).length,
  0,
  "Old exam codes must not be offered as current results",
);
const beginner = getMatches({ role: "ai-engineer", experience: "beginner" });
assert.equal(
  beginner[0].stage,
  0,
  "Foundations should lead for an AI beginner",
);
const senior = getMatches({ role: "ml-engineer", experience: "senior" });
assert.equal(
  senior[0].stage,
  2,
  "Advanced ML exams should lead for experienced ML engineers",
);
const beta = certifications.find((c) => c.status === "Beta");
assert.ok(getMatches({ includeBeta: true }).includes(beta));
assert.ok(!getMatches({ includeBeta: false }).includes(beta));
assert.ok(!isAvailable({ ...beta, retireOn: "2026-09-12" }, "2026-09-13"));
assert.ok(!isAvailable({ ...beta, availableFrom: "2026-09-14" }, "2026-09-13"));
assert.ok(isAvailable({ ...beta, retireOn: "2026-09-13" }, "2026-09-13"));
for (const c of certifications)
  for (const e of ["all", "beginner", "working", "senior"]) {
    const score = fitScore(c, Object.keys(c.roles)[0], e);
    assert.ok(score > 0 && score <= 5);
  }
const message = "Data Engineer\nDP-700 & AWS + AI";
const wa = new URL(whatsappUrl(message));
assert.equal(wa.pathname, "/919392828155");
assert.equal(wa.searchParams.get("text"), message);
console.log(
  `PASS: ${certifications.length} certifications; ${roles.length} roles; ${providers.length} providers; ${de.length} data-engineering options. Filters, fit scores, availability dates and WhatsApp URLs checked.`,
);
