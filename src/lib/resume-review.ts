import { careerPaths, pathCertifications, type CareerPath, type CareerSkill } from "./career-paths";
import { certKey, type Certification } from "./certifications";

export function mentions(text: string, term: string): boolean {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
  return new RegExp(`(^|[^a-z0-9])${escaped}(?=$|[^a-z0-9])`, "i").test(text);
}
export function skillEvidence(text: string, skill: CareerSkill): "mentioned" | "learning" | "missing" {
  const sentences = text.split(/[\n.!?;]+/);
  const matches = sentences.filter(line => skill.aliases.some(alias => mentions(line, alias)));
  if (!matches.length) return "missing";
  return matches.some(line => !/\b(no experience|not experienced|no knowledge|unfamiliar|not familiar|not proficient|not skilled|lack of|lacking|learning|studying|beginner|planning to|plan to|aspiring|want to learn|without experience|have not|haven't|never used|not used)\b/i.test(line)) ? "mentioned" : "learning";
}
export function detectRoles(text: string) {
  return careerPaths.map(path => ({ path, hits: path.skills.filter(s => skillEvidence(text, s) === "mentioned").length, titleMatch: path.search.some(s => mentions(text, s)) }))
    .filter(r => r.hits >= 2 || r.titleMatch)
    .sort((a, b) => (b.hits / b.path.skills.length + Number(b.titleMatch)) - (a.hits / a.path.skills.length + Number(a.titleMatch))).slice(0, 3);
}
function certMentioned(text: string, cert: Certification) {
  const provider = cert.provider.replace(/-/g, " ");
  return mentions(text, cert.name) || (cert.exam.length > 3 && mentions(text, cert.exam) && (/[0-9_-]/.test(cert.exam) || mentions(text, provider))) || (cert.provider === "pmi" && mentions(text, cert.exam));
}
export function reviewResume(text: string, path: CareerPath, experience: "beginner" | "working" | "senior", jobDescription = "") {
  const skills = path.skills.map(s => ({ ...s, evidence: skillEvidence(text, s), required: s.aliases.some(a => mentions(jobDescription, a)) }));
  const lines = text.split(/\n+/).map(l => l.trim()).filter(Boolean);
  const bullets = lines.filter(l => /^(?:[-•●▪*]\s*|(?:built|led|delivered|designed|implemented|configured|resolved|automated|developed|improved|managed|supported|responsible|worked on|helped|involved in|duties)\b)/i.test(l));
  const outcomes = bullets.filter(l => /\b\d+(?:\.\d+)?\s*(?:[a-z]+\s+){0,2}(?:%|hours?|days?|minutes?|users?|tickets?|records?|projects?|seconds?)\b|\d+(?:\.\d+)?%/i.test(l));
  const checks = [
    { label: "Clear role summary", ok: /\b(summary|profile|objective|professional overview)\b/i.test(text), advice: `Add a short summary naming ${path.title}, your actual background and the strongest relevant evidence.` },
    { label: "Experience or projects", ok: /\b(experience|employment|projects?|work history)\b/i.test(text), advice: "Use clear Experience and/or Projects headings with your own responsibilities, dates and outcomes. Label training projects as projects." },
    { label: "Contact route", ok: /[\w.+-]+@[\w.-]+\.[a-z]{2,}/i.test(text), advice: "Add a professional email address. Keep ID numbers, full street address and sensitive personal details out of a public résumé." },
    { label: "Education or training", ok: /\b(education|qualification|degree|bachelor|master|diploma|training)\b/i.test(text), advice: "Add relevant education or training with accurate award status and dates." },
    { label: "Evidence-led bullets", ok: bullets.length >= 3, advice: "Write at least three concise bullets explaining what you did, how you did it and the outcome. Start with a specific action." },
    { label: "Specific results or scale", ok: outcomes.length > 0, advice: "Where available, add a verifiable result or scale: records processed, tickets handled, time saved or users supported. Never invent a number." },
    { label: "Portfolio or professional link", ok: /(?:github\.com|linkedin\.com|gitlab\.com|portfolio)/i.test(text), advice: "Add a relevant professional profile or sanitised project link that supports your claims." },
  ];
  const available = pathCertifications(path);
  const alreadyMentioned = available.filter(c => certMentioned(text, c));
  const recommendations = available.filter(c => !alreadyMentioned.includes(c)).map((cert, index) => ({ cert, index, score: (experience === "beginner" ? 2 - cert.stage : experience === "senior" ? cert.stage : cert.stage === 1 ? 3 : 1) + (mentions(text, cert.provider.replace(/-/g, " ")) ? 2 : 0) })).sort((a, b) => b.score - a.score || a.index - b.index).slice(0, 3).map(r => r.cert);
  const weakBullets = bullets.filter(l => /^(?:[-•●▪*]\s*)?(?:responsible for|worked on|helped|involved in|duties)/i.test(l)).slice(0, 3);
  const required = skills.filter(s => s.required);
  return { path, skills, checks, recommendations, alreadyMentioned, weakBullets, words: text.trim().split(/\s+/).length,
    matched: skills.filter(s => s.evidence === "mentioned").length,
    jobMatch: jobDescription.trim() ? { total: required.length, mentioned: required.filter(s => s.evidence === "mentioned").length, missing: required.filter(s => s.evidence !== "mentioned").map(s => s.name) } : null,
    bulletTemplate: `Used [specific ${path.skills[0].name} skill] to [action you personally performed] for [real process/project], resulting in [verified outcome or scale].`,
  };
}
export type ResumeReview = ReturnType<typeof reviewResume>;
export function reviewText(report: ResumeReview) {
  return [`GLOBAL CERTS IT — RÉSUMÉ REVIEW`, `Target: ${report.path.title}`, "Rules-based text review. Mentions are not verified skills, eligibility or an ATS score.", "", "SKILL MENTIONS", ...report.skills.map(s => `${s.name}: ${s.evidence}`), "", "IMPROVEMENTS", ...report.checks.filter(c => !c.ok).map(c => c.advice), "", "CERTIFICATION OPTIONS", ...report.recommendations.map(c => `${c.name} — ${c.source}\nReadiness: ${c.readiness}\nEligibility: ${c.eligibility}`), report.path.credentialAdvice, ...report.alreadyMentioned.map(c => `${c.name} is already mentioned; verify whether earned, expired or in progress.`), "", "EVIDENCE TEMPLATE — REPLACE BRACKETS WITH TRUE DETAILS", report.bulletTemplate, "", "PRACTICE PROJECT", report.path.project, "", `Role plan: https://www.globalcertsit.com/careers/${report.path.id}`, ...report.recommendations.map(c => `Details: https://www.globalcertsit.com/certifications/${certKey(c)}`)].join("\n");
}
