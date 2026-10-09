import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Scale, Search, Users } from "lucide-react";
import { SavedIdeasProvider } from "@/components/SavedIdeasProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { IdeaExplorer } from "@/components/IdeaExplorer";
import { OpportunityFeedPreview } from "@/components/OpportunityFeedPreview";
import { ScoreBreakdown, ScoreProfile } from "@/components/OpportunityScore";
import { DemoNotice } from "@/components/EmptyState";
import { ResearchCard } from "@/components/ResearchCard";
import { opportunities, opportunityBySlug } from "@/lib/opportunities";
import { articles } from "@/lib/articles";
import { industries } from "@/lib/industries";

const featuredScore = opportunityBySlug.get("export-compliance-copilot");

const problems = [
  {
    icon: Search,
    title: "Discovering problems, not chasing hype",
    body: "Idea generators produce plausible-sounding concepts with no customer attached. The hard part is finding a specific person, in a specific recurring situation, who already spends money or time solving it.",
  },
  {
    icon: Users,
    title: "Finding underserved customers",
    body: "Most industries are served by software designed for buyers ten times their size. Finding the segment that was skipped requires reading workflows rather than market reports.",
  },
  {
    icon: Scale,
    title: "Turning research into a testable concept",
    body: "Signals, interviews, and market context arrive as separate threads. A founder needs them assembled into one hypothesis with a validation plan attached, not a folder of links.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discover signals",
    body: "Explore emerging technologies, industry shifts, and recurring customer pain points. Each signal is framed as a hypothesis with a named source and a cheap test that could disprove it.",
    detail: [
      "Technology and cost thresholds crossed",
      "New record-keeping obligations",
      "Workflows people have stopped questioning",
    ],
  },
  {
    number: "02",
    title: "Evaluate opportunities",
    body: "Assess problem severity, frequency, willingness to pay, customer accessibility, competitive alternatives, and technical feasibility — then state what would invalidate the read.",
    detail: [
      "Six-dimension directional scoring",
      "Explicit assumptions and unknowns",
      "Competitive alternative mapping",
    ],
  },
  {
    number: "03",
    title: "Build with conviction",
    body: "Turn a selected idea into a hypothesis, a two-week validation plan, customer interview questions, and a scoped first version you could put in front of someone.",
    detail: [
      "Two-week validation plans",
      "Three customer questions per brief",
      "MVP scope limited to one workflow",
    ],
  },
];

const principles = [
  {
    title: "Problems before products",
    body: "No opportunity is described before the customer and the moment are. If the workflow cannot be described precisely, it is not ready to evaluate.",
  },
  {
    title: "Evidence before hype",
    body: "Claims are labelled as verified, inferred, or hypothesised. A funding wave is treated as context, never as a reason.",
  },
  {
    title: "Specific customers before broad markets",
    body: "Every brief names a population you could list. Market size is deliberately absent, because it invites reasoning backwards from a desire to build.",
  },
  {
    title: "Validation before building",
    body: "The first deliverable of every opportunity is a plan that can end it, not a roadmap that defends it.",
  },
];

const audiences = [
  {
    label: "First-time founders",
    body: "You need a starting point that is specific enough to act on. The explorer gives you a named customer, a repeated workflow, and the questions to ask in week one.",
  },
  {
    label: "Technical founders",
    body: "You can build the thing. What you lack is a commercially meaningful problem. Briefs are structured so the technical constraint sits beside the buying decision.",
  },
  {
    label: "Indie hackers",
    body: "You are looking for a small, focused product that pays for itself. The framework rewards narrow scope, short validation cycles, and an obvious buyer.",
  },
  {
    label: "Operators",
    body: "You see the waste but not the product. Every brief separates what automation can remove from what still needs a person, which is usually the useful part.",
  },
  {
    label: "Investors and researchers",
    body: "You need to map where categories are forming without reading everything. The evaluation structure makes gaps and unknowns visible instead of hiding them behind a total.",
  },
];

