import type { Metadata } from "next";
import CareerHub from "@/components/career/CareerHub";
export const metadata: Metadata = { title: "Career Switch Hub | Role Plans, Résumé Review & Jobs", description: "Prepare for SAP SD, cloud, Salesforce, data and other IT roles. Explore role roadmaps, relevant global certifications, résumé feedback and daily job listings.", alternates: { canonical: "/careers" } };
export default function Page() { return <CareerHub/>; }
