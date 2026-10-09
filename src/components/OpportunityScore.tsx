import type { ScoreDimension } from "@/lib/opportunities";

function bandFor(value: number, inverted = false): {
  label: string;
  bar: string;
  text: string;
} {
  const effective = inverted ? 100 - value : value;
  if (effective >= 72)
    return {
      label: "Strong",
      bar: "bg-forest",
      text: "text-forest",
    };
  if (effective >= 55)
    return { label: "Moderate", bar: "bg-forest/60", text: "text-forest/75" };
  if (effective >= 38)
    return { label: "Mixed", bar: "bg-clay/55", text: "text-clay" };
  return { label: "Weak", bar: "bg-clay", text: "text-clay" };
}

/** Large numeral score with a thin meter. Used on detail pages. */
export function OpportunityScore({
  score,
  summary,
  tone = "light",
}: {
  score: number;
  summary?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`flex items-end gap-5 ${isDark ? "text-ivory" : "text-ink"}`}
    >
      <div>
        <span className="numeric serif-display block text-[3.4rem] leading-none tracking-[-0.03em]">
          {score}
        </span>
        <span className="label-editorial mt-2 block text-muted-2">
          Illustrative score
        </span>
      </div>
      <div className="flex-1 pb-1.5">
        <div
          className="h-[3px] w-full overflow-hidden rounded-full bg-line"
          role="img"
          aria-label={`Illustrative opportunity score: ${score} out of 100`}
        >
          <div
            className="h-full rounded-full bg-forest"
            style={{ width: `${score}%` }}
          />
        </div>
        {summary && (
          <p className="mt-3 max-w-sm text-[0.85rem] leading-relaxed text-muted">
            {summary}
          </p>
        )}
      </div>
    </div>
  );
}

/** Compact inline score used on cards and in the feed. */
export function ScorePip({ score }: { score: number }) {
  return (
    <span
      className="numeric inline-flex h-9 w-11 items-center justify-center rounded-sm border border-line-strong bg-paper text-[0.9rem] font-medium text-ink"
      title={`Illustrative opportunity score: ${score}/100`}
    >
      {score}
    </span>
  );
}

/** Horizontal bar breakdown of the six scoring dimensions. */
export function ScoreBreakdown({
  dimensions,
  tone = "light",
}: {
  dimensions: ScoreDimension[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <ul className="divide-y divide-line">
      {dimensions.map((dimension) => {
        const band = bandFor(dimension.value, dimension.inverted);
        return (
          <li key={dimension.key} className="py-3.5">
            <div className="flex items-baseline justify-between gap-4">
              <span
                className={`text-[0.88rem] ${
                  isDark ? "text-ivory/90" : "text-ink"
                }`}
              >
                {dimension.label}
              </span>
              <span className="flex items-baseline gap-3">
                {dimension.inverted && (
                  <span className="text-[0.68rem] tracking-[0.08em] text-muted-2 uppercase">
                    Lower is better
                  </span>
                )}
                <span
                  className={`label-editorial ${isDark ? "text-ivory/60" : "text-muted-2"}`}
                >
                  {band.label}
                </span>
                <span
                  className={`numeric w-7 text-right text-[0.92rem] font-medium ${
                    isDark ? "text-ivory" : "text-ink"
                  }`}
                >
                  {dimension.value}
                </span>
              </span>
            </div>
            <div
              className={`mt-2 h-[5px] w-full overflow-hidden rounded-full ${
                isDark ? "bg-ivory/10" : "bg-line"
              }`}
              role="img"
              aria-label={`${dimension.label}: ${dimension.value} out of 100`}
            >
              <div
                className={`h-full rounded-full ${band.bar}`}
                style={{ width: `${dimension.value}%` }}
              />
            </div>
            <p
              className={`mt-2 text-[0.78rem] leading-relaxed ${
                isDark ? "text-ivory/55" : "text-muted"
              }`}
            >
              {dimension.note}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

/** Compact six-axis profile used in the explorer card view. */
export function ScoreProfile({
  dimensions,
  className = "",
}: {
  dimensions: ScoreDimension[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-end" aria-hidden>
        {dimensions.map((dimension) => {
          const band = bandFor(dimension.value, dimension.inverted);
          return (
            <div
              key={dimension.key}
              className="flex flex-1 flex-col items-center gap-1.5"
            >
              <div className="relative h-8 w-3.5 bg-line/60">
                <div
                  className={`absolute inset-x-0 bottom-0 ${band.bar}`}
                  style={{ height: `${Math.max(dimension.value, 8)}%` }}
                />
              </div>
              <p className="label-editorial text-[0.5rem] leading-[1.1] text-muted-2">
                {shortLabel(dimension)}
              </p>
            </div>
          );
        })}
      </div>
      <span className="sr-only">
        Six-dimension illustrative profile:{" "}
        {dimensions
          .map((d) => `${d.label} ${d.value} out of 100`)
          .join(", ")}
        . Full breakdown available in the opportunity detail view.
      </span>
    </div>
  );
}

const SHORT_LABELS: Record<string, string> = {
  intensity: "Prob",
  frequency: "Freq",
  willingness: "Pay",
  accessibility: "Reach",
  saturation: "Comp",
  feasibility: "Feas",
};

function shortLabel(dimension: ScoreDimension): string {
  return SHORT_LABELS[dimension.key] ?? dimension.label.slice(0, 4);
}