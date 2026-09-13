# Global Certs IT website design research

## Business objective

The website should make three things immediately clear: Global Certs IT helps with global professional certifications; the catalogue covers PMP, cloud, AI, data and cybersecurity; and a visitor can request exam information and guidance through WhatsApp. The site supports enquiries. It does not issue the underlying credentials or guarantee exam results, employment, income or an immediate human response.

The primary audience is working professionals considering a certification. Some know their exam already; others need help deciding between providers or career pathways. Telugu and English contact options reflect the business brief. The design must serve both audiences on mobile without requiring an account or a preliminary form.

The visual objective is a more expressive identity than the preceding website: dimensional imagery, animated branding, moving provider marks, vivid colour and useful popups. This is a creative direction, not an experimentally proven conversion improvement. Lead quality and conversion performance must be evaluated after publication.

## Audit of the two preceding directions

The original homepage gave prominent space to certification providers and WhatsApp. Its dark technology palette and recognisable exam names were useful signals. However, its rotating banners competed for the main message, relied on some externally hosted visual assets, and included broad pass-related promises that should not be carried into new copy without evidence and clear terms.

The immediately preceding redesign improved certification discovery, comparison and source transparency. It also made the first screen less direct. Its main headline referred to ambition and next steps, without naming certifications. WhatsApp appeared as a small “Let’s talk” navigation action. A narrow example of a data engineering pathway dominated the illustration, even though the business offers a wider catalogue and places particular importance on PMP.

The revised hierarchy therefore preserves the useful catalogue and restores explicit certification content at the top. The first visual presents several exam providers together. The main action names WhatsApp and the information a visitor will receive. Role-based discovery remains available after visitors have seen actual certification choices.

## Evidence and implications

Nielsen Norman Group recommends that homepages explain the organisation’s purpose, reveal concrete examples and make priority tasks visible. It also cautions that competing movement and unsolicited modal popups can interfere with comprehension. The implementation applies that evidence to the information hierarchy: stable headline, visible exam names and clear action labels. The decision to use a decorative globe remains a brand choice; it is not presented as a conversion finding. [1]

AWS presents certification as validation of cloud expertise and provides level- and role-based paths. Microsoft distinguishes exam-based certifications from narrower Applied Skills credentials. These official structures support maintaining provider, level, role and exam details in the catalogue rather than merging all credentials into a vague generic offer. The homepage uses provider identities to indicate available subject areas, without implying a commercial partnership or endorsement. [2][3]

PMI’s PMP page separates eligibility, application and certification steps. The dedicated PMP feature therefore invites a discussion about eligibility and the application process, and links to the existing detailed certification page. No compressed headline attempts to substitute for official eligibility rules. [4]

W3C’s guidance for moving content supports a visible way to stop ongoing motion. The design includes a motion control, respects the operating system’s reduced-motion preference by default and pauses the provider strip on hover or keyboard focus. Globe rendering stops when it is off screen or the document is hidden. [5]

Google’s animation guidance favours transform and opacity when practical. The floating cards and brand motion use these properties. The globe is generated from compact procedural geometry, so the hero does not need a large video, downloaded 3D model or additional rendering dependency. The globe remains decorative: all offers and actions are conventional HTML. [6]

W3C’s modal pattern requires keyboard access, contained focus and a way to close the dialog. Native HTML dialogs provide the foundation for exam quick views and the enquiry composer. Each has a visible close button, Escape dismissal, a labelled heading and an outside-click dismissal path. Final interaction checks must confirm that these mechanisms work in the delivered site. [7]

Stripe’s current homepage illustrates an explicit product category paired with benefit-oriented messaging and visible paths to start or contact sales. This is a first-party design reference, not evidence that copying its visuals will increase certification enquiries. Global Certs IT’s headline instead names its own category and keeps its own WhatsApp action. [8]

## Message architecture

| Placement | Message | Purpose |
|---|---|---|
| Main heading | Global IT Certifications. | State the product category immediately. |
| Supporting heading | Your next career move. | Add a concise professional aspiration. |
| Description | PMP, AWS, Microsoft, Google Cloud and more. Certification guidance, exam details and voucher support. | Explain the scope and service. |
| Main action | Get details on WhatsApp | Name both the destination and the task. |
| Secondary action | Explore certifications | Move directly to actual exam choices. |
| PMP action | Ask us about PMP | Carry the selected subject into an enquiry. |
| Role section | Your role. Your certification path. | Explain what the finder does. |
| Closing action | Chat on WhatsApp | Provide another clear contact point. |

The word “global” describes the certification scope. It must not become an unsupported claim that every certification is equally valuable in every job market. Similarly, a catalogue count is a count of curated records, not evidence of satisfied clients, successful candidates or current stock of every exam voucher.

