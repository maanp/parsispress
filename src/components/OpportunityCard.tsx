"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Opportunity } from "@/lib/opportunities";
import { industries } from "@/lib/industries";
import { IndustryBadge } from "./IndustryBadge";
import { ScorePip } from "./OpportunityScore";
import { SaveButton } from "./SaveButton";

export function OpportunityCard({
  opportunity,
  onOpen,
  index,
}: {
  opportunity: Opportunity;
  /** Omitted on static surfaces, where the whole card links to the brief. */
  onOpen?: (slug: string) => void;
  index: number;
}) {
  const industry = industries.find((i) => i.slug === opportunity.industry);

  return (
    <article className="group relative flex h-full flex-col border border-line bg-paper transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-raise">
      <div className="flex items-start justify-between gap-4 border-b border-line px-5 pt-5 pb-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="numeric label-editorial text-muted-2">
            {String(index + 1).padStart(2, "0")}
          </span>
          <IndustryBadge slug={opportunity.industry} asLink={false} />
        </div>
        <ScorePip score={opportunity.score} />
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        <h3 className="serif-display text-[1.28rem] leading-[1.18] tracking-[-0.015em] text-ink">
          <Link href={`/ideas/${opportunity.slug}`} className="before:absolute before:inset-0">
            {opportunity.name}
          </Link>
        </h3>
        <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-70">
          {opportunity.summary}
        </p>

        <dl className="mt-5 space-y-2.5 border-t border-line pt-4 text-[0.82rem]">
          <div className="flex gap-3">
            <dt className="label-editorial w-[92px] shrink-0 pt-[3px] text-muted-2">
              Customer
            </dt>
            <dd className="text-ink-70">{opportunity.targetCustomer}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="label-editorial w-[92px] shrink-0 pt-[3px] text-muted-2">
              Problem
            </dt>
            <dd className="text-ink-70">{opportunity.problem}</dd>
          </div>
        </dl>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {opportunity.signals.slice(0, 3).map((signal) => (
            <span
              key={signal}
              className="rounded-xs bg-ivory px-2 py-[3px] text-[0.68rem] tracking-[0.04em] text-muted"
            >
              {signal}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line px-5 py-3.5">
        <div className="flex items-center gap-2">
          {onOpen ? (
            <button
              type="button"
              onClick={() => onOpen(opportunity.slug)}
              className="label-editorial relative z-10 inline-flex items-center gap-1.5 py-1.5 text-forest transition-colors hover:text-forest-deep"
            >
              View opportunity
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </button>
          ) : (
            <span className="label-editorial relative z-10 inline-flex items-center gap-1.5 py-1.5 text-forest">
              View opportunity
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          )}
        </div>
        <div className="relative z-10">
          <SaveButton slug={opportunity.slug} name={opportunity.name} variant="quiet" />
        </div>
      </div>

      <p className="sr-only">
        Illustrative demo opportunity. Industry: {industry?.name}. Illustrative
        score {opportunity.score} out of 100.
      </p>
    </article>
  );
}

export function OpportunityListRow({
  opportunity,
  onOpen,
}: {
  opportunity: Opportunity;
  onOpen: (slug: string) => void;
}) {
  return (
    <article className="group relative grid gap-4 border-b border-line px-4 py-4 transition-colors hover:bg-paper sm:grid-cols-12 sm:items-center sm:px-5">
      <div className="sm:col-span-6">
        <div className="flex items-center gap-3">
          <IndustryBadge slug={opportunity.industry} asLink={false} />
        </div>
        <h3 className="serif-display mt-2 text-[1.14rem] leading-snug tracking-[-0.01em]">
          <Link
            href={`/ideas/${opportunity.slug}`}
            className="before:absolute before:inset-0"
          >
            {opportunity.name}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-2 text-[0.86rem] leading-relaxed text-muted">
          {opportunity.summary}
        </p>
      </div>

      <div className="sm:col-span-3">
        <p className="label-editorial text-muted-2">Customer</p>
        <p className="mt-1 line-clamp-2 text-[0.82rem] text-ink-70">
          {opportunity.targetCustomer}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 sm:col-span-3 sm:justify-end">
        <div className="flex items-center gap-2">
          <ScorePip score={opportunity.score} />
          <div className="relative z-10">
            <SaveButton
              slug={opportunity.slug}
              name={opportunity.name}
              variant="icon"
            />
          </div>
          <div className="relative z-10 sm:hidden">
            <button
              type="button"
              onClick={() => onOpen(opportunity.slug)}
              className="label-editorial text-forest"
            >
              Open
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}