export type ResumeSection = { id: string; title: string; content: string };
export type ResumeDraft = {
  version: 1;
  name: string; headline: string; email: string; phone: string; location: string; links: string;
  targetRole: string; template: "classic" | "modern";
  sections: ResumeSection[]; originalText: string;
};
export const sectionTitles = ["Professional summary", "Skills", "Experience", "Projects", "Education", "Certifications"];
export function emptyDraft(targetRole = ""): ResumeDraft {
  return { version: 1, name: "", headline: "", email: "", phone: "", location: "", links: "", targetRole, template: "modern", originalText: "", sections: sectionTitles.map((title, i) => ({ id: `section-${i}`, title, content: "" })) };
}
const aliases: Record<string, string> = {
  summary: "Professional summary", profile: "Professional summary", "professional summary": "Professional summary", "career objective": "Professional summary", objective: "Professional summary",
  skills: "Skills", "technical skills": "Skills", "core competencies": "Skills",
  experience: "Experience", "work experience": "Experience", "professional experience": "Experience", "employment history": "Experience",
  projects: "Projects", "personal projects": "Projects", "academic projects": "Projects",
  education: "Education", "academic qualifications": "Education", certifications: "Certifications", certificates: "Certifications", "licenses and certifications": "Certifications",
};
/** Conservative grouping only: unrecognised text remains editable and the original is retained. */
export function parseResume(source: string, targetRole = ""): ResumeDraft {
  const draft = emptyDraft(targetRole);
  draft.originalText = source;
  const lines = source.split(/\r?\n/);
  let current: ResumeSection | undefined;
  const extra: string[] = [];
  let first = true;
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { if (current) current.content += "\n"; else extra.push(""); continue; }
    const heading = aliases[line.toLowerCase().replace(/[:\s]+$/, "")];
    if (heading) { current = draft.sections.find(s => s.title === heading); first = false; continue; }
    if (first && /^[\p{L}][\p{L} .'’\-]{1,70}$/u.test(line) && line.split(/\s+/).length >= 2 && line.split(/\s+/).length <= 5 && !/resume|résumé|curriculum|sample|profile|engineer|analyst|consultant|developer|manager/i.test(line)) {
      draft.name = line; first = false; continue;
    }
    first = false;
    if (!draft.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(line)) { draft.email = line; continue; }
    if (current) current.content += `${line}\n`; else extra.push(line);
  }
  draft.sections.forEach(s => { s.content = s.content.trim(); });
  if (extra.join("\n").trim()) draft.sections.push({ id: "imported-other", title: "Additional information", content: extra.join("\n").trim() });
  return draft;
}
export function contactText(draft: ResumeDraft) {
  return [draft.email, draft.phone, draft.location, draft.links].map(v => v.trim()).filter(Boolean).join(" | ");
}
export function draftText(draft: ResumeDraft) {
  return [draft.name, draft.headline, contactText(draft), ...draft.sections.filter(s => s.content.trim()).map(s => `${s.title.trim()}\n${s.content.trim()}`)].map(s => s.trim()).filter(Boolean).join("\n\n");
}
export function composeBullet(action: string, method: string, result: string) {
  const clean = (s: string) => s.trim().replace(/[.;]+$/, "");
  if (!clean(action)) return "";
  return `${clean(action)}${clean(method) ? ` using ${clean(method)}` : ""}${clean(result) ? `; ${clean(result)}` : ""}.`;
}
export function readDraft(json: string): ResumeDraft {
  if (json.length > 200000) throw new Error("Choose a saved draft smaller than 200 KB.");
  let value: unknown;
  try { value = JSON.parse(json); } catch { throw new Error("This is not a readable draft. Choose a JSON file saved by this builder."); }
  if (!value || typeof value !== "object") throw new Error("This is not a résumé draft.");
  const v = value as Record<string, unknown>;
  const fields = ["name", "headline", "email", "phone", "location", "links", "targetRole", "originalText"] as const;
  if (v.version !== 1 || !fields.every(k => typeof v[k] === "string" && (v[k] as string).length <= (k === "originalText" ? 60000 : 1000)) || !["classic", "modern"].includes(v.template as string) || !Array.isArray(v.sections) || v.sections.length > 20) throw new Error("This draft uses an unsupported format or exceeds the editor limits.");
  const sections = v.sections.map((s: unknown, i: number): ResumeSection => {
    if (!s || typeof s !== "object") throw new Error("A draft section is invalid.");
    const row = s as Record<string, unknown>;
    if (typeof row.title !== "string" || row.title.length > 100 || typeof row.content !== "string" || row.content.length > 60000) throw new Error("A draft section is invalid or too long.");
    return { id: `section-${i}`, title: row.title, content: row.content };
  });
  const draft = { ...emptyDraft(), ...Object.fromEntries(fields.map(k => [k, v[k]])), template: v.template, sections } as ResumeDraft;
  if (draftText(draft).length > 60000) throw new Error("Keep your résumé below 60,000 characters.");
  return draft;
}
export type ResumeBlock = { text: string; kind: "name" | "headline" | "contact" | "heading" | "body" | "bullet" };
export function resumeBlocks(draft: ResumeDraft): ResumeBlock[] {
  const blocks: ResumeBlock[] = [];
  if (draft.name.trim()) blocks.push({ text: draft.name.trim(), kind: "name" });
  if (draft.headline.trim()) blocks.push({ text: draft.headline.trim(), kind: "headline" });
  if (contactText(draft)) blocks.push({ text: contactText(draft), kind: "contact" });
  for (const section of draft.sections) {
    if (!section.content.trim()) continue;
    if (section.title.trim()) blocks.push({ text: section.title.trim(), kind: "heading" });
    for (const line of section.content.split(/\r?\n/).filter(s => s.trim())) {
      const bullet = /^\s*[-•*]\s+/.test(line);
      blocks.push({ text: line.trim().replace(bullet ? /^[-•*]\s+/ : /$^/, "").replace(/\t/g, "    "), kind: bullet ? "bullet" : "body" });
    }
  }
  return blocks;
}
