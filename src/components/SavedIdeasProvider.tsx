"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type SavedContextValue = {
  saved: string[];
  isSaved: (slug: string) => boolean;
  toggleSave: (slug: string) => boolean;
  removeSave: (slug: string) => void;
  clearAll: () => void;
  hydrated: boolean;
};

const SavedContext = createContext<SavedContextValue | null>(null);

const STORAGE_KEY = "parsispress.saved-ideas.v1";

export function SavedIdeasProvider({ children }: { children: React.ReactNode }) {
  const [saved, setSaved] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setSaved(parsed.filter((v): v is string => typeof v === "string"));
        }
      }
    } catch {
      // Storage unavailable (private mode, blocked cookies) — fall back to
      // in-memory state for the session only.
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: string[]) => {
    setSaved(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore write failures; the session list still works in memory.
    }
  }, []);

  const toggleSave = useCallback(
    (slug: string) => {
      let nowSaved = false;
      setSaved((current) => {
        const exists = current.includes(slug);
        nowSaved = !exists;
        const next = exists
          ? current.filter((item) => item !== slug)
          : [slug, ...current];
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          // Ignore write failures.
        }
        return next;
      });
      return nowSaved;
    },
    [],
  );

  const removeSave = useCallback(
    (slug: string) => {
      persist(saved.filter((item) => item !== slug));
    },
    [persist, saved],
  );

  const clearAll = useCallback(() => persist([]), [persist]);

  const value = useMemo<SavedContextValue>(
    () => ({
      saved,
      isSaved: (slug: string) => saved.includes(slug),
      toggleSave,
      removeSave,
      clearAll,
      hydrated,
    }),
    [saved, toggleSave, removeSave, clearAll, hydrated],
  );

  return (
    <SavedContext.Provider value={value}>{children}</SavedContext.Provider>
  );
}

export function useSavedIdeas(): SavedContextValue {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error("useSavedIdeas must be used within SavedIdeasProvider");
  }
  return context;
}