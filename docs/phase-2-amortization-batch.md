# Phase 2 — Amortization and extra-payment batch

Status: implemented on `feature/advanced-tool-experience`; not production-live until PR #1 passes the full build and preview QA.

## Mortgage Calculator additions

- Year-by-year amortization schedule based on monthly principal-and-interest calculations.
- Principal paid, interest paid and ending balance for every loan year.
- Baseline payoff without extra principal compared with the entered extra-payment scenario.
- Modeled payoff time, time saved and interest saved.
- The final partial loan year is retained instead of being dropped.
- Schedule totals reconcile to modeled principal and interest.

The amortization table intentionally excludes property tax, homeowners insurance, HOA, PMI and other fees. Those values remain visible in the all-in monthly housing estimate but are not loan principal or interest.

## Loan Calculator additions

- The same yearly amortization schedule and extra-payment comparison.
- Upfront fee remains part of total borrowing-cost reporting but is not amortized unless the user treats it as financed principal in the loan amount.
- Scheduled payment and extra principal remain separated in the cost breakdown.

## Shared behavior

- Amortization section appears only for mortgage and installment-loan tools.
- Currency preference updates the schedule and comparison values.
- Shareable URLs preserve the extra-payment scenario.
- Tables are horizontally scrollable on narrow screens and included in print/PDF output.
- Principal-and-interest methodology and exclusions are displayed below the schedule.

## Validation completed

The updated advanced-finance browser script passed TypeScript validation. A 360,000 loan at 6.5% for 30 years produced:

- Scheduled principal-and-interest payment: 2,275.444884574675 per month.
- Baseline payoff: 360 months.
- Payoff with 200 extra per month: 287 months.
- Time saved: 73 months.
- Baseline interest: 459,160.15844687633.
- Interest with extra payment: 350,243.3078583241.
- Modeled interest saved: 108,916.85058855225.
- 24 yearly/final-partial schedule rows.

Regression checks also confirmed:

- Yearly principal totals reconcile to the original 360,000 principal within one cent.
- Yearly interest totals reconcile to modeled total interest within one cent.
- Final modeled balance is zero within one cent.
- Extra payments reduce both payoff time and total interest.

The full Astro build, branch-preview table review, print review and responsive/accessibility QA remain merge gates.

## Next Phase 2 batch

1. Construction calculators with unit choices, waste, package rounding and estimated cost.
2. Profit-margin and break-even calculators with scenarios.
3. Education calculator-specific models.
4. Science calculator-specific models and unit selection.
