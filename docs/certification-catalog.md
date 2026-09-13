# Certification finder: editorial and maintenance notes

Catalog review: 13 September 2026. Website: https://www.globalcertsit.com.

The typed catalog in `src/lib/certifications.ts` stores an official provider or issuer-owned credential URL for every record. It includes 122 curated credentials across 13 roles and 18 providers. It is not an exhaustive worldwide registry or a live provider feed. Career relevance, role assignments, experience bands and project suggestions are editorial judgments. No salary, hiring, pass-rate or customer-review claims are made by the finder.

## Source review highlights

- AWS certification catalog: https://aws.amazon.com/certification/
- AWS AI Business Strategist beta, registration opened 1 September 2026: https://aws.amazon.com/certification/certified-ai-business-strategist/
- AWS ML Engineer version transition: https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/
- AWS CloudOps replaces SysOps: https://aws.amazon.com/certification/certified-cloudops-engineer-associate/
- Current Azure AI Fundamentals exam is AI-901: https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/
- Microsoft AI-103, AI-200, AI-300, AB-730, AB-731, AB-620 and AB-100: individual official Microsoft Learn pages are linked per record.
- Google Cloud catalog: https://cloud.google.com/learn/certification
- Databricks catalog (credentials are distinct from course accreditations): https://www.databricks.com/learn/training/certification
- Snowflake current codes: https://learn.snowflake.com/en/certifications/
- PMI formal application requirements: https://www.pmi.org/certifications/project-management-pmp

Known expired/retired exam versions are not recommended. Where an exam is transitioning but still available, the record carries a version/language note. Bookable beta is explicitly labelled. No live prices are copied into the finder. A visitor asks about fees, eligibility and voucher availability before purchase.

## September expansion

Claude access restrictions, registration guides, current-name search aliases and the CompTIA source limitation are documented in [the expansion audit](catalogue-expansion-2026-09-13.md). CompTIA scope is verified against issuer-owned Credly records; live exam series and appointment availability must be confirmed in CompTIA Central. The displayed status distinguishes these records from provider-catalogue checks.

## Maintenance procedure

1. Review the official provider catalog and the specific credential page before adding or changing a record. Verify the official title, version, general/beta availability, prerequisites and any announced retirement dates. Exclude merely announced exams that cannot yet be booked, unverifiable entries, and course completion certificates marketed as certification exams.
2. Update the credential data, canonical source link and review date. Use `availableFrom` and `retireOn` when the date applies to the entire record; language-specific transitions belong in `note`.
3. Check the rating: direct role relevance is 5/5; adjacent supporting relevance is 4/5. When experience is selected, score is 70% role relevance plus 30% readiness. Readiness is 5 for matching experience band, 3 for a lower-level credential, 2 for the next band up, and 1 for two bands up. A role filter excludes unrelated credentials. These scores are not market-demand statistics or provider rankings.
4. Run `node --experimental-strip-types scripts/test-certifications.mjs` with Node 22+ and `npm run build`. Check the role filters, comparison modal and share links in a browser at desktop and mobile widths.
5. Publish through the existing GitHub/Vercel deployment, then verify the public domain. Newly released exams do not appear automatically; they require this source review.

Shortlists use browser localStorage only. Shared links contain the selected certification keys and filters, not visitor personal details. WhatsApp CTAs contain a prefilled enquiry and require the visitor to send it. A click is not counted as a confirmed lead by this feature. Existing analytics tags are preserved; no new tracking services or API keys are needed.
