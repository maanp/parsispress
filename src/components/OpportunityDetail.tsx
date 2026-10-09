"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { opportunityBySlug } from "@/lib/opportunities";
import { IndustryBadge } from "./IndustryBadge";
import { OpportunityScore, ScoreBreakdown } from "./OpportunityScore";
import { SaveButton } from "./SaveButton";
import { CopyButton } from "./CopyButton";
import { DemoNotice } from "./EmptyState";

const summaryFor = (slug: string) => {
  const o = opportunityBySlug.get(slug);
  if (!o) return "";
  return [
    `${o.name} — ${o.summary}`,
    ``,
    `Industry: ${o.industry}`,
    `Target customer: ${o.targetCustomer}`,
    `Problem: ${o.problem}`,
    `Why now: ${o.whyNow}`,
    ``,
    `MVP scope: ${o.mvpScope.join("; ")}`,
    `Validation plan: ${o.validationPlan.join("; ")}`,
    ``,
    `Illustrative opportunity score: ${o.score}/100 (demo heuristic, not a prediction of success).`,
  ].join("\n");
};

export function OpportunityDetail({
  slug,
  onClose,
}: {
  slug: string;
  onClose: () => void;
}) {
  const opportunity = opportunityBySlug.get(slug);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const raf = requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  if (!opportunity) {
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/40 p-6">
        <div className="max-w-sm border border-line bg-ivory p-6 text-center">
          <p className="serif-display text-lg">Opportunity unavailable</p>
          <p className="mt-2 text-[0.88rem] text-muted">
            That opportunity could not be found in the demo dataset.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-5 rounded-sm bg-forest px-4 py-2 text-[0.85rem] text-ivory"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      <button
        type="button"
        aria-label="Close opportunity detail"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/35 backdrop-blur-[2px]"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${opportunity.name} — opportunity brief`}
        className="relative flex h-full w-full max-w-[680px] flex-col border-l border-line bg-ivory shadow-drawer"
      >
        <header className="flex items-start justify-between gap-4 border-b border-line bg-paper px-5 py-4 sm:px-8">
          <div className="flex min-w-0 flex-col gap-2">
            <IndustryBadge slug={opportunity.industry} asLink={false} />
            <p className="label-editorial text-muted-2">
              Opportunity brief · Illustrative demo data
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-line-strong text-ink transition-colors hover:border-forest hover:text-forest"
          >
            <span className="sr-only">Close opportunity detail</span>
            <X className="h-4 w-4" aria-hidden />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-7 sm:px-8">
          <h2 className="serif-display text-[1.85rem] leading-[1.1] tracking-[-0.02em] sm:text-[2.1rem]">
            {opportunity.name}
          </h2>
          <p className="mt-3 text-[1rem] leading-relaxed text-ink-70">
            {opportunity.summary}
          </p>

          <div className="mt-6 border-y border-line py-5">
            <OpportunityScore
              score={opportunity.score}
              summary={opportunity.scoreSummary}
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <SaveButton slug={opportunity.slug} name={opportunity.name} />
            <CopyButton
              text={summaryFor(opportunity.slug)}
              label="Copy summary"
              copiedLabel="Summary copied"
            />
            <Link
              href={`/ideas/${opportunity.slug}`}
              onClick={onClose}
              className="label-editorial inline-flex items-center gap-1.5 px-1 py-2 text-forest transition-colors hover:text-forest-deep"
            >
              Full research view
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {[
              { label: "Build type", value: opportunity.buildType },
              { label: "Validation", value: opportunity.timeToFirstValidation },
              { label: "Confidence", value: opportunity.confidence },
              {
                        label: "Added",
                        value: new Date(`${opportunity.addedAt}T00:00:00Z`).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            timeZone: "UTC",
                          },
                        ),
                      },
            ].map((item) => (
              <div key={item.label} className="bg-paper px-4 py-3">
                <dt className="label-editorial text-muted-2">{item.label}</dt>
                <dd className="numeric mt-1.5 text-[0.88rem] text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <Section title="The problem">{opportunity.problem}</Section>

          <Section title="Target customer">
            <p>{opportunity.customerProfile}</p>
          </Section>

          <Section title="Why it might matter now">{opportunity.whyNow}</Section>

          <Section title="Proposed solution">{opportunity.solution}</Section>

          <Section title="Existing alternatives">
            <ul className="space-y-1.5">
              {opportunity.alternatives.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden className="mt-[9px] h-px w-3 shrink-0 bg-line-strong" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Potential business model">{opportunity.businessModel}</Section>

          <Section title="MVP scope">
            <NumberedList items={opportunity.mvpScope} />
          </Section>

          <Section title="Key assumptions">
            <NumberedList items={opportunity.keyAssumptions} />
          </Section>

          <Section title="Risks and unknowns">
            <NumberedList items={opportunity.risks} />
          </Section>

          <Section title="Validation plan">
            <NumberedList items={opportunity.validationPlan} />
          </Section>

          <Section title="Three customer questions">
            <NumberedList items={opportunity.interviewQuestions} />
          </Section>

          <Section title="Suggested first experiments">
            <NumberedList items={opportunity.firstExperiments} />
          </Section>

          <Section title="Illustrative score breakdown">
            <ScoreBreakdown dimensions={opportunity.scoreDimensions} />
            <p className="mt-4 text-[0.82rem] leading-relaxed text-muted">
              {opportunity.scoreSummary} Scores are directional heuristics built
              from the framework in{" "}
              <Link href="/how-it-works#evaluation" className="inline-block underline-link">
                how evaluation works
              </Link>
              . They are not predictions of commercial success.
            </p>
          </Section>

          <div className="mt-8 border-t border-line pt-5">
            <DemoNotice>
              Generated hypothesis content for demonstration. Nothing in this
              brief is verified market research, and no figure here should be
              treated as a validated finding.
            </DemoNotice>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 border-t border-line pt-5">
      <h3 className="label-editorial text-forest">{title}</h3>
      <div className="mt-3 text-[0.93rem] leading-[1.7] text-ink-70">
        {children}
      </div>
    </section>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2.5">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3">
          <span className="numeric label-editorial shrink-0 pt-[3px] text-muted-2">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}