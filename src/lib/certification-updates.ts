export type CertificationUpdate = {
  id: string;
  provider: string;
  title: string;
  publishedOn: string | null;
  publicationLabel?: "Published" | "Announced";
  checkedOn?: string;
  dateLabel: string;
  effectiveAt?: string;
  endsAt?: string;
  status?: "Candidate guidance" | "Current listing" | "Skills update" | "Market research";
  summary: string;
  guidance: string;
  audience: string;
  source: string;
  sourceLabel?: string;
  relatedSources?: { label: string; url: string }[];
  guideHref?: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageSource: string;
  enquiry?: { name: string; exam: string };
};

export const UPDATES_REVIEWED_ON = "2026-10-05";
const microsoftAnnouncement = "https://techcommunity.microsoft.com/blog/skills-hub-blog/updates-to-azure-cosmos-db-and-power-platform-developer-certifications/4528353";
const microsoftBadge = "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg";

export const certificationUpdates: CertificationUpdate[] = [
  {
    id: "pmp-training-check-october-2026",
    provider: "PMI · PMP",
    title: "Check existing training before buying another PMP course",
    publishedOn: "2026-10-02",
    publicationLabel: "Published",
    checkedOn: "2026-10-05",
    dateLabel: "Current guidance · live-training rules change 1 December 2026",
    status: "Candidate guidance",
    summary: "PMI’s latest preparation guidance confirms that qualifying previous training may satisfy the 35-hour requirement. An active CAPM also meets the training requirement; it does not replace PMP’s experience and education requirements.",
    guidance: "Check your training records or active CAPM before purchasing a course. From 1 December, live classes must meet PMI’s new provider rules; review the guidance before choosing your delivery format.",
    audience: "Working project professionals and CAPM holders considering PMP",
    source: "https://www.pmi.org/blog/pmp-exam-preparation-resources",
    sourceLabel: "PMI preparation guidance",
    relatedSources: [{ label: "PMI’s 1 December training policy", url: "https://www.pmi.org/certifications/project-management-pmp/new-exam" }],
    guideHref: "/certifications/pmi/pmp",
    image: "https://www.pmi.org/-/media/pmi/headless-images/the-pmi-blog/pmp-exam-preparation-resources-hero.jpeg?h=3060&iar=0&rev=558906ca1eca4f358d70fd207ced845a&sc_lang=en&w=5483",
    imageAlt: "Professional working on a laptop at a desk, illustrative PMI article photo",
    imageCredit: "PMI · illustrative article photo",
    imageSource: "https://www.pmi.org/blog/pmp-exam-preparation-resources",
    enquiry: { name: "Project Management Professional", exam: "PMP" },
  },
  {
    id: "aws-mla-c02-beta-september-2026",
    provider: "AWS",
    title: "English ML Engineer candidates now move to MLA-C02 beta",
    publishedOn: "2026-07-14",
    checkedOn: "2026-10-05",
    dateLabel: "Earlier announcement · beta testing began 29 September 2026",
    effectiveAt: "2026-09-29T00:00:00Z",
    summary: "MLA-C01 testing in English ended on 28 September. MLA-C02 beta adds generative AI, foundation models and agentic workflows; MLA-C01 remains available in Japanese, Korean and Simplified Chinese during the beta period.",
    guidance: "For an English appointment, check MLA-C02 beta availability and its exam guide. Confirm India pricing, beta results timing and voucher compatibility before payment; the standard updated exam is expected in early 2027.",
    audience: "Experienced ML, MLOps and data professionals using AWS",
    source: "https://aws.amazon.com/blogs/training-and-certification/updates-to-aws-certified-machine-learning-engineer-associate-mla-c02/",
    guideHref: "/certifications/aws/machine-learning-engineer",
    image: "/aws-logo.svg",
    imageAlt: "AWS logo, illustrative",
    imageCredit: "AWS · illustrative logo",
    imageSource: "https://aws.amazon.com/",
    enquiry: { name: "AWS Certified Machine Learning Engineer – Associate", exam: "MLA-C02 beta" },
  },
  {
    id: "microsoft-ai-500-october-2026",
    provider: "Microsoft Azure",
    title: "AI-500: check the associate prerequisite for the expert credential",
    publishedOn: null,
    checkedOn: "2026-10-05",
    dateLabel: "Current listing checked 5 October 2026 · launch date not stated",
    status: "Current listing",
    summary: "Microsoft’s AI-500 exam is listed without a beta label. To earn Multi-Agent AI Solutions Expert, candidates must also hold Azure AI Apps and Agents Developer Associate, earned through AI-103.",
    guidance: "Use AI-103 as the associate step, then consider AI-500 when you have production multi-agent development experience. Confirm country-specific fees and appointments in Microsoft’s scheduling flow before buying a voucher.",
    audience: "Experienced Azure AI developers and solution architects",
    source: "https://learn.microsoft.com/en-us/credentials/certifications/multi-agent-ai-solutions-expert/",
    sourceLabel: "Official credential requirements",
    relatedSources: [{ label: "AI-500 exam details", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-500/" }],
    guideHref: "/certifications/microsoft/multi-agent-ai-solutions-expert",
    image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
    imageAlt: "Microsoft Certified Expert badge, illustrative",
    imageCredit: "Microsoft · illustrative badge",
    imageSource: "https://learn.microsoft.com/en-us/credentials/certifications/multi-agent-ai-solutions-expert/",
    enquiry: { name: "Microsoft Certified: Multi-Agent AI Solutions Expert", exam: "AI-500" },
  },
  {
    id: "windows-server-az-802-october-2026",
    provider: "Microsoft Azure",
    title: "AZ-800 and AZ-801 retired; review the AZ-802 route",
    publishedOn: null,
    checkedOn: "2026-10-05",
    dateLabel: "AZ-800 / AZ-801 retired 30 September 2026",
    effectiveAt: "2026-09-30T23:59:59Z",
    summary: "Microsoft marks AZ-800 and AZ-801 as retired. Its current Windows Server credential page links to AZ-802: Administering Windows Server, covering on-premises, cloud and hybrid administration.",
    guidance: "New candidates should review AZ-802 objectives and current India appointments. If you passed one of the older exams, confirm how your record is treated with Microsoft before purchasing another exam.",
    audience: "Windows Server, infrastructure and hybrid-cloud administrators",
    source: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-802/",
    sourceLabel: "Official AZ-802 exam details",
    relatedSources: [
      { label: "AZ-800 retirement notice", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-800/" },
      { label: "AZ-801 retirement notice", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-801/" },
    ],
    guideHref: "/certifications/microsoft/windows-server-administrator",
    image: microsoftBadge,
    imageAlt: "Microsoft Certified Associate badge, illustrative",
    imageCredit: "Microsoft · illustrative badge",
    imageSource: "https://learn.microsoft.com/en-us/credentials/certifications/windows-server-hybrid-administrator/",
    enquiry: { name: "Windows Server administration", exam: "AZ-802" },
  },
  {
    id: "aws-agentic-ai-jam-september-2026",
    provider: "AWS · practical skills",
    title: "Three AWS Jam experiences focus on building AI agents",
    publishedOn: "2026-09-30",
    checkedOn: "2026-10-05",
    dateLabel: "Announced 30 September 2026 · check available event dates",
    status: "Skills update",
    summary: "AWS announced one-day, hands-on Jam experiences covering Kiro, Amazon Bedrock AgentCore and advanced agentic systems. These are practical learning experiences, not new AWS certification exams.",
    guidance: "Consider hands-on practice alongside a role-relevant certification. Employers and college partners should verify India delivery dates and terms with AWS before planning participation.",
    audience: "AWS developers, engineering teams and technology programme coordinators",
    source: "https://aws.amazon.com/blogs/training-and-certification/build-deploy-and-harden-ai-agents-three-new-aws-jam-experiences-now-available/",
    image: "/aws-logo.svg",
    imageAlt: "AWS logo, illustrative",
    imageCredit: "AWS · illustrative logo",
    imageSource: "https://aws.amazon.com/",
  },
  {
    id: "india-ai-cloud-skills-september-2026",
    provider: "India · skills research",
    title: "India’s AI and cloud skills gap puts practical experience in focus",
    publishedOn: "2026-09-29",
    publicationLabel: "Published",
    checkedOn: "2026-10-05",
    dateLabel: "YourStory coverage of TeamLease Digital’s FY2026–27 report",
    status: "Market research",
    summary: "YourStory reports TeamLease Digital’s estimated talent gaps of 55–60% in cloud and about 53% in GenAI. These are broader skills-market findings, not measurements of certification demand or guaranteed hiring outcomes.",
    guidance: "Choose a credential aligned with your employer’s platform or target role, then demonstrate the skills through a relevant project. A certification alone does not establish job readiness.",
    audience: "Working IT professionals and employer or college career teams in India",
    source: "https://yourstory.com/2026/09/talent-gap-genai-cloud-india-stands-53-60-teamlease-digital-report",
    sourceLabel: "Read YourStory’s report coverage",
    image: "https://images.yourstory.com/cs/2/ba6b0930e8cd11edbf1c2f9de7fdeb77/Whensomethingisimportantenoughyoudoiteveniftheoddsarenotinyourfavor-1735808864462.png?ar=2%3A1&crop=faces&format=auto&mode=crop&q=75&w=1920",
    imageAlt: "Illustrative image from YourStory’s coverage of India’s AI and cloud skills gap",
    imageCredit: "YourStory · illustrative article image",
    imageSource: "https://yourstory.com/2026/09/talent-gap-genai-cloud-india-stands-53-60-teamlease-digital-report",
  },
  {
    id: "azure-cosmos-db-ai-october-2026",
    provider: "Microsoft Azure",
    title: "Azure Cosmos DB certification adds an AI focus",
    publishedOn: "2026-09-15",
    dateLabel: "Updated exam: 6 October 2026",
    effectiveAt: "2026-10-06T00:00:00Z",
    summary: "From 6 October, the credential becomes Azure Cosmos DB AI Developer Associate, alongside an updated exam. Existing holders receive the name and level change automatically and keep the usual renewal process.",
    guidance: "New candidates: match your exam date to the updated objectives. Existing holders: no extra exam is required for the name change.",
    audience: "Azure and cloud application developers",
    source: microsoftAnnouncement,
    image: microsoftBadge,
    imageAlt: "Microsoft Certified Associate badge, illustrative",
    imageCredit: "Microsoft · illustrative badge",
    imageSource: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-developer-associate/",
    enquiry: { name: "Azure Cosmos DB certification", exam: "DP-420" },
  },
  {
    id: "power-platform-ab-400-october-2026",
    provider: "Microsoft Power Platform",
    title: "Power Platform moves from PL-400 to AB-400",
    publishedOn: "2026-09-15",
    dateLabel: "AB-400 testing: 16 October 2026",
    effectiveAt: "2026-10-16T00:00:00Z",
    summary: "AB-400 testing starts 16 October, adding AI development topics while retaining the Power Platform Developer Associate credential. PL-400 registration closes on 16 October; eligible registrations can test through 30 October.",
    guidance: "Check the exam code and test date before booking. AB-400 registration is already open; confirm regional voucher compatibility before purchase.",
    audience: "Power Platform developers and business-app specialists",
    source: microsoftAnnouncement,
    image: microsoftBadge,
    imageAlt: "Microsoft Certified Associate badge, illustrative",
    imageCredit: "Microsoft · illustrative badge",
    imageSource: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-developer-associate/",
    enquiry: { name: "Power Platform Developer Associate", exam: "PL-400 / AB-400" },
  },
  {
    id: "cism-november-2026",
    provider: "ISACA",
    title: "CISM exam changes from 3 November",
    publishedOn: "2026-09-10",
    dateLabel: "Revised exam: 3 November 2026",
    effectiveAt: "2026-11-03T00:00:00Z",
    summary: "The revised CISM exam adds enterprise and information-security architecture, with greater emphasis on security strategy and program development. Updated preparation materials are available for the new exam.",
    guidance: "If your test is on or after 3 November, use the revised outline. Passing the exam does not replace ISACA’s experience and certification-application requirements.",
    audience: "Experienced security managers and GRC professionals",
    source: "https://www.isaca.org/about-us/newsroom/press-releases/2026/isaca-updates-cism-exam-content-outline-factoring-in-todays-technologies-security-responsibilities",
    image: "https://www.isaca.org/-/media/images/isacadp/project/isaca/isaca-now-blog/isaca-updates-cism-exam_pr_550.png?hash=16E0BF57282583D922C07E772B237D0A&mw=550",
    imageAlt: "Professional working at a computer, illustrative ISACA article image",
    imageCredit: "ISACA · illustrative article image",
    imageSource: "https://www.isaca.org/about-us/newsroom/press-releases/2026/isaca-updates-cism-exam-content-outline-factoring-in-todays-technologies-security-responsibilities",
    enquiry: { name: "Certified Information Security Manager", exam: "CISM" },
  },
  {
    id: "dreamforce-2026-exam-benefit",
    provider: "Salesforce · USA event",
    title: "Dreamforce attendee certification exam benefit",
    publishedOn: null,
    dateLabel: "Onsite exams: 14–17 September 2026 · San Francisco",
    effectiveAt: "2026-09-14T07:00:00Z",
    endsAt: "2026-09-18T07:00:00Z",
    summary: "Eligible Dreamforce conference-pass attendees can take one Salesforce certification exam valued up to US$400, subject to seats and prerequisites. This onsite benefit is not a transferable voucher or a general free-exam offer.",
    guidance: "Attending Dreamforce? Review the official session schedule and ID requirements. Participation is arranged directly through Salesforce; Global Certs IT does not sell or provide this event benefit.",
    audience: "Registered Dreamforce attendees in San Francisco only",
    source: "https://help.salesforce.com/s/articleView?id=005298818&language=en_US&type=1",
    image: "https://pbs.twimg.com/media/G3lL3V7XYAEWgj0.jpg",
    imageAlt: "Salesforce promotional graphic for Dreamforce 2026",
    imageCredit: "Salesforce · event promotional graphic",
    imageSource: "https://x.com/salesforce/status/1979696946399891497",
  },
];

export function updateStatus(update: CertificationUpdate, now = new Date()) {
  const time = now.getTime();
  if (update.endsAt) {
    if (time >= Date.parse(update.endsAt)) return "Event ended";
    return update.effectiveAt && time >= Date.parse(update.effectiveAt) ? "Attendee-only benefit" : "Upcoming event";
  }
  if (update.status) return update.status;
  if (!update.effectiveAt) return "Current listing";
  return time >= Date.parse(update.effectiveAt) ? "Effective" : "Upcoming change";
}

export function updateDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T12:00:00Z`));
}
