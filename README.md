# ParsisPress

AI-powered startup opportunity discovery. An editorial-grade frontend prototype
for an early-stage AI product: opportunity explorer, research-brief detail
views, evaluation framework, and an editorial research section.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 with a custom token theme
- Lucide icons
- Static export (`output: "export"`) — deploys to GitHub Pages or any static host
- No backend, no database, no auth, no external API calls

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
npm run typecheck
npm run lint
```

Preview the exported site exactly as a host would serve it:

```bash
npx serve out
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

## Deploying to GitHub Pages

The build is a fully static export to `out/`. GitHub Pages does no URL
rewriting, so a project site (`user.github.io/repo/`) needs the path baked into
every asset URL. `scripts/prepare-deploy.mjs` reads it from the git remote on
each build and writes `.env.local`:

| Remote | Detected base path |
| --- | --- |
| `github.com/you/repo` | `/repo` |
| `github.com/you.github.io` | `` (root) |

You do not need to configure this. `npm run build` handles it.

### Automatic deploys (recommended)

Push to `main`. `.github/workflows/deploy.yml` builds and publishes with the
official Pages actions. Enable it once under **Settings → Pages → Source:
GitHub Actions**.

Optional repository variables (**Settings → Secrets and variables → Actions →
Variables**) override the detected values — useful only for a custom domain:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | e.g. `/repo`, or empty for root |
| `NEXT_PUBLIC_SITE_URL` | e.g. `https://parsispress.com` |

### Manual upload

```bash
git remote add origin https://github.com/YOU/REPO.git   # once
npm run build
```

Then upload the **contents** of `out/` (not the folder itself) to the repo
branch Pages is configured to serve.

If you upload through the GitHub web interface, tick **"Show hidden files"** —
`.nojekyll` starts with a dot and is skipped otherwise. Without it, Jekyll
strips `_next/` and the site renders unstyled. That file is the second, most
common cause of missing CSS.

To force a root layout regardless of the remote: `npm run build:root`.

### Before launching publicly

`hello@parsispress.com` in the footer and legal pages is a placeholder, and
`/terms` is explicitly marked as requiring legal review. Update both first.