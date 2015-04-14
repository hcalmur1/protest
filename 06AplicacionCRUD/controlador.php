<?php
require "vistas.php";
require "modelo.php";
/*
	Aplicación CreateReadUpdateDelete
	PHP tiene 2 métodos de envío de datos: POST y GET

	Create  Afecta BD     INSERT (SQL) POST          Modelo
	Read    No afecta BD  SELECT (SQL) GET y/o POST  Vista
	Update  Afecta BD     UPDATE (SQL) POST          Modelo
	Delete  Afecta BD     DELETE (SQL) POST          Modelo
 */
$transaccion = $_POST["transaccion"];
/*
	echo  $transaccion. " recuerden que AJAX se ejecuta en el servidor por lo que no se necesita actualizar la página web ";
 */
function ejecutarTransaccion($transaccion)
{
	if($transaccion == "alta")
	{
		//Mostrar el formulario de alta
		altaHeroe();
	}
	else if($transaccion == "insertar")
	{
		//procesar los datos del formualrio de alta e insertarlos en MySQL
		insertarHeroe($_POST["nombre_txt"],$_POST["imagen_txt"],$_POST["descripcion_txa"],$_POST["editorial_slc"]);
	}
	else if($transaccion == "eliminar")
	{
		//Eliminar de MySQL el registro solicitado
		eliminarHeroe($_POST["idHeroe"]);
	}
	else if($transaccion == "editar")
	{
		//Traer los datos del registro a modificar en un formulario
		editarHeroe($_POST["idHeroe"]);
	}
	else if($transaccion == "actualizar")
	{
		//modificar en MySQL los datos del regostro modificado
		actualizarHeroe($_POST["idHeroe"],$_POST["nombre_txt"],$_POST["imagen_txt"],$_POST["descripcion_txa"],$_POST["editorial_slc"]);
	}
}

ejecutarTransaccion($transaccion);
?>