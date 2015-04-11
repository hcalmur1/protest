<?php
require_once "conexion.php";

function listaEditorial()
{
	//Esta función generará el select de las editoriales
	//echo "#Insertar";
	$mysql = conexionMySQL();
	$sql = "SELECT * FROM editorial";

	$resultado = $mysql->query($sql);

	$lista = "<select id='editorial' name='editorial_slc' required>";
	$lista .= "<option value=''>------</option>";
		while($fila = $resultado->fetch_assoc())
		{
			//$lista .= "<option value='".$fila["id_editorial"]."'>".$fila["editorial"]."</option>";
			//la funcion php sprintf convierte o guarda los datos en cadena de texto
			$lista .= sprintf(
				"<option value='%d'>%s</option>",
				$fila["id_editorial"],
				$fila["editorial"]
			);
		}
	$lista .= "</select>";

	$resultado->free();
	$mysql->close();

	return $lista;
}

/*
	Los ID nos sirven del lado de javascript para trabajar con ellos
	Los names nos sirven para identificarlos del lado del servidor con PHP en este caso
 */
function altaHeroe()
{
	$form = "<form id='alta-heroe' class='formulario' data-insertar>";
		$form .= "<fieldset>";
			$form .= "<legend>Alta de Super Héroe: </legend>";
			$form .= "<div>";
				$form .= "<label for='nombre'>Nombre:</label>";
				$form .= "<input type='text' id='nombre' name='nombre_txt' required />";
			$form .= "</div>";
			$form .= "<div>";
				$form .= "<label for='imagen'>Imagen:</label>";
				$form .= "<input type='text' id='imagen' name='imagen_txt' required />";
			$form .= "</div>";
			$form .= "<div>";
				$form .= "<label for='descripcion'>Descripcion:</label>";
				$form .= "<textarea id='descripcion' name='descripcion_txa' required></textarea>";
			$form .= "</div>";
			$form .= "<div>";
				$form .= "<label for='editorial'>Editorial:</label>";
				$form .= listaEditorial();
			$form .= "</div>";
			$form .= "<div>";
				$form .= "<input type='submit' id='insertar-btn' name='insertar_btn' value='Insertar' />";
				$form .= "<input type='hidden' id='transaccion' name='transaccion' value='insertar' />";
			$form .= "</div>";
		$form .= "</fieldset>";
	$form .= "</form>";

	return printf($form);
}

function catalogoEditoriales()
{
	//echo "funciona";
	/*
		Lo recomendable es obtener los datos pasarlos a un arreglo cerrar la conexión y despues igualar los datos para traer el nombre
	*/
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
	//print_r para ver el contenido de un arreglo
	//print_r($editoriales);
	return $editoriales;
}

//catalogoEditoriales();
/*
	Pasos para conectarme a MySQL con PHP
	1)Objeto de conexión: $mysql = conexionMySQL();
	2)Consulta SQL: $sql = "SELECT * FROM heroes ORDER BY id_heroe DESC";
	3)Ejecutar la consulta: $resultado = $mysql->query($sql);
	4)Mostrar los resultados: $fila = $resultado->fetch_assoc();
*/
function mostrarHeroes()
{
	$editorial = catalogoEditoriales();

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
					$tabla .= "<td><h3>".$editorial[$fila['editorial']]."</h3></td>";
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