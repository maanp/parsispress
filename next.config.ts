import type { NextConfig } from "next";

/**
 * GitHub Pages serves project sites from a sub-path (/<repo>/) while user and
 * organisation sites are served from the root. Set NEXT_PUBLIC_BASE_PATH=""
 * for a root deployment and to "/<repo>" for a project deployment.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /** Fully static output, required for GitHub Pages. */
  output: "export",

  /** GitHub Pages does not rewrite clean URLs, so emit directory indexes. */
  trailingSlash: true,

  /** Emit `out/` instead of `.next/`, matching the gh-pages workflow. */
  distDir: "out",

  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,

  images: {
    // Everything is local or already a static asset; no optimiser at runtime.
    unoptimized: true,
  },
};

export default nextConfig;