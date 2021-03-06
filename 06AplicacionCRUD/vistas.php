<?php
require_once "conexion.php";

function listaEditorialesEditada($id)
{
	//Esta función devuelve el nombre de la editorial del super héroe a editar
	$mysql = conexionMySQL();
	$sql = "SELECT * FROM editorial";

	$resultado = $mysql->query($sql);

	$lista = "<select id='editorial' name='editorial_slc' required>";
		$lista .= "<option value=''>--------</option>";
		while($fila = $resultado->fetch_assoc())
		{

				//Dos Formas de hacer el selected
				$selected = ($id == $fila["id_editorial"])?"selected":"";

				$lista .= sprintf(
					"<option value='%d' $selected>%s</option>",
					$fila["id_editorial"],
					$fila["editorial"]
				);
			/*
			 $lista .= sprintf("<option value='%d'",$fila["id_editorial"]);
				if($id==$fila["id_editorial"])
				{
					$lista .= sprintf(" selected");
				}
				$lista .= sprintf(">%s</option>",$fila["editorial"]);
			 */
		}
	$lista .= "</select>";

	$resultado->free();
	$mysql->close();

	return $lista;
}

function editarHeroe($idHeroe)
{
	$mysql = conexionMySQL();
	$sql = "SELECT * FROM heroes WHERE id_heroe=$idHeroe";

	if($resultado = $mysql->query($sql))
	{
		$fila = $resultado->fetch_assoc();
		//Muestra el form con los datos del registro
		$form = "<form id='editar-heroe' class='formulario' data-editar>";
			$form .= "<fieldset>";
				$form .= "<legend>Edición de Super Héroe: </legend>";
				$form .= "<div>";
					$form .= "<label for='nombre'>Nombre:</label>";
					$form .= "<input type='text' id='nombre' name='nombre_txt' value='".$fila["nombre"]."' required />";
				$form .= "</div>";
				$form .= "<div>";
					$form .= "<label for='imagen'>Imagen:</label>";
					$form .= "<input type='text' id='imagen' name='imagen_txt' value='".$fila["imagen"]."' required />";
				$form .= "</div>";
				$form .= "<div>";
					$form .= "<label for='descripcion'>Descripcion:</label>";
					$form .= "<textarea id='descripcion' name='descripcion_txa' required>".$fila["descripcion"]."</textarea>";
				$form .= "</div>";
				$form .= "<div>";
					$form .= "<label for='editorial'>Editorial:</label>";
					$form .= listaEditorialesEditada($fila["editorial"]);
				$form .= "</div>";
				$form .= "<div>";
					$form .= "<input type='submit' id='actualizar' name='actualizar_btn' value='Actualizar' />";
					$form .= "<input type='hidden' id='transaccion' name='transaccion' value='actualizar' />";
					$form .= "<input type='hidden' id='idHeroe' name='idHeroe' value='".$fila["id_heroe"]."' />";
				$form .= "</div>";
			$form .= "</fieldset>";
		$form .= "</form>";

		$resultado->free();
	}
	else
	{
		//Muestra un mensaje de Error
		$form = "<div class='error'>Error: No se ejecuto la consulta a la Base de Datos</div>";
	}
	$mysql->close();
	return printf($form);
}

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
		$totalRegistros = mysqli_num_rows($resultado);
		if($totalRegistros == 0)
		{
			$respuesta = "<div class='error'>No existen registro de super héroes. La Base de Datos esta vacía</div>";
		}
		else
		{
			/*
				Inicia paginación
				Tarea: Encapsular
			 */
				//Limitar mi consulta SQL
				$regXPag = 3;
				$pagina = false;

				//Examinar la página a mostrar y el inicio del registro a mostrar
				if(isset($_GET["p"]))
				{
					$pagina = $_GET["p"];
				}

				if(!$pagina)
				{
					$inicio = 0;
					$pagina = 1;
				}
				else
				{
					$inicio = ($pagina - 1) * $regXPag;
				}
				//Calculó el total de páginas
				$totalPaginas = ceil($totalRegistros/$regXPag);

				$sql .= " LIMIT ".$inicio.",".$regXPag;
				//SELECT * FROM heroes ORDER BY id_heroe DESC LIMIT 0,3
				//echo $sql."<br />".$totalPaginas;
				$resultado = $mysql->query($sql);

				//Despliega de la paginación
				$paginacion .= "<div class='paginacion'>";
					$paginacion .= "<p>";
						$paginacion .= "Número de resultados: <b>$totalRegistros</b> ";
						$paginacion .= " Mostrando <b>$regXPag</b> resultados por página. ";
						$paginacion .= " Página <b>$pagina</b> de <b>$totalPaginas</b>";
					$paginacion .= "</p>";

					if( $totalPaginas > 1 )
					{
						$paginacion .= "<p>";
							$paginacion .= ($pagina!=1)?"<a href='?p=".($pagina-1)."'>&laquo</a>":"";

							for($i=1;$i<=$totalPaginas;$i++)
							{
								//Si muestro el índice de la página actual, no coloco enlace
								$actual = "<span class='actual'>$pagina</span>";
								//Si el índice no corresponde con la página mostrada actualmente, coloco el enlace para ir a esta página.
								$enlace = "<a href='?p=$i'>$i</a>";
								$paginacion .= ($pagina == $i)?$actual:$enlace;
							}
							$paginacion .= ($pagina!=$totalPaginas)?"<a href='?p=".($pagina+1)."'>&raquo</a>":"";
						$paginacion .= "</p>";
					}
				$paginacion .= "</div>";
			/*
				Termina paginación
			 */
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
					$tabla .= "<td><a href='#' class='editar' data-id='".$fila['id_heroe']."'>Editar</a></td>";
					$tabla .= "<td><a href='#' class='eliminar' data-id='".$fila['id_heroe']."'>Eliminar</a></td>";
				$tabla .= "</tr>";
			}
			//Libero memoria
			$resultado->free();
			$tabla .= "</tbody>";
			$tabla .= "</table>";

			$respuesta = $tabla.$paginacion;
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