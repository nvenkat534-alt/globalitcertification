# Website enquiries

Certification pricing links and `/contact` save an enquiry through `POST /api/enquiries`. The API returns a receipt only after the private write succeeds (or the identical retry already exists). No public read endpoint exposes enquiry records.

Storage: private Vercel Blob store `globalcertsit-enquiries`, Mumbai. It is connected to the existing Vercel project with `BLOB_STORE_ID` and Vercel-managed OIDC authentication. No static token is committed. Production records are under `enquiries/`; preview checks are under `verification/`. Business administrators can read the records in the store's Vercel browser and use the recorded WhatsApp number for the requested follow-up.

Validation requires a certification, role, experience, exam country, timeline, requested service, name, international WhatsApp number and contact consent. Optional email is validated. The endpoint enforces same-site origins, a 12 KB request limit, a honeypot, a minimum form age and a per-instance rate limit. That rate limit is not a distributed bot defense; Vercel Firewall can add a stronger limit if abuse is observed.

Meta pixel `1103233019317006` is loaded only on the production domain after the visitor allows advertising measurement. Explicit PageView events are limited to certification, enquiry and contact routes. Lead is emitted only after a received-enquiry response, with a receipt event ID. No form answers, contact details or résumé content are included. Automatic configuration and advanced matching are not enabled. Cookie preference can be changed using Ad cookie settings.

Before enabling spend, verify a preview submission in the private verification folder, verify PageView and Lead through Meta Test Events on production, inspect each ad's native feed and vertical previews, and keep synthetic checks separate from lead quality reporting. WhatsApp continuation remains optional and is not itself a received-message conversion.

Focused checks: compile `src/lib/enquiry-validation.ts` and `src/lib/enquiry-handler.ts` with TypeScript to a temporary CommonJS directory, set `ENQUIRY_TEST_BUILD` to it, then run `node --test tests/enquiries.cjs`. Also run `npm run build`.
