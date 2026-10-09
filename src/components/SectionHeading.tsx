export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  action?: React.ReactNode;
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={`flex flex-col gap-6 ${
        action ? "md:flex-row md:items-end md:justify-between" : ""
      }`}
    >
      <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        {eyebrow && (
          <p
            className={`label-editorial flex items-center gap-3 ${
              align === "center" ? "justify-center" : ""
            } ${isDark ? "text-lime/70" : "text-forest"}`}
          >
            <span
              aria-hidden
              className={`h-px w-6 ${isDark ? "bg-lime/50" : "bg-forest/40"}`}
            />
            {eyebrow}
          </p>
        )}
        <h2
          className={`serif-display mt-5 text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.06] tracking-[-0.02em] ${
            isDark ? "text-ivory" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {lede && (
          <p
            className={`mt-5 text-[1.02rem] leading-relaxed ${
              isDark ? "text-ivory/70" : "text-muted"
            }`}
          >
            {lede}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}