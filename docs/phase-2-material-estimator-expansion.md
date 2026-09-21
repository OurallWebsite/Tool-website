# Phase 2 — Material estimator expansion

Status: implemented on `feature/advanced-tool-experience`; not production-live until PR #1 passes the full build and branch-preview QA.

## Tile Calculator

- Room length and width in metric or imperial units.
- Measured floor area.
- Configurable waste allowance for cuts, breakage, matching and repairs.
- Waste-adjusted tile requirement.
- Supplier coverage per box.
- Whole-box purchasing quantity rounded up.
- Cost per box and total estimated material cost.

Default regression scenario:

- 20 ft × 10 ft = 200 ft².
- 10% waste = 220 ft² required.
- 15 ft² per box = 15 boxes after rounding up.
- 45 per box = 675 estimated material cost.

## Flooring Calculator

- Room length and width in metric or imperial units.
- Waste-adjusted flooring area.
- Coverage per carton/package.
- Whole-package rounding.
- Price per package and total estimated material cost.

Default regression scenario:

- 25 ft × 20 ft = 500 ft².
- 8% waste = 540 ft² required.
- 22 ft² per package = 25 packages after rounding up.
- 55 per package = 1,375 estimated material cost.

## Gravel Calculator

- Rectangular project dimensions in metric or imperial units.
- Base volume in cubic yards or cubic meters.
- Waste/settlement allowance.
- Waste-adjusted order volume.
- Price per volume unit and estimated material cost.

Default regression scenario:

- 20 ft × 10 ft × 3 in = 1.8518518518518519 yd³.
- 10% allowance = 2.037037037037037 yd³.
- 60 per yd³ = 122.22222222222223 estimated material cost.

## Shared behavior

These estimators reuse the validated advanced construction engine introduced for square footage and concrete:

- Metric/imperial conversion.
- Sixteen display currencies.
- Waste sensitivity scenarios.
- Shareable URLs preserving inputs, units and currency.
- Reset, copy, share and print/PDF actions.
- Browser-local calculation.
- Explicit supplier and field-measurement cautions.

## Validation completed

- Updated advanced data module passed TypeScript validation.
- Tile, flooring and gravel regression checks passed.
- Imperial-to-metric area conversion preserved the same physical 200 ft² project.
- Floating-point comparisons use tolerance before display rounding; whole purchasing units use `Math.ceil`.

The full Astro build, generated-route review, supplier-label preview and responsive/accessibility QA remain merge gates.

## Remaining construction work

1. Paint Calculator with coats and container sizing.
2. Brick Calculator with brick dimensions, mortar joint and waste.
3. Roof Pitch Calculator with pitch ratio, degrees and roof multiplier.
