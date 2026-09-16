import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { certificationUpdates } from "@/lib/certification-updates";

export default function CertificationUpdatesPreview() {
  return <section className="gc-container gc-section updates-preview" aria-labelledby="updates-heading">
    <div className="updates-section-heading">
      <div><span className="gc-kicker"><CalendarDays size={16} /> CERTIFICATION UPDATES</span><h2 id="updates-heading">Know what changes.<br /><span>Plan your next exam.</span></h2></div>
      <Link href="/certification-updates">View all updates <ArrowUpRight size={18} /></Link>
    </div>
    <div className="updates-preview-grid">{certificationUpdates.filter(update => !update.endsAt).slice(0, 3).map(update =>
      <Link key={update.id} href={`/certification-updates#${update.id}`} className="updates-preview-card">
        <span>{update.provider}</span><h3>{update.title}</h3><p>{update.dateLabel}</p><b>Read the official changes <ArrowUpRight size={17} /></b>
      </Link>
    )}</div>
  </section>;
}
