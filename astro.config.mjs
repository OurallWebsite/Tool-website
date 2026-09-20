import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://tool-website-ayu.pages.dev',output:'static',integrations:[sitemap()],build:{format:'directory'},compressHTML:true});
