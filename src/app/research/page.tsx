import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ResearchCard } from "@/components/ResearchCard";
import { DemoNotice } from "@/components/EmptyState";
import { articles } from "@/lib/articles";
import { industries } from "@/lib/industries";
import { opportunities } from "@/lib/opportunities";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Editorial notes on startup opportunity discovery: vertical AI, repetitive workflows, defensibility, narrow problems, and validation plans.",
  alternates: { canonical: "/research" },
};

const categories = Array.from(new Set(articles.map((a) => a.category)));

export default function ResearchPage() {
  const [lead, ...rest] = articles;

  return (
    <>
      <SiteHeader />
      <main id="main" className="border-b border-line bg-ivory">
        {/* Masthead */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="label-editorial flex items-center gap-3 text-forest">
                  <span aria-hidden className="h-px w-6 bg-forest/40" />
                  Research
                </p>
                <h1 className="serif-display mt-5 text-[clamp(2.2rem,5.4vw,3.4rem)] leading-[1.02] tracking-[-0.03em]">
                  Notes on finding opportunities worth the time.
                </h1>
                <p className="mt-6 max-w-2xl text-[1.04rem] leading-[1.7] text-muted">
                  ParsisPress treats research as part of the product rather than
                  marketing around it. These pieces document the reasoning behind
                  the framework — what to look for, what to ignore, and where
                  confidence should stop.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-line bg-ivory p-6">
                  <h2 className="label-editorial text-muted-2">
                    In this edition
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {[
                      { label: "Articles", value: articles.length },
                      { label: "Categories", value: categories.length },
                      { label: "Opportunity briefs referenced", value: opportunities.length },
                      { label: "Industry categories covered", value: industries.length },
                    ].map((item) => (
                      <li
                        key={item.label}
                        className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5 last:border-0 last:pb-0"
                      >
                        <span className="text-[0.88rem] text-ink-70">
                          {item.label}
                        </span>
                        <span className="numeric text-[0.95rem] font-medium">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead article */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-7 lg:px-10">
            <p className="label-editorial text-muted-2">Featured essay</p>
            <div className="mt-5 grid gap-px border border-line bg-line lg:grid-cols-12">
              <div className="relative bg-ivory lg:col-span-7">
                <ResearchCard article={lead} featured />
              </div>
              <div className="flex flex-col justify-between bg-paper p-7 sm:p-9 lg:col-span-5">
                <div>
                  <p className="label-editorial text-forest">Why this piece</p>
                  <p className="mt-4 text-[0.96rem] leading-[1.75] text-ink-70">
                    Vertical software has failed for predictable reasons, and two
                    of those reasons have genuinely changed. This piece separates
                    what improved from what did not, because the difference
                    determines whether a narrow product is now buildable or still
                    an expensive mistake.
                  </p>
                  <p className="mt-4 text-[0.96rem] leading-[1.75] text-ink-70">
                    It also defines what &ldquo;overlooked&rdquo; actually means,
                    which is usually a segment large enough to build for and
                    unappealing enough that general platforms skipped it.
                  </p>
                </div>
                <div className="mt-8 border-t border-line pt-5">
                  <DemoNotice>
                    Illustrative editorial content written for this
                    demonstration build. No external research, datasets, or
                    citations are represented.
                  </DemoNotice>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article grid */}
        <section>
          <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line pb-4">
              <h2 className="serif-display text-[1.6rem] tracking-[-0.015em]">
                All research
              </h2>
              <ul className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="label-editorial rounded-xs border border-line-strong px-2 py-1 text-muted"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-px border-x border-b border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((article, index) => (
                <div key={article.slug} className="bg-ivory">
                  <ResearchCard article={article} index={index + 1} />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <DemoNotice>
                Dates shown are part of the demonstration dataset. Content is
                illustrative editorial writing and contains no cited empirical
                findings.
              </DemoNotice>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}