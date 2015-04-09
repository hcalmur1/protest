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
//echo  $transaccio. " recuerden que AJAX se ejecuta en el servidor por lo que no se necesita actualizar la página web "

function ejecutarTransaccion($transaccion)
{
	if($transaccion == "alta")
	{
		//Mostrar el formulario de alta
	}
	else if($transaccion == "insertar")
	{
		//procesar los datos del formualrio de alta e insertarlos en MySQL
	}
	else if($transaccion == "elimiar")
	{
		//Eliminar de MySQL el registro solicitado
	}
	else if($transaccion == "editar")
	{
		//Traer los datos del registro a modificar en un formulario
	}
	else if($transaccion == "actualizar")
	{
		//modificar en MySQL los datos del regostro modificado
	}

}

ejecutarTransaccion($transaccion);
?>