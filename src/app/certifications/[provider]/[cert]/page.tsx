import type { Metadata } from "next";
import Link from "next/link";
import RegistrationSteps from "@/components/career/RegistrationSteps";
import { getRegistrationGuide } from "@/lib/registration";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowUpRight, Check, ExternalLink, MessageCircle } from "lucide-react";
import {
  certifications,
  certUrl,
  providerById,
  roles,
  isAvailable,
  whatsappUrl,
} from "@/lib/certifications";
export const dynamic = "force-dynamic";
const aliases: Record<string, string> = {
  "aws-cloud-practitioner": "cloud-practitioner",
  "aws-solutions-architect-associate": "solutions-architect-associate",
  "aws-solutions-architect-professional": "solutions-architect-professional",
  "aws-developer-associate": "developer-associate",
  "aws-sysops-administrator": "cloudops-engineer",
  "az-900": "azure-fundamentals",
  "az-104": "azure-administrator",
  "az-305": "azure-solutions-architect",
  "salesforce-administrator": "platform-administrator",
};
async function getCert(params: Promise<{ provider: string; cert: string }>) {
  const { provider, cert } = await params;
  return certifications.find((c) => c.provider === provider && c.id === cert);
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ provider: string; cert: string }>;
}): Promise<Metadata> {
  const c = await getCert(params);
  return c
    ? {
        title: c.name,
        description: c.why,
        alternates: { canonical: `https://www.globalcertsit.com${certUrl(c)}` },
      }
    : { title: "Certification not found" };
}
export default async function Page({
  params,
}: {
  params: Promise<{ provider: string; cert: string }>;
}) {
  const { provider, cert } = await params;
  if (aliases[cert])
    permanentRedirect(`/certifications/${provider}/${aliases[cert]}`);
  const c = await getCert(params);
  if (!c || !isAvailable(c)) notFound();
  const p = providerById(c.provider)!;
  const registration = getRegistrationGuide(c);
  const roleList = roles.filter((r) => c.roles[r.id]);
  const chat = whatsappUrl(
    `Hi Global Certs IT! I am interested in ${c.name} (${c.exam}). Please help me check whether it fits my experience and confirm the current exam version, eligibility and voucher availability.`,
  );
  return (
    <main className="cf">
      <section className="detail-hero">
        <div className="cf-shell">
          <div className="detail-breadcrumb">
            <Link href="/certifications">Certification finder</Link>
            <span>/</span>
            <Link href={`/certifications/${p.id}`}>{p.name}</Link>
            <span>/</span>
            <span>{c.exam}</span>
          </div>
          <div className="cert-tags">
            <span>{p.name}</span>
            <span>{c.level}</span>
            {c.ai && <span className="ai-tag">AI certification</span>}
            {c.access && <span className="access-tag">{c.access}</span>}
            {c.status && <span className="beta-tag">Bookable beta</span>}
            {c.fresh && <span className="new-tag">New / updated</span>}
          </div>
          <h1>{c.name}</h1>
          <p>{c.why}</p>
          <div className="detail-actions">
            <a
              className="cf-btn cf-btn-dark"
              href={chat}
              target="_blank"
              rel="noopener noreferrer"
            >
              Is this right for me? <MessageCircle size={17} />
            </a>
            <a
              className="cf-btn cf-btn-outline"
              href={c.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official credential details <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>
      <div className="cf-shell detail-grid">
        <div>
          {c.note && <p className="detail-note detail-section">{c.note}</p>}
          <section className="detail-section">
            <h2>What this credential focuses on</h2>
            <div className="detail-skills">
              {c.skills.map((s) => (
                <span key={s}>
                  <Check size={16} />
                  {s}
                </span>
              ))}
            </div>
          </section>
          <section className="detail-section">
            <h2>Who should consider it?</h2>
            <p>{c.readiness}</p>
            <div className="detail-role-links" style={{ marginTop: 17 }}>
              {roleList.map((r) => (
                <Link href={`/certifications?role=${r.id}`} key={r.id}>
                  {r.name} <span>↗</span>
                </Link>
              ))}
            </div>
          </section>
          <section className="detail-section">
            <h2>Eligibility comes first.</h2>
            <p>{c.eligibility}</p>
          </section>
          <section className="detail-section" id="registration">
            <h2>How to register</h2>
            <RegistrationSteps guide={registration} />
          </section>
          <section className="detail-section">
            <h2>Make it count in your career.</h2>
            <p>
              {roleList[0]?.project ||
                "Build a practical project using the skills covered by this credential and document your decisions and results."}
            </p>
            <p style={{ marginTop: 14 }}>
              The career guidance here is editorial. A certification can support
              your profile, but its value depends on your practical ability,
              your employer’s technology and the role you are targeting.
            </p>
          </section>
          <div className="detail-bottom">
            <Link
              href={`/certifications?role=${roleList[0]?.id || "all"}`}
              className="all-paths"
            >
              Compare other options for this role <ArrowUpRight size={16} />
            </Link>
            <p>
              Official exam source reviewed 13 September 2026. Confirm current
              details and availability with the provider before booking.
            </p>
          </div>
        </div>
        <aside className="detail-aside">
          <h2>Your exam at a glance</h2>
          <dl>
            <div>
              <dt>Provider</dt>
              <dd>{p.name}</dd>
            </div>
            <div>
              <dt>Exam / credential</dt>
              <dd>{c.exam}</dd>
            </div>
            <div>
              <dt>Level</dt>
              <dd>{c.level}</dd>
            </div>
            <div>
              <dt>Status at last review</dt>
              <dd>
                {c.access || (c.status === "Beta"
                  ? "Beta registration open"
                  : c.sourceKind === "Issuer badge" ? "Issuer badge verified; confirm live exam version" : "Listed on the official provider catalog")}
              </dd>
            </div>
            <div>
              <dt>Good preparation</dt>
              <dd>{c.readiness}</dd>
            </div>
          </dl>
          <p>
            Fees, appointment availability, languages and credential
            requirements vary. Get the current details before choosing a
            voucher.
          </p>
          <a
            className="cf-btn cf-btn-dark"
            href={chat}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask about this certification <ArrowUpRight size={16} />
          </a>
        </aside>
      </div>
    </main>
  );
}
