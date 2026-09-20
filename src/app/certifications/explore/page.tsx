import type { Metadata } from "next";
import GlobalCatalogue from "@/components/experience/GlobalCatalogue";
import { certifications, isAvailable, providerById } from "@/lib/certifications";
import { catalogueCategories, type CatalogueSort } from "@/lib/catalogue";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: "All Global Certifications | PMP, Cloud, Agile, Security & More",
  description: "Browse PMP, AWS, Azure, ServiceNow, ISTQB, ITIL, SAFe, Scrum, SAP and more in one catalogue. Search by exam or provider and enquire directly on WhatsApp.",
  alternates: { canonical: "https://www.globalcertsit.com/certifications/explore" },
};
export default async function Page({searchParams}: {searchParams: Promise<Record<string, string | string[] | undefined>>}) {
  const params = await searchParams;
  const value = (key: string) => typeof params[key] === "string" ? params[key] as string : "";
  const provider = providerById(value("provider")) ? value("provider") : "all";
  const category = catalogueCategories.find(c => c === value("category")) || "All fields";
  const sort: CatalogueSort = value("sort") === "name" ? "name" : value("sort") === "provider" ? "provider" : "popular";
  const initialFilters = {query: value("q"), provider, category, sort};
  return <GlobalCatalogue key={JSON.stringify(initialFilters)} items={certifications.filter(c => isAvailable(c))} initialFilters={initialFilters}/>;
}
