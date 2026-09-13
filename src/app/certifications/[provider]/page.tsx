import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import CertificationFinder from "@/components/career/CertificationFinder";
import { providerById } from "@/lib/certifications";
export const dynamic = "force-dynamic";
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
