"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, X, ExternalLink, Eye } from "lucide-react";
import { certUrl, whatsappUrl, type Certification } from "@/lib/certifications";
import ProviderMark from "./ProviderMark";
import { WhatsAppIcon } from "./WhatsAppConcierge";
const categories = ["Featured", "PMP & Agile", "Cloud", "AI", "Data", "Security"];
const shortName = (c: Certification) => c.name.replace(/^AWS Certified |^Microsoft Certified: |^Google Cloud |^Databricks Certified /, "");
export default function CertificationShowcase({ items }: { items: Certification[] }) {
  const [category, setCategory] = useState("Featured");
  const [selected, setSelected] = useState<Certification | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const matches = items.filter(c => category === "Featured" ? ["pmp", "solutions-architect-associate", "azure-administrator", "ai-practitioner", "fabric-data-engineer", "professional-data-engineer"].includes(c.id) : category === "PMP & Agile" ? c.provider === "pmi" : category === "AI" ? c.ai : category === "Data" ? Boolean(c.roles["data-engineer"] && !c.ai) : category === "Security" ? Boolean(c.roles.cybersecurity) : ["solutions-architect-associate", "cloud-practitioner", "azure-administrator", "professional-cloud-architect"].includes(c.id));
  return <>
    <div className="showcase-filters" role="group" aria-label="Filter featured certifications">{categories.map(name => <button key={name} onClick={() => setCategory(name)} aria-pressed={category === name}>{name}{name === "AI" && <span>✦</span>}</button>)}</div>
    <p className="sr-only" role="status">{matches.length} {category.toLowerCase()} certifications shown</p>
    <div className="showcase-grid">{matches.map((cert, i) => <article key={cert.id} className={`showcase-card ${cert.id === "pmp" ? "showcase-pmp" : ""}`}>
      <div className="showcase-card-top"><ProviderMark provider={cert.provider} /><span className="exam-level">{cert.status === "Beta" ? "Bookable beta" : cert.level}</span></div>
      <div className="showcase-card-body"><span className="showcase-number">{String(i + 1).padStart(2, "0")} / CERTIFICATION</span><h3>{shortName(cert)}</h3><p>{cert.id === "pmp" ? "For professionals ready to validate their project leadership experience." : cert.skills.slice(0, 3).join(" · ")}</p></div>
      <div className="showcase-meta"><span>{cert.exam}</span><button onClick={() => { setSelected(cert); dialog.current?.showModal(); }} aria-label={`Quick view ${cert.name}`}><Eye size={14}/> Quick view</button></div>
      <a className="showcase-chat" href={whatsappUrl(`Hi Global Certs IT! I am interested in ${cert.name} (${cert.exam}). Please share eligibility, exam details and voucher availability. My country: `)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={17}/> Get details on WhatsApp <ArrowUpRight size={15}/></a>
    </article>)}</div>
    <div className="catalog-action"><p>Your certification. Your experience. Your next step.</p><Link className="gc-button gc-button-outline" href="/certifications">Browse all certifications <ArrowRight size={17}/></Link></div>
    <dialog className="gc-dialog cert-preview" ref={dialog} onClick={e => {if(e.target === e.currentTarget) dialog.current?.close();}} onClose={() => setSelected(null)} aria-labelledby="preview-title">
      <button className="dialog-close" aria-label="Close certification details" onClick={() => dialog.current?.close()}><X size={22}/></button>
      {selected && <><ProviderMark provider={selected.provider}/><span className="gc-kicker">CERTIFICATION AT A GLANCE</span><h2 id="preview-title">{selected.name}</h2><div className="preview-labels"><span>{selected.exam}</span><span>{selected.level}</span>{selected.status && <span>{selected.status}</span>}</div><p>{selected.why}</p><h3>Is this right for you?</h3><p>{selected.readiness}</p><ul>{selected.skills.map(s => <li key={s}><Check size={14}/>{s}</li>)}</ul><a className="gc-button gc-button-whatsapp" href={whatsappUrl(`Hi Global Certs IT! Please help me with ${selected.name} (${selected.exam}). I would like eligibility and exam details.`)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/> Ask about this certification <ArrowUpRight size={18}/></a><div className="preview-links"><Link href={certUrl(selected)} onClick={() => dialog.current?.close()}>Full certification details <ArrowRight size={14}/></Link><a href={selected.source} target="_blank" rel="noopener noreferrer">Official exam source <ExternalLink size={13}/></a></div></>}
    </dialog>
  </>;
}
