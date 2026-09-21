# Phase 2 — Construction and business calculator batch

Status: implemented on `feature/advanced-tool-experience`; not production-live until PR #1 passes the full build and branch-preview QA.

## Square Footage Calculator

- Imperial and metric measurement modes.
- Base rectangular area.
- Configurable waste allowance.
- Waste-adjusted required area.
- Supplier coverage per package.
- Whole-package rounding.
- Cost per package and estimated total material cost.
- Unit switching converts dimensions and package coverage while preserving the physical project.

## Concrete Calculator

- Imperial dimensions: feet, feet and inches; result in cubic yards.
- Metric dimensions: meters, meters and centimeters; result in cubic meters.
- Configurable waste allowance.
- Waste-adjusted order volume.
- Price per cubic yard or cubic meter and estimated material cost.
- Unit switching converts dimensions and the per-volume price to preserve the modeled project cost.

## Profit Margin Calculator

- Revenue, cost of goods sold and operating-expense inputs.
- Gross profit and gross margin.
- Net profit and net margin.
- Markup relative to COGS.
- Revenue sensitivity cases at −10%, base and +10%.
- Clear exclusion note for taxes, financing costs, owner compensation and other unentered items.

## Break-even Calculator

- Fixed costs, selling price, variable cost and target-profit inputs.
- Contribution margin per unit.
- Contribution-margin ratio.
- Break-even units and break-even revenue.
- Target-profit units and target revenue.
- Selling-price sensitivity cases at −10%, base and +10%.
- Explicit not-viable state when price does not exceed variable cost.

## Shared behavior

- Dedicated construction/business component.
- Sixteen display currencies with denomination-only disclosure.
- Construction unit preference and currency preference.
- Field-level help and validation.
- Shareable URLs preserve inputs, units and currency.
- Reset, copy, share and print/PDF actions.
- Scenario comparisons and itemized calculation breakdowns.
- Browser-local calculation; inputs are not uploaded.

## Validation completed

The construction/business browser script passed TypeScript validation. Independent regression checks passed for:

- 20 ft × 15 ft = 300 ft².
- 10% waste = 330 ft² required.
- 20 ft²/package = 17 packages after rounding up.
- 35 per package = 595 estimated cost.
- 10 ft × 10 ft × 4 in = 1.2345679012345678 yd³.
- 10% concrete waste = 1.3580246913580247 yd³.
- At 150/yd³, estimated concrete cost = 203.7037037037037.
- Revenue 10,000, COGS 6,500 and operating expenses 1,200 = 35% gross margin and 23% net margin.
- Fixed costs 10,000, price 50 and variable cost 30 = 500 break-even units.
- Adding a 5,000 target profit = 750 target units.
- Imperial-to-metric area conversion preserved the same 300 ft² physical area.

The full Astro build, route-generation review, supplier-unit UX review and responsive/accessibility preview QA remain merge gates.

## Next Phase 2 batch

1. Paint, tile, flooring, gravel and brick calculator-specific models.
2. Markup, CAGR, CAC, CLV, conversion-rate and inventory-turnover models.
3. Education calculator-specific models.
4. Science calculator-specific models and unit selection.
