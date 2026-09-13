import type { Certification, ProviderId } from "./certifications";

export type RegistrationGuide = {
  title: string;
  url: string;
  steps: string[];
  note: string;
};

export const registrationGuides: Partial<Record<ProviderId, RegistrationGuide>> = {
  sap: { title: "SAP assessment registration", url: "https://learning.sap.com/certifications", steps: ["Select the exact SAP credential and deployment edition; open its current assessment page.", "Set up SAP Universal ID, including a secondary email, and confirm a Learning Hub subscription that includes certification attempts.", "Complete the linked learning journey and authorised practice; check system readiness and available attempts.", "Use Go to exam on the official page and follow the current assessment instructions. Review requirements for keeping the credential current."], note: "The SAP Sales and Integration Developer pages currently list system-based assessments. Follow the selected credential’s live instructions." },
  anthropic: {
    title: "Claude Partner Network",
    url: "https://claude.com/partners",
    steps: [
      "Ask your organisation’s Claude Partner Network administrator to confirm practitioner access. Firms can apply through the official partner page.",
      "Open the relevant preparation path in Anthropic Partner Academy and check its prerequisites.",
      "Use the partner programme’s exam instructions to book the supervised Pearson assessment and complete identity verification.",
      "After passing, claim the official digital badge through Credly.",
    ],
    note: "Partner access is required for these exams. Public Claude Academy courses are a separate learning route; course completion is not the same as passing a certification exam.",
  },
  salesforce: {
    title: "Salesforce exam registration",
    url: "https://www.pearsonvue.com/us/en/salesforce.html",
    steps: [
      "Sign in to Trailhead Academy with your Salesforce learning account.",
      "Choose the exact credential and review its exam guide and prerequisite credentials.",
      "Follow the scheduling flow to Pearson; select the available delivery method, language and appointment.",
      "Review the fee, identification and cancellation rules, complete booking and keep the confirmation. Check maintenance tasks after earning the credential.",
    ],
    note: "Use the current Salesforce credential name. Some familiar names have changed, including Data Cloud Consultant to Data 360 Consultant.",
  },
  databricks: {
    title: "Databricks registration instructions",
    url: "https://www.databricks.com/learn/certification/faq",
    steps: [
      "Choose your role-based certification and download the current exam guide.",
      "Follow Register from the official exam page to the Databricks Webassessor / Kryterion account flow.",
      "Select the exam, language and available appointment. Pay or apply an eligible voucher at checkout.",
      "Complete the required system and exam-environment checks, then keep your booking confirmation.",
    ],
    note: "Databricks distinguishes proctored certifications from course badges and accreditations. Training is recommended but is not mandatory for certification exams; candidates must be at least 18.",
  },
  cisco: {
    title: "Cisco exam registration",
    url: "https://www.pearsonvue.com/us/en/cisco.html",
    steps: [
      "Choose your track and check every required exam on Cisco’s certification page.",
      "Use Cisco’s official scheduling route to the applicable test provider. CCST uses the support-technician booking route; most other written exams use Pearson.",
      "Select the exact exam and the available delivery option, then confirm identification, fee and appointment details.",
      "Complete every assessment needed for the credential. CCNP requires core and concentration exams; CCIE requires a qualifying exam and a separately booked lab.",
    ],
    note: "Automation and Cybersecurity use the current Cisco track names. Check your exam’s own delivery route before paying.",
  },
  pmi: {
    title: "PMI certification application",
    url: "https://www.pmi.org/certifications",
    steps: [
      "Create or sign in to your PMI account and select the credential.",
      "Check the credential’s education, training and experience requirements; prepare the application or required learning route.",
      "Complete the applicable eligibility review and any audit or panel steps. Follow the approved payment and scheduling instructions.",
      "Confirm your exam appointment and identification requirements. After certification, follow the credential’s renewal requirements.",
    ],
    note: "Requirements differ across PMP, CAPM, programme, portfolio and specialist credentials. The selected credential’s official instructions take priority over this overview.",
  },
  isaca: {
    title: "ISACA exam registration",
    url: "https://www.isaca.org/credentialing/certifications",
    steps: [
      "Create or sign in to MyISACA and open the selected credential’s registration page.",
      "Confirm exam access, any prerequisite designation, local test delivery and the separate certification-award requirements.",
      "Register and pay for the exam, then schedule through ISACA’s PSI route within your eligibility period.",
      "Take the exam and complete the credential application and continuing-education obligations that apply to your certification.",
    ],
    note: "An exam pass and a certification award are separate milestones where experience or other credential requirements apply. Check country restrictions on the individual exam page.",
  },
  iapp: {
    title: "IAPP steps to certify",
    url: "https://iapp.org/certify/certification-process",
    steps: [
      "Choose AIGP or the privacy credential matching your responsibilities and jurisdiction.",
      "Read the candidate handbook and current body of knowledge, then create or sign in to your IAPP account.",
      "Purchase the selected exam and follow IAPP’s authorised scheduling instructions.",
      "Check the appointment, identification rules and maintenance requirements, then complete your exam.",
    ],
    note: "AIGP is issued by IAPP. It focuses on AI governance; CIPM, CIPT and CIPP address different privacy responsibilities.",
  },
  comptia: {
    title: "CompTIA Central exam registration",
    url: "https://www.pearsonvue.com/us/en/comptia.html",
    steps: [
      "Sign in to CompTIA Central through the official Pearson CompTIA page.",
      "Check the live exam code, retirement date, recommended experience and the voucher’s country and expiry restrictions.",
      "Select the available test-centre or online appointment, review the candidate agreement and pay or apply an eligible voucher.",
      "Complete identification and any online system checks; keep the appointment confirmation and review renewal requirements.",
    ],
    note: "For A+, check both required core exams and their matching version. The catalogue uses credential names; confirm the live exam series before purchasing.",
  },
};

export function getRegistrationGuide(cert: Certification): RegistrationGuide {
  const guide = registrationGuides[cert.provider];
  if (guide) return guide;
  return {
    title: "Official registration and requirements",
    url: cert.source,
    steps: [
      "Open the official credential page and review its current exam guide and eligibility requirements.",
      "Create or sign in to the provider’s certification account with a name matching your accepted identification.",
      "Follow the provider’s registration link; check the exact exam, region, language, delivery method and fee.",
      "Confirm the appointment and complete any required system checks. Keep the confirmation and review the credential’s renewal rules.",
    ],
    note: "Use the official provider’s current instructions for booking. Global Certs IT can help you understand your options and discuss voucher availability.",
  };
}
