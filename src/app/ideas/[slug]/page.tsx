import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SavedIdeasProvider } from "@/components/SavedIdeasProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { IndustryBadge } from "@/components/IndustryBadge";
import { ScoreBreakdown } from "@/components/OpportunityScore";
import { SaveButton } from "@/components/SaveButton";
import { CopyButton } from "@/components/CopyButton";
import { DemoNotice } from "@/components/EmptyState";
import { OpportunityCard } from "@/components/OpportunityCard";
import { opportunities, opportunityBySlug } from "@/lib/opportunities";
import { industries } from "@/lib/industries";
import { siteName, siteUrl } from "@/lib/brand";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return opportunities.map((opportunity) => ({ slug: opportunity.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const opportunity = opportunityBySlug.get(slug);
  if (!opportunity) {
    return { title: "Opportunity not found" };
  }
  return {
    title: opportunity.name,
    description: opportunity.summary,
    alternates: { canonical: `/ideas/${opportunity.slug}` },
    openGraph: {
      title: `${opportunity.name} — ${siteName}`,
      description: opportunity.summary,
      url: `${siteUrl}/ideas/${opportunity.slug}`,
      type: "article",
      siteName,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${opportunity.name} — ${siteName}`,
      description: opportunity.summary,
      images: ["/opengraph-image"],
    },
  };
}

const summaryText = (slug: string) => {
  const o = opportunityBySlug.get(slug);
  if (!o) return "";
  return [
    `${o.name} — ${o.summary}`,
    ``,
    `Industry: ${o.industry}`,
    `Target customer: ${o.targetCustomer}`,
    `Customer profile: ${o.customerProfile}`,
    ``,
    `Problem: ${o.problem}`,
    `Why now: ${o.whyNow}`,
    `Proposed solution: ${o.solution}`,
    `Business model: ${o.businessModel}`,
    ``,
    `MVP scope: ${o.mvpScope.join("; ")}`,
    ``,
    `Key assumptions: ${o.keyAssumptions.join("; ")}`,
    `Risks: ${o.risks.join("; ")}`,
    ``,
    `Validation plan: ${o.validationPlan.join("; ")}`,
    `Customer questions: ${o.interviewQuestions.join(" | ")}`,
    `First experiments: ${o.firstExperiments.join("; ")}`,
    ``,
    `Illustrative opportunity score: ${o.score}/100 — directional heuristic, not a prediction of success.`,
  ].join("\n");
};

export default async function OpportunityPage({ params }: Params) {
  const { slug } = await params;
  const opportunity = opportunityBySlug.get(slug);
  if (!opportunity) notFound();

  const industry = industries.find((i) => i.slug === opportunity.industry);
  const related = opportunities
    .filter(
      (item) =>
        item.slug !== opportunity.slug && item.industry === opportunity.industry,
    )
    .slice(0, 3);

  const metadata = [
    { label: "Build type", value: opportunity.buildType },
    { label: "Time to first validation", value: opportunity.timeToFirstValidation },
    { label: "Confidence", value: opportunity.confidence },
    {
      label: "Added to dataset",
      value: new Date(`${opportunity.addedAt}T00:00:00Z`).toLocaleDateString(
        "en-US",
        { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" },
      ),
    },
  ];

  return (
    <SavedIdeasProvider>
      <SiteHeader />
      <main id="main" className="border-b border-line bg-ivory">
        {/* Masthead */}
        <div className="border-b border-line bg-paper">
          <div className="mx-auto max-w-[1240px] px-5 pt-10 pb-10 sm:px-7 lg:px-10">
            <Link
              href="/ideas"
              className="label-editorial inline-flex items-center gap-2 py-1.5 text-muted transition-colors hover:text-forest"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              All opportunities
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5">
                  <IndustryBadge slug={opportunity.industry} asLink={false} />
                  <span className="label-editorial text-muted-2">
                    Opportunity brief
                  </span>
                </div>
                <h1 className="serif-display mt-5 text-[clamp(2.2rem,5.4vw,3.5rem)] leading-[1.0] tracking-[-0.03em]">
                  {opportunity.name}
                </h1>
                <p className="mt-5 max-w-2xl text-[1.08rem] leading-[1.7] text-ink-70">
                  {opportunity.summary}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-2.5">
                  <SaveButton slug={opportunity.slug} name={opportunity.name} />
                  <CopyButton
                    text={summaryText(opportunity.slug)}
                    label="Copy summary"
                    copiedLabel="Summary copied"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-line bg-ivory p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="label-editorial text-muted-2">
                        Illustrative opportunity score
                      </p>
                      <p className="numeric serif-display mt-2 text-[3.2rem] leading-none tracking-[-0.03em]">
                        {opportunity.score}
                        <span className="text-[1.4rem] text-muted-2"> / 100</span>
                      </p>
                    </div>
                    <p className="label-editorial text-clay">Demo heuristic</p>
                  </div>
                  <div className="mt-4 h-[3px] w-full bg-line">
                    <div
                      className="h-full bg-forest"
                      style={{ width: `${opportunity.score}%` }}
                    />
                  </div>
                  <p className="mt-4 text-[0.88rem] leading-relaxed text-muted">
                    {opportunity.scoreSummary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-7 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            <article className="lg:col-span-8">
              <Block title="The problem">{opportunity.problem}</Block>

              <Block title="Executive summary">
                <p>
                  {opportunity.name} is a{" "}
                  {opportunity.buildType.toLowerCase()} concept for{" "}
                  {opportunity.targetCustomer.toLowerCase()}. It addresses a
                  problem that recurs often enough to be felt in operating cost
                  rather than noticed as an inconvenience, and it becomes
                  buildable because recent capability changes made the underlying
                  work tractable.
                </p>
                <p>
                  The first version would be deliberately narrow — one workflow,
                  one countable unit — with{" "}
                  {opportunity.timeToFirstValidation} of work needed before any
                  code is written to establish whether the problem is real. The
                  illustrative score of {opportunity.score}/100 reflects{" "}
                  {opportunity.confidence.toLowerCase()} confidence in the read,
                  with the reasoning broken out dimension by dimension below.
                </p>
              </Block>

              <Block title="Target customer profile">
                <p>{opportunity.customerProfile}</p>
              </Block>

              <Block title="Existing alternatives and competitor categories">
                <ul className="space-y-2">
                  {opportunity.alternatives.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[11px] h-px w-4 shrink-0 bg-line-strong"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Most of these are adjacent rather than direct. That usually
                  means the budget exists, the buyer tolerates the current state,
                  and the real competitor is doing nothing at all.
                </p>
              </Block>

              <Block title="Why the opportunity might matter now">
                <p>{opportunity.whyNow}</p>
              </Block>

              <Block title="Proposed solution">
                <p>{opportunity.solution}</p>
              </Block>

              <Block title="Potential business model">
                <p>{opportunity.businessModel}</p>
              </Block>

              <Block title="MVP scope" items={opportunity.mvpScope}>
                <p>
                  The scope above is deliberately one workflow with a countable
                  unit. Anything broader belongs in the second version, if the
                  first version works.
                </p>
              </Block>

              <Block title="Key assumptions" items={opportunity.keyAssumptions}>
                <p>
                  Each of these is a claim that could turn out to be false. They
                  are listed so a founder knows what to attack first.
                </p>
              </Block>

              <Block title="Risks and unknowns" items={opportunity.risks} />

              <Block title="Validation plan" items={opportunity.validationPlan}>
                <p>
                  Run this before writing code. If the interviews come back
                  without a recurring incident, the honest outcome is to drop the
                  idea rather than reframe it.
                </p>
              </Block>

              <Block title="Three customer interview questions">
                <ol className="space-y-4">
                  {opportunity.interviewQuestions.map((question, index) => (
                    <li key={question} className="flex gap-3.5">
                      <span className="numeric serif-display shrink-0 text-[1.2rem] leading-none text-forest/40">
                        {index + 1}
                      </span>
                      <span className="italic text-ink">{question}</span>
                    </li>
                  ))}
                </ol>
              </Block>

              <Block title="Suggested first experiments" items={opportunity.firstExperiments} />

              <section className="mt-10 border-t border-line pt-8">
                <h2 className="label-editorial text-forest">
                  Illustrative score breakdown
                </h2>
                <div className="mt-4">
                  <ScoreBreakdown dimensions={opportunity.scoreDimensions} />
                </div>
                <p className="mt-5 text-[0.88rem] leading-[1.7] text-muted">
                  {opportunity.scoreSummary} These scores are directional
                  heuristics derived from a documented rubric — they are not
                  market research, not a prediction of revenue, and not evidence
                  that this problem exists at the scale described.{" "}
                  <Link href="/how-it-works#evaluation" className="inline-block underline-link">
                    See the evaluation framework
                  </Link>
                  .
                </p>
              </section>

              <div className="mt-10 border-t border-line pt-6">
                <DemoNotice>
                  Generated hypothesis content for demonstration purposes. Every
                  claim on this page is an illustrative hypothesis to be tested,
                  not a verified finding. No business described here exists, and
                  no customer, partner, or revenue figure is claimed.
                </DemoNotice>
              </div>
            </article>

            {/* Rail */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="border border-line bg-paper">
                  <h2 className="label-editorial border-b border-line px-5 py-3.5 text-muted-2">
                    Brief metadata
                  </h2>
                  <dl className="divide-y divide-line">
                    {metadata.map((item) => (
                      <div key={item.label} className="px-5 py-3.5">
                        <dt className="label-editorial text-muted-2">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-[0.9rem] text-ink">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                    <div className="px-5 py-3.5">
                      <dt className="label-editorial text-muted-2">Industry</dt>
                      <dd className="mt-1.5">
                        <IndustryBadge slug={opportunity.industry} />
                      </dd>
                    </div>
                    {industry && (
                      <div className="px-5 py-3.5">
                        <dt className="label-editorial text-muted-2">
                          Category thesis
                        </dt>
                        <dd className="mt-1 text-[0.86rem] leading-relaxed text-muted">
                          {industry.thesis}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="mt-5 border border-line bg-paper p-5">
                  <h2 className="label-editorial text-muted-2">
                    Emerging signals
                  </h2>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {opportunity.signals.map((signal) => (
                      <li
                        key={signal}
                        className="inline-flex items-center gap-1.5 rounded-xs bg-ivory px-2 py-1 text-[0.72rem] text-ink-70"
                      >
                        <span
                          aria-hidden
                          className="h-1 w-1 rounded-full bg-forest/50"
                        />
                        {signal}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[0.78rem] leading-relaxed text-muted-2">
                    Signal labels are illustrative categories, not live market
                    data.
                  </p>
                </div>

                <div className="mt-5 border border-line bg-paper p-5">
                  <h2 className="label-editorial text-muted-2">Next steps</h2>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Run the first two interview questions",
                      "Save this idea if it survives the conversation",
                      "Copy the summary into your own notes",
                      "Re-read the key assumptions before committing time",
                    ].map((step, index) => (
                      <li
                        key={step}
                        className="flex gap-3 text-[0.86rem] leading-relaxed text-ink-70"
                      >
                        <span className="numeric label-editorial pt-[3px] text-muted-2">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/ideas"
                    className="label-editorial mt-4 inline-flex items-center gap-1.5 py-1.5 text-forest transition-colors hover:text-forest-deep"
                  >
                    Back to the explorer
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-line bg-paper">
            <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-7 lg:px-10">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="label-editorial text-forest">Same category</p>
                  <h2 className="serif-display mt-3 text-[1.7rem] tracking-[-0.015em]">
                    Other {industry?.name} opportunities
                  </h2>
                </div>
                <Link
                  href={`/ideas?industry=${opportunity.industry}`}
                  className="label-editorial inline-block shrink-0 py-1.5 text-muted transition-colors hover:text-forest"
                >
                  View category
                </Link>
              </div>
              <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
                {related.map((item, index) => (
                  <div key={item.slug} className="bg-paper">
                    <OpportunityCard opportunity={item} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </SavedIdeasProvider>
  );
}

function Block({
  title,
  children,
  items,
}: {
  title: string;
  children?: React.ReactNode;
  items?: string[];
}) {
  return (
    <section className="mt-9 first:mt-0">
      <h2 className="label-editorial border-b border-line pb-2.5 text-forest">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[0.96rem] leading-[1.75] text-ink-70">
        {items && (
          <ol className="space-y-3">
            {items.map((item, index) => (
              <li key={item} className="flex gap-3.5">
                <span className="numeric label-editorial shrink-0 pt-[5px] text-muted-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        )}
        {children}
      </div>
    </section>
  );
}