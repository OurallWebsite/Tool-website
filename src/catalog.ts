import rawCore from './core-data';
import advancedHealth from './advanced-health-data';
import type { Category } from './site';

export type Input = { key: string; label: string; value: number | string; type?: 'number' | 'date'; step?: number; min?: number; max?: number; help?: string };
export type Tool = { category: Category; group?: string; slug: string; title: string; description: string; op: string; inputs: Input[]; formula: string; unit?: string; params: number[]; featured?: boolean; keywords: string[]; advanced?: boolean; sources?: { label: string; url: string }[] };

const core: Tool[] = rawCore.map((item: any) => ({
  category: item.c, slug: item.s, title: item.t, op: item.o,
  inputs: item.i.map((input: any[], index: number) => ({ key: `v${index}`, label: input[0], value: input[1], type: input[2] })),
  formula: item.f, unit: item.u, params: item.p, featured: item.x,
  description: `Calculate ${item.t.replace(' Calculator', '').toLowerCase()} instantly with a transparent formula and editable inputs.`,
  keywords: [item.t.toLowerCase(), item.c, 'free online calculator'],
}));

const advancedFinance: Record<string, Partial<Tool>> = {
  'roi-calculator': { op:'roiAdvanced', advanced:true, description:'Calculate standard ROI, gain or loss, and annualized ROI from initial cost, final value, and holding period.', inputs:[{key:'v0',label:'Initial investment cost',value:1000,type:'number',min:.01,help:'Total amount invested, including relevant upfront costs.'},{key:'v1',label:'Final value or return',value:1350,type:'number',min:0,help:'Ending value or total return received.'},{key:'v2',label:'Holding period (years)',value:1,type:'number',min:.01,max:100,step:.01,help:'Time held; used for annualized ROI only.'}], formula:'ROI = (final value − initial cost) ÷ initial cost × 100; annualized ROI = (final value ÷ cost)^(1 ÷ years) − 1', unit:'return on investment', params:[], keywords:['ROI calculator','return on investment calculator','annualized ROI calculator','investment gain calculator','marketing ROI calculator'] },
  'discount-calculator': { op:'discountAdvanced', advanced:true, description:'Calculate the sale price, savings amount, and final total after a percentage discount, with optional sales tax.', inputs:[{key:'v0',label:'Original price',value:100,type:'number',min:0.01,help:'Regular price before the discount.'},{key:'v1',label:'Discount rate (%)',value:20,type:'number',min:0,max:100,step:.01,help:'Percentage taken off the original price.'},{key:'v2',label:'Sales tax rate (%)',value:0,type:'number',min:0,max:50,step:.01,help:'Optional tax applied after the discount.'}], formula:'Discount savings = original price × discount rate; sale price = original price − savings; final total = sale price × (1 + tax rate)', unit:'sale price', params:[], keywords:['discount calculator','sale price calculator','percent off calculator','discount percentage calculator','after tax discount calculator','how to calculate a discount'] },
  'tip-calculator': { op:'tipAdvanced', advanced:true, description:'Calculate the tip, tax, total bill, and per-person share from a bill amount, tip rate, tax rate, and group size.', inputs:[{key:'v0',label:'Bill subtotal',value:80,type:'number',min:0.01,help:'Food and drinks before tax and tip.'},{key:'v1',label:'Tip rate (%)',value:18,type:'number',min:0,max:100,step:.01,help:'Tip percentage applied to the bill subtotal.'},{key:'v2',label:'Sales tax rate (%)',value:8,type:'number',min:0,max:50,step:.01,help:'Optional tax rate applied to the bill subtotal.'},{key:'v3',label:'People splitting the bill',value:2,type:'number',min:1,max:100,step:1,help:'Number of people sharing the final total.'}], formula:'Tip = subtotal × tip rate; tax = subtotal × tax rate; total = subtotal + tip + tax; per person = total ÷ people', unit:'total bill', params:[], keywords:['tip calculator','restaurant tip calculator','tip split calculator','bill splitter','18 percent tip calculator','how much should I tip'] },
  'mortgage-calculator': { op:'mortgageAdvanced', advanced:true, description:'Estimate the full monthly housing payment, principal and interest, property taxes, insurance, HOA, PMI, extra payments, payoff time and financing cost.', inputs:[{key:'v0',label:'Home price',value:450000,type:'number',min:1,help:'Purchase price before the down payment.'},{key:'v1',label:'Down payment',value:90000,type:'number',min:0,help:'Cash paid upfront; 20% may avoid PMI.'},{key:'v2',label:'Annual interest rate (%)',value:6.5,type:'number',min:0,max:100,step:.01,help:'Nominal annual mortgage rate.'},{key:'v3',label:'Loan term (years)',value:30,type:'number',min:1,max:50,help:'Scheduled repayment period.'},{key:'v4',label:'Annual property tax',value:5400,type:'number',min:0,help:'Estimated yearly property tax.'},{key:'v5',label:'Annual home insurance',value:1800,type:'number',min:0,help:'Estimated yearly homeowners insurance.'},{key:'v6',label:'Monthly HOA fees',value:0,type:'number',min:0,help:'Monthly association or maintenance dues.'},{key:'v7',label:'Annual PMI rate (%)',value:.6,type:'number',min:0,max:10,step:.01,help:'Opening PMI estimate when the down payment is below 20%.'},{key:'v8',label:'Extra monthly payment',value:0,type:'number',min:0,help:'Optional extra principal paid each month.'}], formula:'Total monthly = principal and interest + tax/12 + insurance/12 + HOA + estimated PMI + extra principal', unit:'per month', params:[], keywords:['mortgage payment calculator','mortgage with taxes and insurance','PMI calculator','mortgage payoff calculator'] },
  'loan-calculator': { op:'loanAdvanced', advanced:true, description:'Calculate scheduled payment, extra-payment payoff time, total interest, fees and total borrowing cost for an installment loan.', inputs:[{key:'v0',label:'Loan amount',value:25000,type:'number',min:1,help:'Amount borrowed before fees.'},{key:'v1',label:'Annual interest rate (%)',value:8.5,type:'number',min:0,max:100,step:.01,help:'Nominal annual interest rate.'},{key:'v2',label:'Loan term (years)',value:5,type:'number',min:.08,max:50,step:.01,help:'Scheduled repayment period.'},{key:'v3',label:'Upfront fee (%)',value:2,type:'number',min:0,max:100,step:.01,help:'Origination or arrangement fee as a share of principal.'},{key:'v4',label:'Extra monthly payment',value:50,type:'number',min:0,help:'Optional amount added to every scheduled payment.'}], formula:'Payment = P × r(1+r)ⁿ ÷ ((1+r)ⁿ−1); borrowing cost = modeled interest + upfront fee', unit:'per month', params:[], keywords:['loan payment calculator','loan payoff calculator','loan with extra payments','total loan cost'] },
  'compound-interest-calculator': { op:'compoundAdvanced', advanced:true, description:'Project future value from a starting balance, recurring monthly contributions, interest rate, time and compounding frequency.', inputs:[{key:'v0',label:'Starting principal',value:10000,type:'number',min:0,help:'Amount invested at the beginning.'},{key:'v1',label:'Monthly contribution',value:250,type:'number',min:0,help:'Deposit made at the end of each month.'},{key:'v2',label:'Annual return (%)',value:7,type:'number',min:-99,max:1000,step:.01,help:'Expected nominal annual return; not a guarantee.'},{key:'v3',label:'Years',value:10,type:'number',min:.08,max:100,step:.01,help:'Investment time horizon.'},{key:'v4',label:'Compounds per year',value:12,type:'number',min:1,max:365,help:'Use 1 yearly, 4 quarterly, 12 monthly or 365 daily.'}], formula:'Future value = principal growth + future value of end-of-month contributions using an equivalent monthly rate', unit:'', params:[], keywords:['compound interest calculator with contributions','investment growth calculator','future value calculator'] },
  'savings-goal-calculator': { op:'savingsGoalAdvanced', advanced:true, description:'Find the monthly contribution required to reach a goal after accounting for current savings, return, time and compounding frequency.', inputs:[{key:'v0',label:'Savings goal',value:50000,type:'number',min:1,help:'Target balance at the end of the plan.'},{key:'v1',label:'Current savings',value:5000,type:'number',min:0,help:'Balance already saved today.'},{key:'v2',label:'Annual return (%)',value:6,type:'number',min:-99,max:1000,step:.01,help:'Expected nominal annual return; not a guarantee.'},{key:'v3',label:'Years to goal',value:5,type:'number',min:.08,max:100,step:.01,help:'Time available to reach the target.'},{key:'v4',label:'Compounds per year',value:12,type:'number',min:1,max:365,help:'Use 1 yearly, 4 quarterly, 12 monthly or 365 daily.'}], formula:'Required monthly contribution = remaining future-value gap ÷ contribution accumulation factor', unit:'per month', params:[], keywords:['savings goal calculator','monthly savings calculator','how much to save each month'] },
};
const advancedConstructionBusiness: Record<string, Partial<Tool>> = {
  'concrete-calculator': { op:'concreteAdvanced', advanced:true, description:'Estimate slab concrete volume, waste-adjusted order quantity and material cost using imperial or metric dimensions.', inputs:[{key:'v0',label:'Length (ft)',value:10,type:'number',min:0,help:'Slab or pour length.'},{key:'v1',label:'Width (ft)',value:10,type:'number',min:0,help:'Slab or pour width.'},{key:'v2',label:'Depth (in)',value:4,type:'number',min:0.1,help:'Concrete thickness before waste.'},{key:'v3',label:'Waste allowance (%)',value:10,type:'number',min:0,max:30,step:.5,help:'Common planning allowance for spillage and site variation.'},{key:'v4',label:'Price per yd³',value:150,type:'number',min:0,help:'Supplier price for the selected volume unit.'}], formula:'Order volume = length × width × depth ÷ 12 ÷ 27 × (1 + waste allowance); cost = order volume × price', unit:'yd³', params:[], keywords:['concrete calculator','how much concrete do I need','concrete yard calculator','slab concrete calculator','concrete waste allowance'] },
};
for (const tool of core) { if (advancedFinance[tool.slug]) Object.assign(tool, advancedFinance[tool.slug]); if (advancedHealth[tool.slug]) Object.assign(tool, advancedHealth[tool.slug]); if (advancedConstructionBusiness[tool.slug]) Object.assign(tool, advancedConstructionBusiness[tool.slug]); }
const highIntentCopy: Record<string, string> = {
  'gpa-calculator': 'Calculate GPA from total quality points and credits on a 4.0, 5.0, or 10.0 grading scale, with transparent weighting and institution-specific caveats.',
  'ohms-law-calculator': 'Solve Ohm’s law from any two common electrical values—voltage, current, resistance, or power—with derived results, formulas, and safe interpretation notes.',
  'simple-interest-calculator': 'Calculate simple interest, total amount, and interest earned or owed from principal, rate, and time.',
  'roi-calculator': 'Calculate standard ROI, investment gain or loss, and annualized ROI from initial cost, final value, and holding period.',
  'discount-calculator': 'Calculate the sale price, savings amount, and final total after a percentage discount.',
  'tip-calculator': 'Calculate a restaurant tip, total bill, and per-person split for any tip rate and group size.',
  'body-fat-calculator': 'Estimate body-fat percentage from BMI and age while exposing the screening equation and its limitations.',
  'ideal-weight-calculator': 'Estimate a height-based reference weight and explain why a healthy target is not one universal number.',
  'water-intake-calculator': 'Estimate a daily water target from body weight and exercise while keeping climate and medical variation visible.',
  'running-pace-calculator': 'Calculate pace, speed, and finish-time relationships from distance and elapsed time.',
  'heart-rate-zone-calculator': 'Estimate training heart-rate zones from age and target intensity using an explicit maximum-heart-rate model.',
  'average-calculator': 'Calculate the arithmetic mean from values, total, and count with transparent sum and item-count context.',
  'ratio-calculator': 'Reduce a ratio, compare its parts, and find equivalent proportions from two values.',
  'pythagorean-theorem-calculator': 'Find a missing side of a right triangle and verify the Pythagorean relationship.',
  'circle-area-calculator': 'Calculate circle area and show the relationship between radius, diameter, and circumference.',
  'triangle-area-calculator': 'Calculate triangle area from base and height with clear square-unit context.',
  'square-root-calculator': 'Find a square root and show the squared check for a non-negative number.',
  'add-days-calculator': 'Add or subtract calendar days from a start date and return the resulting date.',
  'business-days-calculator': 'Count weekdays between two dates while separating Monday–Friday counting from public holidays.',
  'time-duration-calculator': 'Calculate elapsed time between two clock times in hours, minutes, and seconds.',
  'countdown-calculator': 'Count the remaining time until a target date and make the boundary assumption visible.',
  'paint-calculator': 'Estimate paint quantity from surface area, coverage, coats, and purchasable container rounding.',
  'tile-calculator': 'Estimate tiles and boxes from area, tile size, and waste allowance.',
  'flooring-calculator': 'Estimate flooring area, waste allowance, and boxes or planks needed for a project.',
  'gravel-calculator': 'Estimate gravel volume and order quantity for driveways, paths, and landscaping beds.',
  'roof-pitch-calculator': 'Calculate roof slope, pitch ratio, angle, and the roof-surface multiplier from rise and run.',
  'brick-calculator': 'Estimate brick count from wall area and brick face area with practical rounding guidance.',
  'markup-calculator': 'Calculate markup, selling price, margin, and profit per unit from cost and pricing.',
  'cagr-calculator': 'Calculate compound annual growth rate, total growth, and the ending-value relationship.',
  'conversion-rate-calculator': 'Calculate conversion rate, non-converting visitors, and conversions per 1,000 visits.',
  'attendance-calculator': 'Calculate attendance percentage, missed classes, and the effect of attending one more class.',
  'reading-time-calculator': 'Estimate reading time from word count and reading speed in minutes and hours.',
  'words-to-pages-calculator': 'Estimate document pages from word count and words per page with layout assumptions visible.',
  'study-time-calculator': 'Plan weekly study time from course load using an explicit workload heuristic.',
  'force-calculator': 'Calculate force from mass and acceleration using Newton’s second law and SI units.',
  'kinetic-energy-calculator': 'Calculate kinetic energy from mass and velocity and show practical energy units.',
  'potential-energy-calculator': 'Calculate gravitational potential energy from mass, gravity, and height.',
  'electric-power-calculator': 'Calculate electrical power, energy per hour, and resistance from voltage and current.',
  'density-calculator': 'Calculate density, specific volume, and the relationship between mass and volume.',
  'molarity-calculator': 'Calculate solution molarity from moles and liters and show millimolar concentration.',
  'wave-speed-calculator': 'Calculate wave speed from frequency and wavelength and show the period relationship.',
};
const categoryCopy: Record<string, string> = {
  finance: 'Model the financial result with transparent inputs, formula, assumptions, and planning context.',
  health: 'Estimate the health metric for education and planning; it is not a diagnosis or individualized medical advice.',
  math: 'Solve the mathematical relationship and expose the formula, inputs, and result interpretation.',
  'date-time': 'Calculate the date or time relationship with explicit boundary and calendar assumptions.',
  construction: 'Estimate materials or dimensions with practical rounding, waste, and site-condition limitations.',
  business: 'Model the business metric with explicit inputs, scenario context, and assumptions.',
  education: 'Calculate the academic result with transparent weights, units, and institution-specific limitations.',
  science: 'Solve the scientific relationship with named variables, units, and significant-figure guidance.',
};
const coreSources: Record<string, { label: string; url: string }[]> = {
  'mortgage-calculator': [{ label: 'Fannie Mae mortgage calculator guidance', url: 'https://yourhome.fanniemae.com/calculators-resources/mortgage-calculator' }],
  'discount-calculator': [{ label: 'Calculator.net discount calculator reference', url: 'https://www.calculator.net/discount-calculator.html' }],
  'tip-calculator': [{ label: 'TipCalculator.org tipping guidance', url: 'https://tipcalculator.org/' }],
  'compound-interest-calculator': [{ label: 'Investor.gov compound interest calculator', url: 'https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator' }],
  'bmi-calculator': [{ label: 'CDC Adult BMI Calculator and categories', url: 'https://www.cdc.gov/bmi/adult-calculator/index.html' }],
  'percentage-calculator': [{ label: 'Pearson percentage formulas and examples', url: 'https://www.pearson.com/channels/calculators/percentage-calculator' }],
  'age-calculator': [{ label: 'Pearson exact age calculator reference', url: 'https://www.pearson.com/channels/calculators/age-calculator' }],
  'date-difference-calculator': [{ label: 'Timeanddate date-duration reference', url: 'https://www.timeanddate.com/date/duration.html' }],
  'concrete-calculator': [{ label: 'Concrete volume and waste guidance', url: 'https://concrete-calcs.com/' }],
  'profit-margin-calculator': [{ label: 'BDC net profit margin guidance', url: 'https://www.bdc.ca/en/articles-tools/entrepreneur-toolkit/financial-tools/net-profit-margin' }],
  'gpa-calculator': [{ label: 'Pearson GPA scale and quality-points reference', url: 'https://www.pearson.com/channels/calculators/gpa-calculator' }],
  'ohms-law-calculator': [{ label: "DigiKey Ohm's Law calculator reference", url: 'https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-ohms' }],
};
for (const tool of core) {
  const baseName = tool.title.replace(' Calculator', '').toLowerCase();
  const copy = highIntentCopy[tool.slug] || `${baseName[0].toUpperCase()}${baseName.slice(1)} calculator with visible formula, assumptions, and result context.`;
  if (!tool.advanced) tool.description = copy;
  if (tool.slug === 'ohms-law-calculator') tool.formula = 'Choose any two of V, I, R, or P; derive the missing value with Ohm’s law and the power relationships.';
  if (tool.slug === 'gpa-calculator') tool.formula = 'GPA = total quality points ÷ attempted credits; interpret the result on the selected institutional scale.';
  if (coreSources[tool.slug]) tool.sources = coreSources[tool.slug];
  const phrase = tool.slug.replace(/-calculator$/, '').replaceAll('-', ' ');
  tool.keywords = [...new Set([`${phrase} calculator`, `how to calculate ${phrase}`, `${phrase} formula`, `${tool.category} calculator`, ...tool.keywords])];
}

