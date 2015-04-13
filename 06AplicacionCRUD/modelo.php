<?php
require_once "conexion.php";

function insertarHeroe($nombre,$imagen,$descripcion,$editorial)
{
	$sql = "INSERT INTO heroes(id_heroe,nombre,imagen,descripcion,editorial) VALUES (0,'$nombre','$imagen','$descripcion',$editorial);";

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

function eliminarHeroe($id)
{
	$sql = "DELETE FROM heroes WHERE id_heroe=$id";
	$mysql = conexionMySQL();

	if($resultado = $mysql->query($sql))
	{
		$respuesta = "<div class='exito' data-recargar>Se eliminó con éxito el registro del Superhéroe con id: <b>$id</b></div>";
	}
	else
	{
		$respuesta = "<div class='error'>Ocurrió un error NO se insertó el registro del Superhéroe con el id: <b>$id</b></div>";
	}
	$mysql->close();

	return printf($respuesta);
}
?>