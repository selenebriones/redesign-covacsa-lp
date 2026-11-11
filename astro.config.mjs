// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// QA: Vercel define VERCEL=1 en sus builds. Ahí la LP va en la raíz, sin GTM, con noindex
// y con el formulario simulado (Vercel no ejecuta PHP). Para forzarlo en local: COVACSA_QA=1 npm run build
const esQA = process.env.VERCEL === '1' || process.env.COVACSA_QA === '1';

export default defineConfig({
  // Producción: mismo servidor que la LP anterior, https://covacsa.com.mx/valvulas-y-bridas/
  site: 'https://covacsa.com.mx',
  base: esQA ? '/' : '/valvulas-y-bridas/',
  build: {
    // gracias.html en vez de gracias/index.html (más cercano al gracias.php anterior)
    format: 'file',
  },
  vite: {
    define: {
      'import.meta.env.PUBLIC_QA': JSON.stringify(esQA),
    },
    plugins: [tailwindcss()],
  },
});
