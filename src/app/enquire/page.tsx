import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
export const metadata: Metadata = { title: "Request Certification Pricing & Support", description: "Request exam voucher pricing and certification support for your role, experience and exam timeline.", alternates: { canonical: "https://www.globalcertsit.com/enquire" } };
export default async function EnquirePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const selected = typeof params.certification === "string" ? params.certification.slice(0, 800) : "";
  const role = typeof params.role === "string" ? params.role.slice(0, 100) : "";
  return <main className="enquiry-page"><div className="enquiry-shell">
    <aside className="enquiry-intro"><Link className="enquiry-back" href="/certifications"><ArrowLeft size={15}/> Certification finder</Link><span className="gc-kicker">YOUR NEXT CERTIFICATION</span>
      <h1>A clear plan.<br/><span>A relevant next step.</span></h1><p>Tell us the certification you have in mind and when you want to take it. We’ll use those details to discuss pricing and available support.</p>
      <ul><li><Check size={18}/> Exam and voucher enquiries</li><li><Check size={18}/> Support matched to your requirements</li><li><Check size={18}/> Telugu and English assistance</li></ul>
      <div className="enquiry-note-card"><strong>Still comparing?</strong><p>Use the finder to check role fit, eligibility and exam details before requesting pricing.</p><Link href="/certifications">Explore certification options →</Link></div>
      <small>Paid, independent certification support. Availability and eligibility vary by exam. Provider trademarks belong to their respective owners.</small>
    </aside><div className="enquiry-card"><EnquiryForm initialCertification={selected} initialRole={role}/></div>
  </div></main>;
}
