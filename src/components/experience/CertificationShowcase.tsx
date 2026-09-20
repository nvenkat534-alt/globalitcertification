"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { certUrl, certificationEnquiry, type Certification } from "@/lib/certifications";
import ProviderMark from "./ProviderMark";
import { WhatsAppIcon } from "./WhatsAppConcierge";
export type HomeCert = Pick<Certification, "id" | "provider" | "name" | "exam" | "level" | "why" | "skills" | "access" | "status">;
type HomeGroup = { label: string; category: string; href: string; items: HomeCert[] };
const shortName = (c: HomeCert) => c.name.replace(/^AWS Certified |^Microsoft Certified: |^Google Cloud |^Databricks Certified |^Salesforce Certified |^ServiceNow Certified /, "");
export default function CertificationShowcase({ groups }: { groups: HomeGroup[] }) {
  const [active, setActive] = useState(0);
  const group = groups[active];
  return <>
    <div className="hp-cert-tabs" role="group" aria-label="Browse featured certifications">{groups.map((g, index) => <button key={g.label} aria-pressed={active === index} onClick={() => setActive(index)}>{g.label}</button>)}</div>
    <p className="sr-only" role="status">Showing {group.items.length} {group.label.toLowerCase()} certifications</p>
    <div className="hp-cert-grid">{group.items.map(cert => <article className={`hp-cert hp-cert-${cert.provider}`} key={`${cert.provider}/${cert.id}`}><div className="hp-cert-top"><ProviderMark provider={cert.provider}/><span>{cert.access || cert.status || cert.level}</span></div><div className="hp-cert-body"><p className="hp-cert-exam">{cert.exam}</p><h3><Link href={certUrl(cert)}>{shortName(cert)}</Link></h3><p className="hp-cert-description">{cert.why}</p><div className="hp-cert-skills">{cert.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div><div className="hp-cert-actions"><Link href={certUrl(cert)} aria-label={`View ${cert.name} details`}>View details <ArrowUpRight size={17}/></Link><a href={certificationEnquiry([cert])} aria-label={`Enquire about ${cert.name} on WhatsApp`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={17}/> Enquire</a></div></article>)}</div>
    <div className="hp-cert-more"><p>See the full range. Compare up to 3 certifications.</p><Link className="hp-button hp-button-outline" href={group.href}>{active === 0 ? "View all certifications" : `Explore all ${group.label.toLowerCase()} certifications`}<ArrowRight size={18}/></Link></div>
  </>;
}
