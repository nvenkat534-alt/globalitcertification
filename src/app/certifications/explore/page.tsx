import type { Metadata } from "next";
import GlobalCatalogue from "@/components/experience/GlobalCatalogue";
import { certifications, isAvailable } from "@/lib/certifications";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "All Global Certifications | PMP, Cloud, Agile, Security & More",
  description: "Browse PMP, AWS, Azure, ServiceNow, ISTQB, ITIL, SAFe, Scrum, SAP and more in one catalogue. Search by exam or provider and enquire directly on WhatsApp.",
  alternates: { canonical: "https://www.globalcertsit.com/certifications/explore" },
};
export default function Page() {
  return <GlobalCatalogue items={certifications.filter(c => isAvailable(c))}/>;
}
