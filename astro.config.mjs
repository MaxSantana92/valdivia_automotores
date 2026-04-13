import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages (proyecto): https://<usuario>.github.io/<repo>/
// Si usas dominio propio en la raíz del sitio, pon base: '/' y site a esa URL.
const repo = 'valdivia_automotores';

export default defineConfig({
  site: `https://maxsantana92.github.io/${repo}`,
  base: `/${repo}`,
  integrations: [tailwind()],
});
