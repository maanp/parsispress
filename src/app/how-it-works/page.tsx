import type { Metadata } from "next";
import { canonical } from "@/lib/metadata";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Compass, ClipboardList, Users } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { ScoreBreakdown } from "@/components/OpportunityScore";
import { opportunityBySlug } from "@/lib/opportunities";
import { opportunities } from "@/lib/opportunities";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The ParsisPress method: how signals become opportunities, how opportunities are evaluated across six dimensions, and how a founder validates one in two weeks.",
  alternates: { canonical: canonical("how-it-works") },
};

const dimensions = [
  {
    name: "Problem intensity",
    question: "How much does this cost the customer today?",
    low: "Mild annoyance, easily tolerated",
    high: "Recurring, quantified loss people work around",
  },
  {
    name: "Frequency",
    question: "How often does the problem occur?",
    low: "A few times a year",
    high: "Every shift, every order, every claim",
  },
  {
    name: "Willingness to pay",
    question: "Is there budget already going to workarounds?",
    low: "No existing spend, no obvious owner",
    high: "Money already spent on people, tools, or penalties",
  },
  {
    name: "Market accessibility",
    question: "Can you name and reach the first hundred buyers?",
    low: "Concentrated market behind procurement",
    high: "Reachable list, direct conversation possible",
  },
  {
    name: "Competitive saturation",
    question: "How many credible alternatives already exist?",
    low: "Few options, no obvious category leader",
    high: "Crowded, well-funded, already solved",
    inverted: true,
  },
  {
    name: "Technical feasibility",
    question: "Can this be built reliably with what exists today?",
    low: "Needs research, or depends on unavailable data",
    high: "Uses proven capability in a new workflow",
  },
];

const workedExample = opportunityBySlug.get("export-compliance-copilot");

