import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const suggestions = [
  { href: "/ideas", label: "Opportunity explorer" },
  { href: "/industries", label: "Industry directory" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="border-b border-line bg-ivory">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-7 sm:py-28 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="label-editorial flex items-center gap-3 text-forest">
                <span aria-hidden className="h-px w-6 bg-forest/40" />
                Error 404
              </p>
              <p className="numeric serif-display mt-6 text-[clamp(4rem,12vw,7rem)] leading-[0.9] tracking-[-0.04em] text-forest/15">
                404
              </p>
              <h1 className="serif-display mt-2 text-[clamp(1.9rem,4.6vw,2.9rem)] leading-[1.06] tracking-[-0.02em]">
                This page is not part of the dataset.
              </h1>
              <p className="mt-5 max-w-lg text-[1rem] leading-[1.75] text-muted">
                The address you followed does not match a page or an opportunity
                in this build. Nothing is broken on your side — try one of the
                routes below, or head back to the explorer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-sm bg-forest px-5 py-3 text-[0.9rem] font-medium text-ivory transition-colors hover:bg-forest-deep"
                >
                  Back to homepage
                </Link>
                <Link
                  href="/ideas"
                  className="inline-flex items-center justify-center rounded-sm border border-line-strong bg-paper px-5 py-3 text-[0.9rem] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
                >
                  Explore opportunities
                </Link>
              </div>
            </div>

            <nav aria-label="Suggested pages" className="lg:col-span-5">
              <h2 className="label-editorial border-b border-line pb-3 text-muted-2">
                Where you could go instead
              </h2>
              <ul>
                {suggestions.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-4 border-b border-line py-4 transition-colors hover:text-forest"
                    >
                      <span className="serif-display text-[1.15rem] tracking-[-0.01em]">
                        {item.label}
                      </span>
                      <span
                        aria-hidden
                        className="text-muted-2 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}