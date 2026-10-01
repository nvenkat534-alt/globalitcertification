import { test } from "node:test";
import assert from "node:assert/strict";
const origin = process.env.DISCOVERY_TEST_URL || "http://127.0.0.1:3103";
const canonicalOrigin = "https://www.globalcertsit.com";
const targets = [
  ["/certifications/pmi/pmp", "PMP Application", "PMP application checklist"],
  ["/certifications/aws/solutions-architect-associate", "AWS SAA-C03", "Before booking from India"],
  ["/certifications/microsoft/azure-administrator", "Azure AZ-104", "Use an account you can keep"],
];
for (const [path, title, section] of targets) test(`rendered guidance and metadata: ${path}`, async () => {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.ok(html.includes(section));
  assert.ok(html.includes("Independent support for professionals in India"));
  assert.ok(html.includes(`<link rel="canonical" href="${canonicalOrigin}${path}"`));
  assert.ok(html.includes(`<meta property="og:url" content="${canonicalOrigin}${path}"`));
  assert.ok(html.includes(`<meta property="og:title" content="${title}`));
  assert.ok(html.includes(`<meta name="twitter:title" content="${title}`));
  assert.ok(!html.includes('property="og:image"'));
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
  const breadcrumb = scripts.find(data => data["@type"] === "BreadcrumbList");
  assert.equal(breadcrumb.itemListElement.at(-1).item, canonicalOrigin + path);
  const links = [...html.matchAll(/href="(https:\/\/wa.me\/[^\"]+)"/g)];
  assert.ok(links.length > 0);
  for (const [, href] of links) {
    const text = new URL(href.replaceAll("&amp;", "&")).searchParams.get("text");
    assert.ok(!/[\r\n]|GC-[a-f0-9]{16}/.test(text));
  }
});
test("robots and sitemap use canonical public routes and verified dates", async () => {
  const robots = await (await fetch(origin + "/robots.txt")).text();
  assert.ok(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
  assert.ok(robots.includes("Disallow: /api/"));
  assert.ok(robots.includes("Disallow: /private/"));
  const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
  const entries = [...sitemap.matchAll(/<url>(.*?)<\/url>/gs)].map(match => match[1]);
  assert.equal(entries.length, 261);
  const dates = entries.filter(entry => entry.includes("<lastmod>"));
  assert.equal(dates.length, 4);
  assert.ok(dates.some(entry => entry.includes("/privacy</loc>") && entry.includes("2026-09-29")));
  assert.ok(!sitemap.includes("2026-09-20"));
  for (const entry of entries) assert.ok(entry.includes(`<loc>${canonicalOrigin}`));
});
test("existing aliases redirect and unknown certifications remain 404", async () => {
  const alias = await fetch(origin + "/certifications/microsoft/az-104", { redirect: "manual" });
  assert.equal(alias.status, 308);
  const locations = alias.headers.get("location").split(/,\s*/);
  assert.ok(locations.every(location => location === "/certifications/microsoft/azure-administrator"));
  assert.equal((await fetch(origin + "/certifications/aws/not-a-certification")).status, 404);
});
