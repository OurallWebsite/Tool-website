import type { APIRoute } from 'astro';
import { SITE } from '../site';

export const GET: APIRoute = () => new Response(`User-agent: *
Allow: /

User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${SITE.domain}/sitemap-index.xml
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
