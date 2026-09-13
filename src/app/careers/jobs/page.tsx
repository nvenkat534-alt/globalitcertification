import type { Metadata } from "next";
import JobExplorer from "@/components/career/JobExplorer";
export const metadata: Metadata = { title: "Daily IT Job Listings & India Job Searches", description: "Explore daily remote and European job listings, filter by role and location, and search Indian job boards with direct application links.", alternates: { canonical: "/careers/jobs" } };
export default async function Page({ searchParams }: { searchParams: Promise<{ role?: string }> }) { const { role } = await searchParams; return <JobExplorer initialRole={role}/>; }
