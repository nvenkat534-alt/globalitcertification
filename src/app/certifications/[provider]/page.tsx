import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import CertificationFinder from "@/components/career/CertificationFinder";
import { providerById } from "@/lib/certifications";
import { googleExamRoute } from "@/lib/google-exam-route";
// Purchased keyword routing depends on the incoming query string.
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
  searchParams,
}: {
  params: Promise<{ provider: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { provider } = await params;
  const examRoute = googleExamRoute(provider, await searchParams);
  if (examRoute) redirect(examRoute);
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
