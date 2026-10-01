import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { getDiscoveryGuide, routeLastModified, certificationBreadcrumbs, SITE_ORIGIN } = require(`${process.env.ENQUIRY_TEST_BUILD}/certification-discovery.js`);

test("focused guidance has reviewed official sources and independent-service metadata", () => {
  for (const [provider, id, host] of [["pmi", "pmp", "www.pmi.org"], ["aws", "solutions-architect-associate", "aws.amazon.com"], ["microsoft", "azure-administrator", "learn.microsoft.com"]]) {
    const guide = getDiscoveryGuide(provider, id);
    assert.equal(new URL(guide.source.url).hostname, host);
    assert.match(guide.description, /[Ii]ndependent paid/);
    assert.equal(guide.sections.length, 3);
    assert.equal(routeLastModified(`/certifications/${provider}/${id}`), guide.updatedOn);
  }
  assert.equal(getDiscoveryGuide("aws", "unknown"), undefined);
});

test("unknown sitemap dates are omitted and known privacy change is retained", () => {
  assert.equal(routeLastModified("/privacy"), "2026-09-29");
  for (const path of ["/", "/terms", "/certifications/aws", "/certifications/aws/cloud-practitioner"]) assert.equal(routeLastModified(path), undefined);
});

test("breadcrumbs describe real canonical pages without credential-provider claims", () => {
  const data = certificationBreadcrumbs({ name: "AWS", id: "aws" }, { name: "AWS Solutions Architect Associate", path: "/certifications/aws/solutions-architect-associate" });
  assert.equal(data["@type"], "BreadcrumbList");
  assert.deepEqual(data.itemListElement.map(item => item.position), [1, 2, 3]);
  for (const item of data.itemListElement) assert.equal(new URL(item.item).origin, SITE_ORIGIN);
  assert.equal(data.itemListElement[1].item, `${SITE_ORIGIN}/certifications/aws`);
  assert.equal(data.provider, undefined);
  assert.equal(data.aggregateRating, undefined);
});
