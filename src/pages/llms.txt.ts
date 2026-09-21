import type { APIRoute } from 'astro';
import { tools } from '../catalog';
import { SITE, path } from '../site';

export const GET: APIRoute = () => {
  const inventory = tools.map((tool) => {
    const url = new URL(path('en', `${tool.category}/${tool.slug}`), SITE.domain).toString();
    const keywords = tool.keywords.slice(0, 6).join(', ');
    return `- [${tool.title}](${url}): ${tool.description} Formula: ${tool.formula}. Keywords: ${keywords}.`;
  }).join('\n');
  const body = `# ${SITE.name}

${SITE.name} is a free, multilingual collection of browser-based calculators and unit converters. Each tool page exposes its inputs, formula, method, assumptions, FAQs and related tools. Calculations run locally in the browser; users do not need an account.

## Canonical resources

- Site: ${SITE.domain}
- Calculator directory: ${SITE.domain}/en/tools/
- Editorial policy: ${SITE.domain}/en/editorial-policy/
- Methodology: ${SITE.domain}/en/methodology/

## Calculator inventory

${inventory}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
