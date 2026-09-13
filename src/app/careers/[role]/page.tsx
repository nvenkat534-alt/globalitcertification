import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { careerById, careerPaths } from "@/lib/career-paths";
import RoleRoadmap from "@/components/career/RoleRoadmap";
export function generateStaticParams() { return careerPaths.map(p => ({ role: p.id })); }
export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
  const path = careerById((await params).role);
  return path ? { title: `${path.title} Career Roadmap & Certifications`, description: path.tagline, alternates: { canonical: `/careers/${path.id}` } } : {};
}
export default async function Page({ params }: { params: Promise<{ role: string }> }) { const path = careerById((await params).role); if (!path) notFound(); return <RoleRoadmap path={path}/>; }
