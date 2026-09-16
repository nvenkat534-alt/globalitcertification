import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, ExternalLink } from "lucide-react";
import { certificationUpdates, updateDate, updateStatus, UPDATES_REVIEWED_ON } from "@/lib/certification-updates";
import { certificationEnquiry } from "@/lib/certifications";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Certification Updates & Exam Changes",
  description: "Official-source exam changes for Azure Cosmos DB, Power Platform and CISM, plus the eligibility and dates for Salesforce’s Dreamforce exam benefit.",
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
      <p>Exam-version changes, certification announcements and eligibility-specific offers. Check the dates that apply to your next exam.</p>
      <div className="updates-reviewed">Sources checked <time dateTime={UPDATES_REVIEWED_ON}>{updateDate(UPDATES_REVIEWED_ON)}</time><span>Independent guidance · official sources linked</span></div>
    </section>
    <div className="gc-container updates-list">
      {certificationUpdates.map(update => {
        const status = updateStatus(update, now);
        const ended = status === "Event ended";
        return <article className="update-card" id={update.id} key={update.id}>
          <figure className={`update-figure ${update.provider.startsWith("Microsoft") ? "update-badge" : ""}`}>
            {/* External publisher images are credited; no provider endorsement is implied. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={update.image} alt={update.imageAlt} width={550} height={310} loading="lazy" />
            <figcaption><a href={update.imageSource} target="_blank" rel="noopener noreferrer">{update.imageCredit} <ExternalLink size={12} /></a></figcaption>
          </figure>
          <div className="update-body">
            <div className="update-meta"><span>{update.provider}</span><span className={`update-status ${ended ? "update-ended" : ""}`}>{status}</span></div>
            <h2>{update.title}</h2>
            <p className="update-publication">{update.publishedOn ? <>Announced <time dateTime={update.publishedOn}>{updateDate(update.publishedOn)}</time></> : "Publication date not stated · event terms checked 16 September 2026"}</p>
            <p className="update-date"><CalendarDays size={17} />{update.dateLabel}</p>
            {ended ? <p>This event benefit has ended. The original announcement is retained for reference; it is not a current offer.</p> : <p>{update.summary}</p>}
            <p className="update-audience"><strong>Relevant for:</strong> {update.audience}.</p>
            {!ended && <div className="update-guidance"><h3>What this means for you</h3><p>{update.guidance}</p></div>}
            <div className="update-actions"><a href={update.source} target="_blank" rel="noopener noreferrer">{update.endsAt ? "Official event terms" : "Official announcement"} <ExternalLink size={16} /></a>
              {update.enquiry && <a className="update-enquiry" href={certificationEnquiry([update.enquiry])} target="_blank" rel="noopener noreferrer">Ask for exam pricing <ArrowUpRight size={17} /></a>}
            </div>
          </div>
        </article>;
      })}
    </div>
    <section className="gc-container updates-footnote"><p>Dates and availability are set by each certification provider. Regional pricing, voucher terms and eligibility can differ; use the linked official information before booking.</p><Link href="/certifications/explore">Explore all certifications <ArrowUpRight size={17} /></Link></section>
  </main>;
}
