export const timelines = ["Within 30 days", "Within 60 days", "Within 90 days", "More than 90 days", "Still exploring"] as const;
export const services = ["Exam voucher pricing", "Exam registration support", "Certification support", "Help choosing a certification"] as const;
export const experienceOptions = ["Less than 1 year", "1–3 years", "3–5 years", "5+ years"] as const;

export type Enquiry = {
  name: string; phone: string; email: string; certification: string; role: string;
  experience: string; country: string; timeline: string; service: string;
  consent: true; attribution: Record<string, string>;
};
export function validateEnquiry(input: unknown): { enquiry: Enquiry; requestId: string; startedAt: number } {
  if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("Please complete the enquiry form.");
  const d = input as Record<string, unknown>;
  const text = (key: string, min: number, max: number) => {
    const value = typeof d[key] === "string" ? d[key].trim().replace(/[\u0000-\u001f]/g, " ") : "";
    if (value.length < min || value.length > max) throw new Error(`Please check the ${key} field.`);
    return value;
  };
  if (d.website) throw new Error("Unable to accept this enquiry. Please try again.");
  const requestId = text("requestId", 36, 36);
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)) throw new Error("Please refresh the form and try again.");
  const phone = text("phone", 8, 25).replace(/[\s()-]/g, "");
  if (!/^\+[1-9][0-9]{6,14}$/.test(phone)) throw new Error("Enter your WhatsApp number with its country code, for example +91.");
  const email = text("email", 0, 160);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Please check your email address.");
  const timeline = text("timeline", 1, 60), service = text("service", 1, 60), experience = text("experience", 1, 40);
  if (!(timelines as readonly string[]).includes(timeline) || !(services as readonly string[]).includes(service) || !(experienceOptions as readonly string[]).includes(experience)) throw new Error("Please choose an experience level, service and exam timeline.");
  if (d.consent !== true) throw new Error("Please confirm that we may contact you about this paid service.");
  const attribution: Record<string, string> = {};
  if (d.attribution && typeof d.attribution === "object") {
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
      const value = (d.attribution as Record<string, unknown>)[key];
      if (typeof value === "string" && /^[a-zA-Z0-9_./ -]{1,150}$/.test(value)) attribution[key] = value;
    }
  }
  return { requestId, startedAt: typeof d.startedAt === "number" ? d.startedAt : 0, enquiry: {
    name: text("name", 2, 100), phone, email, certification: text("certification", 2, 800),
    role: text("role", 2, 100), experience, country: text("country", 2, 80), timeline, service, consent: true, attribution,
  }};
}
