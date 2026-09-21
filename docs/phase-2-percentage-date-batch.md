# Phase 2 — Percentage and date calculator batch

Status: implemented on `feature/advanced-tool-experience`; not production-live until PR #1 passes the full build and branch-preview QA.

## Percentage Calculator

The calculator now supports six modes:

1. What is A% of B?
2. A is what percent of B?
3. A is B% of what base value?
4. Increase A by B%.
5. Decrease A by B%.
6. Percentage-point difference from A% to B%.

Each mode changes the formula, interpretation and supporting metrics. The percentage-point mode also reports relative change when the starting percentage is non-zero.

## Percentage Change Calculator

- Relative change from old value to new value.
- Absolute change.
- New-to-old multiplier.
- Percentage-point difference mode.
- Reverse-change mode for recovering a starting value from a final value and rate.
- Explicit explanation that percentage points and relative percent change are different measures.

## Age Calculator

- Exact calendar age in complete years, months and remaining days.
- Total elapsed days and whole weeks.
- Next birthday date and countdown.
- Birth-date and as-of-date weekdays.
- Validation prevents an as-of date earlier than the birth date.
- Month/year arithmetic clamps month-end and leap-day values instead of relying on raw millisecond division.

## Date Difference Calculator

- Calendar interval in years, months and days.
- Total days.
- Whole weeks plus remaining days.
- Monday–Friday count, explicitly excluding public-holiday logic.
- Exclusive and inclusive boundary-counting modes.
- Reversed-date detection and normalized earlier/later dates.
- UTC calendar arithmetic to avoid daylight-saving-hour distortions.

## Shared behavior

- Dedicated advanced math/date component.
- Calculation-mode and counting-convention selectors.
- Shareable URLs preserve inputs and selected options.
- Reset, copy, share and print/PDF actions.
- Visible formula and explanation for the selected mode.
- Local browser calculation; inputs are not uploaded.

## Validation completed

The advanced percentage/date browser script passed TypeScript validation. Independent regression checks passed for:

- 20% of 150 = 30.
- 20 is 13.333333333333334% of 150.
- Change from 80 to 100 = 25%.
- Age from 1993-06-15 through 2026-09-20 = 33 years, 3 months and 5 days.
- 2026-01-01 through 2026-09-20 = 262 exclusive days or 263 inclusive days.

The full Astro build, generated-route review, desktop/mobile preview and accessibility QA remain merge gates.

## Next Phase 2 batch

1. Mortgage amortization table and extra-payment comparison.
2. Construction calculators with units, waste, package rounding and cost.
3. Profit-margin and break-even calculators with scenarios.
4. Education and science calculator-specific models.
