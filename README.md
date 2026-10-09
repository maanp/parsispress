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

The build is a fully static export, so `.github/workflows/deploy.yml` publishes
it with the official Pages actions. Enable Pages for the repo first:
**Settings → Pages → Source: GitHub Actions**.

### User or organisation site (served from the domain root)

Push to `main`. Set no repository variables — the defaults target
`https://parsispress.com`.

### Project site (served from `/<repo>`)

Add two repository variables under **Settings → Secrets and variables → Actions
→ Variables**:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | `/your-repo-name` (no trailing slash) |
| `NEXT_PUBLIC_SITE_URL` | `https://your-username.github.io` |

These are read at build time and baked into every asset URL, canonical link,
Open Graph tag, and sitemap entry. Both are verified against a local static
server for root and sub-path layouts.

### Pointing at a custom domain

Change `NEXT_PUBLIC_SITE_URL` to your domain and add a `CNAME` file in
`public/` if you want GitHub to keep serving it after a custom domain is
configured. `src/lib/brand.ts` defaults to `https://parsispress.com`.

### Manual deploy

```bash
npm run build
# then push the contents of out/ to the gh-pages branch
```

### Before launching publicly

`hello@parsispress.com` in the footer and legal pages is a placeholder, and
`/terms` is explicitly marked as requiring legal review. Update both first.