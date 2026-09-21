# CalcWise upgrade status — 21 September 2026

## Source of truth

- Repository: `OurallWebsite/Tool-website`
- Production branch: `main`
- Active branch: `feature/advanced-tool-experience`
- Review: PR #1 — `Add advanced analytics and comprehensive tool pages`
- Production origin: `https://tool-website-ayu.pages.dev`
- Current inventory: 64 core calculators + 336 directional converters = 400 tools
- Locales: English, German, French, Italian, Japanese, Spanish, Portuguese

Nothing in this document means that the active branch is production-live. Merge only after automated checks and branch-preview QA pass.

## Research applied

### Omni Calculator

The reviewed mortgage, BMI and percentage pages consistently combine a tool-first layout with substantial task-specific explanation.

- Mortgage: total payment, interest, payoff, PMI and other housing costs; payment-frequency scenarios; graphs; amortization explanation; formula; usage steps; authorship/review; related tools.
- BMI: formula, adult reference bands, BMI Prime, limitations, healthy-weight context, specialist tools, sources and medical authorship.
- Percentage: several intent modes on one page, rearranged formulas, practical examples, percentage-point clarification and FAQs.

### Other ranking/quality references

- Bankrate mortgage exposes home price, down payment, rate, term, taxes, insurance, HOA, PMI, PITI and total-cost interpretation.
- Google helpful-content guidance favors original, substantial, comprehensive, trustworthy, people-first task completion with clear who/how/why.
- Google structured-data guidance requires markup to describe visible content; schema is not a replacement for useful page content.
- Calculator/dashboard design patterns support the hierarchy inputs → primary result → secondary KPIs → visual comparison → explanation → next action.

## Implemented on the active branch

### Shared calculator workspace

- Live recalculation.
- Operation-aware result interpretation and secondary KPI cards.
- Normalized input/result bars with an explicit cross-unit caveat.
- Replaced the ambiguous generic result signal with first-input ±10% sensitivity reporting.
- Lower/current/higher scenario rows.
- Reset, Share, Copy Result, and Print/PDF actions.
- Input values and selected currency are encoded in shared URLs so scenarios reopen correctly.
- Required and finite-number validation, inline errors and `aria-invalid`.
- Responsive controls and 44 px mobile action targets.

### Currency preference

Finance and business calculators now support 16 display currencies:

USD, EUR, GBP, INR, AED, AUD, CAD, JPY, CNY, BRL, MXN, SGD, CHF, ZAR, NGN and PKR.

The preference is stored in the browser and uses locale-aware formatting. It changes denomination and formatting only; it does not perform or claim live foreign-exchange conversion.

### Calculator-page content and SEO structure

Every generated calculator page now includes:

1. Quick answer and purpose.
2. What the calculator tells the user.
3. Visible formula and calculation method.
4. Step-by-step usage instructions.
5. A generated “What each input means” glossary.
6. Worked default input set.
7. Result, KPI, chart and sensitivity interpretation.
8. Assumptions and limitations.
9. Visible FAQs.
10. Accuracy, privacy and methodology section.
11. Related-calculator links.

The visible FAQs remain aligned with FAQPage structured data. WebApplication and BreadcrumbList markup remain in place.

### Technical quality

- Added `.github/workflows/quality.yml`.
- Workflow installs dependencies, runs `npm run check`, then runs `npm run build`.
- The calculator browser script passed standalone TypeScript validation with ES2022 and DOM libraries before commit.
- Canonical/sitemap origin is set to the production Cloudflare domain.

## Changed files

- `src/components/Calculator.astro`
- `src/styles/calculator-preferences.css`
- `src/pages/[lang]/[category]/[slug].astro`
- `.github/workflows/quality.yml`
- Existing PR files for global/detail styling and canonical configuration

Key upgrade commits:

- `1f2cd9e` — currency preferences, shareable scenarios and validation
- `1f1190a` — automated Astro quality workflow
- `0a41fa2` — input glossaries and clearer currency/content guidance

## Known limitations

The shared platform is now stronger, but it does not make all 400 calculators expert-grade.

- Many high-intent calculators still use minimum input models.
- Currency is a display denomination, not live FX.
- Metric/imperial preferences are not yet generalized.
- Generic generated prose still needs calculator-specific depth.
- Health and finance pages do not yet include named expert reviewers or complete source metadata.
- Existing non-English routes still need human-quality localization review.
- GitHub API access used in this work could not read check-run results (403), so the Actions result and Cloudflare preview must be inspected before merge.

## Tier-1 calculator backlog

1. Mortgage: home price, down payment, term, rate, taxes, insurance, PMI, HOA, extra payments, payoff date, amortization table and total cost.
2. Loan: fees, APR comparison, payment schedule, extra-payment scenarios and payoff chart.
3. Compound interest and savings: contribution timing, frequency, inflation, tax assumptions and year-by-year table.
4. BMI: metric/imperial modes, BMI Prime, adult reference range, healthy-weight range, limitations and authoritative sources.
5. BMR/TDEE: sex-specific equations, activity levels, goal ranges and equation selection.
6. Percentage: multiple query modes, percentage-point explanation and formula rearrangements.
7. Age/date: years/months/days, total units, next birthday, leap-year and inclusivity handling.
8. Construction: units, package sizes, waste allowance, cost estimate and practical rounding.
9. Profit margin/break-even: fixed/variable cost depth, contribution margin and scenarios.
10. GPA/final exam: reusable course rows, grading scales and institution rules.
11. Force/Ohm’s law: unit selectors, equation variants and scientific notation.
12. High-demand converters: grouped unit selector, precision control, swap and common reference values.

## Release checklist

- [ ] Confirm GitHub Actions `Quality checks` passes.
- [ ] Inspect representative finance, health, date, construction and converter pages.
- [ ] Test at desktop and approximately 390 px width.
- [ ] Verify empty, zero, negative, extreme and date boundary inputs.
- [ ] Confirm share URLs restore every field and currency.
- [ ] Confirm visible FAQs match FAQPage JSON-LD.
- [ ] Check canonical, sitemap and internal links.
- [ ] Review Cloudflare preview before merging PR #1.

## Documentation sync note

The intended Notion updates could not be applied because the connected Notion account returned a missing `content_only_editor` permission error. This repository document preserves the verified handoff until edit access is granted; after access is restored, sync these sections into the CalcWise hub, PRD, Implementation Plan, Current Build & Handoff, Quality Standard and Competitive SEO Research pages without deleting their existing history.
