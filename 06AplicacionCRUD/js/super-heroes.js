//Constantes
var READY_STATE_CHANGE = 4,
	OK = 200;

//Variables y Objetos
var ajax = null,
	btnInsertar = document.querySelector("#insertar"),
	btnsEditar = document.querySelectorAll(".editar"),
	btnsEliminar = document.querySelectorAll(".eliminar"),
	precarga = document.querySelector("#precarga"),
	respuesta = document.querySelector("#respuesta");

//Funciones
/*
Función para detectar el tipo de objeto con el que se va a trabajar
*/
function objetoAJAX()
{
	if(window.XMLHttpRequest)
	{
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject)
	{
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function enviarDatos()
{
	precarga.style.display= "block";
	precarga.innerHTML="<img src='img/loader.gif' />";
	/*
		http://es.wikipedia.org/wiki/Anexo:Códigos_de_estado_HTTP
		http://librosweb.es/ajax/capitulo_7/metodos_y_propiedades_del_objeto_xmlhttprequest.html
	 */
	//Se verifica que este listo
	if(ajax.readyState == READY_STATE_CHANGE)
	{
		if(ajax.status == OK)
		{
			//alert("Yes");
			//alert(ajax.responseText);
			precarga.innerHTML = null;
			precarga.style.display = "none";
			respuesta.style.display = "block";
			respuesta.innerHTML = ajax.responseText;

			/*indexOf se usa para buscar texto dentro de una cadena de texto, cuando no encuientra el dato el valor es igual a -1*/
			if(ajax.responseText.indexOf("data-insertar")>-1)
			{
				document.querySelector("#alta-heroe").addEventListener("submit",insertarActualizarHeroe);
			}

			/*indexOf se usa para buscar texto dentro de una cadena de texto, cuando no encuientra el dato el valor es igual a -1*/
			if(ajax.responseText.indexOf("data-editar")>-1)
			{
				document.querySelector("#editar-heroe").addEventListener("submit",insertarActualizarHeroe);
			}

			//Esta decisión se va a utilizar, para que recarge los datos después de 2 segundo.
			if(ajax.responseText.indexOf("data-recargar")>-1)
			{
				setTimeout(window.location.reload(),3000);
			}
		}
		else
		{
			//alert("No");
			alert("El servidor no contestó\nError: "+ajax.status+" : "+ajax.statusText);
		}
		//console.log(ajax);
	}
}

function ejecutarAjax(datos)
{
	//Para crear el objeto de acuerdo al navegador
	ajax = objetoAJAX();
	//Para detectar cambios de estado
	ajax.onreadystatechange=enviarDatos;
	/*
		Un vez detectados los cambios se indica por que medio se enviará la información al servidor, en este caso POST y el archivo en BAckEnd que va a realizar el proceso
	 */
	ajax.open("POST","controlador.php");
	/*
		http://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions#MIME-version
		http://sites.utoronto.ca/webdocs/HTMLdocs/Book/Book-3ed/appb/mimetype.html
	 */
	/*
		Configuración de la cabecera, en este caso se va a usar un formulario, por eso se usa este tipo de contenido
	 */
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	//Envío los datos
	ajax.send(datos);
}

//function insertarHeroe(evento)
function insertarActualizarHeroe(evento)
{
	evento.preventDefault();
	/*
		alert("procesa formulario");
		console.log(evento);
		console.log(evento.target);
		target[0] Este muestra los elementos dentro del target
		console.log(evento.target[0]);
		console.log(evento.target.length);
	*/
	var nombre = new Array(),
		valor = new Array(),
		hijosForm = evento.target,
		datos = "";

	for(var i=1; i<hijosForm.length ; i++)
	{
		nombre[i] = hijosForm[i].name;
		valor[i] = hijosForm[i].value;
		datos += nombre[i]+"="+valor[i]+"&";
	}
	console.log(datos);
	/*
		La instrucción for va a armar una cadena como la siguiente:
		var datos = "transaccion=insertar&nombre_txt=Nombre del Super héroe&imagen_txt=ruta/del/la/Imagen.png&descripcion_txa=blablabla&editorial_slc=1";
	*/
	ejecutarAjax(datos);
}

function altaHeroe(evento)
{
	evento.preventDefault();
	//alert("Funciona");
	var datos = "transaccion=alta";
	ejecutarAjax(datos);
}

function eliminarHeroe(evento)
{
	evento.preventDefault();
	/*
		los atributos que el usuario inventa en este caso data-id se obtiene del evento con la propiedad dataset
		//alert("Eliminado"+evento.target.dataset.id);
	 */
	var idHeroe = evento.target.dataset.id;
	var eliminar = confirm("¿Estás seguro de eliminar el Super Héroe con el id: "+idHeroe);

	if(eliminar)
	{
		var datos = "idHeroe="+idHeroe+"&transaccion=eliminar";
		ejecutarAjax(datos);
	}
}

function editarHeroe(evento)
{
	evento.preventDefault();
	//alert(evento.target.dataset.id);
	var idHeroe = evento.target.dataset.id,
		datos = "idHeroe="+idHeroe+"&transaccion=editar";
		console.log(datos);
	ejecutarAjax(datos);
}

function alCargarDocumento()
{
	btnInsertar.addEventListener("click",altaHeroe);

	for(var i = 0; i < btnsEliminar.length; i++)
	{
		btnsEliminar[i].addEventListener("click", eliminarHeroe);
	}

	for(var i = 0; i< btnsEditar.length; i++)
	{
		btnsEditar[i].addEventListener("click", editarHeroe);
	}
}

//Eventos
window.addEventListener("load",alCargarDocumento);