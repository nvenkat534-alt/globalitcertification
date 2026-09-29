# Google enquiry attribution

Campaign 24224408074 uses source, campaign, ad, keyword, ad-group and device URL tags. Google auto-tagging supplies a click identifier when available. Specific purchased exam keywords route from provider pages to the matching exam; ambiguous keywords remain on the provider catalogue.

Visitors can decline measurement and still enquire. With the new measurement consent, a trusted WhatsApp-link click after a Google visit receives a `GC-` reference. An immutable private `enquiry-intents/<reference>.json` record contains its campaign metadata and page path. It is an **unconfirmed click**, never a received enquiry, Lead, qualified lead or sale. This endpoint stores no WhatsApp message text or contact details. Failed measurement does not block WhatsApp navigation. Attribution expires on the device after seven days and is removed when measurement is declined.

Match the reference only when a customer actually sends a message. Record receipt time in Asia/Kolkata, confirmed source and device (`c` desktop, `m` mobile, `t` tablet), requested exam, target month, qualification, first response time, quoted fee and payment in the enquiry tracker. Keep unmatched or deleted references Unknown; do not infer device from the customer's phone.

An administrator can retrieve the corresponding private record through the existing Vercel Blob store. There is no public record-listing endpoint, live CRM synchronisation or advertising-platform conversion upload. Protect click identifiers and restrict tracker access. Only prepare an offline qualified-lead or purchase upload after the business outcome, source match, applicable consent, conversion action and event time have been verified. A visit to `/contact` and a WhatsApp click do not establish either outcome.

Compare desktop and mobile over the same received-enquiry cohort and allow time for payments. Do not exclude mobile or raise bids just because its click count is higher. Keep campaign budgets and bids unchanged while measuring quality.

## Validation

Compile the enquiry libraries to a temporary CommonJS directory and run `tests/google-enquiry-tracking.cjs` with `ENQUIRY_TEST_BUILD` pointing to it. Tests cover exam routing, metadata allowlisting, reference replacement, consent/origin checks, request limits and failed storage. Test records use an in-memory writer; they do not submit production enquiries or fire advertising conversions.
