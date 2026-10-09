"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({
  text,
  label = "Copy",
  copiedLabel = "Copied",
  className = "",
  compact = false,
}: {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  compact?: boolean;
}) {
  const [state, setState] = useState<"idle" | "done" | "blocked">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  const copy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const area = document.createElement("textarea");
        area.value = text;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(area);
        if (!ok) throw new Error("copy failed");
      }
      setState("done");
    } catch {
      setState("blocked");
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setState("idle"), 2200);
  }, [text]);

  const icon =
    state === "done" ? (
      <Check className="h-[15px] w-[15px]" aria-hidden />
    ) : (
      <Copy className="h-[15px] w-[15px]" aria-hidden />
    );

  const buttonLabel =
    state === "done"
      ? copiedLabel
      : state === "blocked"
        ? "Copy blocked"
        : label;

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-2 rounded-sm border border-line-strong bg-paper transition-colors hover:border-forest hover:text-forest ${
        compact ? "px-2.5 py-1.5" : "px-3.5 py-2"
      } ${className}`}
    >
      {icon}
      <span className={compact ? "text-[0.76rem]" : "text-[0.82rem]"}>
        {buttonLabel}
      </span>
      <span aria-live="polite" className="sr-only">
        {state === "done"
          ? "Summary copied to clipboard"
          : state === "blocked"
            ? "Clipboard access was blocked by the browser. The summary is selectable as text on this page."
            : ""}
      </span>
    </button>
  );
}