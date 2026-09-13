import type { Metadata } from "next";
import ResumeReviewer from "@/components/career/ResumeReviewer";
export const metadata: Metadata = { title: "Create & Edit Your Résumé | PDF & Word Downloads", description: "Build a résumé, edit an uploaded PDF or Word document, save an editable draft and check your skills against your next IT role.", alternates: { canonical: "/careers/resume-builder" } };
export default async function Page({ searchParams }: { searchParams: Promise<{ role?: string }> }) { const { role } = await searchParams; return <ResumeReviewer initialRole={role} initialMode="build"/>; }