export default function HomePage() {
  return (
    <SavedIdeasProvider>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <ProblemSection />
        <ApproachSection />
        <FeaturedSection />
        <ExplorerSection />
        <IntelligenceSection />
        <WhySection />
        <AudienceSection />
        <ResearchTeaser />
        <FinalCta />
      </main>
      <SiteFooter />
    </SavedIdeasProvider>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="rule-grid absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-ivory via-ivory/70 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1240px] px-5 pt-14 pb-16 sm:px-7 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <p className="label-editorial flex items-center gap-2.5 text-forest">
              <span aria-hidden className="h-px w-7 bg-forest/45" />
              AI-powered startup intelligence
            </p>

            <h1 className="serif-display mt-7 text-[clamp(2.6rem,6.4vw,4.35rem)] leading-[0.98] tracking-[-0.03em] text-ink">
              Find the next big thing.
              <span className="block text-forest">Before everyone else.</span>
            </h1>

            <p className="mt-7 max-w-lg text-[1.06rem] leading-[1.7] text-muted">
              ParsisPress turns emerging market signals, overlooked customer
              problems, and new technologies into startup opportunities worth
              exploring.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/ideas"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-forest px-6 py-3.5 text-[0.92rem] font-medium text-ivory transition-colors hover:bg-forest-deep"
              >
                Explore startup ideas
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-line-strong bg-paper px-6 py-3.5 text-[0.92rem] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
              >
                See how it works
              </Link>
            </div>

            <dl className="mt-12 max-w-lg border-t border-line">
              {[
                { value: "6", label: "Evaluation dimensions" },
                { value: "15", label: "Demo opportunities" },
                { value: "2wk", label: "Validation cycle" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-3 sm:flex sm:items-end"
                >
                  <dt className="label-editorial text-muted-2">{item.label}</dt>
                  <dd className="numeric serif-display text-[1.6rem] leading-none text-ink sm:text-[1.75rem]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="lg:pt-3">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="label-editorial text-muted-2">
                  Live surface · Sample dataset
                </p>
                <p className="label-editorial text-muted-2">
                  parsispress.com/ideas
                </p>
              </div>
              <OpportunityFeedPreview />
              <div className="mt-4">
                <DemoNotice>
                  Prototype interface. Scores and insights are illustrative demo
                  content, not verified market research.
                </DemoNotice>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="label-editorial flex items-center gap-3 text-forest">
              <span aria-hidden className="h-px w-6 bg-forest/40" />
              The problem
            </p>
            <h2 className="serif-display mt-5 text-[clamp(1.9rem,4.4vw,2.9rem)] leading-[1.06] tracking-[-0.02em]">
              The best opportunities rarely announce themselves.
            </h2>
            <p className="mt-5 text-[1.02rem] leading-[1.7] text-muted">
              They sit inside a workflow someone has stopped questioning. They
              belong to an industry too small for the vendors. They are obvious
              only to the person who does the work every week.
            </p>
            <p className="mt-4 text-[0.98rem] leading-[1.7] text-muted">
              Finding them requires reading how businesses actually operate —
              not summarising what already happened to be funded.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-t border-line">
              {problems.map((item, index) => (
                <li key={item.title} className="grid grid-cols-1 gap-4 py-7 sm:grid-cols-12 sm:gap-6">
                  <div className="sm:col-span-1">
                    <span className="numeric label-editorial text-muted-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="sm:col-span-7">
                    <h3 className="serif-display flex items-start gap-3 text-[1.32rem] leading-snug tracking-[-0.01em]">
                      <item.icon
                        className="mt-1 h-[18px] w-[18px] shrink-0 text-forest"
                        aria-hidden
                      />
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.94rem] leading-[1.7] text-muted">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="border-b border-line bg-ivory">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="The ParsisPress approach"
          title="From signal to startup."
          lede="A structured path from something that changed in the world to something you can test with a customer this month."
        />

        <ol className="mt-14 grid gap-px border border-line bg-line lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col bg-paper p-7 lg:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <span className="numeric serif-display text-[2.4rem] leading-none text-forest/25">
                  {step.number}
                </span>
                <span className="label-editorial text-muted-2">Step</span>
              </div>
              <h3 className="serif-display mt-6 text-[1.5rem] leading-snug tracking-[-0.015em]">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.93rem] leading-[1.7] text-muted">
                {step.body}
              </p>
              <ul className="mt-6 space-y-2 border-t border-line pt-5">
                {step.detail.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[0.85rem] leading-relaxed text-ink-70"
                  >
                    <span
                      aria-hidden
                      className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-forest/45"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-6 border border-line-strong bg-paper px-6 py-6 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
          <p className="max-w-2xl text-[0.95rem] leading-[1.7] text-ink-70">
            <span className="font-medium text-ink">Where AI helps.</span> AI
            organises and analyses large volumes of material — documents,
            workflows, alternatives, constraints — so a founder spends time on
            judgement rather than collection.{" "}
            <span className="font-medium text-ink">
              Where it does not.
            </span>{" "}
            It cannot tell you whether a problem is real. Only a customer can,
            and validating that remains the founder&rsquo;s responsibility.
          </p>
          <Link
            href="/how-it-works"
            className="label-editorial inline-flex shrink-0 items-center gap-1.5 py-1.5 text-forest transition-colors hover:text-forest-deep"
          >
            Read the method
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  const featured = opportunities.slice(0, 8);

  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Featured startup opportunities"
          title="Specific enough to investigate this week."
          lede="Every opportunity below is a sample brief from the demonstration dataset — a named customer, a repeated workflow, and the assumptions that would need testing."
          action={
            <Link
              href="/ideas"
              className="label-editorial inline-flex items-center gap-1.5 rounded-sm border border-line-strong bg-ivory px-4 py-2.5 text-ink transition-colors hover:border-forest hover:text-forest"
            >
              View all opportunities
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          }
        />

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
          {featured.map((opportunity, index) => (
            <div key={opportunity.slug} className="bg-paper">
              <FeaturedRow opportunity={opportunity} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-5">
          <DemoNotice>
            Sample opportunities and illustrative scores. None of these
            businesses exist, and no figure here is verified market research.
          </DemoNotice>
        </div>
      </div>
    </section>
  );
}

function FeaturedRow({
  opportunity,
  index,
}: {
  opportunity: typeof opportunities[number];
  index: number;
}) {
  return (
    <article className="group relative flex h-full flex-col p-6 transition-colors hover:bg-ivory sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="numeric label-editorial text-muted-2">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="numeric flex h-9 items-center gap-1.5 border border-line-strong px-2.5 text-[0.86rem] font-medium"
          title={`Illustrative opportunity score: ${opportunity.score}/100`}
        >
          {opportunity.score}
          <span className="label-editorial text-[0.55rem] text-muted-2">/100</span>
        </span>
      </div>

      <h3 className="serif-display mt-5 text-[1.35rem] leading-[1.2] tracking-[-0.015em]">
        <Link href={`/ideas/${opportunity.slug}`} className="before:absolute before:inset-0">
          {opportunity.name}
        </Link>
      </h3>
      <p className="mt-2.5 text-[0.9rem] leading-[1.65] text-ink-70">
        {opportunity.summary}
      </p>

      <dl className="mt-5 space-y-2 text-[0.83rem]">
        <div className="flex gap-3">
          <dt className="label-editorial w-[86px] shrink-0 pt-[3px] text-muted-2">
            Customer
          </dt>
          <dd className="text-ink-70">{opportunity.targetCustomer}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="label-editorial w-[86px] shrink-0 pt-[3px] text-muted-2">
            Problem
          </dt>
          <dd className="text-ink-70">{opportunity.problem}</dd>
        </div>
      </dl>

      <div className="mt-5 border-l-2 border-lime pl-3.5">
        <p className="label-editorial text-muted-2">Why now</p>
        <p className="mt-1.5 line-clamp-3 text-[0.85rem] leading-[1.65] text-muted">
          {opportunity.whyNow}
        </p>
      </div>

      <div className="mt-5">
        <p className="label-editorial text-muted-2">Evaluation profile</p>
        <ScoreProfile dimensions={opportunity.scoreDimensions} className="mt-3" />
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 pt-1">
        <span className="label-editorial inline-flex items-center gap-1.5 py-1.5 text-forest">
          View opportunity
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </span>
        <span className="label-editorial text-muted-2">{opportunity.industry.replace(/-/g, " ")}</span>
      </div>
    </article>
  );
}

function ExplorerSection() {
  return (
    <section className="border-b border-line bg-ivory" id="explorer">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Interactive idea explorer"
          title="Search the dataset the way you would search a market."
          lede="Filter by industry, search by keyword, sort by opportunity score or recency, and open any brief in a full research view. Saved ideas stay in this browser."
        />
        <div className="mt-12">
          <Suspense
            fallback={
              <div className="border border-line bg-paper p-8 text-center">
                <p className="label-editorial text-muted-2">
                  Loading explorer…
                </p>
              </div>
            }
          >
            <IdeaExplorer />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function IntelligenceSection() {
  const score = featuredScore?.score ?? 0;
  const dimensions = featuredScore?.scoreDimensions ?? [];

  return (
    <section className="relative border-b border-line bg-forest-dark">
      <div className="rule-grid-dark absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              tone="dark"
              eyebrow="Opportunity intelligence"
              title="Every score shows its working."
              lede="ParsisPress does not publish a single number without the dimensions behind it. A founder should be able to disagree with the assessment and still act on it."
            />
            <ul className="mt-10 space-y-3 border-t border-ivory/15 pt-6">
              {[
                "Scores are directional heuristics, not predictions of success.",
                "Each dimension states what it measures and why it scored that way.",
                "Assumptions and unknowns are listed separately from the read.",
                "No market-size figures are shown, because they invite lazy reasoning.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[0.9rem] leading-relaxed text-ivory/65">
                  <span aria-hidden className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-lime/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-ivory/15 bg-ivory/[0.03]">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ivory/15 px-6 py-4">
                <div>
                  <p className="label-editorial text-lime/70">
                    Worked example
                  </p>
                  <h3 className="serif-display mt-2 text-[1.35rem] text-ivory">
                    Export Compliance Copilot
                  </h3>
                </div>
                <span className="numeric flex items-baseline gap-1.5">
                  <span className="serif-display text-[2.6rem] leading-none text-ivory">
                    {score}
                  </span>
                  <span className="label-editorial text-ivory/45">/ 100</span>
                </span>
              </div>

              <div className="px-6 py-2">
                <ScoreBreakdown dimensions={dimensions} tone="dark" />
              </div>

              <div className="border-t border-ivory/15 px-6 py-5">
                <p className="text-[0.92rem] leading-[1.7] text-ivory/65">
                  {featuredScore?.scoreSummary}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    href={`/ideas/${featuredScore?.slug}`}
                    className="label-editorial inline-flex items-center gap-1.5 py-1.5 text-lime transition-colors hover:text-lime-soft"
                  >
                    Read the full brief
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                  <Link
                    href="/how-it-works#evaluation"
                    className="label-editorial inline-block py-1.5 text-ivory/55 transition-colors hover:text-ivory"
                  >
                    How scoring works
                  </Link>
                </div>
              </div>

              <div className="border-t border-ivory/15 px-6 py-4">
                <DemoNotice tone="dark">
                  Illustrative demo score produced by a documented rubric, not
                  measured market research. Real deployments would replace it
                  with evidence gathered per opportunity.
                </DemoNotice>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="label-editorial flex items-center gap-3 text-forest">
              <span aria-hidden className="h-px w-6 bg-forest/40" />
              Why ParsisPress
            </p>
            <h2 className="serif-display mt-5 text-[clamp(1.9rem,4.4vw,2.9rem)] leading-[1.06] tracking-[-0.02em]">
              Depth over volume.
            </h2>
            <p className="mt-5 text-[1rem] leading-[1.7] text-muted">
              A thousand generated ideas help nobody decide anything. The goal
              is a smaller number of opportunities examined closely enough that
              a founder knows which one to spend a fortnight on — and which to
              drop.
            </p>
            <p className="mt-4 text-[0.96rem] leading-[1.7] text-muted">
              ParsisPress is built to make better-informed decisions, not to
              promise that any particular idea will succeed. Nobody can promise
              that, and a product implying otherwise is selling optimism instead
              of analysis.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
              {principles.map((principle, index) => (
                <li key={principle.title} className="bg-ivory p-6">
                  <span className="numeric label-editorial text-muted-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="serif-display mt-4 text-[1.2rem] leading-snug tracking-[-0.01em]">
                    {principle.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9rem] leading-[1.65] text-muted">
                    {principle.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="border-b border-line bg-ivory">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Who it is for"
          title="Built for the moment before you build."
          lede="The same framework, read differently depending on where you are in the process."
        />

        <ul className="mt-12 border-t border-line">
          {audiences.map((audience, index) => (
            <li
              key={audience.label}
              className="grid grid-cols-1 gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-1">
                <span className="numeric label-editorial text-muted-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="serif-display text-[1.22rem] leading-snug tracking-[-0.01em] md:col-span-4">
                {audience.label}
              </h3>
              <p className="text-[0.93rem] leading-[1.7] text-muted md:col-span-7">
                {audience.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ResearchTeaser() {
  const latest = articles.slice(0, 3);

  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Research"
          title="Editorial notes from the discovery work."
          lede="Short pieces on finding opportunities, evaluating them honestly, and resisting the parts of the market that are loudest rather than most useful."
          action={
            <Link
              href="/research"
              className="label-editorial inline-flex items-center gap-1.5 rounded-sm border border-line-strong bg-ivory px-4 py-2.5 text-ink transition-colors hover:border-forest hover:text-forest"
            >
              All research
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          }
        />

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
          {latest.map((article, index) => (
            <div key={article.slug} className="bg-ivory">
              <ResearchCard article={article} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const categoryCount = industries.length;

  return (
    <section className="bg-forest-dark">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="label-editorial flex items-center gap-3 text-lime/70">
              <span aria-hidden className="h-px w-6 bg-lime/50" />
              Start here
            </p>
            <h2 className="serif-display mt-5 text-[clamp(2rem,5vw,3.3rem)] leading-[1.03] tracking-[-0.025em] text-ivory">
              Your next company starts with a better question.
            </h2>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.7] text-ivory/65">
              Browse the opportunity set, find a problem you recognise, and take
              the validation plan into a conversation this week. The value is in
              the first question you ask, not in the idea you leave with.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/ideas"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-lime px-6 py-3.5 text-[0.92rem] font-medium text-forest-dark transition-colors hover:bg-lime-soft"
              >
                Explore startup opportunities
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                href="/about"
                className="inline-flex flex-1 items-center justify-center rounded-sm border border-ivory/25 px-6 py-3.5 text-[0.92rem] font-medium text-ivory transition-colors hover:border-ivory/50"
              >
                About ParsisPress
              </Link>
            </div>
            <p className="mt-5 text-[0.76rem] leading-relaxed text-ivory/40">
              {categoryCount} industry categories, {opportunities.length} sample
              opportunity briefs, and a documented evaluation framework. All demo
              content — no real customers, partnerships, or traction are claimed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}