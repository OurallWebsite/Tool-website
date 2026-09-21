# Phase 3 — Localization and URL readiness

## Active locale coverage

English, German, French, Italian, Japanese, Spanish and Portuguese remain active. Phase 3 adds localized calculator titles, descriptions, long-form headings, instructions, limitations, FAQ questions and trust copy across all 400 tools. Converter and calculator naming use deterministic locale templates so every generated route has consistent metadata and visible copy.

Domain-specific input labels and formulas intentionally remain tied to the canonical calculator model. They require native subject-matter review before terminology changes; silently machine-translating financial, medical or scientific variable names would create a higher correctness risk than retaining the canonical term.

## Localized slug decision

Localized slugs were evaluated but are not migrated on the temporary `pages.dev` origin. Changing 2,800 established route paths before the final custom domain and redirect inventory would create avoidable duplicate and redirect risk. Existing locale-prefixed URLs remain stable and reciprocal hreflang remains valid.

When the final domain is confirmed, migrate one locale at a time using a generated slug manifest, permanent redirects, reciprocal hreflang tests and a no-orphan/no-chain redirect check. This is a deliberate SEO safety gate, not an architectural limitation.

## Arabic evaluation

Arabic is technically feasible: Noto Arabic fonts are available, number formatting works through `Intl`, and calculator forms can support RTL. Activation is deferred until native review is available for finance, health and science terminology. The current seven-locale set remains the quality-controlled production scope.
