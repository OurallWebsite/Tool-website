import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://calcworldai.com',output:'static',integrations:[sitemap()],build:{format:'directory'},compressHTML:true});
