export type CertificationUpdate = {
  id: string;
  provider: string;
  title: string;
  publishedOn: string | null;
  dateLabel: string;
  effectiveAt: string;
  endsAt?: string;
  summary: string;
  guidance: string;
  audience: string;
  source: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageSource: string;
  enquiry?: { name: string; exam: string };
};

export const UPDATES_REVIEWED_ON = "2026-09-16";
const microsoftAnnouncement = "https://techcommunity.microsoft.com/blog/skills-hub-blog/updates-to-azure-cosmos-db-and-power-platform-developer-certifications/4528353";
const microsoftBadge = "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg";

export const certificationUpdates: CertificationUpdate[] = [
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
    return time >= Date.parse(update.effectiveAt) ? "Attendee-only benefit" : "Upcoming event";
  }
  return time >= Date.parse(update.effectiveAt) ? "Effective" : "Upcoming change";
}

export function updateDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T12:00:00Z`));
}
