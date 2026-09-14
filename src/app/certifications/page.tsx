import { Metadata } from "next";
import { Suspense } from "react";
import CertificationFinder from "@/components/career/CertificationFinder";
import FinderFromQuery from "@/components/career/FinderFromQuery";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Certification Finder by Role & Experience",
  description:
    "Find current AWS, Microsoft, Google Cloud, Databricks, Snowflake, PMP and AI certifications. Compare career fit, skills and experience requirements.",
  alternates: { canonical: "https://www.globalcertsit.com/certifications" },
};
export default function Page() {
  const today = new Date().toISOString().slice(0, 10);
  return <Suspense fallback={<CertificationFinder today={today}/>}>
    <FinderFromQuery today={today}/>
  </Suspense>;
}
