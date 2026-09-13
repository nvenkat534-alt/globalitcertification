import type { Metadata } from "next";
import ResumeReviewer from "@/components/career/ResumeReviewer";
export const metadata: Metadata = { title: "Résumé Review & Certification Recommendations", description: "Review your résumé for a target IT role. Get practical improvements, skill-gap prompts and relevant global certification options. PDF, DOCX and text supported.", alternates: { canonical: "/careers/resume" } };
export default async function Page({ searchParams }: { searchParams: Promise<{ role?: string }> }) { const { role } = await searchParams; return <ResumeReviewer initialRole={role}/>; }
