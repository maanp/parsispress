import type { MetadataRoute } from "next";

export const dynamic = "force-static";

import { siteUrl } from "@/lib/brand";

/** Mirrors next.config.ts so project sites point at the prefixed sitemap. */
const base = `${siteUrl}${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}`.replace(
  /\/$/,
  "",
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: siteUrl,
  };
}