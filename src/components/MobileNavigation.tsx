"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export type NavLink = { href: string; label: string };

export function MobileNavigation({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", () => setOpen(false));

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line-strong text-ink transition-colors hover:border-forest hover:text-forest lg:hidden"
      >
        <span className="sr-only">
          {open ? "Close navigation menu" : "Open navigation menu"}
        </span>
        {open ? (
          <X className="h-[18px] w-[18px]" aria-hidden />
        ) : (
          <Menu className="h-[18px] w-[18px]" aria-hidden />
        )}
      </button>

      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[90] lg:hidden">
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-ink/30 backdrop-blur-[2px]"
            />
            <div
              ref={panelRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="absolute inset-x-0 top-0 flex max-h-full flex-col overflow-y-auto overscroll-contain border-b border-line bg-ivory shadow-raise"
            >
              <div className="flex shrink-0 items-center justify-between px-5 py-4 sm:px-7">
                <span className="label-editorial text-muted">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line-strong text-ink"
                >
                  <span className="sr-only">Close navigation menu</span>
                  <X className="h-[18px] w-[18px]" aria-hidden />
                </button>
              </div>
              <nav aria-label="Mobile" className="shrink-0 border-t border-line">
                <ul className="divide-y divide-line">
                  {links.map((link, index) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="serif-display flex items-center justify-between px-5 py-4 text-[1.35rem] text-ink sm:px-7"
                      >
                        {link.label}
                        <span aria-hidden className="label-editorial text-muted-2">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="shrink-0 border-t border-line px-5 py-5 sm:px-7">
                <Link
                  href="/ideas"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-sm bg-forest px-4 py-3.5 text-[0.9rem] font-medium text-ivory"
                >
                  Explore the platform
                </Link>
                <p className="mt-3 text-center text-[0.72rem] text-muted-2">
                  Demo environment — sample opportunities only.
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}