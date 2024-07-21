<?php
// Arquivo: contador.php
$arquivo = 'contador.txt';

if (file_exists($arquivo)) {
    $contador = file_get_contents($arquivo);
    $contador++;
} else {
    $contador = 1;
}

file_put_contents($arquivo, $contador);
echo $contador;
?>