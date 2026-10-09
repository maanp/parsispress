export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-baseline gap-[0.28em] ${
        tone === "dark" ? "text-ivory" : "text-ink"
      }`}
    >
      <span className="serif-display text-[1.28rem] leading-none tracking-[-0.02em]">
        Parsis
        <span className={tone === "dark" ? "text-lime" : "text-forest"}>
          Press
        </span>
      </span>
      <span
        aria-hidden
        className="h-[5px] w-[5px] rounded-full bg-lime align-middle"
      />
    </span>
  );
}