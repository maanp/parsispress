import type { Metadata } from "next";

/**
 * Mirrors `basePath` in next.config.ts. Static hosts do no rewriting, so every
 * absolute URL in metadata has to carry the prefix itself when deploying to a
 * project site at /<repo>.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Canonical URL for a route, e.g. canonical("/ideas") -> ".../ideas/". */
export function canonical(route = ""): string {
  const path = route.replace(/^\/+|\/+$/g, "");
  return path ? `${basePath}/${path}/` : `${basePath || "/"}`;
}

/** Asset URL that respects the deployment base path. */
export function asset(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Builds per-page metadata with consistent canonical, Open Graph and Twitter
 * fields so no page has to reimplement them.
 */
export function pageMetadata({
  title,
  description,
  route = "",
  type = "website",
  ogImage,
}: {
  title: string;
  description: string;
  route?: string;
  type?: "website" | "article";
  ogImage?: string;
}): Metadata {
  const url = canonical(route);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      images: [ogImage ?? asset("/opengraph-image.png")],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage ?? asset("/opengraph-image.png")],
    },
  };
}