const groups = {
  Length: [['millimeter','mm',.001],['centimeter','cm',.01],['meter','m',1],['kilometer','km',1000],['inch','in',.0254],['foot','ft',.3048],['yard','yd',.9144],['mile','mi',1609.344],['nautical-mile','nmi',1852],['micrometer','µm',1e-6],['nanometer','nm',1e-9]],
  Mass: [['milligram','mg',1e-6],['gram','g',.001],['kilogram','kg',1],['metric-ton','t',1000],['ounce','oz',.028349523125],['pound','lb',.45359237],['stone','st',6.35029318],['us-ton','US ton',907.18474],['carat','ct',.0002]],
  Area: [['square-meter','m²',1],['square-kilometer','km²',1e6],['square-foot','ft²',.09290304],['square-inch','in²',.00064516],['square-yard','yd²',.83612736],['acre','acre',4046.8564224],['hectare','ha',10000],['square-mile','mi²',2589988.110336]],
  Volume: [['milliliter','mL',.001],['liter','L',1],['cubic-meter','m³',1000],['teaspoon','tsp',.00492892159375],['tablespoon','tbsp',.01478676478125],['cup','cup',.2365882365],['pint','pt',.473176473],['gallon','gal',3.785411784]],
  Speed: [['meter-per-second','m/s',1],['kilometer-per-hour','km/h',.2777777778],['mile-per-hour','mph',.44704],['foot-per-second','ft/s',.3048],['knot','kn',.514444],['mach','Mach',343],['speed-of-light','c',299792458]],
} as const;
const converters: Tool[] = [];
for (const [group, units] of Object.entries(groups)) for (const from of units) for (const to of units) if (from[0] !== to[0]) {
  const factor = Number(from[2]) / Number(to[2]);
  const inverse = 1 / factor;
  const fromName = String(from[0]).replaceAll('-', ' ');
  const toName = String(to[0]).replaceAll('-', ' ');
  converters.push({
    category: 'converters',
    group,
    slug: `${from[0]}-to-${to[0]}-converter`,
    title: `${from[1]} to ${to[1]} Converter`,
    description: `Convert ${from[1]} (${fromName}) to ${to[1]} (${toName}) using an exact ${group.toLowerCase()} conversion factor. See the forward and inverse factors, a worked 1-unit example, and practical precision guidance.`,
    op: 'convert',
    inputs: [{ key: 'v0', label: `${from[1]} value`, value: 1, type: 'number', min: 0, help: `Enter a value in ${from[1]} (${fromName}).` }],
    formula: `1 ${from[1]} = ${factor.toPrecision(10)} ${to[1]}; reverse: 1 ${to[1]} = ${inverse.toPrecision(10)} ${from[1]}`,
    unit: String(to[1]),
    params: [Number(from[2]), Number(to[2])],
    keywords: [`${from[1]} to ${to[1]} converter`, `${fromName} to ${toName} conversion`, `how many ${to[1]} in a ${from[1]}`, `${group.toLowerCase()} conversion`],
  });
}
export const tools=[...core,...converters];export const featured=tools.filter(tool=>tool.featured);export const byCategory=(category:string)=>tools.filter(tool=>tool.category===category);export const findTool=(category:string,slug:string)=>tools.find(tool=>tool.category===category&&tool.slug===slug);
