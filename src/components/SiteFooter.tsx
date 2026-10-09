import Link from "next/link";
import { navLinks } from "./SiteHeader";
import { Wordmark } from "./Wordmark";
import { contactEmail } from "@/lib/brand";

const productLinks = [
  { href: "/ideas", label: "Opportunity explorer" },
  { href: "/industries", label: "Industry directory" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/research", label: "Research" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/about#mission", label: "Mission" },
  { href: "/ideas?view=saved", label: "Saved ideas" },
];

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-12 md:py-16">
          <div className="md:col-span-5">
            <Wordmark />
            <p className="mt-4 max-w-sm text-[0.94rem] leading-relaxed text-muted">
              An AI-powered opportunity engine for founders. ParsisPress turns
              emerging market signals, overlooked customer problems, and new
              technologies into structured startup opportunities worth
              researching.
            </p>
          </div>

          <nav aria-label="Platform" className="md:col-span-2">
            <h2 className="label-editorial text-muted-2">Platform</h2>
            <ul className="mt-3 space-y-1">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-[0.92rem] text-ink-70 underline-link transition-colors hover:text-forest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="md:col-span-2">
            <h2 className="label-editorial text-muted-2">Company</h2>
            <ul className="mt-3 space-y-1">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-[0.92rem] text-ink-70 underline-link transition-colors hover:text-forest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="label-editorial text-muted-2">Contact</h2>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-70">
              Questions, feedback, or an opportunity you think we should look
              at — all welcome.
            </p>
            <p className="mt-3 text-[0.92rem] leading-relaxed">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-block py-1 underline-link transition-colors hover:text-forest"
              >
                {contactEmail}
              </a>
            </p>
            <div className="mt-6 border-t border-line pt-5">
              <p className="label-editorial text-muted-2">Legal</p>
              <ul className="mt-2 flex flex-wrap gap-x-4">
                <li>
                  <Link
                    href="/privacy"
                    className="inline-block py-1.5 text-[0.86rem] text-ink-70 underline-link transition-colors hover:text-forest"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="inline-block py-1.5 text-[0.86rem] text-ink-70 underline-link transition-colors hover:text-forest"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 text-[0.75rem] text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} ParsisPress. All rights reserved.</p>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {navLinks
                .filter((link) => link.href !== "/")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 transition-colors hover:text-forest"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}