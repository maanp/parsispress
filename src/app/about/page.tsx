import type { Metadata } from "next";
import { canonical } from "@/lib/metadata";
import Link from "next/link";
import { ArrowRight, Compass, Layers, ShieldQuestion, Telescope } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { SuggestIdeaForm } from "@/components/SuggestIdeaForm";
import { DemoNotice } from "@/components/EmptyState";
import { industries } from "@/lib/industries";
import { opportunities } from "@/lib/opportunities";

export const metadata: Metadata = {
  title: "About",
  description:
    "ParsisPress is an AI-powered opportunity engine: a mission, a set of operating principles, and an honest account of what the product does and does not claim.",
  alternates: { canonical: canonical("about") },
};

const principles = [
  {
    icon: Compass,
    title: "Problems before products",
    body: "No brief is written before the customer and the moment are. If a workflow cannot be described precisely enough to interview about, it is not ready to evaluate.",
  },
  {
    icon: Telescope,
    title: "Depth over volume",
    body: "A smaller set examined properly is worth more than a large list. The product is built to help a founder drop an idea, which is the outcome volume tools avoid producing.",
  },
  {
    icon: ShieldQuestion,
    title: "Hypotheses, labelled as hypotheses",
    body: "Generated content is marked as generated. Claims are separated into what is known, what is inferred, and what is assumed, so nobody mistakes a plausible sentence for evidence.",
  },
  {
    icon: Layers,
    title: "The founder decides",
    body: "AI organises material and applies a consistent rubric. It does not validate a market, interview a customer, or predict whether a business will work.",
  },
];

const notClaims = [
  "That any opportunity described here exists as a business",
  "That any score predicts commercial success",
  "That the platform has customers, partnerships, or revenue",
  "That market data has been verified or sourced",
  "That using the platform guarantees a better outcome",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="border-b border-line bg-ivory">
        {/* Masthead */}
        <section className="relative border-b border-line bg-forest-dark">
          <div className="rule-grid-dark absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
            <p className="label-editorial flex items-center gap-3 text-lime/70">
              <span aria-hidden className="h-px w-6 bg-lime/50" />
              About
            </p>
            <h1 className="serif-display mt-6 max-w-3xl text-[clamp(2.2rem,5.6vw,3.5rem)] leading-[1.02] tracking-[-0.03em] text-ivory">
              A better question is worth more than a faster answer.
            </h1>
            <p className="mt-7 max-w-2xl text-[1.06rem] leading-[1.75] text-ivory/65">
              ParsisPress exists because the hardest part of starting a company is
              not building. It is deciding what is worth building — and that
              decision is usually made on evidence thinner than anyone
              acknowledges.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="scroll-mt-24 border-b border-line bg-paper">
          <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="label-editorial flex items-center gap-3 text-forest">
                  <span aria-hidden className="h-px w-6 bg-forest/40" />
                  Mission
                </p>
                <h2 className="serif-display mt-5 text-[clamp(1.8rem,4.2vw,2.6rem)] leading-[1.07] tracking-[-0.02em]">
                  Make opportunity research rigorous instead of reassuring.
                </h2>
              </div>

              <div className="space-y-5 text-[1rem] leading-[1.8] text-ink-70 lg:col-span-7">
                <p>
                  Most tools in this category generate ideas. Generation is now
                  cheap, which means it is no longer useful — anyone can produce
                  two hundred startup concepts before lunch, and almost none of
                  them survive contact with a customer.
                </p>
                <p>
                  ParsisPress takes the opposite position. The product is
                  organised around the parts of discovery that resist
                  automation: deciding whether a problem is severe, whether the
                  customer is reachable, whether an alternative already exists,
                  and what evidence would change your mind.
                </p>
                <p>
                  That means the platform&rsquo;s job is to make a decision
                  easier to defend. Every brief states what is known, what is
                  inferred, and what has simply been assumed. Every score is
                  accompanied by its dimensions. Every validation plan is
                  designed to be capable of ending the project it belongs to.
                </p>
                <p>
                  A founder who spends a fortnight finding out that an idea does
                  not work has saved a year. That outcome is a success for the
                  product, and it is the one we optimise for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="border-b border-line bg-ivory">
          <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10">
            <SectionHeading
              eyebrow="Operating principles"
              title="Four commitments the product has to honour."
              lede="These are constraints, not values statements. Each one rules out something the product could easily do and chose not to."
            />
            <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
              {principles.map((principle, index) => (
                <li key={principle.title} className="bg-paper p-7">
                  <div className="flex items-center gap-3">
                    <principle.icon
                      className="h-[18px] w-[18px] text-forest"
                      aria-hidden
                    />
                    <span className="numeric label-editorial text-muted-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="serif-display mt-5 text-[1.3rem] leading-snug tracking-[-0.015em]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-[0.93rem] leading-[1.7] text-muted">
                    {principle.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What it is / is not */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Honest scope"
                  title="What this product does not claim."
                  lede="An early-stage product that overstates its evidence is harder to evaluate and impossible to build on. So the limits are stated as plainly as the features."
                />
              </div>

              <div className="lg:col-span-7">
                <ul className="border-t border-line">
                  {notClaims.map((claim, index) => (
                    <li
                      key={claim}
                      className="flex items-start gap-4 border-b border-line py-4"
                    >
                      <span className="numeric label-editorial mt-[3px] shrink-0 text-clay">
                        Not
                      </span>
                      <span className="text-[0.96rem] leading-[1.7] text-ink-70">
                        {claim}
                      </span>
                      <span className="sr-only">
                        {index === notClaims.length - 1 ? "" : ""}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border border-line bg-ivory p-6">
                  <p className="label-editorial text-muted-2">
                    This build in particular
                  </p>
                  <p className="mt-3 text-[0.94rem] leading-[1.75] text-ink-70">
                    The version you are looking at is a frontend demonstration.
                    It runs entirely in your browser with local sample data — no
                    account, no server, no external model calls. Saved ideas live
                    in local storage on this device only.
                  </p>
                  <div className="mt-5">
                    <DemoNotice>
                      {opportunities.length} sample opportunity briefs across{" "}
                      {industries.length} industry categories, all illustrative
                      content written for this demonstration.
                    </DemoNotice>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suggest */}
        <section className="border-b border-line bg-ivory">
          <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Contribute"
                  title="Seen a workflow nobody has built for?"
                  lede="The best signals come from people doing the work. If you notice a repeated task that a specific person does badly and repeatedly, that is the shape of an opportunity worth investigating."
                />
                <p className="mt-6 text-[0.96rem] leading-[1.75] text-muted">
                  This form demonstrates the submission flow without pretending
                  to receive anything. In a live deployment it would enter the
                  ParsisPress queue for triage against the evaluation framework.
                </p>
              </div>
              <div className="lg:col-span-7">
                <SuggestIdeaForm />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest-dark">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-16 sm:px-7 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-20">
            <div>
              <h2 className="serif-display max-w-xl text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.06] tracking-[-0.02em] text-ivory">
                Start with one problem and go properly deep.
              </h2>
              <p className="mt-4 max-w-lg text-[0.98rem] leading-[1.7] text-ivory/60">
                The framework is on this site. The useful part happens when you
                take one brief into a real conversation.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ideas"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-lime px-6 py-3.5 text-[0.92rem] font-medium text-forest-dark transition-colors hover:bg-lime-soft"
              >
                Explore opportunities
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center rounded-sm border border-ivory/25 px-6 py-3.5 text-[0.92rem] font-medium text-ivory transition-colors hover:border-ivory/50"
              >
                Read the research
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}