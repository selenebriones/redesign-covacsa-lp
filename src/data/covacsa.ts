// Contenido de https://www.covacsa.com.mx/valvulas-y-bridas/ (texto original en /contenido-fuente.md)

// La LP se publica en covacsa.com.mx/valvulas-y-bridas/ (ver `base` en astro.config.mjs).
// BASE siempre termina en "/" para poder concatenar rutas de public/.
export const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const IMG = `${BASE}img`;

export const SITIO = 'https://www.covacsa.com.mx';
export const GTM_ID = 'GTM-KD7VLWSD';

export const CONTACTO = {
  telefono: '81 2721 9555',
  telefonoHref: 'tel:8127219555',
  correo: 'ventas@covacsa.com.mx',
};

export interface Producto {
  titulo: string;
  imagen: string;
  texto?: string;
}

export const valvulas = {
  destacadas: [
    { titulo: 'Válvula mariposa de acero al carbón', imagen: 'imagen-01.webp' },
    { titulo: 'Válvula check de acero al carbón', imagen: 'imagen-02.webp' },
    { titulo: 'Válvula bola de acero al carbón', imagen: 'imagen-03.webp' },
    { titulo: 'Válvula Compuerta API 600 de acero al carbón', imagen: 'imagen-04.webp' },
  ] satisfies Producto[],
  texto: 'Válvulas de Acero al Carbón, Fierro, Bronce, PVC, Titanio, entre otras aleaciones.',
  medidas: 'desde 1/8" hasta 60"',
  tipos: [
    'Válvula de Diafragma',
    'Válvula Macho API 6D',
    'Válvula Esfera Flotante',
    'Válvula Esfera Montada',
    'Válvula Reguladora',
    'Válvula Sobre Muñón',
    'Válvula de Cuchilla',
    'Válvula Aguja',
    'Válvula Globo',
    'Válvula Mariposa',
    'Válvula Pichancha',
    'Válvula Compuerta API 6D',
    'Válvula de Seguridad',
    'Válvula de Pellizco',
    'Válvula Check',
    'Válvula de Alivio',
    'Válvula Solenoide',
    'Válvula Trunnion',
    'Válvula de Paso Completo',
  ],
};

export const tuberias = {
  destacadas: [
    { titulo: 'Tubería de acero al carbón con o sin costura', imagen: 'imagen-05.webp' },
    { titulo: 'Tubería PVC', imagen: 'imagen-06.webp' },
    { titulo: 'Tubería CPVC', imagen: 'imagen-07.webp' },
    { titulo: 'Tubería Roscada', imagen: 'imagen-08.webp' },
  ] satisfies Producto[],
  texto: 'Tuberías Industriales, fabricadas en Acero al Carbón, Acero Inoxidable, Fierro, Cobre, PVC.',
  tipos: [
    'Tubería de Acero Inoxidable con o sin costura',
    'Tuberías de Aleación y de Acero Monel',
    'Tubería Galvanizada',
    'Tubería Contra Incendio',
    'Tubería Acero al Carbón',
    'Tubería Cobre',
    'Tubing Acero Inoxidable',
  ],
};

export const conexiones: Producto[] = [
  {
    titulo: 'Bridas de Acero',
    imagen: 'imagen-10.webp',
    texto: 'Bridas de Acero al carbón y Acero inoxidable desde 150# hasta 2,500# RF, RTJ y FF. Medidas: 1/2" hasta 48"',
  },
  {
    titulo: 'Tuerca unión de golpe',
    imagen: 'imagen-09.webp',
    texto: 'Tuercas unión de golpe en Hierro Dúctil con capacidad desde 1,000 hasta 15,000 Libras y extremos soldable-roscado. Medidas: 1" hasta 8"',
  },
  {
    titulo: 'Espárragos cadmizados',
    imagen: 'imagen-11.webp',
    texto: 'Espárragos de Acero al Carbón y Acero Inoxidable.',
  },
  {
    titulo: 'Empaques',
    imagen: 'imagen-12.webp',
    texto: 'Empaques en Acero Inoxidable, Buna y Neopreno. Con capacidad desde 150 hasta 10,000 Libras.',
  },
  {
    titulo: 'Conectores de alto sello',
    imagen: 'imagen-13.webp',
    texto: 'Conectores de Alto Sello, Doble Férula, Anti fugas de 1,000 Psi hasta 10,000 Psi',
  },
  {
    titulo: 'Conexiones soldables',
    imagen: 'imagen-14.webp',
    texto: 'Conexiones Soldables Industriales en Acero al Carbón, Acero Inoxidable, Hierro Maleable, PVC, CPVC, Cobre, y Aleaciones Especiales.',
  },
  {
    titulo: 'Conexiones Clamp',
    imagen: 'imagen-15.webp',
    texto: 'Conexiones de Expansión Antivibratorio de material EPDM.',
  },
  {
    titulo: 'Conexiones Roscadas',
    imagen: 'imagen-16.webp',
    texto: 'Conexiones Roscadas 15#, 300# y 6,000# en material de Acero al carbón y Acero inoxidable. Medidas: 1/8" hasta 6"',
  },
  {
    titulo: 'Conexiones de FoFo',
    imagen: 'imagen-17.webp',
    texto: 'Ya sea para reemplazo o una nueva instalación de Brocales FoFo. Codos bridados: 90°, 45°, 22° y 11°. Medidas: 2" hasta 36" (de 51 mm hasta 914 mm).',
  },
  {
    titulo: 'Swages',
    imagen: 'imagen-19.webp',
    texto: 'Extremos roscados, planos, biselados o combinación de estos.',
  },
];

// `imagen` es relativa a BASE (public/). `alto` para logos casi cuadrados.
export const marcas: { nombre: string; imagen: string; alto?: boolean }[] = [
  { nombre: 'Spirax Sarco', imagen: 'img/icono-logo-spirax.webp' },
  { nombre: 'Bray', imagen: 'img/icono-logo-bray.webp' },
  { nombre: 'Rockwell', imagen: 'img/icono-logo-rockwell.webp' },
  { nombre: 'Vayremex', imagen: 'img/icono-logo-vayremex.webp' },
  { nombre: 'Keystone', imagen: 'marcas/keystone.webp' },
  { nombre: 'Walworth', imagen: 'marcas/walworth.webp', alto: true },
  { nombre: 'Tenaris Tamsa', imagen: 'marcas/tenaristamsa.webp' },
];
