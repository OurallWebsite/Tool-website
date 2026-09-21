# Phase 2 — Advanced health calculator batch

Status: implemented on `feature/advanced-tool-experience`; not production-live until PR #1 passes build and preview QA.

## Calculators upgraded

### Adult BMI Calculator

- Metric and imperial measurement modes with value-preserving conversion.
- Adult BMI, CDC adult screening category, BMI Prime and the height-based weight range corresponding to BMI 18.5–24.9.
- Explicitly described as an adult screening estimate rather than a direct body-fat or health measurement.
- Adult-only limitation and a link to CDC adult BMI categories.

### BMR Calculator

- Metric and imperial measurement modes.
- Female and male Mifflin–St Jeor equation options.
- Resting energy estimate plus sedentary, light-activity and moderate-activity context values.
- Clear warning that prediction equations estimate averages and can differ from measured energy expenditure.

### TDEE Calculator

- Metric and imperial measurement modes.
- Female and male Mifflin–St Jeor equation options.
- Selectable activity multipliers: 1.2, 1.375, 1.55, 1.725 and 1.9.
- TDEE, BMR and illustrative ±250 kcal planning cases.
- Explicit warning that activity multipliers are broad planning estimates and not prescribed intake targets.

## Shared health experience

- Dedicated advanced-health component selected before the advanced-finance component.
- Unit preference stored in the browser.
- Shareable URLs preserve measurements, units, equation sex and activity factor.
- Reset, copy, share and print/PDF actions.
- Weight sensitivity scenarios at −5%, current and +5%.
- Calculator-specific explanations, limitations and visible methodology references.
- Local browser calculation; measurements are not uploaded.

## Sources

- CDC adult BMI categories: https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html
- Mifflin MD et al., “A new predictive equation for resting energy expenditure in healthy individuals”: https://pubmed.ncbi.nlm.nih.gov/2305711/

## Validation completed

The advanced-health browser script passed TypeScript validation. Independent regression checks passed for:

- BMI: 70 kg and 175 cm = 22.857142857142858.
- Female Mifflin–St Jeor BMR: 70 kg, 175 cm, age 30 = 1,482.75 kcal/day.
- Male Mifflin–St Jeor BMR: the same measurements = 1,648.75 kcal/day.
- Moderate female TDEE at factor 1.55 = 2,298.2625 kcal/day.
- Metric-to-imperial conversion preserved the BMI result.

Full Astro build, schema review, desktop/mobile branch-preview QA and accessibility review remain merge gates.

## Next Phase 2 batch

1. Multi-mode percentage calculator.
2. Advanced age and date calculator.
3. Mortgage amortization table and extra-payment comparison.
4. Construction and business calculator-specific models.
