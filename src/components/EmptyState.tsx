import type { ReactNode } from "react";

export function EmptyState({
  title,
  description,
  action,
  icon,
}: {
  title: string;
  description: string;
  action?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed border-line-strong bg-paper/60 px-6 py-16 text-center">
      {icon && <div className="mb-4 text-muted-2">{icon}</div>}
      <h3 className="serif-display text-[1.3rem] tracking-[-0.01em] text-ink">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-[0.9rem] leading-relaxed text-muted">
        {description}
      </p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export function DemoNotice({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`label-editorial flex items-start gap-2 text-[0.6rem] leading-[1.1rem] ${
        tone === "dark" ? "text-ivory/45" : "text-muted-2"
      }`}
    >
      <span
        aria-hidden
        className={`mt-[3px] inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
          tone === "dark" ? "bg-lime/60" : "bg-forest/40"
        }`}
      />
      <span>{children}</span>
    </p>
  );
}