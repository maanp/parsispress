# ParsisPress

AI-powered startup opportunity discovery. An editorial-grade frontend prototype
for an early-stage AI product: opportunity explorer, research-brief detail
views, evaluation framework, and an editorial research section.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 with a custom token theme
- Lucide icons
- No backend, no database, no auth, no external API calls

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
npm run lint
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page with product preview, explorer, evaluation framework |
| `/ideas` | Full opportunity explorer (search, filter, sort, save) |
| `/ideas/[slug]` | Opportunity research brief |
| `/industries` | Industry directory |
| `/how-it-works` | Method: discovery, evaluation, validation |
| `/research` | Editorial listing |
| `/research/[slug]` | Article reading view |
| `/about` | Mission, principles, demo suggest-a-problem form |
| `/privacy` · `/terms` | Placeholder legal pages |
| 404 | Custom not-found page |

## Data

All content lives in `src/lib/`:

- `opportunities.ts` — 15 sample opportunity briefs with full research detail
- `industries.ts` — 7 industry categories with theses and signal themes
- `articles.ts` — 6 editorial articles

Every score and insight is illustrative demo content. Nothing in the dataset is
verified market research, and the UI labels it as such throughout.

## Client-side state

Saved opportunities are stored in `localStorage` under
`parsispress.saved-ideas.v1` and stay on the device. Explorer filters mirror
into the URL (`?industry=`, `?view=saved`) so back/forward navigation works.