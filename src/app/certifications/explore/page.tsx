import type { Metadata } from "next";
import GlobalCatalogue from "@/components/experience/GlobalCatalogue";
import { certifications, isAvailable } from "@/lib/certifications";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Explore All Global Certifications",
  description: "Browse global certifications from PMP and AWS to Microsoft, SAP, AI and cybersecurity. Read exam details, eligibility and request pricing.",
  alternates: { canonical: "https://www.globalcertsit.com/certifications/explore" },
};
export default function Page() {
  return <GlobalCatalogue items={certifications.filter(c => isAvailable(c))}/>;
}
