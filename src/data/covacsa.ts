// Contenido de https://www.covacsa.com.mx/valvulas-y-bridas/ (texto original en /contenido-fuente.md)

// TODO: cambiar a '/img' cuando las imágenes estén en public/img
export const IMG = 'https://www.covacsa.com.mx/valvulas-y-bridas/assets/img';

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
    { titulo: 'Válvula mariposa de acero al carbón', imagen: 'imagen-01.png' },
    { titulo: 'Válvula check de acero al carbón', imagen: 'imagen-02.png' },
    { titulo: 'Válvula bola de acero al carbón', imagen: 'imagen-03.png' },
    { titulo: 'Válvula Compuerta API 600 de acero al carbón', imagen: 'imagen-04.png' },
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
    { titulo: 'Tubería de acero al carbón con o sin costura', imagen: 'imagen-05.png' },
    { titulo: 'Tubería PVC', imagen: 'imagen-06.png' },
    { titulo: 'Tubería CPVC', imagen: 'imagen-07.png' },
    { titulo: 'Tubería Roscada', imagen: 'imagen-08.png' },
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
    imagen: 'imagen-10.png',
    texto: 'Bridas de Acero al carbón y Acero inoxidable desde 150# hasta 2,500# RF, RTJ y FF. Medidas: 1/2" hasta 48"',
  },
  {
    titulo: 'Tuerca unión de golpe',
    imagen: 'imagen-09.png',
    texto: 'Tuercas unión de golpe en Hierro Dúctil con capacidad desde 1,000 hasta 15,000 Libras y extremos soldable-roscado. Medidas: 1" hasta 8"',
  },
  {
    titulo: 'Espárragos cadmizados',
    imagen: 'imagen-11.png',
    texto: 'Espárragos de Acero al Carbón y Acero Inoxidable.',
  },
  {
    titulo: 'Empaques',
    imagen: 'imagen-12.png',
    texto: 'Empaques en Acero Inoxidable, Buna y Neopreno. Con capacidad desde 150 hasta 10,000 Libras.',
  },
  {
    titulo: 'Conectores de alto sello',
    imagen: 'imagen-13.png',
    texto: 'Conectores de Alto Sello, Doble Férula, Anti fugas de 1,000 Psi hasta 10,000 Psi',
  },
  {
    titulo: 'Conexiones soldables',
    imagen: 'imagen-14.png',
    texto: 'Conexiones Soldables Industriales en Acero al Carbón, Acero Inoxidable, Hierro Maleable, PVC, CPVC, Cobre, y Aleaciones Especiales.',
  },
  {
    titulo: 'Conexiones Clamp',
    imagen: 'imagen-15.png',
    texto: 'Conexiones de Expansión Antivibratorio de material EPDM.',
  },
  {
    titulo: 'Conexiones Roscadas',
    imagen: 'imagen-16.png',
    texto: 'Conexiones Roscadas 15#, 300# y 6,000# en material de Acero al carbón y Acero inoxidable. Medidas: 1/8" hasta 6"',
  },
  {
    titulo: 'Conexiones de FoFo',
    imagen: 'imagen-17.png',
    texto: 'Ya sea para reemplazo o una nueva instalación de Brocales FoFo. Codos bridados: 90°, 45°, 22° y 11°. Medidas: 2" hasta 36" (de 51 mm hasta 914 mm).',
  },
  {
    titulo: 'Swages',
    imagen: 'imagen-19.png',
    texto: 'Extremos roscados, planos, biselados o combinación de estos.',
  },
];

// `imagen` vive en IMG (sitio de Covacsa); `local` en /public. `alto` para logos casi cuadrados.
export const marcas: { nombre: string; imagen?: string; local?: string; alto?: boolean }[] = [
  { nombre: 'Spirax Sarco', imagen: 'icono-logo-spirax.png' },
  { nombre: 'Bray', imagen: 'icono-logo-bray.png' },
  { nombre: 'Rockwell', imagen: 'icono-logo-rockwell.png' },
  { nombre: 'Vayremex', imagen: 'icono-logo-vayremex.png' },
  { nombre: 'Keystone', local: '/marcas/keystone.webp' },
  { nombre: 'Walworth', local: '/marcas/walworth.webp', alto: true },
  { nombre: 'Tenaris Tamsa', local: '/marcas/tenaristamsa.webp' },
];
