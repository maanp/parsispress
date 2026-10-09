"use client";

import Link from "next/link";
import { Activity, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { opportunities } from "@/lib/opportunities";
import { industries } from "@/lib/industries";
import { IndustryBadge } from "./IndustryBadge";
import { SaveButton } from "./SaveButton";

const feed = opportunities
  .slice()
  .sort((a, b) => b.score - a.score)
  .slice(0, 5);

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

/**
 * Static, non-interactive product surface used in the hero. Every element is a
 * real link or a real control so nothing here is decorative-only.
 */
export function OpportunityFeedPreview() {
  return (
    <div className="overflow-hidden border border-line-strong bg-paper shadow-raise">
      <div className="flex items-center justify-between gap-4 border-b border-line bg-ivory px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
          </span>
          <h2 className="label-editorial text-muted">Opportunity feed</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="label-editorial hidden text-muted-2 sm:inline">
            Illustrative demo data
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-xs border border-line-strong px-2 py-1 text-[0.68rem] text-muted">
            <Activity className="h-3 w-3" aria-hidden />
            <span className="numeric">5 new</span>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2 overflow-hidden">
          {industries.slice(0, 2).map((industry) => (
            <IndustryBadge key={industry.slug} slug={industry.slug} asLink={false} />
          ))}
          <span className="hidden shrink-0 min-[400px]:inline-flex">
            <IndustryBadge slug={industries[2].slug} asLink={false} />
          </span>
          <span className="hidden shrink-0 xl:inline-flex">
            <IndustryBadge slug={industries[3].slug} asLink={false} />
          </span>
        </div>
        <span className="label-editorial hidden shrink-0 items-center gap-1.5 text-muted-2 xl:inline-flex">
          <SlidersHorizontal className="h-3 w-3" aria-hidden />
          Sorted by score
        </span>
      </div>

      <ul className="divide-y divide-line">
        {feed.map((opportunity, index) => (
          <li
            key={opportunity.slug}
            className="group relative px-4 py-4 transition-colors hover:bg-ivory"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="numeric label-editorial hidden pt-1 text-muted-2 sm:block">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <IndustryBadge slug={opportunity.industry} asLink={false} />
                  <span className="label-editorial text-muted-2">
                    {formatDate(opportunity.addedAt)}
                  </span>
                </div>
                <h3 className="serif-display mt-2 text-[1.08rem] leading-snug tracking-[-0.01em]">
                  <Link
                    href={`/ideas/${opportunity.slug}`}
                    className="before:absolute before:inset-0"
                  >
                    {opportunity.name}
                  </Link>
                </h3>
                <p className="mt-1.5 line-clamp-2 text-[0.85rem] leading-relaxed text-muted">
                  {opportunity.problem}
                </p>
                <p className="mt-1.5 text-[0.78rem] leading-relaxed text-ink-70">
                  <span className="label-editorial text-muted-2">For </span>
                  {opportunity.targetCustomer}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  {opportunity.signals.slice(0, 3).map((signal) => (
                    <span
                      key={signal}
                      className="inline-flex items-center gap-1.5 rounded-xs bg-ivory px-1.5 py-1 text-[0.65rem] tracking-[0.04em] text-muted"
                    >
                      <span
                        aria-hidden
                        className="h-1 w-1 rounded-full bg-forest/50"
                      />
                      {signal}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-end gap-2">
                <span
                  className="numeric flex h-10 w-12 items-center justify-center border border-line-strong bg-ivory text-[0.95rem] font-medium"
                  title={`Illustrative opportunity score: ${opportunity.score}/100`}
                >
                  {opportunity.score}
                </span>
                <div className="relative z-10">
                  <SaveButton
                    slug={opportunity.slug}
                    name={opportunity.name}
                    variant="icon"
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3 border-t border-line bg-ivory px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.72rem] leading-snug text-muted-2">
          Scores are directional heuristics, not predictions.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={`/ideas/${feed[0].slug}`}
            className="label-editorial relative z-10 inline-flex items-center gap-1.5 py-1.5 text-ink-70 transition-colors hover:text-forest"
          >
            Read top brief
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <Link
            href="/ideas"
            className="label-editorial relative z-10 inline-flex items-center gap-1.5 rounded-sm bg-forest px-3 py-2 text-ivory transition-colors hover:bg-forest-deep"
          >
            Open explorer
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}