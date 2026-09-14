import type { Metadata } from "next";
import AiPathways from "@/components/career/AiPathways";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: "AI Certification Pathways for Every Career Stage",
  description:
    "Explore current AI, generative AI, agentic AI and AI business certifications across AWS, Microsoft, Google Cloud, Databricks and more.",
  alternates: { canonical: "https://www.globalcertsit.com/ai-certifications" },
};
export default function Page() {
  return <AiPathways />;
}
