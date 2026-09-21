# Phase 2 — Advanced finance calculator batch

Status: implemented on `feature/advanced-tool-experience`; not production-live until PR #1 is reviewed and merged.

## Calculators upgraded

### Mortgage Calculator

Inputs now cover home price, down payment, annual rate, term, property tax, homeowners insurance, HOA, opening PMI rate and extra monthly principal.

Outputs include all-in monthly housing outflow, scheduled principal-and-interest payment, modeled payoff time, total interest and an itemized monthly cost breakdown. PMI is explicitly described as an opening estimate and is not automatically cancelled by the model.

### Loan Calculator

Inputs now cover principal, annual rate, term, upfront fee and extra monthly payment.

Outputs include scheduled payment, payment including extra principal, modeled payoff time, interest, upfront fee and total borrowing cost.

### Compound Interest Calculator

Inputs now cover starting principal, end-of-month contribution, annual return, years and compounding frequency.

Outputs include future value, total contributed, modeled growth and effective annual yield.

### Savings Goal Calculator

Inputs now cover goal balance, current savings, annual return, time to goal and compounding frequency.

Outputs include required monthly contribution, projected current-savings value at the goal date, total deposits and modeled growth.

## Shared Phase 2 behavior

- Dedicated advanced-finance component selected by calculator metadata.
- Sixteen display currencies with browser persistence and locale-aware formatting.
- Explicit denomination-only disclosure; no live FX claim.
- Calculator-specific help text, minimum/maximum constraints and inline validation.
- Shareable URLs preserve every input and selected currency.
- Reset, copy, share and print/PDF actions.
- Lower/current/higher sensitivity scenarios based on the primary input.
- Calculator-specific limitations and finance verification guidance.

## Validation completed

The advanced finance browser script passed TypeScript validation. Independent regression checks passed for:

- Mortgage principal and interest: 360,000 at 6.5% for 360 months = 2,275.444884574675 per month.
- Compound growth: 10,000 principal + 250 monthly at 7% for 10 years = 63,367.81562534059.
- Savings goal: 50,000 goal, 5,000 current, 6% return and 60 months = 619.9760688242721 monthly.

The full Astro build, GitHub Actions result and responsive branch-preview review remain merge gates.

## Next Phase 2 batch

1. BMI, BMR and TDEE with metric/imperial modes, equation choice, reference context and limitations.
2. Percentage calculator with multiple intent modes and percentage-point explanations.
3. Age/date calculator with complete calendar breakdown, next birthday and leap-year handling.
4. Mortgage amortization table and extra-payment comparison, after the first finance UI batch passes preview QA.
