import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, ExternalLink } from "lucide-react";
import { certificationUpdates, updateDate, updateStatus, UPDATES_REVIEWED_ON } from "@/lib/certification-updates";
import { certificationEnquiry } from "@/lib/certifications";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Certification Updates & Exam Changes",
  description: "PMP training guidance, AWS MLA-C02 beta, Microsoft AI-500 and AZ-802, plus upcoming exam dates and India skills-market context. Sources and candidate guidance included.",
  alternates: { canonical: "https://www.globalcertsit.com/certification-updates" },
  openGraph: { title: "Certification updates | Global Certs IT", description: "Exam changes, key dates and candidate guidance, with official sources.", url: "https://www.globalcertsit.com/certification-updates" },
};

export default function CertificationUpdatesPage() {
  const now = new Date();
  return <main className="gc-experience updates-page">
    <section className="gc-container updates-intro">
      <Link className="updates-back" href="/">Home / Certification updates</Link>
      <span className="gc-kicker"><CalendarDays size={18} /> EXAM DATES & PROVIDER ANNOUNCEMENTS</span>
      <h1>Know what changes.<br /><span>Book with clarity.</span></h1>
      <p>PMP, cloud and AI certification updates for working professionals in India. Check exam changes, eligibility and the dates that apply to your next step.</p>
      <div className="updates-reviewed">Latest review <time dateTime={UPDATES_REVIEWED_ON}>{updateDate(UPDATES_REVIEWED_ON)}</time><span>Independent guidance · supporting sources linked</span></div>
    </section>
    <div className="gc-container updates-list">
      {certificationUpdates.map(update => {
        const status = updateStatus(update, now);
        const ended = status === "Event ended";
        return <article className="update-card" id={update.id} key={update.id}>
          <figure className={`update-figure ${update.provider.startsWith("Microsoft") || update.image.endsWith(".svg") ? "update-badge" : ""}`}>
            {/* External publisher images are credited; no provider endorsement is implied. */}
            <Image src={update.image} alt={update.imageAlt} width={550} height={310} loading="lazy" unoptimized />
            <figcaption><a href={update.imageSource} target="_blank" rel="noopener noreferrer">{update.imageCredit} <ExternalLink size={12} /></a></figcaption>
          </figure>
          <div className="update-body">
            <div className="update-meta"><span>{update.provider}</span><span className={`update-status ${ended ? "update-ended" : ""}`}>{status}</span></div>
            <h2>{update.title}</h2>
            <p className="update-publication">{update.publishedOn ? <>{update.publicationLabel || "Announced"} <time dateTime={update.publishedOn}>{updateDate(update.publishedOn)}</time></> : "Publication date not stated"}{" · "}Checked <time dateTime={update.checkedOn || "2026-09-16"}>{updateDate(update.checkedOn || "2026-09-16")}</time></p>
            <p className="update-date"><CalendarDays size={17} />{update.dateLabel}</p>
            {ended ? <p>This event benefit has ended. The original announcement is retained for reference; it is not a current offer.</p> : <p>{update.summary}</p>}
            <p className="update-audience"><strong>Relevant for:</strong> {update.audience}.</p>
            {!ended && <div className="update-guidance"><h3>What this means for you</h3><p>{update.guidance}</p></div>}
            <div className="update-actions"><a href={update.source} target="_blank" rel="noopener noreferrer">{update.sourceLabel || (update.endsAt ? "Official event terms" : "Official announcement")} <ExternalLink size={16} /></a>
              {update.relatedSources?.map(source => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label} <ExternalLink size={16} /></a>)}
              {update.guideHref && <Link href={update.guideHref}>View certification guide <ArrowUpRight size={17} /></Link>}
              {!ended && update.enquiry && <a className="update-enquiry" href={certificationEnquiry([update.enquiry])} target="_blank" rel="noopener noreferrer">Ask for exam pricing <ArrowUpRight size={17} /></a>}
            </div>
          </div>
        </article>;
      })}
    </div>
    <section className="gc-container updates-footnote"><p>Dates and availability are set by each certification provider. Regional pricing, voucher terms and eligibility can differ; use the linked official information before booking.</p><Link href="/certifications/explore">Explore all certifications <ArrowUpRight size={17} /></Link></section>
  </main>;
}
