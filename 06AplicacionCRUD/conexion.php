<?php 
/*
	include("config.php");*//*Si se usa la funcion include manda warnign perio sigue el flujo del programa
	include_once funcion carga solo una vez
*/
/*
	Con require si no esta el archivo manda un error fatal y se rompe el flujo, consideramos que es lo mejor
	require_once función solo se carga una vez el archivo
*/

require_once "config.php";

function conexionMySQL()
{
	//echo "Hola, por favor no usen echos para imprimir en pantalla";
	$conexion = new mysqli(SERVER,USER,PASS,BD);

	if($conexion->connect_error)
	{
		/*$error = "<div class='error'>";
		
			$error .= "Error de Conexión Número:<b>".$conexion->connect_errno."</b> Mensaje del error <mark>".$conexion->connect_error."</mark>";
			$error .= "</div>";
		*/		
		$error = "<div class='error'>Error de Conexión Número:<b>%d</b> Mensaje del error <mark>%s</mark></div>";
		
		printf($error,$conexion->connect_errno,$conexion->connect_error);
		
		die();
	}
	else
	{
		//$formato = "<div class='mensaje'>Conexión exitosa: <b>".$conexion->host_info."</b></div>";
		//echo $formato;
		/*
			http://php.net/manual/es/function.printf.php
			Formatos de las funciones printf
			http://php.net/manual/es/function.sprintf.php
		*/

		//$formato = "<div class='mensaje'>Conexión exitosa: <b>%s</b></div>";
		//printf($formato,$conexion->host_info);
	}
	//Para que todo lo que traiga de la base de datos lo convierta a la codificación UTF8
	$conexion->query("SET CHARACTER SET UTF8");

	return $conexion;
}
//conexionMySQL();
?>