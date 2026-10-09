"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { useSavedIdeas } from "./SavedIdeasProvider";

export function SaveButton({
  slug,
  name,
  variant = "full",
}: {
  slug: string;
  name: string;
  variant?: "full" | "icon" | "quiet";
}) {
  const { isSaved, toggleSave, hydrated } = useSavedIdeas();
  const saved = hydrated && isSaved(slug);

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={() => toggleSave(slug)}
        aria-pressed={saved}
        title={saved ? `Remove ${name} from saved` : `Save ${name}`}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-sm border transition-colors ${
          saved
            ? "border-forest bg-forest text-ivory"
            : "border-line-strong bg-paper text-ink-70 hover:border-forest hover:text-forest"
        }`}
      >
        <span className="sr-only">
          {saved ? `Remove ${name} from saved ideas` : `Save ${name}`}
        </span>
        {saved ? (
          <BookmarkCheck className="h-4 w-4" aria-hidden />
        ) : (
          <Bookmark className="h-4 w-4" aria-hidden />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => toggleSave(slug)}
      aria-pressed={saved}
      className={`inline-flex items-center justify-center gap-2 rounded-sm border font-medium transition-colors ${
        variant === "quiet" ? "px-3 py-1.5" : "px-3.5 py-2"
      } ${
        saved
          ? "border-forest bg-forest text-ivory hover:bg-forest-deep"
          : "border-line-strong bg-paper text-ink hover:border-forest hover:text-forest"
      } ${variant === "quiet" ? "text-[0.78rem]" : "text-[0.82rem]"}`}
    >
      {saved ? (
        <BookmarkCheck className="h-[15px] w-[15px]" aria-hidden />
      ) : (
        <Bookmark className="h-[15px] w-[15px]" aria-hidden />
      )}
      {saved ? "Saved" : "Save idea"}
    </button>
  );
}