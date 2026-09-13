import { Metadata } from "next";
import CertificationFinder from "@/components/career/CertificationFinder";
import {
  certifications,
  certKey,
  experiences,
  providers,
  roles,
  type Experience,
} from "@/lib/certifications";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Certification Finder by Role & Experience",
  description:
    "Find current AWS, Microsoft, Google Cloud, Databricks, Snowflake, PMP and AI certifications. Compare career fit, skills and experience requirements.",
  alternates: { canonical: "https://www.globalcertsit.com/certifications" },
};
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const p = await searchParams;
  const s = (k: string) => (typeof p[k] === "string" ? (p[k] as string) : "");
  return (
    <CertificationFinder
      key={JSON.stringify(p)}
      today={new Date().toISOString().slice(0, 10)}
      initialRole={roles.some((r) => r.id === s("role")) ? s("role") : "all"}
      initialProvider={
        providers.some((v) => v.id === s("provider")) ? s("provider") : "all"
      }
      initialExperience={
        experiences.some((e) => e.id === s("experience"))
          ? (s("experience") as Experience)
          : "all"
      }
      initialAi={s("ai") === "true"}
      initialQuery={s("q").slice(0, 200)}
      initialSaved={s("saved")
        .split(",")
        .filter((k) => certifications.some((c) => certKey(c) === k))}
      initialShortlist={s("shortlist") === "true"}
    />
  );
}
