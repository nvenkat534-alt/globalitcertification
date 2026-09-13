# Résumé studio and enquiry flow — research and implementation

Reviewed 13 September 2026. Scope: visitors can check a résumé, improve it in an editor, export a usable document and request certification pricing without repeating basic exam questions.

## Evidence and product decisions

| Source | Finding | Decision implemented |
| --- | --- | --- |
| [Yale Office of Career Strategy: Writing Impactful Resume Bullets](https://ocs.yale.edu/resources/writing-impactful-resume-bullets/) | Résumé bullets benefit from clear actions, project context and outcomes; quantities should describe actual work. | Guided bullet helper combines visitor-supplied action, method and optional result. It does not invent employers, metrics, dates or qualifications. |
| [Greenhouse Support: Unsuccessful resume parse](https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse), updated 2 March 2026 | Images, columns, tables, headers, footers and text boxes can interfere with this vendor’s parsing. Parsing may be partial; its documented file limit is 2.5 MB. | Export single-column selectable PDF text and ordinary Word paragraphs. Name and contact information remain in the document body. Avoid tables, graphics and watermarks. Keep subset-font exports small and provide Word/text alternatives. |
| [Microsoft: Azure Administrator Associate](https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/) | AZ-104 is the required exam. The page identifies recommended Azure administration knowledge, 100-minute assessment time, 12-month renewal and scheduling via Pearson VUE. | Put readiness, exam identity, registration, renewal and eligibility guidance on the certification page. No prerequisite credential is listed by Microsoft; recommended preparation is distinguished from mandatory eligibility. |
| [Microsoft: AZ-104 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104) | The English skills outline is dated 17 April 2026 and covers governance, storage, compute, networking and monitoring. | Show that date and the five topic weight ranges on the AZ-104 page with the official study-guide link. Do not imply an invented separate exam version number. |
| [docx official project](https://github.com/dolanmiu/docx) and [pdf-lib documentation](https://pdf-lib.js.org/) | Browser generation supports editable Word documents and PDF text with embedded fonts. | Generate downloads in the browser with dynamically loaded libraries. Serve licensed Noto Sans fonts locally and reject unsupported PDF characters explicitly; offer Word to preserve the visitor’s text. |

The formatting approach is an editorial inference from these sources. It is not certification by Greenhouse or any employer, and no source supports a universal “100% accurate” ATS or hiring score. Different employers use different requirements, parsers and selection systems.

## Visitor workflow

1. Homepage shortcut opens résumé tools directly.
2. Review PDF/DOCX/TXT or create a blank résumé. Review remains a local rules-based checklist against the chosen IT role and optional job description.
3. Move the extracted text into an editor without another upload. Recognised headings are grouped conservatively; other text stays editable in Additional information. The original is retained for comparison.
4. Edit contact details, headline, named sections and bullet points; reorder, add, remove and undo changes. Suggested certifications are not automatically claimed as earned.
5. Download PDF, editable Word or plain text. Save a JSON draft and reopen it to continue later. Draft files include the original imported text and should be kept private.
6. Check the edited draft using the same skill and certification review. Target role is review context, not an automatic résumé claim.

## Certification enquiries

Credential pages, showcase quick views and shortlists share one prefill helper: the selected credential name/code followed by a request for price and payment details. General links use the same pricing intent. The floating contact panel offers pricing, booking or existing-order support. Website details cover readiness, eligibility and registration; the enquiry does not ask the business to repeat these checks.

No voucher stock or price was invented. Regional provider fees and appointment availability remain subject to the official booking page; the business supplies its commercial quote through WhatsApp. No test sends a WhatsApp message.

## Privacy, limits and verification

- Résumé parsing, review, editing and export run in the browser. No résumé-specific server, model, database or WhatsApp transfer is introduced. Existing general website analytics are separate.
- No automatic persistent browser storage. Page memory holds changes; explicit downloads preserve the work. Clearing the review also clears its editor draft.
- Imports support text PDF/DOCX/TXT under existing 5 MB / 20-page limits. Complex layouts may need manual correction. The original text is kept so visitors can verify imported content.
- Saved drafts are validated by version, string types, section count and size. Exports contain visitor-entered data; unsupported PDF characters raise an actionable Word fallback rather than being silently removed.
- Automated checks cover lossless handling of unrecognised text, planned-credential status, JSON validation, section edits/order/removal, facts-only bullet composition, pricing-only WhatsApp URLs, PDF selectable Unicode text, multi-page wrapping and DOCX extraction. Synthetic fixtures are labelled as fictional.
- Build/type checks and visual PDF inspection are required before release. Live UI checks verify the homepage shortcut, import/edit/review continuity and export controls after deployment.

## Release verification

The live deployment was checked with synthetic fixtures. The homepage shortcut, PDF import, manual editing, PDF/Word downloads, saved JSON draft reopening in a fresh editor, and edited-text SAP SD review all worked. Downloaded documents were read back to confirm the edited name, work bullets and planned-certification status. The AZ-104 page and showcase use the pricing-only enquiry. Follow-up fixes keep planned/in-progress mentions qualified, recognise longer measured-result phrases, preserve additional named import sections and show export feedback beside the download controls.
