/**
 * Single source of truth for brand colours used outside Tailwind utilities,
 * such as the generated Open Graph image.
 */
export const brand = {
  ivory: "#F7F5F0",
  paper: "#FBFAF7",
  ink: "#171916",
  muted: "#6B7068",
  muted2: "#8D918A",
  forest: "#244B3B",
  forestDark: "#131C17",
  lime: "#C8D84A",
  line: "#E5E2D9",
  clay: "#A4562F",
} as const;

/**
 * Canonical origin, used for canonical links, Open Graph URLs and the sitemap.
 * Override with NEXT_PUBLIC_SITE_URL when deploying to a different domain than
 * parsispress.com (for example a GitHub Pages URL).
 *
 * `||` rather than `??` on purpose: an unset GitHub Actions repository
 * variable arrives as an empty string, and `??` would pass "" straight
 * through, making `new URL(siteUrl)` throw ERR_INVALID_URL at build time.
 */
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = configuredSiteUrl || "https://parsispress.com";
export const siteName = "ParsisPress";
export const tagline = "Find the next big thing. Before everyone else.";
export const description =
  "ParsisPress turns emerging market signals, overlooked customer problems, and new technologies into startup opportunities worth exploring.";