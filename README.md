# CalcWise

A category-first, multilingual calculator platform built with Astro for Cloudflare Pages.

## Scope

- 400 functional pages: 64 high-demand calculators and 336 standards-based unit converters
- 9 category hubs and searchable all-tools directory
- 7 locale routes: English, German, French, Italian, Japanese, Spanish and Portuguese
- Per-page canonical, hreflang, Open Graph, JSON-LD, internal links and crawlable static HTML
- AdSense placeholders, consent UI, privacy/terms/cookies/disclaimer, methodology and editorial policy
- No authentication; calculator inputs stay in the browser

## Local development

```bash
npm install
npm run dev
npm run build
```

Cloudflare Pages: build command `npm run build`, output directory `dist`, Node 22.

## Before launch

Replace the domain and email in `src/site.ts`, the site URL in `astro.config.mjs`, and the placeholder publisher ID in `public/ads.txt`. Add the AdSense client only after approval. Have localized legal text reviewed for your target jurisdictions.

## SEO note

Technical optimization improves crawlability and relevance but cannot guarantee rankings. Continue with Search Console submission, original expert-reviewed content, links, performance monitoring and periodic updates.
