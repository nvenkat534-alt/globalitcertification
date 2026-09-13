"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Download, FileSearch, LockKeyhole, Upload, X } from "lucide-react";
import { careerById, careerPaths } from "@/lib/career-paths";
import { certUrl } from "@/lib/certifications";
import { detectRoles, reviewResume, reviewText, type ResumeReview } from "@/lib/resume-review";
import { CareerNav } from "./CareerHub";

export default function ResumeReviewer({ initialRole }: { initialRole?: string }) {
  const [role, setRole] = useState(careerById(initialRole || "")?.id || "");
  const [experience, setExperience] = useState<"beginner" | "working" | "senior">("working");
  const [text, setText] = useState("");
  const [jd, setJd] = useState("");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [report, setReport] = useState<ResumeReview | null>(null);
  const [suggestions, setSuggestions] = useState<ReturnType<typeof detectRoles>>([]);
  const resultRef = useRef<HTMLElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const generation = useRef(0);
  const invalidate = () => { setReport(null); setError(""); };
  async function onFile(file?: File) {
    if (!file) return;
    const request = ++generation.current;
    setBusy(true); setError(""); setReport(null); setFileName(""); setText(""); setSuggestions([]);
    try {
      const { extractResume } = await import("@/lib/resume-file");
      const extracted = await extractResume(file);
      if (request !== generation.current) return;
      setText(extracted); setFileName(file.name); setSuggestions(detectRoles(extracted));
    } catch (e) { if (request === generation.current) setError(e instanceof Error && /Choose|Use |This |There|document|PDF/.test(e.message) ? e.message : "We couldn’t read this file. Try an unprotected PDF, DOCX or TXT, or paste the text below."); }
    finally { if (request === generation.current) setBusy(false); if (fileRef.current) fileRef.current.value = ""; }
  }
  function analyse() {
    setError("");
    if (text.trim().length < 80) { setError("Add at least 80 characters of résumé text before reviewing."); return; }
    const target = careerById(role);
    if (!target) { setSuggestions(detectRoles(text)); setError("Choose your target role. Suggested matches can help you decide."); return; }
    setReport(reviewResume(text, target, experience, jd));
    requestAnimationFrame(() => { resultRef.current?.focus(); resultRef.current?.scrollIntoView({ block: "start", behavior: "instant" }); });
  }
  function clear() { generation.current++; setBusy(false); setText(""); setJd(""); setFileName(""); setReport(null); setSuggestions([]); setError(""); if (fileRef.current) fileRef.current.value = ""; }
  function download() {
    if (!report) return;
    const url = URL.createObjectURL(new Blob([reviewText(report)], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a"); a.href = url; a.download = `globalcertsit-${report.path.id}-resume-review.txt`; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <main className="career-hub"><div className="gc-container"><CareerNav active="resume"/><header className="ch-tool-hero"><span className="gc-kicker"><FileSearch size={15}/> RÉSUMÉ REVIEW</span><h1>Make your experience<br/><em>easy to see.</em></h1><p>Upload your résumé, choose your target role and get practical improvements, skill-gap prompts and relevant global certification options.</p><div className="ch-privacy"><LockKeyhole size={17}/><span>Your file is processed in this browser. The reviewer doesn’t upload or save your résumé.</span></div></header>
    <div className="ch-review-layout"><section className="ch-input-panel" aria-label="Résumé input"><span className="gc-kicker">01 / YOUR EXPERIENCE & TARGET</span><h2>Let’s find your next step.</h2><div className="ch-upload"><Upload size={30}/><strong>{busy ? "Reading your document…" : fileName || "Choose your résumé"}</strong><p>PDF, DOCX or TXT · Up to 5 MB<br/>Text PDFs only; up to 20 pages</p><input ref={fileRef} id="resume-file" aria-label="Choose résumé file" type="file" accept=".pdf,.docx,.txt" disabled={busy} onChange={e => void onFile(e.target.files?.[0])}/></div><p className="ch-small">Check the extracted text below, especially columns and bullet points. Scanned PDFs need OCR or pasted text.</p>
      <label className="ch-field">Résumé text<textarea data-private="true" spellCheck={false} autoComplete="off" maxLength={60000} rows={9} disabled={busy} value={text} onChange={e => { setText(e.target.value); setFileName(""); setSuggestions([]); invalidate(); }} placeholder="Paste your résumé here, or choose a file above. Include your skills, experience, projects and certifications."/></label><span className="ch-small">{text.length.toLocaleString()} / 60,000 characters</span>
      <label className="ch-field">Target role<select value={role} onChange={e => { setRole(e.target.value); invalidate(); }}><option value="">Choose the role you want</option>{careerPaths.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}</select></label><button className="ch-inline-button" disabled={busy || text.trim().length < 80} onClick={() => {setSuggestions(detectRoles(text)); setError("");}}>Suggest roles from my résumé</button>
      {suggestions.length > 0 && <div className="ch-suggested"><span className="ch-small">Possible matches from text mentions — choose your intended role:</span>{suggestions.map(s => <button key={s.path.id} onClick={() => {setRole(s.path.id); invalidate();}}>{s.path.title}<ArrowRight size={14}/></button>)}</div>}
      <label className="ch-field">Your experience in the target field<select value={experience} onChange={e => {setExperience(e.target.value as typeof experience); invalidate();}}><option value="beginner">Getting started / 0–1 year</option><option value="working">Building experience / 1–3 years</option><option value="senior">Specialising / 3+ years</option></select></label>
      <details className="ch-jd"><summary>Compare with a job description (optional)</summary><label className="ch-field">Paste the job’s requirements<textarea data-private="true" spellCheck={false} maxLength={20000} rows={5} value={jd} onChange={e => {setJd(e.target.value); invalidate();}} placeholder="Only role-related skills in our checklist are compared. Personal information is not needed."/></label></details>
      {error && <p className="ch-error" role="alert">{error}</p>}<div className="ch-actions"><button className="gc-button gc-button-light" disabled={busy} onClick={analyse}>Review my résumé <ArrowRight size={17}/></button><button className="ch-clear" onClick={clear}>Clear all <X size={15}/></button></div><p className="ch-small">This is a rules-based text review, not an AI rewrite or an ATS score. It cannot verify experience, credential eligibility or hiring outcomes.</p></section>
      <section className="ch-review-results" ref={resultRef} tabIndex={-1} aria-label="Résumé review results" aria-live="polite">{!report ? <div className="ch-review-placeholder"><div className="ch-document-art" aria-hidden="true"><FileSearch size={55}/><i/><i/><i/><span><Check size={17}/> Your next step</span></div><span className="gc-kicker">02 / YOUR PERSONALISED REVIEW</span><h2>More clarity.<br/>A stronger application.</h2><p>Your review will appear here with:</p><ul><li><Check size={17}/> Skills mentioned and areas to make clearer</li><li><Check size={17}/> Practical résumé improvements</li><li><Check size={17}/> Certification options for your target role</li><li><Check size={17}/> A project and interview preparation path</li></ul></div> : <>
        <div className="ch-report-heading"><div><span className="gc-kicker">YOUR RÉSUMÉ REVIEW</span><h2>{report.path.title}</h2><p>{report.words} words reviewed · Based on your chosen target and experience</p></div><button className="ch-icon-button" onClick={download} aria-label="Download résumé review"><Download size={22}/></button></div>
        <div className="ch-report-summary"><strong>{report.matched}<span>/{report.skills.length}</span></strong><div><h3>Role skills mentioned</h3><p>This counts text mentions, not verified ability or your chance of getting hired.</p></div></div>
        <section className="ch-report-section"><h3>Make your skills visible</h3><p>“Not mentioned” means we didn’t detect an alias in the text. Add a true example if you have the skill; otherwise use it as a preparation topic.</p><div className="ch-evidence-list">{report.skills.map(s => <div key={s.name}><span>{s.name}</span><b className={`evidence-${s.evidence}`}>{s.evidence === "mentioned" ? "Mentioned" : s.evidence === "learning" ? "Learning / qualified mention" : "Not mentioned"}</b></div>)}</div></section>
        {report.jobMatch && <section className="ch-report-section ch-note"><h3>Job description comparison</h3>{report.jobMatch.total ? <><p>{report.jobMatch.mentioned} of {report.jobMatch.total} detected role-checklist skills are also mentioned in your résumé.</p>{report.jobMatch.missing.length > 0 && <p><b>Review these:</b> {report.jobMatch.missing.join(", ")}</p>}</> : <p>No skills from this role’s checklist were detected in the job description. Check the selected role or review the vacancy manually.</p>}<p className="ch-small">This comparison covers our checklist only, not all employer requirements or an ATS ranking.</p></section>}
        <section className="ch-report-section"><h3>Prioritise these improvements</h3><div className="ch-checks">{report.checks.map(c => <div key={c.label}><span className={c.ok ? "check-ok" : "check-review"}>{c.ok ? <Check size={16}/> : "→"}</span><div><strong>{c.label}</strong><p>{c.ok ? "A text signal was found. Check that the content is accurate and easy to read." : c.advice}</p></div></div>)}</div>{report.weakBullets.length > 0 && <div className="ch-note"><b>Make these bullets more specific:</b>{report.weakBullets.map((b, i) => <p key={i}>{b}</p>)}</div>}</section>
        <section className="ch-report-section"><h3>Global certifications to consider</h3><p>{report.path.credentialAdvice}</p><div className="ch-cert-list">{report.recommendations.map(c => <article key={c.id}><span className="ch-pill">{c.provider.toUpperCase()} · {c.level}{c.access && ` · ${c.access}`}</span><h4>{c.name}</h4><p>{c.why}</p><p className="ch-small"><b>Readiness:</b> {c.readiness}</p><Link href={certUrl(c)}>Check eligibility & registration <ArrowUpRight size={15}/></Link></article>)}</div>{report.alreadyMentioned.length > 0 && <p className="ch-note"><b>Already mentioned:</b> {report.alreadyMentioned.map(c => c.name).join("; ")}. Clearly state whether each is earned, expired or in progress; we haven’t verified its status.</p>}{!report.recommendations.length && <p>Use the official learning and credential links in your role roadmap to confirm the right option.</p>}</section>
        <section className="ch-report-section"><h3>A better evidence structure</h3><p>Replace every bracket with a true detail. This is a writing template, not a claim about your work.</p><blockquote>{report.bulletTemplate}</blockquote><h3>Build missing evidence</h3><p>{report.path.project}</p><Link className="gc-text-link" href={`/careers/${report.path.id}`}>Open my full preparation roadmap <ArrowRight size={16}/></Link></section>
        <div className="ch-actions"><button className="gc-button gc-button-light" onClick={download}>Download review <Download size={17}/></button><Link className="gc-button gc-button-outline" href={`/careers/jobs?role=${report.path.id}`}>Explore jobs <ArrowUpRight size={17}/></Link></div>
      </>}</section></div></div></main>;
}
