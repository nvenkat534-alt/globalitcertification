# Homepage redesign — 20 September 2026

The previous homepage repeated provider directories and stand-alone promotional sections, pushing résumé and career tools far down the page. The redesign makes certification discovery the primary task while offering visible paths to résumé review and career planning.

## Changes

- New dark navy homepage with mint actions and a prominent violet PMP feature. AWS and Microsoft remain immediately visible on desktop.
- Native exam search in the hero, direct catalogue and WhatsApp pricing actions, and truthful catalogue counts from the existing data.
- Three starting points for certification discovery, résumé review and career planning.
- Six popular certifications first: PMP, AWS Solutions Architect, Azure Administrator, Google Cloud Associate Cloud Engineer, Salesforce Platform Administrator and ServiceNow CSA. Field buttons change the six featured results and the associated full catalogue link. Cloud and Security feature directly relevant exams; AI and business applications feature a wider range of providers. Featured selections fall back to available catalogue entries as exams retire.
- Clear card links to exam details and prefilled WhatsApp enquiries. No additional click through a preview modal.
- Compact role paths and provider directory with links to the complete collections.
- A dedicated career toolkit, smaller AI and update sections, clear support steps and native expandable FAQs.
- Responsive layouts, visible keyboard focus, reduced-motion support, and removal of the automatic WhatsApp nudge on this page. User-triggered enquiry tools remain available.

## Design references

- Nielsen Norman Group, [Homepage Design: 5 Fundamental Principles](https://www.nngroup.com/articles/homepage-design-principles/): communicate the offer, expose meaningful starting points and use representative content with clear hierarchy.
- Baymard Institute, [Homepage & Category Navigation best practices](https://baymard.com/research-articles/ecommerce-navigation-best-practice): make the breadth of the offering and the paths into it clear.

These references informed design choices; they do not establish a conversion improvement or a numeric quality score. No fabricated testimonials, placement claims, affiliation badges or pass guarantees were added.

## Verification

- Production build and TypeScript checks pass; targeted ESLint has no errors. The root layout retains one existing font-loading lint warning.
- Certification regression checks pass for all 192 certifications, 34 providers and 17 roles, including filters, availability, fit scores and WhatsApp URLs.
- Vercel's preview required separate authentication, so the successful build was published and browser verification ran on the production deployment.
- Visually reviewed the desktop hero, featured cards, career toolkit and FAQs, plus phone and tablet layouts. At outer widths 360, 390, 768 and 1280 pixels, the document width matched its scroll width (345, 375, 753 and 1265 pixels after the browser scrollbar); no horizontal overflow was present.
- Tested all six featured-category buttons. Confirmed the default six exams and their individual detail links and prefilled WhatsApp exam messages. Reviewed and refined category selections based on relevance.
- Submitted the native homepage search for ServiceNow and observed the catalogue showing five ServiceNow results with the applied query.
- Verified the career-tool destinations, visible keyboard focus, native FAQ expansion, single main heading and 12-provider compact directory.
- Removed the temporary noindex responsive review harness after review.
