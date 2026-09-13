import { MetadataRoute } from "next";
import {
  certifications,
  certUrl,
  isAvailable,
  providers,
} from "@/lib/certifications";
import { careerPaths } from "@/lib/career-paths";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.globalcertsit.com";
  return [
    {
      url: base,
      lastModified: "2026-09-13",
      changeFrequency: "weekly",
      priority: 1,
    },
    ...[
      "/careers",
      "/careers/jobs",
      "/careers/resume",
      "/careers/resume-builder",
      ...careerPaths.map(p => `/careers/${p.id}`),
      "/certifications",
      "/ai-certifications",
      "/contact",
      "/training",
      "/faq",
      "/privacy",
      "/terms",
    ].map((path) => ({
      url: `${base}${path}`,
      lastModified: "2026-09-13",
      changeFrequency: "weekly" as const,
      priority: path.includes("certifications") ? 0.9 : 0.5,
    })),
    ...providers.map((p) => ({
      url: `${base}/certifications/${p.id}`,
      lastModified: "2026-09-13",
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...certifications
      .filter((c) => isAvailable(c))
      .map((c) => ({
        url: `${base}${certUrl(c)}`,
        lastModified: "2026-09-13",
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];
}
