import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DemoNotice } from "@/components/EmptyState";
import { articleBySlug, articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import { formatArticleDate } from "@/components/ResearchCard";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) return { title: "Article not found" };
  return pageMetadata({
    title: article.title,
    description: article.dek,
    route: `research/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) notFound();

  const related = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <SiteHeader />
      <main id="main" className="border-b border-line bg-ivory">
        {/* Masthead */}
        <article>
          <div className="border-b border-line bg-paper">
            <div className="mx-auto max-w-[760px] px-5 pt-10 pb-12 sm:px-7 lg:px-10">
              <Link
                href="/research"
                className="label-editorial inline-flex items-center gap-2 py-1.5 text-muted transition-colors hover:text-forest"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
                All research
              </Link>

              <p className="label-editorial mt-8 inline-flex rounded-xs bg-forest/8 px-2 py-1 text-forest">
                {article.category}
              </p>

              <h1 className="serif-display mt-6 text-[clamp(2.1rem,5.2vw,3.1rem)] leading-[1.03] tracking-[-0.03em]">
                {article.title}
              </h1>

              <p className="mt-6 text-[1.08rem] leading-[1.7] text-muted">
                {article.dek}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5">
                <span className="label-editorial text-ink-70">
                  ParsisPress Editorial
                </span>
                <span aria-hidden className="h-3 w-px bg-line-strong" />
                <time
                  dateTime={article.publishedAt}
                  className="numeric label-editorial text-muted-2"
                >
                  {formatArticleDate(article.publishedAt)}
                </time>
                <span aria-hidden className="h-3 w-px bg-line-strong" />
                <span className="numeric label-editorial text-muted-2">
                  {article.readingTime} read
                </span>
              </div>

              <div className="mt-5">
                <DemoNotice>
                  Illustrative editorial content for this demonstration build.
                  No named authors, citations, or empirical findings are
                  represented.
                </DemoNotice>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="mx-auto max-w-[760px] px-5 py-12 sm:px-7 lg:px-10">
            {article.sections.map((section, index) => (
              <section key={section.heading} className={index === 0 ? "" : "mt-11"}>
                <h2 className="serif-display text-[1.55rem] leading-[1.2] tracking-[-0.015em]">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[1.02rem] leading-[1.8] text-ink-70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.aside && (
                  <div className="my-9 border border-line bg-paper">
                    {section.aside.kind === "quote" ? (
                      <blockquote className="px-6 py-7">
                        <p className="serif-display text-[1.32rem] leading-[1.45] tracking-[-0.01em] text-ink">
                          {section.aside.text}
                        </p>
                      </blockquote>
                    ) : (
                      <div className="px-6 py-7">
                        <p className="label-editorial text-forest">
                          {section.aside.text}
                        </p>
                        <ul className="mt-4 space-y-3">
                          {section.aside.items?.map((item, itemIndex) => (
                            <li
                              key={item}
                              className="flex gap-3 text-[0.95rem] leading-[1.7] text-ink-70"
                            >
                              <span className="numeric label-editorial shrink-0 pt-[4px] text-muted-2">
                                {String(itemIndex + 1).padStart(2, "0")}
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </section>
            ))}

            <div className="mt-12 border-t border-line pt-8">
              <h2 className="label-editorial text-forest">Apply this</h2>
              <p className="mt-4 text-[1rem] leading-[1.8] text-ink-70">
                The reasoning here is built into how every opportunity brief is
                structured. Pick one and read it with these questions open.
              </p>
              <Link
                href="/ideas"
                className="group mt-6 inline-flex items-center gap-2 rounded-sm bg-forest px-5 py-3 text-[0.9rem] font-medium text-ivory transition-colors hover:bg-forest-deep"
              >
                Explore opportunities
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </article>

        {/* Related */}
        <section className="border-t border-line bg-paper">
          <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-7 lg:px-10">
            <h2 className="serif-display text-[1.5rem] tracking-[-0.015em]">
              Continue reading
            </h2>
            <div className="mt-6 grid gap-px border border-line bg-line md:grid-cols-2">
              {related.map((item, index) => (
                <div key={item.slug} className="bg-ivory">
                  <Link
                    href={`/research/${item.slug}`}
                    className="group flex h-full flex-col p-6 sm:p-7"
                  >
                    <span className="label-editorial rounded-xs bg-forest/8 px-2 py-1 text-forest">
                      {item.category}
                    </span>
                    <h3 className="serif-display mt-4 text-[1.28rem] leading-[1.2] tracking-[-0.015em]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 line-clamp-2 text-[0.9rem] leading-relaxed text-muted">
                      {item.dek}
                    </p>
                    <p className="numeric label-editorial mt-auto pt-5 text-muted-2">
                      {formatArticleDate(item.publishedAt)} · {item.readingTime}
                      <span className="sr-only">
                        {index === 0 ? ", first related article" : ""}
                      </span>
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}