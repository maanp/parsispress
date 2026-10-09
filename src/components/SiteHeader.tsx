import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { MobileNavigation, type NavLink } from "./MobileNavigation";

const navLinks: NavLink[] = [
  { href: "/ideas", label: "Explore Ideas" },
  { href: "/industries", label: "Industries" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/92 backdrop-blur-[6px]">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-7 lg:px-10">
        <Link
          href="/"
          className="shrink-0 rounded-xs"
          aria-label="ParsisPress — home"
        >
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="label-editorial inline-block py-2 text-ink-70 transition-colors hover:text-forest"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/ideas"
            className="hidden rounded-sm bg-forest px-4 py-2.5 text-[0.82rem] font-medium tracking-[0.01em] text-ivory transition-colors hover:bg-forest-deep sm:inline-flex"
          >
            Explore the platform
          </Link>
          <MobileNavigation links={navLinks} />
        </div>
      </div>
    </header>
  );
}

export { navLinks };