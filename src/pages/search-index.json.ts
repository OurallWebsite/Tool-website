import type { APIRoute } from 'astro';
import { tools } from '../catalog';

export const GET: APIRoute = () => new Response(
  JSON.stringify(tools.map(({ category, slug, title, description, keywords }) => ({ category, slug, title, description, keywords }))),
  { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } },
);
