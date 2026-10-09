import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/articles";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export function formatArticleDate(iso: string) {
  return formatDate(iso);
}

export function ResearchCard({
  article,
  index = 0,
  featured = false,
}: {
  article: Article;
  index?: number;
  featured?: boolean;
}) {
  const excerpt = article.sections[0]?.paragraphs[0];
  return (
    <article
      className={`group relative flex h-full flex-col ${
        featured ? "p-7 sm:p-9" : "p-6 sm:p-7"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="label-editorial rounded-xs bg-forest/8 px-2 py-1 text-forest">
          {article.category}
        </span>
        <span className="numeric label-editorial text-muted-2">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className={`serif-display mt-5 leading-[1.15] tracking-[-0.015em] ${
          featured ? "text-[1.65rem] sm:text-[2rem]" : "text-[1.3rem]"
        }`}
      >
        <Link href={`/research/${article.slug}`} className="before:absolute before:inset-0">
          {article.title}
        </Link>
      </h3>
      <p
        className={`mt-3 leading-relaxed text-muted ${
          featured ? "text-[1rem]" : "line-clamp-3 text-[0.9rem]"
        }`}
      >
        {article.dek}
      </p>

      {featured && excerpt && (
        <>
          <p className="serif-display mt-7 text-[1.15rem] leading-[1.5] text-ink-70">
            {excerpt}
          </p>
          <p className="mt-6 text-[0.95rem] leading-[1.75] text-muted">
            {article.sections[0]?.paragraphs[1]}
          </p>
        </>
      )}

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-4">
        <span className="label-editorial text-muted-2">
          {formatDate(article.publishedAt)} · {article.readingTime}
        </span>
        <span className="label-editorial inline-flex items-center gap-1 py-1.5 text-forest">
          Read
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </article>
  );
}