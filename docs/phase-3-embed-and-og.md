# Phase 3 — Embed and social-card program

## Embeddable calculators

Every calculator can now run in a focused iframe mode by adding `?embed=1`. The localized `/[lang]/embed/` builder lets publishers select any of the 400 tools, preview it and copy a one-line script embed. `public/embed.js` creates a lazy iframe and resizes it from CalcWise postMessage events.

Embed mode removes site navigation, consent UI, ads and long-form page content while preserving the calculator, formulas, browser-local inputs and CalcWise styling. Embedded views receive `noindex,follow` at runtime so canonical calculator pages remain the search target.

The Cloudflare CSP now allows self-hosted preview frames and external sites may frame CalcWise widgets. No camera, microphone or geolocation permission is granted.

## Per-tool social cards

The static build now generates one SVG Open Graph card for every calculator at `/og/{category}/{slug}.svg`. Calculator pages select their card automatically; other pages retain the default image. Cards include the tool name, category, concise description and CalcWise trust line.

## Link acquisition use

Outreach should lead with a specific useful calculator and a ready-to-paste embed, not a generic link request. Suitable targets include teachers, finance educators, home-project blogs, nonprofit resource pages and small-business guides. Keep attribution visible and never pay for manipulative links.
