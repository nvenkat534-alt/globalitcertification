"use client";
import { useSearchParams } from "next/navigation";
import CertificationFinder from "./CertificationFinder";
import { certifications, certKey, experiences, providers, roles, type Experience } from "@/lib/certifications";
// Query filters stay client-side so tracking URLs share a cached public page.
export default function FinderFromQuery({ today }: { today: string }) {
  const p = useSearchParams();
  const s = (key: string) => p.get(key) || "";
  const filterKey = ["role", "provider", "experience", "ai", "q", "saved", "shortlist"].map(s).join("|");
  return <CertificationFinder key={filterKey} today={today}
    initialRole={roles.some(r => r.id === s("role")) ? s("role") : "all"}
    initialProvider={providers.some(v => v.id === s("provider")) ? s("provider") : "all"}
    initialExperience={experiences.some(e => e.id === s("experience")) ? s("experience") as Experience : "all"}
    initialAi={s("ai") === "true"} initialQuery={s("q").slice(0, 200)}
    initialSaved={s("saved").split(",").filter(k => certifications.some(c => certKey(c) === k))}
    initialShortlist={s("shortlist") === "true"}/>;
}
