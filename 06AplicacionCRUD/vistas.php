<?php
require_once "conexion.php";

function catalogoEditoriales($id_editorial)
{
	//echo "funciona";
	$editoriales = Array();

	$mysql = conexionMySQL();
	$sql = "SELECT * FROM editorial";

	if($resultado = $mysql->query($sql))
	{
		while($fila = $resultado->fetch_assoc())
		{
			$editoriales[$fila["id_editorial"]] = $fila["editorial"];
		}
		$resultado->free();
	}
	$mysql->close();
	print_r($editoriales);
}

catalogoEditoriales();
/*
	Pasoso para conectarme a MySQL con PHP
	1)Objeto de conexión: $mysql = conexionMySQL();
	2)Consulta SQL: $sql = "SELECT * FROM heroes ORDER BY id_heroe DESC";
	3)Ejecutar la consulta: $resultado = $mysql->query($sql);
	4)Mostrar los resultados: $fila = $resultado->fetch_assoc();
*/
function mostrarHeroes()
{
	$mysql = conexionMySQL();
	$sql = "SELECT * FROM heroes ORDER BY id_heroe DESC";

	if($resultado = $mysql->query($sql))
	{
		//Compruebo que el query me regrese registros
		if(mysqli_num_rows($resultado) == 0)
		{
			$respuesta = "<div class='error'>No existen registro de super héroes. La Base de Datos esta vacía</div>";
		}
		else
		{
			//echo "Wiiii";
			$tabla = "<table id='tabla-heroes' class='tabla'>";
			$tabla .= "<thead>";
				$tabla .= "<tr>";
					$tabla .= "<th>Id Héroe</td>";
					$tabla .= "<th>Nombre</td>";
					$tabla .= "<th>Imagen</td>";
					$tabla .= "<th>Descripción</td>";
					$tabla .= "<th>Editorial</td>";
					$tabla .= "<th></td>";
					$tabla .= "<th></td>";
				$tabla .= "</tr>";
			$tabla .= "</thead>";
			$tabla .= "<tbody>";
			while($fila = $resultado->fetch_assoc())
			{
				$tabla .= "<tr>";
					$tabla .= "<td>".$fila['id_heroe']."</td>";
					$tabla .= "<td><h2>".$fila['nombre']."</h2></td>";
					$tabla .= "<td><img src='img/".$fila['imagen']."' /></td>";
					$tabla .= "<td><p>".$fila['descripcion']."</p></td>";
					$tabla .= "<td><h3>".$fila['editorial']."</h3></td>";
					$tabla .= "<td>Botón editar</td>";
					$tabla .= "<td>Botón eliminar</td>";
				$tabla .= "<tr>";
			}
			//Libero memoria
			$resultado->free();
			$tabla .= "</tbody>";
			$tabla .= "</table>";
			$respuesta = $tabla;
		}
	}
	else
	{
		//echo "Nooo";
		$respuesta = "<div class='error'>Error: No se ejecuto la consulta a la Base de Datos</div>";
	}
	//Cerrar conexión
	$mysql->close();
	return printf($respuesta);
}
?>