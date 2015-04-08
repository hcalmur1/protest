<?php require "vistas.php"; ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8" />
	<title>Aplicación CRUD super heroes</title>
	<meta name="decription" content="Aplicación CRUD (Create-Read-Update-Delete) con filosofía MVC desarrollada en PHP, MySQL y AJAX">
	<link rel="stylesheet" href="css/super-heroes.css">
</head>
<body>
	<header id="cabecera">
		<h1>Super Héroes</h1>
		<div><img src="img/super-heroes.png" alt="Super héroes"></div>
		<a href="#" id="insertar">Insertar</a>
	</header>
	<section id="contenido">
		<!-- <p>Aquí va el contenido</p> -->
		<div id="respuesta"></div>
		<div id="precarga"></div>
		<?php mostrarHeroes(); ?>
	</section>
	<script src="js/super-heroes.js"></script>
</body>
</html>