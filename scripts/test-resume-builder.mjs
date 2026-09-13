import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import { existsSync } from "node:fs";
import { readFile, mkdir, writeFile } from "node:fs/promises";
registerHooks({ resolve(specifier, context, nextResolve) {
  if (specifier.startsWith(".") && context.parentURL && !/\.[cm]?[jt]s$/.test(specifier)) {
    const candidate = new URL(specifier + ".ts", context.parentURL);
    if (existsSync(candidate)) return nextResolve(candidate.href, context);
  }
  return nextResolve(specifier, context);
} });
const { emptyDraft, parseResume, readDraft, draftText, composeBullet } = await import("../src/lib/resume-builder.ts");
const { readablePdfText } = await import("../src/lib/resume-file.ts");
const { createPdf, createWord } = await import("../src/lib/resume-export.ts");
const { certificationEnquiry } = await import("../src/lib/certifications.ts");
const source = "Sample Only — fictional résumé\nAlex Morgan\nalex@example.com | Hyderabad | +91 90000 00000\nPROFILE\nSAP SD analyst with order-to-cash, billing and pricing experience.\nWork experience:\n- Resolved 25 support tickets involving pricing and master data.\nUnrecognised custom detail remains here.\nCertifications\nC_TS462 — planned, not earned\nEducation\nTraining lab — fictional example\n";
const imported = parseResume(source, "sap-sd");
assert.equal(imported.originalText, source);
for (const phrase of ["alex@example.com | Hyderabad", "Unrecognised custom detail", "C_TS462 — planned, not earned", "Alex Morgan"]) assert.ok(draftText(imported).includes(phrase), `Preserve ${phrase}`);
assert.equal(imported.name, ""); // do not infer a person's name from the sample label
const draft = { ...imported, name: "Łukasz García — SAMPLE", email: "sample@example.com", headline: "SAP SD Analyst — fictional test", location: "Hyderabad, India", links: "https://example.com/portfolio", template: "modern" };
const restored = readDraft(JSON.stringify(draft));
assert.equal(draftText(restored), draftText(draft));
assert.equal(restored.originalText, source);
assert.throws(() => readDraft('{"version":2}'), /unsupported/);
assert.throws(() => readDraft(JSON.stringify({ ...draft, name: 42 })), /unsupported/);
assert.throws(() => readDraft(JSON.stringify({ ...draft, sections: [{ title: "Bad", content: {} }] })), /invalid/);
assert.throws(() => readDraft("x".repeat(200001)), /smaller/);
assert.equal(composeBullet("Resolved pricing issues", "SAP SD", ""), "Resolved pricing issues using SAP SD.");
assert.equal(composeBullet("", "SAP", "reduced cost"), "");
assert.equal(composeBullet("Built a test suite.", "", "Covered 12 scenarios."), "Built a test suite; Covered 12 scenarios.");
const reordered = { ...draft, sections: [...draft.sections].reverse().filter(s => s.title !== "Education") };
assert.ok(!draftText(reordered).includes("Training lab"));
assert.ok(draftText(reordered).indexOf("Additional information") < draftText(reordered).indexOf("Professional summary"));
const enquiry = new URL(certificationEnquiry([{ name: "Microsoft Certified: Azure Administrator Associate", exam: "AZ-104" }])).searchParams.get("text");
assert.ok(enquiry.includes("AZ-104") && enquiry.includes("price and payment"));
assert.ok(!/fits|eligibility|version|experience|availability/.test(enquiry));
const fonts = Object.fromEntries(await Promise.all([["regular", "regular"], ["bold", "bold"], ["extended", "extended"], ["extendedBold", "extended-bold"]].map(async ([key, file]) => [key, new Uint8Array(await readFile(`public/fonts/resume/${file}.woff`))])));
const pdf = await createPdf(draft, fonts);
const word = await createWord(draft);
const { getDocument } = await import("pdfjs-dist/legacy/build/pdf.mjs");
async function pdfText(bytes) {
  const task = getDocument({ data: new Uint8Array(bytes), useSystemFonts: true });
  const document = await task.promise;
  const text = [];
  for (let i = 1; i <= document.numPages; i++) text.push(readablePdfText((await (await document.getPage(i)).getTextContent()).items));
  const pages = document.numPages; await task.destroy(); return { pages, text: text.join("\n") };
}
const extracted = await pdfText(pdf);
assert.ok(extracted.text.includes("Łukasz García"));
assert.ok(extracted.text.includes("planned, not earned"));
assert.ok(extracted.text.includes("25 support tickets"));
assert.equal(extracted.pages, 1);
assert.ok(pdf.length < 2500000);
const mammoth = await import("mammoth");
const wordText = (await mammoth.extractRawText({ buffer: Buffer.from(await word.arrayBuffer()) })).value;
assert.ok(wordText.includes("Łukasz García") && wordText.includes("planned, not earned"));
const long = { ...draft, sections: [{ id: "long", title: "Experience", content: Array.from({ length: 100 }, (_, i) => `- Test item ${i + 1}: configured a fictional training workflow and documented the results for review.`).join("\n") }, { id: "url", title: "Portfolio", content: "https://example.com/" + "x".repeat(200) }] };
const longPdf = await createPdf(long, fonts); const longExtracted = await pdfText(longPdf);
assert.ok(longExtracted.pages >= 3 && longExtracted.text.includes("Test item 100"));
await assert.rejects(() => createPdf({ ...emptyDraft(), name: "测试" }, fonts), /Download Word/);
const out = process.env.RESUME_TEST_OUTPUT;
if (out) { await mkdir(out, { recursive: true }); await writeFile(`${out}/sample-built-resume.pdf`, pdf); await writeFile(`${out}/sample-built-resume.docx`, Buffer.from(await word.arrayBuffer())); await writeFile(`${out}/sample-built-resume-draft.json`, JSON.stringify(draft, null, 2)); await writeFile(`${out}/long-built-resume.pdf`, longPdf); }
console.log(`PASS: conservative import, saved draft validation, edits and order, truthful bullet composition, pricing-only enquiry, PDF Unicode/text (${pdf.length} bytes), Word readback and ${longExtracted.pages}-page pagination.`);
