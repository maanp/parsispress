import type { MetadataRoute } from "next";
import { opportunities } from "@/lib/opportunities";
import { articles } from "@/lib/articles";
import { industries } from "@/lib/industries";
import { siteUrl } from "@/lib/brand";

/**
 * Required for `output: "export"` — sitemap and robots must be emitted as
 * static files at build time.
 */
export const dynamic = "force-static";

/**
 * Mirrors next.config.ts: a project site served from /<repo> must include the
 * prefix in every URL, or crawlers will 404 on every entry.
 */
const BASE = `${siteUrl}${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}`.replace(
  /\/$/,
  "",
);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/ideas", priority: 0.9, changeFrequency: "weekly" },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" },
    { path: "/research", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const base: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE}${route.path}`,
    lastModified: new Date("2026-09-30"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const opportunityRoutes: MetadataRoute.Sitemap = opportunities.map((item) => ({
    url: `${BASE}/ideas/${item.slug}`,
    lastModified: new Date(`${item.addedAt}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${BASE}/ideas?industry=${industry.slug}`,
    lastModified: new Date("2026-09-30"),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE}/research/${article.slug}`,
    lastModified: new Date(`${article.publishedAt}T00:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...base, ...opportunityRoutes, ...industryRoutes, ...articleRoutes];
}