import assert from "node:assert/strict";
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
}
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
