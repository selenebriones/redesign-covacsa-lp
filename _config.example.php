<?php
/**
 * Plantilla de configuración para public/_send.php.
 *
 * Copiar como public/_config.php (ignorado por git) y llenar con los valores reales.
 * En el servidor va junto a _send.php, en /valvulas-y-bridas/_config.php.
 * Cualquier valor se puede sobrescribir con una variable de entorno COVACSA_<CLAVE EN MAYÚSCULAS>.
 */
return [
    // Omnia (CRM de Futurité)
    'omnia_url' => 'https://omnia.example.com/api/save-lead-form',
    'omnia_token' => '',
    'omnia_cliente' => 0,

    // Ongoing (envía el correo del lead)
    'ongoing_url' => 'https://example.ongoing.mx/api/leads/add',
    'ongoing_api_key' => '',

    // Destinatarios del correo
    'correos_para' => ['ventas@example.com'],
    'correos_cc' => [],
];
