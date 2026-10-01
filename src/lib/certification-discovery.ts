/** Editorial help for existing exam pages. Recheck official sources before changing facts. */
export const SITE_ORIGIN = "https://www.globalcertsit.com";

type DiscoverySection = { heading: string; text: string };
export type DiscoveryGuide = {
  title: string;
  description: string;
  updatedOn: string;
  sections: DiscoverySection[];
  source: { title: string; url: string };
};

const guides: Record<string, DiscoveryGuide> = {
  "pmi/pmp": {
    title: "PMP Application & Exam Guidance in India",
    description: "Check PMP eligibility, application preparation and official exam booking steps. Independent paid guidance for professionals in India, in Telugu and English.",
    updatedOn: "2026-10-01",
    sections: [
      {
        heading: "PMP application checklist",
        text: "Start with your education, project-management experience and training evidence. PMI currently lists experience paths of five years with a secondary qualification, four with an associate degree or vocational diploma, three with a bachelor’s degree or higher, or two with an eligible GAC degree. Count professional project experience within the last ten years without double-counting overlapping projects. Confirm your exact path with PMI.",
      },
      {
        heading: "Check training before applying",
        text: "PMI requires 35 hours of eligible project-management training or an active CAPM certification. From 1 December 2026, new restrictions apply to eligible live instructor-led training providers. Check PMI’s current rules before enrolling; independent application guidance does not establish that a course meets the requirement.",
      },
      {
        heading: "Approval comes before exam booking",
        text: "Prepare accurate descriptions of your own project work and the supporting evidence. PMI decides application eligibility and any audit outcome. Once your application is accepted, follow PMI’s instructions to pay and schedule your exam. Guidance cannot guarantee application approval or an exam pass.",
      },
    ],
    source: { title: "PMI’s current PMP requirements and application steps", url: "https://www.pmi.org/certifications/project-management-pmp" },
  },
  "aws/solutions-architect-associate": {
    title: "AWS SAA-C03 Exam & Booking Guidance in India",
    description: "Plan AWS Solutions Architect Associate preparation and official exam booking. Independent paid certification guidance for professionals in India.",
    updatedOn: "2026-10-01",
    sections: [
      {
        heading: "Is AWS Solutions Architect Associate right for you?",
        text: "AWS recommends at least a year of hands-on experience designing AWS cloud solutions. This is recommended preparation, not a promise that experience alone makes you exam-ready. If you are new to IT, compare the foundational Cloud Practitioner path first. Choose the exam that matches the work you want to do.",
      },
      {
        heading: "Check the exam and delivery options",
        text: "AWS lists 65 multiple-choice or multiple-response questions and 130 minutes for this associate exam. Delivery is through a Pearson VUE test centre or online proctoring. Use the current official exam guide to plan practice in resilient, secure and cost-conscious architecture.",
      },
      {
        heading: "Before booking from India",
        text: "Start from AWS’s official scheduling link and confirm your exam, country, language and appointment. Check the current regional charge and any tax at checkout. If considering a voucher, confirm its exam, country and expiry restrictions before paying. Review identification and online system requirements for your chosen delivery method.",
      },
    ],
    source: { title: "AWS’s current Solutions Architect Associate exam details", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
  },
  "microsoft/azure-administrator": {
    title: "Azure AZ-104 Exam & Booking Guidance in India",
    description: "Review AZ-104 readiness, Microsoft Learn registration and exam booking. Independent paid Azure certification guidance in Telugu and English for India.",
    updatedOn: "2026-10-01",
    sections: [
      {
        heading: "Who should choose AZ-104?",
        text: "AZ-104 suits professionals implementing, managing and monitoring Azure environments. Microsoft expects familiarity with operating systems, networking, servers and virtualisation, plus experience using tools such as PowerShell, Azure CLI, the portal and Microsoft Entra ID. Use the preparation checklist below to identify hands-on gaps.",
      },
      {
        heading: "Use an account you can keep",
        text: "Microsoft recommends a personal Microsoft account when registering. Exam records tied to a work or school account may become unrecoverable when you leave that organisation. Start from Microsoft Learn and follow its Pearson VUE scheduling route.",
      },
      {
        heading: "Confirm the local fee and renewal plan",
        text: "Microsoft bases exam pricing on the country or region where the exam is proctored. Check the current price and available appointment in the official booking flow. Azure Administrator Associate renews every twelve months; eligible renewal is a free online assessment on Microsoft Learn. The initial exam and independent support are separate costs.",
      },
    ],
    source: { title: "Microsoft’s current Azure Administrator requirements", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/" },
  },
};

export function getDiscoveryGuide(provider: string, certification: string): DiscoveryGuide | undefined {
  return guides[`${provider}/${certification}`];
}

/** Only dates backed by an actual content change; unknown dates are deliberately omitted. */
export function routeLastModified(path: string): string | undefined {
  if (path === "/privacy") return "2026-09-29";
  const key = path.replace(/^\/certifications\//, "");
  return guides[key]?.updatedOn;
}

export function certificationBreadcrumbs(provider: { name: string; id: string }, certification: { name: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "All certifications", item: `${SITE_ORIGIN}/certifications/explore` },
      { "@type": "ListItem", position: 2, name: provider.name, item: `${SITE_ORIGIN}/certifications/${provider.id}` },
      { "@type": "ListItem", position: 3, name: certification.name, item: `${SITE_ORIGIN}${certification.path}` },
    ],
  };
}