## Visual system

The foundation is deep navy, with layered blue and violet illumination. Warm peach and orange highlight the certification headline, while cyan supports navigation and interactive depth. Green is concentrated on WhatsApp actions so visitors can recognise the contact route throughout the page.

The main scene uses a rotating projected globe, elliptical orbit lines and floating PMP, AWS, Microsoft and Google Cloud cards. The provider names are readable independently of the artwork. Pointer movement causes a restrained perspective shift; mobile users receive the same content without needing a hover gesture.

The brand symbol is a small orbital mark paired with a stable wordmark. Motion affects the accent, not the legibility of the business name. The provider strip follows the hero and leads into the certification cards. It is labelled as certification coverage, not as a list of customers or partners.

PMP receives a separate dimensional credential illustration and an enquiry action before role discovery. The illustration is a stylised promotional object, not a downloadable certificate or a representation that a visitor has earned the credential. The AI section uses a distinct crystal effect and three visible stages, while retaining the existing detailed AI pathways.

## Enquiry design

Visitors who already know their exam can use the direct WhatsApp action on its card. The prefilled text includes the certification name and exam identifier. A visitor who needs help can open the enquiry dialog, select a certification family and choose whether they want eligibility, voucher information or comparison guidance.

The site makes clear that WhatsApp opens with a prepared message and the visitor must tap Send. Selecting an option on the website does not itself send a message. The interface does not pretend that an agent is online or promise a response time.

A small desktop prompt appears after the visitor has had time to see the content. It does not cover the entire page or demand personal information. It is dismissible and remains dismissed for the session. Mobile uses a fixed bottom contact bar and a separate enquiry-options button rather than a timed overlay across the page.

The fixed mobile bar includes safe-area padding. Bottom content and the catalogue comparison tray need enough clearance to remain operable. Important buttons have text labels in addition to icons.

## Performance and accessibility decisions

The headline, service description, provider links and direct enquiry links render as HTML. The decorative canvas does not carry essential text or controls. Ongoing animation is optional. Native page scrolling remains available; there is no scroll capture, forced loading animation or autoplay audio.

The globe uses a capped pixel density and frame interval, with visibility-based suspension. A static atmospheric background remains if canvas rendering is unavailable. Certification filtering uses the same curated data as the detailed pages, rather than a duplicated inventory with independent exam facts.

Popups must be checked with keyboard navigation, Escape and touch-sized controls. Text should wrap without pushing the page sideways at narrow widths. The WhatsApp destination remains the business number with the country code, and the prefilled text must retain the selected certification after URL encoding.

## Evaluation and limits

Technical acceptance includes a production build, TypeScript checks, catalogue regression checks and inspection of the principal homepage and enquiry interactions. A successful deployment alone does not establish that the design is visually correct; the published page also needs inspection.

Commercial evaluation should compare the number of legitimate enquiries, relevant exam selections, completed conversations and eventual conversions with an equivalent prior period. WhatsApp-link clicks are useful signals, but they are not proof that a visitor sent a message or became a lead. No new conversion claim should be reported without corresponding business evidence.

The catalogue’s exam review date is separate from the design review. This redesign preserves the earlier curated catalogue, including explicit beta labels. It does not introduce a continuously updated provider feed. Official requirements, schedules and voucher availability must be checked before a purchase or exam booking.

## References

1. Huei-Hsin Wang, Nielsen Norman Group. [Homepage Design: 5 Fundamental Principles](https://www.nngroup.com/articles/homepage-design-principles/). 15 March 2024. Purpose, hierarchy, examples, motion and popup guidance.
2. Amazon Web Services. [AWS Certification](https://aws.amazon.com/certification/). Accessed 13 September 2026. Provider structure and certification positioning.
3. Microsoft Learn. [Professional and Technical Credentials and Certifications](https://learn.microsoft.com/en-us/credentials/). Accessed 13 September 2026. Certifications, Applied Skills and role-based positioning.
4. Project Management Institute. [Project Management Professional (PMP)](https://www.pmi.org/certifications/project-management-pmp). Accessed 13 September 2026. Eligibility and certification journey.
5. W3C Web Accessibility Initiative. [Understanding Success Criterion 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Accessed 13 September 2026. Control of ongoing movement.
6. Google web.dev. [How to create high-performance CSS animations](https://web.dev/articles/animations-guide). Last updated 6 October 2020. Transform, opacity and rendering performance.
7. W3C WAI ARIA Authoring Practices Guide. [Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/). Accessed 13 September 2026. Dialog interaction requirements.
8. Stripe. [Financial Infrastructure to Grow Your Revenue](https://stripe.com/). Accessed 13 September 2026. First-party messaging and action hierarchy reference.
