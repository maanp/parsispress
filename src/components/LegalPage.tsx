import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";


export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export function LegalPage({
  title,
  intro,
  updated,
  sections,
  notice,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  notice: string;
}) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="border-b border-line bg-ivory">
        <div className="mx-auto max-w-[760px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10">
          <p className="label-editorial flex items-center gap-3 text-forest">
            <span aria-hidden className="h-px w-6 bg-forest/40" />
            Legal
          </p>
          <h1 className="serif-display mt-5 text-[clamp(2.1rem,5vw,3rem)] leading-[1.04] tracking-[-0.025em]">
            {title}
          </h1>
          <p className="mt-5 text-[1.02rem] leading-[1.7] text-muted">{intro}</p>
          <p className="mt-4 text-[0.82rem] text-muted-2">
            Last updated: <time dateTime={updated}>{updated}</time>
          </p>

          <div className="mt-6 border border-line-strong bg-paper px-5 py-4">
            <p className="label-editorial text-muted-2">Draft status</p>
            <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-70">
              {notice}
            </p>
          </div>

          <div className="mt-10 space-y-9">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="serif-display text-[1.45rem] leading-snug tracking-[-0.015em]">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[0.98rem] leading-[1.8] text-ink-70"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2.5">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-[0.96rem] leading-[1.75] text-ink-70"
                        >
                          <span
                            aria-hidden
                            className="mt-[11px] h-px w-3 shrink-0 bg-line-strong"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-6">
            <p className="text-[0.92rem] leading-relaxed text-muted">
              Questions about this page should go to{" "}
              <a
                href="mailto:hello@parsispress.com"
                className="inline-block underline-link text-forest"
              >
                hello@parsispress.com
              </a>
              , a placeholder address that should be updated before launch. See
              also the{" "}
              <Link href="/about" className="inline-block underline-link text-forest">
                about page
              </Link>{" "}
              for how this demonstration build handles data.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}