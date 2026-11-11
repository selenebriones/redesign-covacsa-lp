// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Se publica en el mismo servidor que la LP anterior: https://www.covacsa.com.mx/valvulas-y-bridas/
  site: 'https://www.covacsa.com.mx',
  base: '/valvulas-y-bridas/',
  build: {
    // gracias.html en vez de gracias/index.html (más cercano al gracias.php anterior)
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
