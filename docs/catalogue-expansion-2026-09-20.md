# Global certification catalogue expansion — 20 September 2026

## Scope

User-approved provider groups: ISTQB, PeopleCert, SAFe, Scrum Alliance, EC-Council, Fortinet, VMware/Broadcom, Juniper, UiPath, IIBA, TOGAF/The Open Group, Splunk, NVIDIA, ASQ, Salesforce/MuleSoft, Oracle, SAP, Linux Foundation/CNCF, HashiCorp and Scrum.org.

Added 63 credentials and 14 provider records. The catalogue now contains 192 credentials across 34 providers. Existing credentials and URLs are retained. Software testing, business analysis and quality improvement have distinct role mappings.

## Catalogue experience

- `/certifications/explore` is the main, single-page catalogue. Every matching result appears on the page; no pagination or additional “load more” action is required.
- Default order is editorial: PMP, AWS Solutions Architect Associate, Azure Administrator, Google Cloud Associate Cloud Engineer, Salesforce Administrator, ServiceNow CSA, then other well-known credentials. This order is not measured popularity or sales data.
- Search matches exam names, provider names, skills and aliases such as SAP MM, CT-AI and Terraform Professional.
- Provider and field filters, popular/provider/name sorting, empty-state reset and shareable query URLs.
- Direct detail links and WhatsApp links containing the selected certification name.
- Homepage navigation and provider directory link into the catalogue. Detail breadcrumbs return to it.
- Responsive card layouts and native select controls support small screens and keyboard access.

## Content and sources

Each addition in `src/lib/catalogue-additions.ts` contains an official source URL, review date, eligibility guidance and assessment mode. General preparation and career-fit descriptions are editorial.

Important distinctions:

- ServiceNow remains available in the original catalogue.
- ITIL Foundation Version 5, PRINCE2 Version 7 and PRINCE2 Agile Version 2 use current names.
- Scrum Alliance includes required courses; CSPO has no separate exam. Scrum.org is a separate assessment provider.
- ISTQB remote delivery depends on the authorised exam provider; Pearson centre availability is not evidence of OnVUE availability.
- Fortinet's July 2026 structure applies. NSE 7 is centre-only from 21 September 2026. NSE 8 requires an onsite Core and a separate Elective with its own prerequisites.
- VMware uses current Cloud Foundation and vSphere Foundation Administrator credentials.
- Oracle's current OCI names omit the year; live exam versions must be checked in MyLearn. The Database Administration credential is sourced to Oracle's issuer badge, with live exam availability explicitly left for confirmation.
- SAP deployment editions and assessment routes are shown separately. The Production Planning source is SAP's official certification-linked learning journey.
- HashiCorp's lab-based level is now called Advanced; the old Professional name remains a searchable alias.
- ASQ, IIBA and advanced certifications retain experience/prerequisite caveats. No new prices, guaranteed results or partner affiliations are claimed.

## Verification

- Existing certification regression checks, plus coverage of all 20 approved groups, unique provider directory entries, first-result ordering, alias searches, category coverage, combined filters, empty results and A–Z sorting.
- Production build and TypeScript checks.
- ESLint on changed application logic and catalogue components.
- HTTP route checks and browser interaction checks are recorded in the delivery PR.