const stages = [
  {
    icon: Compass,
    label: "Discovery",
    goal: "Notice something that changed",
    output: "A signal with a named source",
    detail:
      "Signals come from three places: a capability or cost threshold being crossed, a new obligation to produce a record, and a workflow people have stopped questioning. Each is recorded with a source and a cheap test that could disprove it.",
  },
  {
    icon: BrainCircuit,
    label: "Evaluation",
    goal: "Decide whether it is worth a fortnight",
    output: "A scored read with its assumptions exposed",
    detail:
      "Six dimensions, each with a stated reason for its value. The output is deliberately arguable: a founder should be able to disagree with a dimension and still know what to do next.",
  },
  {
    icon: ClipboardList,
    label: "Brief",
    goal: "Make the work concrete",
    output: "A brief with MVP scope and a validation plan",
    detail:
      "The brief converts the evaluation into scope: what the first version does, what it refuses to do, which assumptions to attack first, and the two-week plan that could end the idea.",
  },
  {
    icon: Users,
    label: "Validation",
    goal: "Find out with a person, not a model",
    output: "Evidence, or a decision to drop it",
    detail:
      "The founder runs the plan. ParsisPress structures the questions and records the outcome; it does not perform interviews, and it does not claim to know whether a problem is real.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="border-b border-line bg-ivory">
        {/* Intro */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10">
            <p className="label-editorial flex items-center gap-3 text-forest">
              <span aria-hidden className="h-px w-6 bg-forest/40" />
              Method
            </p>
            <h1 className="serif-display mt-5 max-w-3xl text-[clamp(2.1rem,5vw,3.2rem)] leading-[1.03] tracking-[-0.025em]">
              From signal to startup, without the parts that do not help.
            </h1>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-[1.7] text-muted">
              Most opportunity tooling optimises for volume: more ideas, faster
              generation, a bigger list. The problem with volume is that it
              returns you to the decision you started with. ParsisPress is built
              around a single question: is this worth a fortnight of your time?
            </p>

            <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
              {[
                { label: "Signals tracked", value: "3", note: "Capability, obligation, habit" },
                { label: "Evaluation dimensions", value: "6", note: "Each with stated reasoning" },
                { label: "Validation horizon", value: "2 weeks", note: "Before any code" },
              ].map((item) => (
                <div key={item.label} className="bg-ivory px-6 py-6">
                  <p className="label-editorial text-muted-2">{item.label}</p>
                  <p className="numeric serif-display mt-3 text-[2.1rem] leading-none">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[0.84rem] text-muted">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stages */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10">
            <SectionHeading
              eyebrow="The four stages"
              title="Each stage has an output you can disagree with."
              lede="A stage that produces only a document is a stage that cannot fail. Every output here is something a founder can reject, which is what makes the process useful rather than persuasive."
            />

            <ol className="mt-12 border-t border-line">
              {stages.map((stage, index) => (
                <li
                  key={stage.label}
                  className="grid grid-cols-1 gap-5 border-b border-line py-8 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="flex items-center gap-3 lg:col-span-3">
                    <span className="numeric label-editorial text-muted-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <stage.icon
                      className="h-[18px] w-[18px] text-forest"
                      aria-hidden
                    />
                    <h2 className="serif-display text-[1.35rem] tracking-[-0.015em]">
                      {stage.label}
                    </h2>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="label-editorial text-muted-2">Goal</p>
                    <p className="mt-2 text-[0.96rem] text-ink">{stage.goal}</p>
                    <p className="label-editorial mt-4 text-muted-2">Output</p>
                    <p className="mt-2 text-[0.96rem] text-ink">{stage.output}</p>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-[0.93rem] leading-[1.75] text-muted">
                      {stage.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Evaluation */}
        <section
          id="evaluation"
          className="scroll-mt-24 border-b border-line bg-paper"
        >
          <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Evaluation"
                  title="Six dimensions, no composite hiding place."
                  lede="A single score invites deference. Six named dimensions invite argument, which is the useful response to an early read."
                />

                <div className="mt-10 border-l-2 border-lime bg-ivory px-5 py-5">
                  <p className="text-[0.93rem] leading-[1.75] text-ink-70">
                    <span className="font-medium text-ink">
                      An honest caveat.
                    </span>{" "}
                    These are directional heuristics produced by a documented
                    rubric applied to illustrative descriptions. They are not
                    measured market research and carry no predictive claim about
                    whether a business will succeed. Their purpose is to force a
                    structured read before a founder spends real time.
                  </p>
                </div>

                {workedExample && (
                  <div className="mt-8 border border-line bg-ivory">
                    <div className="flex items-baseline justify-between gap-4 border-b border-line px-5 py-4">
                      <p className="label-editorial text-forest">Worked example</p>
                      <span className="numeric serif-display text-[1.6rem] leading-none">
                        {workedExample.score}
                      </span>
                    </div>
                    <div className="px-5 py-1">
                      <ScoreBreakdown
                        dimensions={workedExample.scoreDimensions}
                      />
                    </div>
                    <Link
                      href={`/ideas/${workedExample.slug}`}
                      className="label-editorial flex items-center justify-between gap-2 border-t border-line px-5 py-4 text-forest transition-colors hover:bg-ivory"
                    >
                      Read the full brief
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                )}
              </div>

              <div className="lg:col-span-7">
                <div className="border border-line bg-ivory">
                  {dimensions.map((dimension, index) => (
                    <div
                      key={dimension.name}
                      className={`px-6 py-5 ${
                        index !== dimensions.length - 1
                          ? "border-b border-line"
                          : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="serif-display text-[1.1rem] tracking-[-0.01em]">
                          {dimension.name}
                        </h3>
                        {dimension.inverted && (
                          <span className="label-editorial text-clay">
                            Lower is better
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-[0.92rem] leading-[1.65] text-ink-70">
                        {dimension.question}
                      </p>
                      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                        <div className="flex h-1.5 flex-1 gap-0.5" aria-hidden>
                          {Array.from({ length: 20 }).map((_, segment) => (
                            <span
                              key={segment}
                              className={`h-full flex-1 ${
                                segment < 4
                                  ? "bg-line-strong"
                                  : segment < 10
                                    ? "bg-forest/30"
                                    : segment < 16
                                      ? "bg-forest/60"
                                      : "bg-forest"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex gap-4 text-[0.76rem] leading-snug text-muted-2 sm:w-[46%]">
                          <span className="flex-1">{dimension.low}</span>
                          <span className="flex-1 text-right">
                            {dimension.high}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where AI fits */}
        <section className="border-b border-line bg-ivory">
          <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="label-editorial flex items-center gap-3 text-forest">
                  <span aria-hidden className="h-px w-6 bg-forest/40" />
                  Where AI fits
                </p>
                <h2 className="serif-display mt-5 text-[clamp(1.8rem,4vw,2.5rem)] leading-[1.07] tracking-[-0.02em]">
                  Assistance, not judgement.
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-8">
                <div className="bg-paper p-6">
                  <h3 className="label-editorial text-forest">
                    What the system does
                  </h3>
                  <ul className="mt-4 space-y-3 text-[0.92rem] leading-[1.7] text-ink-70">
                    {[
                      "Organise material from many sources into one structured view",
                      "Apply the same six dimensions consistently across ideas",
                      "Name the assumptions and unknowns a brief leaves unstated",
                      "Generate the questions that would disprove the thesis",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-forest/50"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-paper p-6">
                  <h3 className="label-editorial text-clay">
                    What it deliberately does not do
                  </h3>
                  <ul className="mt-4 space-y-3 text-[0.92rem] leading-[1.7] text-ink-70">
                    {[
                      "Claim to know whether a problem is real",
                      "Present generated hypotheses as verified evidence",
                      "Forecast revenue, success probability, or market size",
                      "Replace founder judgement, or the conversation with a customer",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-clay/45"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Validation */}
        <section id="validation" className="scroll-mt-24 border-b border-line bg-paper">
          <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Validation"
                  title="Two weeks, before any code."
                  lede="Every brief ends with a plan designed to be run quickly and to be capable of ending the project."
                />
                <p className="mt-6 text-[0.96rem] leading-[1.75] text-muted">
                  A plan that cannot fail is a plan that confirms whatever you
                  already believed. The plans here specify their own failure
                  conditions, and the most useful outcome is usually a decision
                  to stop.
                </p>
              </div>

              <ol className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-7">
                {[
                  {
                    day: "Days 1-3",
                    title: "Ten conversations",
                    body: "Ask about the last time it happened, not whether it would be useful. Recurring incident or no idea.",
                  },
                  {
                    day: "Days 4-5",
                    title: "Find the workaround",
                    body: "What do they do instead, and what does it cost in time, money, or risk? This reveals the budget.",
                  },
                  {
                    day: "Days 6-8",
                    title: "Deliver it manually",
                    body: "Do the work by hand for three of them. Manual delivery exposes the real workflow rather than the described one.",
                  },
                  {
                    day: "Days 9-14",
                    title: "Ask for payment",
                    body: "Real payment behaviour is the only willingness-to-pay evidence worth having.",
                  },
                ].map((step) => (
                  <li key={step.day} className="bg-ivory p-6">
                    <p className="label-editorial text-forest">{step.day}</p>
                    <h3 className="serif-display mt-3 text-[1.15rem] tracking-[-0.01em]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.9rem] leading-[1.7] text-muted">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest-dark">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-16 sm:px-7 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-20">
            <div>
              <h2 className="serif-display max-w-xl text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.06] tracking-[-0.02em] text-ivory">
                Apply the method to a real question.
              </h2>
              <p className="mt-4 max-w-lg text-[0.98rem] leading-[1.7] text-ivory/60">
                The explorer has {opportunities.length} sample briefs structured
                exactly this way. Pick one and run its validation plan this week.
              </p>
            </div>
            <Link
              href="/ideas"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-lime px-6 py-3.5 text-[0.92rem] font-medium text-forest-dark transition-colors hover:bg-lime-soft"
            >
              Open the explorer
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}