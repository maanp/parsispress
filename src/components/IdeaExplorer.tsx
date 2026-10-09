"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LayoutGrid, List, Search, SlidersHorizontal, X } from "lucide-react";
import { opportunities } from "@/lib/opportunities";
import { industries } from "@/lib/industries";
import { OpportunityCard, OpportunityListRow } from "./OpportunityCard";
import { OpportunityDetail } from "./OpportunityDetail";
import { EmptyState, DemoNotice } from "./EmptyState";
import { useSavedIdeas } from "./SavedIdeasProvider";

type SortKey = "score" | "newest" | "score-asc";

const sortLabels: { key: SortKey; label: string }[] = [
  { key: "score", label: "Highest score" },
  { key: "newest", label: "Newest first" },
  { key: "score-asc", label: "Lowest score" },
];

const toSlug = (value: string) => value.toLowerCase().trim();

export function IdeaExplorer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { saved, clearAll, hydrated } = useSavedIdeas();

  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("score");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [savedOnly, setSavedOnly] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const paramIndustry = searchParams.get("industry");
  const paramSaved = searchParams.get("view") === "saved";

  useEffect(() => {
    if (paramIndustry && industries.some((i) => i.slug === paramIndustry)) {
      setIndustry(paramIndustry);
    }
  }, [paramIndustry]);

  useEffect(() => {
    setSavedOnly(paramSaved);
  }, [paramSaved]);

  const results = useMemo(() => {
    const needle = toSlug(query);
    const filtered = opportunities.filter((opportunity) => {
      if (industry !== "all" && opportunity.industry !== industry) return false;
      if (savedOnly && !saved.includes(opportunity.slug)) return false;
      if (!needle) return true;
      const haystack = toSlug(
        [
          opportunity.name,
          opportunity.summary,
          opportunity.problem,
          opportunity.targetCustomer,
          opportunity.whyNow,
          opportunity.industry,
          opportunity.signals.join(" "),
        ].join(" "),
      );
      return haystack.includes(needle);
    });

    return filtered.sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
      }
      return sort === "score-asc"
        ? a.score - b.score
        : b.score - a.score;
    });
  }, [query, industry, sort, savedOnly, saved]);

  const displayed = results;

  const hasFilters =
    query.length > 0 || industry !== "all" || savedOnly || sort !== "score";

  const resetFilters = useCallback(() => {
    setQuery("");
    setIndustry("all");
    setSavedOnly(false);
    setSort("score");
    const next = new URLSearchParams(searchParams.toString());
    next.delete("industry");
    next.delete("view");
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [pathname, router, searchParams]);

  const applyIndustry = (slug: string) => {
    setIndustry(slug);
    const next = new URLSearchParams(searchParams.toString());
    if (slug === "all") next.delete("industry");
    else next.set("industry", slug);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const toggleSavedOnly = () => {
    const next = !savedOnly;
    setSavedOnly(next);
    const params = new URLSearchParams(searchParams.toString());
    if (next) params.set("view", "saved");
    else params.delete("view");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const handleQuery = (value: string) => {
    setQuery(value);
    setPending(value !== query);
    window.setTimeout(() => setPending(false), 180);
  };

  const isEmpty = displayed.length === 0;

  return (
    <div>
      <div className="border border-line bg-paper">
        {/* Search */}
        <div className="flex flex-col gap-3 border-b border-line px-4 py-4 sm:px-5">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2"
              aria-hidden
            />
            <label htmlFor="idea-search" className="sr-only">
              Search opportunities by keyword
            </label>
            <input
              id="idea-search"
              type="search"
              value={query}
              onChange={(event) => handleQuery(event.target.value)}
              placeholder="Search problems, customers, industries…"
              className="h-11 w-full rounded-sm border border-line-strong bg-ivory pl-10 pr-10 text-[0.92rem] text-ink placeholder:text-muted-2 focus:border-forest focus:outline-none focus-visible:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => handleQuery("")}
                className="absolute right-2.5 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-sm text-muted hover:text-ink"
              >
                <span className="sr-only">Clear search</span>
                <X className="h-3.5 w-3.5" aria-hidden />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setFiltersOpen((value) => !value)}
              aria-expanded={filtersOpen}
              aria-controls="industry-filters"
              className="label-editorial inline-flex items-center gap-2 rounded-sm border border-line-strong bg-ivory px-3 py-2 text-ink-70 transition-colors hover:border-forest hover:text-forest"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden />
              Industries
              {industry !== "all" && (
                <span className="numeric ml-0.5 text-forest">1</span>
              )}
            </button>

            <div className="relative">
              <label htmlFor="sort-select" className="sr-only">
                Sort opportunities
              </label>
              <select
                id="sort-select"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="label-editorial h-[34px] appearance-none rounded-sm border border-line-strong bg-ivory pl-3 pr-8 text-ink-70 transition-colors hover:border-forest focus:border-forest focus:outline-none focus-visible:outline-none"
              >
                {sortLabels.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span
                aria-hidden
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-2"
              >
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                  <path
                    d="M1 1L4.5 4.5L8 1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </span>
            </div>

            <button
              type="button"
              onClick={toggleSavedOnly}
              aria-pressed={savedOnly}
              aria-label="Show only saved opportunities"
              className={`label-editorial inline-flex h-[34px] items-center gap-2 rounded-sm border px-3 transition-colors ${
                savedOnly
                  ? "border-forest bg-forest text-ivory"
                  : "border-line-strong bg-ivory text-ink-70 hover:border-forest hover:text-forest"
              }`}
            >
              Saved
              {hydrated && saved.length > 0 && (
                <span className="numeric">{saved.length}</span>
              )}
            </button>

            <div
              className="ml-auto hidden items-center gap-1 border border-line-strong bg-ivory p-1 sm:flex"
              role="group"
              aria-label="Choose result layout"
            >
              <ViewToggle
                active={view === "grid"}
                onClick={() => setView("grid")}
                icon={<LayoutGrid className="h-3.5 w-3.5" aria-hidden />}
                label="Card view"
              />
              <ViewToggle
                active={view === "list"}
                onClick={() => setView("list")}
                icon={<List className="h-3.5 w-3.5" aria-hidden />}
                label="List view"
              />
            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="label-editorial ml-auto inline-flex h-[34px] items-center gap-1.5 px-1.5 text-muted transition-colors hover:text-forest sm:ml-0"
              >
                <X className="h-3 w-3" aria-hidden />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Industry chips */}
        <div
          id="industry-filters"
          className={`${filtersOpen ? "block" : "hidden"} border-b border-line px-4 py-4 sm:px-5 sm:block`}
        >
          <p className="label-editorial mb-3 text-muted-2">Filter by industry</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip
              active={industry === "all"}
              onClick={() => applyIndustry("all")}
              label="All industries"
              count={opportunities.length}
            />
            {industries.map((item) => {
              const count = opportunities.filter(
                (opportunity) => opportunity.industry === item.slug,
              ).length;
              return (
                <FilterChip
                  key={item.slug}
                  active={industry === item.slug}
                  onClick={() => applyIndustry(item.slug)}
                  label={item.name}
                  count={count}
                />
              );
            })}
          </div>
        </div>

        {/* Result meta */}
        <div className="flex items-center justify-between gap-4 border-b border-line bg-ivory px-4 py-2.5 sm:px-5">
          <p className="text-[0.78rem] text-muted" aria-live="polite">
            {pending ? "Filtering…" : null}
            {!pending && (
              <>
                <span className="numeric font-medium text-ink">
                  {displayed.length}
                </span>{" "}
                {displayed.length === 1 ? "opportunity" : "opportunities"}
                {industry !== "all" && (
                  <>
                    {" "}in{" "}
                    <span className="text-ink">
                      {industries.find((i) => i.slug === industry)?.name}
                    </span>
                  </>
                )}
                {query && (
                  <>
                    {" "}matching{" "}
                    <span className="text-ink">“{query}”</span>
                  </>
                )}
                {savedOnly && " · saved only"}
              </>
            )}
          </p>
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-1 border border-line-strong bg-paper p-1 sm:hidden"
              role="group"
              aria-label="Choose result layout"
            >
              <ViewToggle
                active={view === "grid"}
                onClick={() => setView("grid")}
                icon={<LayoutGrid className="h-3.5 w-3.5" aria-hidden />}
                label="Card view"
              />
              <ViewToggle
                active={view === "list"}
                onClick={() => setView("list")}
                icon={<List className="h-3.5 w-3.5" aria-hidden />}
                label="List view"
              />
            </div>
            <DemoNotice>Illustrative demo data</DemoNotice>
          </div>
        </div>

{/* Results */}
          <h2 className="sr-only">
            {isEmpty ? "No matching opportunities" : "Opportunity results"}
          </h2>
          <div>
          {isEmpty ? (
            <div className="p-4 sm:p-5">
              {savedOnly && !hydrated ? (
                <EmptyState
                  title="Loading your saved ideas"
                  description="Reading saved ideas from this browser."
                  icon={<SlidersHorizontal className="h-5 w-5" aria-hidden />}
                />
              ) : (
                <EmptyState
                  title={
                    savedOnly && saved.length === 0
                      ? "No saved ideas yet"
                      : "No opportunities match those filters"
                  }
                  description={
                    savedOnly && saved.length === 0
                      ? "Save an opportunity from the explorer and it will appear here, stored in this browser only."
                      : "Try a broader keyword, clear the industry filter, or reset everything and start again."
                  }
                  action={
                    savedOnly && saved.length === 0 ? (
                      <button
                        type="button"
                        onClick={toggleSavedOnly}
                        className="rounded-sm border border-line-strong bg-paper px-4 py-2.5 text-[0.85rem] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
                      >
                        Browse all opportunities
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={resetFilters}
                        className="rounded-sm border border-line-strong bg-paper px-4 py-2.5 text-[0.85rem] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
                      >
                        Reset filters
                      </button>
                    )
                  }
                />
              )}
            </div>
          ) : view === "grid" ? (
            <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
              {displayed.map((opportunity, index) => (
                <div key={opportunity.slug} className="bg-paper">
                  <OpportunityCard
                    opportunity={opportunity}
                    index={index}
                    onOpen={setActiveSlug}
                  />
                </div>
              ))}
              {displayed.length % 2 === 1 && (
                <div aria-hidden className="hidden bg-paper sm:block" />
              )}
            </div>
          ) : (
            <div>
              {displayed.map((opportunity) => (
                <OpportunityListRow
                  key={opportunity.slug}
                  opportunity={opportunity}
                  onOpen={setActiveSlug}
                />
              ))}
            </div>
          )}
        </div>

        {savedOnly && saved.length > 0 && (
          <div className="flex items-center justify-between gap-4 border-t border-line bg-ivory px-4 py-3 sm:px-5">
            <p className="text-[0.76rem] text-muted-2">
              Saved ideas live in this browser only. Nothing is sent anywhere.
            </p>
            <button
              type="button"
              onClick={() => {
                clearAll();
                if (savedOnly) {
                  const params = new URLSearchParams(searchParams.toString());
                  params.delete("view");
                  const qs = params.toString();
                  router.replace(qs ? `${pathname}?${qs}` : pathname, {
                    scroll: false,
                  });
                }
              }}
              className="label-editorial text-muted transition-colors hover:text-clay"
            >
              Clear all saved
            </button>
          </div>
        )}
      </div>

      {activeSlug && (
        <OpportunityDetail slug={activeSlug} onClose={() => setActiveSlug(null)} />
      )}
    </div>
  );
}

function ViewToggle({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex h-7 w-8 items-center justify-center rounded-xs transition-colors ${
        active ? "bg-forest text-ivory" : "text-muted hover:text-forest"
      }`}
    >
      <span className="sr-only">{label}</span>
      {icon}
    </button>
  );
}

function FilterChip({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 text-[0.82rem] transition-colors ${
        active
          ? "border-forest bg-forest text-ivory"
          : "border-line-strong bg-ivory text-ink-70 hover:border-forest hover:text-forest"
      }`}
    >
      {label}
      <span className={`numeric text-[0.7rem] ${active ? "text-ivory/70" : "text-muted-2"}`}>
        {count}
      </span>
    </button>
  );
}