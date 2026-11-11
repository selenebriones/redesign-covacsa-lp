# Covacsa · Válvulas y Tuberías Industriales

Landing page de Covacsa, publicada en **https://www.covacsa.com.mx/valvulas-y-bridas/**.

Está hecha con Astro, Tailwind 4 y GSAP. El formulario lo procesa `_send.php`, en el mismo servidor (nginx + PHP 8.1).

## Desarrollo

```bash
npm install
cp _config.example.php public/_config.php   # y llenar con los valores reales (ver abajo)
npm run dev                                 # http://localhost:4335/valvulas-y-bridas/
npm run build                               # genera dist/
```

En producción, el sitio usa `base: '/valvulas-y-bridas/'` (ver `astro.config.mjs`). Las rutas a archivos de `public/` se arman con `BASE` o `IMG` de `src/data/covacsa.ts`; no uses rutas absolutas como `/img/...`.

## QA en Vercel

Vercel despliega `main` para QA. Cuando el build detecta Vercel (`VERCEL=1`), cambia a modo QA:

| | Producción (covacsa.com.mx) | QA (Vercel) |
|---|---|---|
| Ruta | `/valvulas-y-bridas/` | `/` (raíz) |
| GTM / GA4 / Ads | Sí | No, para no ensuciar la medición |
| Formulario | Envía a `_send.php` | Simulado: no envía nada, solo lleva a gracias |
| Indexación | Indexable, canonical propio | `noindex, nofollow` (meta y header en `vercel.json`) |
| Canonical / Open Graph | URL de producción | También apuntan a producción |

Además, en QA se muestra una etiqueta amarilla en la esquina inferior izquierda. Para generar el build de QA en local: `COVACSA_QA=1 npx astro build --outDir dist-qa`.

## Formulario y credenciales

`public/_send.php` recibe el formulario y reenvía el lead a dos servicios:

- **Omnia**, el CRM de Futurité.
- **Ongoing**, que envía el correo a ventas@covacsa.com.mx y copias.

**Este repo es público**, así que los tokens, endpoints y correos no están en el código. `_send.php` los lee en este orden:

1. Variables de entorno del servidor: `COVACSA_OMNIA_URL`, `COVACSA_OMNIA_TOKEN`, `COVACSA_OMNIA_CLIENTE`, `COVACSA_ONGOING_URL`, `COVACSA_ONGOING_API_KEY`, `COVACSA_CORREOS_PARA` y `COVACSA_CORREOS_CC`. Las listas de correos van separadas por comas.
2. El archivo `public/_config.php`.

> **Antes de hacer build**, copia `_config.example.php` a `public/_config.php` y llénalo con los valores reales. Ese archivo está en `.gitignore`: **nunca lo subas al repo**. Los valores los tiene el equipo de Futurité y también están en el `_config.php` del servidor.

La configuración va en un `.php` y no en un `.env` porque nginx serviría un `.env` como texto plano a cualquiera que pida la URL. Un `.php`, en cambio, se ejecuta y no muestra nada.

Si falta `public/_config.php` al compilar, el sitio se genera igual, pero el formulario responde con error y le muestra al usuario el teléfono y el correo.

## Medición

- **GTM `GTM-KD7VLWSD`** carga GA4 y Google Ads. Está en todas las páginas, incluida la de gracias.
- Cuando el envío sale bien, el formulario hace `dataLayer.push({ event: 'generate_lead' })` y redirige a `gracias.html`.
- `gracias.php` redirige (301) a `gracias.html`, por si alguna configuración usa todavía la URL anterior.
- Los parámetros `utm_*` de la URL se envían con el lead.

## SEO

- El canonical es `https://covacsa.com.mx/valvulas-y-bridas/`, **sin www**, igual que el sitio principal (WordPress), que redirige `www` → `covacsa.com.mx`.
- La página tiene title, description, Open Graph y Twitter Card con `og-covacsa.jpg` (1200×630), y JSON-LD `Organization`.
- `gracias.html` lleva `noindex` y no tiene canonical.
- El `robots.txt` y el sitemap son los del WordPress, en la raíz del dominio; esta LP no los controla.

## Deploy

1. Haz el build con `public/_config.php` en su lugar.
2. Sube **todo el contenido de `dist/`** a la carpeta `/valvulas-y-bridas/` del servidor. Incluye `_send.php` y `_config.php`.
3. La primera vez que se reemplaza la LP anterior:
   - **Borra `index.php`** del servidor. Si no, nginx lo sigue usando en lugar de `index.html`.
   - Borra los restos de la LP anterior: `patterns/`, `assets/`, `src/`, `prepros.config`.
4. Prueba el formulario en producción y confirma que el correo le llega a ventas.

## Pendientes

- [ ] Enlazar el aviso de privacidad (LFPDPPP) en el formulario y en el footer. Covacsa tiene que proporcionarlo.
- [ ] En GTM, confirmar que la conversión de Ads se dispara con `generate_lead` o con la vista de `gracias.html`.
- [ ] En el servidor, redirigir `www` y `http` a `https://covacsa.com.mx/valvulas-y-bridas/`. Hoy la carpeta responde en las cuatro variantes; el canonical lo mitiga, pero la redirección es lo correcto.
