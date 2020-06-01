<?php
$server = 'localhost';
$user = 'root';
$pass = 'mysql';
$db = 'inventory';

$mysqli = new mysqli($server, $user, $pass, $db);

mysqli_report(MYSQLI_REPORT_ERROR);
?>

