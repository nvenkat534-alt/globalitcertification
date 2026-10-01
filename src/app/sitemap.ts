import { MetadataRoute } from "next";
import {
  certifications,
  certUrl,
  isAvailable,
  providers,
} from "@/lib/certifications";
import { routeLastModified, SITE_ORIGIN } from "@/lib/certification-discovery";
import { careerPaths } from "@/lib/career-paths";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_ORIGIN;
  return [
    {
      url: base,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/certification-updates`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...[
      "/careers",
      "/careers/jobs",
      "/careers/resume",
      "/careers/resume-builder",
      ...careerPaths.map(p => `/careers/${p.id}`),
      "/certifications",
      "/certifications/explore",
      "/ai-certifications",
      "/contact",
      "/training",
      "/faq",
      "/privacy",
      "/terms",
    ].map((path) => ({
      url: `${base}${path}`,
      ...(routeLastModified(path) ? { lastModified: routeLastModified(path) } : {}),
      changeFrequency: "weekly" as const,
      priority: path.includes("certifications") ? 0.9 : 0.5,
    })),
    ...providers.map((p) => ({
      url: `${base}/certifications/${p.id}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...certifications
      .filter((c) => isAvailable(c))
      .map((c) => ({
        url: `${base}${certUrl(c)}`,
        ...(routeLastModified(certUrl(c)) ? { lastModified: routeLastModified(certUrl(c)) } : {}),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];
}
