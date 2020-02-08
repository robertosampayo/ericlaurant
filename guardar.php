<?php

$contacto_NOMBRE = $_POST['nombre'];
$contacto_APELLIDO = $_POST['telefono'];
$contacto_EMAIL = $_POST['mail'];
$contacto_mensaje = $_POST['mensaje'];

echo json_encode([
    'success' => true
]);

// var_dump($contacto_NOMBRE );



?>