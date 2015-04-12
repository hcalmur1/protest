<?php 
require_once "conexion.php";

function insertarHeroe($nombre,$imagen,$descripcion,$editorial)
{
	$sql ="INSERT INTO heroes(id_heroe,nombre,imagen,descripcion,editorial) VALUES (0,'$nombre','$imagen','$descripcion',$editorial);";

	$mysql = conexionMySQL();

	if($resultado = $mysql->query($sql))
	{
		$respuesta = "<div class='exito' data-recargar>Se insertó con éxito el registro del Superhéroe <b>$nombre</b></div>";
	}
	else
	{
		$respuesta = "<div class='error'>Ocurrió un error NO se insertó el registro del Superhéroe: <b>$nombre</b></div>";
	}
	$mysql->close();

	return printf($respuesta);
}
?>