# Certification discovery redesign

## Problem
The first catalogue revision put 192 similarly weighted cards beneath a dense filter area. It was functional, but lacked a clear starting point, visual differentiation and support for comparing options.

## Research and decisions
Reviewed these primary sources on 20 September 2026:

- Coursera Professional Certificates: https://www.coursera.org/professional-certificates — structured discovery by career intent and topic. Applied as a dedicated career-field section rather than a row of undifferentiated filters.
- AWS certification catalogue: https://aws.amazon.com/certification/ — credential levels and role-based pathways. Applied as a visible level filter and a separate career-path entry.
- Nielsen Norman Group, helpful filter categories: https://www.nngroup.com/articles/filter-categories-values/ — predictable, relevant filters with plain-language values. Applied as provider, level and career-field controls.
- Baymard, applied filters: https://baymard.com/research-articles/how-to-design-applied-filters — visible selections and individual removal. Applied as removable chips above results, including on mobile.
- Nielsen Norman Group, comparison tables: https://www.nngroup.com/articles/comparison-tables/ — let visitors choose a small number of items and compare meaningful attributes. Applied as a maximum-three comparison with roles, readiness, eligibility, skills and recorded exam format.

## Implemented
- A new editorial hierarchy, dark navy background, green search surface and distinct lavender, sand and blue spotlight cards for PMP, AWS and Azure.
- Immediate search, example queries and in-page navigation; the search results replace introductory browsing sections when a filter is active.
- Six prominent career-field tiles with access to all eleven fields.
- All 192 certifications remain accessible on the same page. Twelve cards appear initially, with Show 12 more and Show all controls.
- Desktop filter rail, a collapsible mobile filter panel, visible active filters and a level filter.
- Comparison of up to three certifications in an accessible native dialog with a horizontally scrollable table.
- A provider directory, role-path links, concise FAQs and exam-specific WhatsApp enquiries.
- Existing credential URLs, eligibility and official source data remain intact. Editorial popular ordering is unchanged; it is not a measured worldwide ranking.
- Responsive layouts, focus indicators and reduced-motion support. No additional dependencies, images or external asset requests.

## Verification
Production build, TypeScript, targeted ESLint and catalogue regression tests passed. Deployed browser checks covered desktop, 768px tablet, 390px phone and 360px phone layouts; all measured page widths had no horizontal overflow. Search, level filtering, removable active filters, empty results, Back navigation, 12-to-24 expansion, Show all 192, all 34 providers and direct exam-specific WhatsApp URLs passed. The maximum-three comparison limit, clear selection, keyboard controls, Escape dismissal and horizontally scrollable mobile comparison were verified. Visual QA improved AWS wordmark contrast, comparison column widths and the mobile career-path entry, and suppressed the automatic WhatsApp nudge on this page. The temporary preview harness was removed before release.
