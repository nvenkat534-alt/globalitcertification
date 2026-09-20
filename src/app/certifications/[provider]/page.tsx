import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import CertificationFinder from "@/components/career/CertificationFinder";
import { providerById } from "@/lib/certifications";
export const revalidate = 3600;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ provider: string }>;
}): Promise<Metadata> {
  const { provider } = await params;
  const p = providerById(provider);
  return {
    title: p ? `${p.name} Certification Finder` : "Certification Finder",
    description: p?.description,
    alternates: {
      canonical: `https://www.globalcertsit.com/certifications/${provider}`,
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ provider: string }>;
}) {
  const { provider } = await params;
  if (provider === "itil" || provider === "prince2") redirect("/certifications/peoplecert");
  if (provider === "scrum") redirect("/certifications/explore?q=scrum");
  if (provider === "linux") redirect("/certifications/linux-foundation");
  if (provider === "claude") redirect("/certifications/anthropic");
  if (provider === "aigp") redirect("/certifications/iapp");
  if (!providerById(provider)) {
    if (
      [
        "comptia",
        "vmware",
        "ibm",
        "isaca-fortinet",
        "palo-alto",
        "itil",
        "claude",
      ].includes(provider)
    )
      redirect("/certifications");
    notFound();
  }
  return (
    <CertificationFinder
      key={provider}
      initialProvider={provider}
      today={new Date().toISOString().slice(0, 10)}
      compact
    />
  );
}

// Render requested certification routes once, then reuse the cached page.
export function generateStaticParams() { return []; }
