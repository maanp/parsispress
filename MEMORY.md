# ParsisPress — Build State

## What this is

A production-quality frontend for **ParsisPress**, an AI-powered startup
opportunity discovery product (domain: parsispress.com). No backend, no auth, no
database, no API routes. All content is local demo data in `src/lib/`.

## Stack

- Next.js 15.5 (App Router) · React 19 · TypeScript strict
- Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`, no config file)
- lucide-react for icons
- Fonts: Fraunces (editorial serif) + Inter (UI), via `next/font`

## Commands

```bash
npm run dev        # localhost:3000
npm run build      # 37 static routes
npm run lint
npm run typecheck
```

All four pass clean as of the last run.

## Routes

| Route | File |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/ideas` | `src/app/ideas/page.tsx` |
| `/ideas/[slug]` | `src/app/ideas/[slug]/page.tsx` (15 SSG pages) |
| `/industries` | `src/app/industries/page.tsx` |
| `/how-it-works` | `src/app/how-it-works/page.tsx` |
| `/research` | `src/app/research/page.tsx` |
| `/research/[slug]` | `src/app/research/[slug]/page.tsx` (6 SSG pages) |
| `/about` | `src/app/about/page.tsx` |
| `/privacy`, `/terms` | via `src/components/LegalPage.tsx` |
| 404 | `src/app/not-found.tsx` |
| OG image | `src/app/opengraph-image.tsx` (generated PNG) |
| Icons | `src/app/icon.svg`, `src/app/apple-icon.tsx` |

## Data files

- `src/lib/industries.ts` — 7 categories with thesis + signals
- `src/lib/opportunities.ts` — 15 full research briefs with 6-dimension scores
- `src/lib/articles.ts` — 6 editorial essays
- `src/lib/brand.ts` — brand colours + site URL, shared with the OG image

## Key components

`SiteHeader`, `MobileNavigation` (portalled to `document.body`), `SiteFooter`,
`IdeaExplorer`, `OpportunityCard`/`OpportunityListRow`, `OpportunityDetail`
(drawer), `OpportunityFeedPreview`, `OpportunityScore` (pip / breakdown /
profile), `IndustryBadge`, `ResearchCard`, `SectionHeading`, `EmptyState`,
`DemoNotice`, `CopyButton`, `SaveButton`, `SavedIdeasProvider`,
`SuggestIdeaForm`, `LegalPage`, `Wordmark`.

## Client-side state

- Saved ideas: `localStorage` key `parsispress.saved-ideas.v1`
- Explorer filters mirror to URL: `?industry=<slug>`, `?view=saved`
- `useSearchParams` components are wrapped in `<Suspense>`

## Design tokens

ivory `#F7F5F0` · paper `#FBFAF7` · ink `#171916` · muted `#6B7068` ·
forest `#244B3B` · forest-dark `#131C17` · lime `#C8D84A` · line `#E5E2D9` ·
clay `#A4562F`

## Verification already done

Headless Chrome via CDP (no browser MCP was available):
- 0 layout overflows across 26 viewport checks (360→1920px)
- Search, filter, sort, view toggle, save/unsave, localStorage persistence,
  saved-only view, drawer + Escape + focus trap, mobile nav, form validation
  all confirmed working
- 11-route a11y audit: one `h1` per page, no unnamed controls, no empty hrefs
- Only console error across the site is the intentional 404 on `/does-not-exist`

## Content rules (do not break these)

Every score, insight, thesis, and article is **illustrative demo data**. The UI
labels it as such in the footer, on each brief, on the legal pages, and in the
research section. Do not add real customers, traction, revenue, funding,
citations, or empirical findings. Terms/privacy are placeholders marked for
legal review.

## Deployment

Not yet deployed. Vercel is the natural target (zero-config Next.js static
export works as-is). No provider config or credentials are in the repo.