# Career switch module

Implemented 13 September 2026. Existing certification homepage, PMP emphasis, visual design and WhatsApp contact are preserved.

## Visitor routes

- `/careers`: searchable directory of 21 role roadmaps.
- `/careers/sap-sd` and other role slugs: four preparation stages, skill checklist, original interview scenarios, practical project, résumé evidence guidance, official learning and certification links.
- `/careers/resume?role=sap-sd`: PDF/DOCX/TXT extraction and pasted-text review. Role and experience selection, optional job-description checklist comparison, certification recommendations, downloadable text report and clear/reset.
- `/careers/jobs?role=sap-sd`: daily source listings, filters, location restrictions, timestamps and external application links. Direct LinkedIn, Indeed India and Naukri searches supplement the limited imported coverage.

## Research and editorial decisions

Career preparation plans and interview scenarios are original editorial guidance; they are not official employer requirements, exam questions or employment guarantees. The existing catalogue supplies official source links for cloud, Salesforce, Cisco, PMI, ISACA, CompTIA and other credentials.

- [SAP S/4HANA Sales credential](https://learning.sap.com/certifications/sap-certified-associate-sap-s-4hana-sales): current title, C_TS462, private-edition/on-premise scope and system-based assessment checked. [Sales learning journey](https://learning.sap.com/learning-journeys/implementing-sales-in-sap-s-4hana-cloud-private-edition) informed process preparation.
- [SAP Integration Developer](https://learning.sap.com/certifications/sap-certified-associate-integration-developer): current C_CPI credential and system-based assessment checked. Both SAP credentials link to subscription, Universal ID, technical readiness and current registration instructions.
- [SAP Financial Accounting learning journey](https://learning.sap.com/learning-journeys/implementing-financial-accounting-in-sap-s-4hana): FI organisation/master data, ledger, AP/AR, assets and close scope. FI/CO, MM and ABAP pathways link to the [current SAP catalogue](https://learning.sap.com/certifications); no unverified live exam code is asserted.
- [ISTQB](https://istqb.org/): CTFL foundation context and member-board exam routes for QA guidance.
- [Remotive public API](https://github.com/remotive-com/remote-jobs-api): permitted sharing on the site, required source attribution and linkback, 24-hour source delay, no signup gate, low request frequency. Do not add JobPosting structured data or syndicate these listings to third-party job aggregators.
- [Arbeitnow API](https://www.arbeitnow.com/blog/job-board-api): public keyless feed, Europe-focused coverage and ATS-sourced jobs. The first page contains up to 250 listings; this is not a complete labour-market search.
- [Vercel cron usage](https://vercel.com/docs/cron-jobs/usage-and-pricing) and [setup](https://vercel.com/docs/cron-jobs/quickstart): daily cron supported on Hobby; execution can occur within the scheduled hour.
- [PDF.js](https://github.com/mozilla/pdf.js) and [Mammoth](https://github.com/mwilliamson/mammoth.js): browser extraction libraries. Only raw text is used; document HTML is not rendered.

## Data handling

Résumé files and extracted text stay in component memory. No upload API, model API, localStorage or database is used for résumé content. Clear/reset or leaving the page discards the review. Reports download locally. Existing general website analytics are disclosed separately in the privacy page. WhatsApp links contain only the role and visitor-editable enquiry template, never résumé content.

The reviewer is explicitly rules-based. It detects bounded text aliases, distinguishes common learning/negative phrases, asks for an intended role, and reports missing mentions rather than claiming missing ability. Recommendations use target-role catalogue mappings, self-selected experience and platform mentions. Eligibility is not inferred. Already-mentioned credentials are flagged without asserting earned status. No automated job applications or hiring decisions occur.

## Job refresh and limits

`/api/jobs` and `/api/jobs/refresh` share Next's persistent data cache. The cache key includes the UTC date and source. `vercel.json` warms it once daily at `0 3 * * *`; the first visitor can also populate the day's cache. Reloading the UI uses that cache. Failures are cached as explicit unavailable states until the next daily refresh, limiting repeated provider requests. The API has a short CDN cache as well.

Listings are normalised to approved HTTPS source hosts, deduplicated by URL and filtered to a 45-day publication window. Raw HTML is stripped and rendered as React text. The UI distinguishes remote-labelled jobs from country eligibility. The source may close a listing between refreshes; availability must be checked before applying.

Imported coverage currently consists of Remotive remote roles and Arbeitnow's latest Europe-focused page. Comprehensive Indian or worldwide live inventory requires an authorised additional job API and account credentials. No LinkedIn/Naukri scraping or paid API subscription is configured.

## Maintenance

Run `node --experimental-strip-types scripts/test-careers.mjs`, targeted ESLint and `npm run build`. Build/dev scripts copy the version-matched PDF worker to `public/workers`; do not commit that generated asset. Update role mappings and issuer sources as credentials change. No new secret or environment variable is required for the initial module.
