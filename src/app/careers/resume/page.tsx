import type { Metadata } from "next";
import ResumeReviewer from "@/components/career/ResumeReviewer";
export const metadata: Metadata = { title: "Résumé Check, Builder & Certification Recommendations", description: "Check, create and edit your résumé for a target IT role. Get skill and certification guidance, then download PDF or Word. Your résumé is processed in your browser.", alternates: { canonical: "/careers/resume" } };
export default async function Page({ searchParams }: { searchParams: Promise<{ role?: string }> }) { const { role } = await searchParams; return <ResumeReviewer initialRole={role}/>; }
