# Website capacity improvements — 14 September 2026

Public homepage, certification finder, AI pathways and certification details use cached rendering (hourly revalidation). Enquiry form shell is static. Query filters/prefilled enquiry values hydrate in the browser without disabling public-page caching. Private API replies always use no-store.

Vercel functions run in Mumbai (bom1), alongside the existing private enquiry store. Enquiry execution is bounded to 30 seconds; the browser stops waiting after 25 seconds, retains form fields and preserves the existing idempotency key on retry. A synchronous submission lock prevents duplicate clicks. Firewall/non-JSON responses have a useful retry message.

## Limits

- Vercel WAF rule `Protect certification enquiries`: exact path /api/enquiries, 60 requests per IP per 600 seconds, 429 response. Counters are shared between instances within each Vercel region, not globally between regions. Browsing is not subject to this rule.
- In-process fallback: 30 attempts per trusted Vercel client IP per 600 seconds. This is intentionally more permissive than the previous 10/hour cap for legitimate shared networks. Bounded map, expiration cleanup every minute on use, accurate Retry-After.
- Existing 12 KB request limit, origin/content-type checks, honeypot, input validation, consent, private storage, and duplicate-write protection retained.
- No new paid hosting plan, external database or CAPTCHA dependency introduced.

## Validation and remaining limits

15 focused tests cover validation, storage failure, 100 concurrent independent submissions with a test storage adapter, 20 concurrent duplicate retries, rate-limit recovery, independent clients and bounded memory. These are application tests, not proof of real storage throughput or a maximum concurrent-user capacity. Production build must show cached public routes. Verify real preview query prefill, filters, and production cache headers after deployment. Browser/mobile performance and hosting usage remain workload-dependent. No guarantee of unlimited visitors or region failover.

Run enquiry tests by compiling src/lib/enquiry-{handler,validation,rate-limit}.ts to a temporary CommonJS directory and setting ENQUIRY_TEST_BUILD to it before node --test tests/enquiries.cjs tests/enquiry-rate-limit.cjs.
