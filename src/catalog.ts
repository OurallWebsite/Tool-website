import rawCore from './core-data';
import type { Category } from './site';

export type Input = { key: string; label: string; value: number | string; type?: 'number' | 'date'; step?: number; min?: number; max?: number; help?: string };
export type Tool = { category: Category; group?: string; slug: string; title: string; description: string; op: string; inputs: Input[]; formula: string; unit?: string; params: number[]; featured?: boolean; keywords: string[]; advanced?: boolean };

const core: Tool[] = rawCore.map((item: any) => ({
  category: item.c, slug: item.s, title: item.t, op: item.o,
  inputs: item.i.map((input: any[], index: number) => ({ key: `v${index}`, label: input[0], value: input[1], type: input[2] })),
  formula: item.f, unit: item.u, params: item.p, featured: item.x,
  description: `Calculate ${item.t.replace(' Calculator', '').toLowerCase()} instantly with a transparent formula and editable inputs.`,
  keywords: [item.t.toLowerCase(), item.c, 'free online calculator'],
}));

const advancedFinance: Record<string, Partial<Tool>> = {
  'mortgage-calculator': {
    op: 'mortgageAdvanced', advanced: true,
    description: 'Estimate the full monthly housing payment, principal and interest, property taxes, insurance, HOA, PMI, extra payments, payoff time and financing cost.',
    inputs: [
      { key:'v0', label:'Home price', value:450000, type:'number', min:1, help:'Purchase price before the down payment.' },
      { key:'v1', label:'Down payment', value:90000, type:'number', min:0, help:'Cash paid upfront; 20% may avoid PMI.' },
      { key:'v2', label:'Annual interest rate (%)', value:6.5, type:'number', min:0, max:100, step:.01, help:'Nominal annual mortgage rate.' },
      { key:'v3', label:'Loan term (years)', value:30, type:'number', min:1, max:50, help:'Scheduled repayment period.' },
      { key:'v4', label:'Annual property tax', value:5400, type:'number', min:0, help:'Estimated yearly property tax.' },
      { key:'v5', label:'Annual home insurance', value:1800, type:'number', min:0, help:'Estimated yearly homeowners insurance.' },
      { key:'v6', label:'Monthly HOA fees', value:0, type:'number', min:0, help:'Monthly association or maintenance dues.' },
      { key:'v7', label:'Annual PMI rate (%)', value:.6, type:'number', min:0, max:10, step:.01, help:'Opening PMI estimate when the down payment is below 20%.' },
      { key:'v8', label:'Extra monthly payment', value:0, type:'number', min:0, help:'Optional extra principal paid each month.' },
    ],
    formula: 'Total monthly = principal and interest + tax/12 + insurance/12 + HOA + estimated PMI + extra principal',
    unit: 'per month', params: [],
    keywords: ['mortgage payment calculator','mortgage with taxes and insurance','PMI calculator','mortgage payoff calculator'],
  },
  'loan-calculator': {
    op: 'loanAdvanced', advanced: true,
    description: 'Calculate scheduled payment, extra-payment payoff time, total interest, fees and total borrowing cost for an installment loan.',
    inputs: [
      { key:'v0', label:'Loan amount', value:25000, type:'number', min:1, help:'Amount borrowed before fees.' },
      { key:'v1', label:'Annual interest rate (%)', value:8.5, type:'number', min:0, max:100, step:.01, help:'Nominal annual interest rate.' },
      { key:'v2', label:'Loan term (years)', value:5, type:'number', min:.08, max:50, step:.01, help:'Scheduled repayment period.' },
      { key:'v3', label:'Upfront fee (%)', value:2, type:'number', min:0, max:100, step:.01, help:'Origination or arrangement fee as a share of principal.' },
      { key:'v4', label:'Extra monthly payment', value:50, type:'number', min:0, help:'Optional amount added to every scheduled payment.' },
    ],
    formula: 'Payment = P × r(1+r)ⁿ ÷ ((1+r)ⁿ−1); borrowing cost = modeled interest + upfront fee',
    unit: 'per month', params: [],
    keywords: ['loan payment calculator','loan payoff calculator','loan with extra payments','total loan cost'],
  },
  'compound-interest-calculator': {
    op: 'compoundAdvanced', advanced: true,
    description: 'Project future value from a starting balance, recurring monthly contributions, interest rate, time and compounding frequency.',
    inputs: [
      { key:'v0', label:'Starting principal', value:10000, type:'number', min:0, help:'Amount invested at the beginning.' },
      { key:'v1', label:'Monthly contribution', value:250, type:'number', min:0, help:'Deposit made at the end of each month.' },
      { key:'v2', label:'Annual return (%)', value:7, type:'number', min:-99, max:1000, step:.01, help:'Expected nominal annual return; not a guarantee.' },
      { key:'v3', label:'Years', value:10, type:'number', min:.08, max:100, step:.01, help:'Investment time horizon.' },
      { key:'v4', label:'Compounds per year', value:12, type:'number', min:1, max:365, help:'Use 1 yearly, 4 quarterly, 12 monthly or 365 daily.' },
    ],
    formula: 'Future value = principal growth + future value of end-of-month contributions using an equivalent monthly rate',
    unit: '', params: [],
    keywords: ['compound interest calculator with contributions','investment growth calculator','future value calculator'],
  },
  'savings-goal-calculator': {
    op: 'savingsGoalAdvanced', advanced: true,
    description: 'Find the monthly contribution required to reach a goal after accounting for current savings, return, time and compounding frequency.',
    inputs: [
      { key:'v0', label:'Savings goal', value:50000, type:'number', min:1, help:'Target balance at the end of the plan.' },
      { key:'v1', label:'Current savings', value:5000, type:'number', min:0, help:'Balance already saved today.' },
      { key:'v2', label:'Annual return (%)', value:6, type:'number', min:-99, max:1000, step:.01, help:'Expected nominal annual return; not a guarantee.' },
      { key:'v3', label:'Years to goal', value:5, type:'number', min:.08, max:100, step:.01, help:'Time available to reach the target.' },
      { key:'v4', label:'Compounds per year', value:12, type:'number', min:1, max:365, help:'Use 1 yearly, 4 quarterly, 12 monthly or 365 daily.' },
    ],
    formula: 'Required monthly contribution = remaining future-value gap ÷ contribution accumulation factor',
    unit: 'per month', params: [],
    keywords: ['savings goal calculator','monthly savings calculator','how much to save each month'],
  },
};
for (const tool of core) if (advancedFinance[tool.slug]) Object.assign(tool, advancedFinance[tool.slug]);

