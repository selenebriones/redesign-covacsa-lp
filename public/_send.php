<?php
/**
 * Recibe el formulario de cotización y reenvía el lead a Omnia y a Ongoing (que manda el correo a ventas).
 *
 * Las credenciales y endpoints NO van en el repo (es público). Se leen, en este orden:
 *   1. Variables de entorno del servidor (COVACSA_OMNIA_URL, etc.)
 *   2. _config.php en esta misma carpeta (solo en el servidor; plantilla en _config.example.php)
 * Se usa un .php y no un .env porque nginx serviría un .env como texto plano; un .php se ejecuta.
 */

header('Content-Type: application/json; charset=utf-8');

function responder(bool $estatus, string $message): void
{
    echo json_encode(['estatus' => $estatus, 'message' => $message]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    responder(false, 'Método no permitido.');
}

$archivo = __DIR__ . '/_config.php';
$config = is_file($archivo) ? require $archivo : [];

$env = function (string $clave) use ($config) {
    $valor = getenv('COVACSA_' . strtoupper($clave));
    return $valor !== false && $valor !== '' ? $valor : ($config[$clave] ?? null);
};

$omniaUrl = $env('omnia_url');
$omniaToken = $env('omnia_token');
$omniaCliente = $env('omnia_cliente');
$ongoingUrl = $env('ongoing_url');
$ongoingApiKey = $env('ongoing_api_key');
$correosPara = $env('correos_para');
$correosCc = $env('correos_cc');

if (!$omniaUrl || !$ongoingUrl) {
    error_log('[covacsa _send.php] Falta configuración: revisar _config.php o variables COVACSA_*');
    responder(false, 'No pudimos enviar tus datos en este momento. Llámanos al 81 2721 9555 o escríbenos a ventas@covacsa.com.mx.');
}

// Las variables de entorno llegan como texto: "a@x.com,b@x.com"
$lista = fn($v) => is_array($v) ? $v : array_values(array_filter(array_map('trim', explode(',', (string) $v))));

$campos = ['nombre', 'correo', 'telefono', 'mensaje', 'utm_id', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
$postData = [];
foreach ($campos as $campo) {
    $postData[$campo] = trim((string) ($_POST[$campo] ?? ''));
}

// Honeypot (el formulario ya lo filtra; esto cubre bots que hacen POST directo)
if (!empty($_POST['sitio_web'])) {
    responder(true, 'La forma de contacto se ha enviado con éxito.');
}

if (strlen($postData['nombre']) < 3 || !filter_var($postData['correo'], FILTER_VALIDATE_EMAIL) || strlen(preg_replace('/\D/', '', $postData['telefono'])) < 8) {
    responder(false, 'Revisa tu nombre, correo y teléfono.');
}

if (preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $postData['mensaje'])) {
    responder(false, 'Favor de no ingresar links o enlaces externos en la forma de contacto.');
}

function enviar(string $url, $cuerpo, array $headers = []): bool
{
    $handle = curl_init($url);
    curl_setopt_array($handle, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $cuerpo,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_TIMEOUT => 15,
    ]);
    $respuesta = curl_exec($handle);
    $codigo = curl_getinfo($handle, CURLINFO_HTTP_CODE);
    $error = curl_error($handle);

    if ($respuesta === false || $codigo >= 400) {
        error_log("[covacsa _send.php] Falló $url: HTTP $codigo $error");
        return false;
    }
    return true;
}

// 1. Omnia (CRM de Futurité)
$okOmnia = enviar($omniaUrl, $postData + [
    'token' => $omniaToken,
    'client' => $omniaCliente,
]);

// 2. Ongoing: manda el correo a ventas
$okOngoing = enviar($ongoingUrl, json_encode($postData + [
    'to' => $lista($correosPara),
    'cc' => $lista($correosCc),
    'origen' => 'https://www.covacsa.com.mx/valvulas-y-bridas/',
    'api_key' => $ongoingApiKey,
]), ['Content-Type: application/json']);

// Con que uno de los dos reciba el lead, no se pierde
if (!$okOmnia && !$okOngoing) {
    responder(false, 'No pudimos enviar tus datos en este momento. Llámanos al 81 2721 9555 o escríbenos a ventas@covacsa.com.mx.');
}

responder(true, 'La forma de contacto se ha enviado con éxito.');
