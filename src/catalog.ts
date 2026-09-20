import rawCore from './core-data';
import type { Category } from './site';

export type Input = { key: string; label: string; value: number | string; type?: 'number' | 'date'; step?: number };
export type Tool = { category: Category; group?: string; slug: string; title: string; description: string; op: string; inputs: Input[]; formula: string; unit?: string; params: number[]; featured?: boolean; keywords: string[] };

const core: Tool[] = rawCore.map((item: any) => ({
  category: item.c,
  slug: item.s,
  title: item.t,
  op: item.o,
  inputs: item.i.map((input: any[], index: number) => ({ key: `v${index}`, label: input[0], value: input[1], type: input[2] })),
  formula: item.f,
  unit: item.u,
  params: item.p,
  featured: item.x,
  description: `Calculate ${item.t.replace(' Calculator', '').toLowerCase()} instantly with a transparent formula and editable inputs.`,
  keywords: [item.t.toLowerCase(), item.c, 'free online calculator'],
}));

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
