import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { industries } from "@/lib/industries";
import { opportunities } from "@/lib/opportunities";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "A directory of seven industry categories ParsisPress watches, with the signals it tracks and the sample opportunities in each.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="border-b border-line bg-ivory">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10">
          <header className="border-b border-line pb-10">
            <p className="label-editorial flex items-center gap-3 text-forest">
              <span aria-hidden className="h-px w-6 bg-forest/40" />
              Industry directory
            </p>
            <h1 className="serif-display mt-5 max-w-3xl text-[clamp(2.1rem,5vw,3.2rem)] leading-[1.03] tracking-[-0.025em]">
              Seven categories where the workflow has outgrown the software.
            </h1>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-[1.7] text-muted">
              A category earns a place here when the work is repeated, the buyer
              is identifiable, and something recent changed what is possible or
              what is required. Each entry states the thesis and the signals the
              platform would watch.
            </p>
          </header>

          <ul>
            {industries.map((industry, index) => {
              const items = opportunities.filter(
                (opportunity) => opportunity.industry === industry.slug,
              );
              return (
                <li
                  key={industry.slug}
                  className="grid grid-cols-1 gap-6 border-b border-line py-10 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="lg:col-span-1">
                    <span className="numeric label-editorial text-muted-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="lg:col-span-5">
                    <h2 className="serif-display text-[1.6rem] leading-snug tracking-[-0.015em]">
                      <Link
                        href={`/ideas?industry=${industry.slug}`}
                        className="inline-block underline-link transition-colors hover:text-forest"
                      >
                        {industry.name}
                      </Link>
                    </h2>
                    <p className="mt-2 text-[0.92rem] text-ink-70">
                      {industry.tagline}
                    </p>
                    <p className="mt-4 text-[0.92rem] leading-[1.7] text-muted">
                      {industry.thesis}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="label-editorial text-muted-2">
                      Signals watched
                    </p>
                    <ul className="mt-3 space-y-2">
                      {industry.signals.map((signal) => (
                        <li
                          key={signal}
                          className="flex gap-2.5 text-[0.86rem] leading-relaxed text-ink-70"
                        >
                          <span
                            aria-hidden
                            className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-forest/45"
                          />
                          {signal}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-[0.8rem] leading-relaxed text-muted-2">
                      Buyer type: {industry.buyer}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="label-editorial text-muted-2">
                      Sample opportunities ({items.length})
                    </p>
                    <ul className="mt-2 space-y-0.5">
                      {items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/ideas/${item.slug}`}
                            className="group flex items-start justify-between gap-3 py-1.5 text-[0.88rem] leading-snug text-ink-70 transition-colors hover:text-forest"
                          >
                            <span>{item.name}</span>
                            <span className="numeric shrink-0 text-muted-2">
                              {item.score}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/ideas?industry=${industry.slug}`}
                      className="label-editorial mt-3 inline-flex items-center gap-1.5 py-1.5 text-forest transition-colors hover:text-forest-deep"
                    >
                      Open in explorer
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="mt-10 text-[0.82rem] leading-relaxed text-muted-2">
            Category membership and signal descriptions are editorial framing in
            this demonstration build. They describe where the product would look,
            not findings from completed research.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}