const groups = {
  Length: [['millimeter','mm',.001],['centimeter','cm',.01],['meter','m',1],['kilometer','km',1000],['inch','in',.0254],['foot','ft',.3048],['yard','yd',.9144],['mile','mi',1609.344],['nautical-mile','nmi',1852],['micrometer','µm',1e-6],['nanometer','nm',1e-9]],
  Mass: [['milligram','mg',1e-6],['gram','g',.001],['kilogram','kg',1],['metric-ton','t',1000],['ounce','oz',.028349523125],['pound','lb',.45359237],['stone','st',6.35029318],['us-ton','US ton',907.18474],['carat','ct',.0002]],
  Area: [['square-meter','m²',1],['square-kilometer','km²',1e6],['square-foot','ft²',.09290304],['square-inch','in²',.00064516],['square-yard','yd²',.83612736],['acre','acre',4046.8564224],['hectare','ha',10000],['square-mile','mi²',2589988.110336]],
  Volume: [['milliliter','mL',.001],['liter','L',1],['cubic-meter','m³',1000],['teaspoon','tsp',.00492892159375],['tablespoon','tbsp',.01478676478125],['cup','cup',.2365882365],['pint','pt',.473176473],['gallon','gal',3.785411784]],
  Speed: [['meter-per-second','m/s',1],['kilometer-per-hour','km/h',.2777777778],['mile-per-hour','mph',.44704],['foot-per-second','ft/s',.3048],['knot','kn',.514444],['mach','Mach',343],['speed-of-light','c',299792458]],
} as const;

const converters: Tool[] = [];
for (const [group, units] of Object.entries(groups)) {
  for (const from of units) for (const to of units) if (from[0] !== to[0]) {
    const factor = Number(from[2]) / Number(to[2]);
    converters.push({
      category: 'converters', group, slug: `${from[0]}-to-${to[0]}-converter`, title: `${from[1]} to ${to[1]} Converter`,
      description: `Convert ${from[1]} to ${to[1]} instantly using a standards-based conversion factor.`, op: 'convert',
      inputs: [{ key: 'v0', label: `${from[1]} value`, value: 1, type: 'number' }], formula: `${to[1]} = ${from[1]} × ${factor.toPrecision(10)}`,
      unit: String(to[1]), params: [Number(from[2]), Number(to[2])], keywords: [`${from[1]} to ${to[1]}`, `${from[0]} to ${to[0]}`, `${group} converter`],
    });
  }
}

export const tools = [...core, ...converters];
export const featured = tools.filter((tool) => tool.featured);
export const byCategory = (category: string) => tools.filter((tool) => tool.category === category);
export const findTool = (category: string, slug: string) => tools.find((tool) => tool.category === category && tool.slug === slug);
