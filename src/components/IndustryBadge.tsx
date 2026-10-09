import Link from "next/link";
import { industries } from "@/lib/industries";

export function IndustryBadge({
  slug,
  asLink = true,
  tone = "light",
}: {
  slug: string;
  asLink?: boolean;
  tone?: "light" | "dark";
}) {
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return null;

  const className =
    tone === "dark"
      ? "border-ivory/20 text-ivory/75"
      : "border-line-strong text-ink-70";

  if (!asLink) {
    return (
      <span
        className={`inline-flex items-center rounded-xs border px-2 py-[3px] text-[0.68rem] font-medium tracking-[0.08em] uppercase ${className}`}
      >
        {industry.name}
      </span>
    );
  }

  return (
    <Link
      href={`/ideas?industry=${industry.slug}`}
      className={`inline-flex items-center rounded-xs border px-2 py-[3px] text-[0.68rem] font-medium tracking-[0.08em] uppercase transition-colors ${className} hover:border-forest hover:text-forest`}
    >
      {industry.name}
    </Link>
  );
}