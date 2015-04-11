//Constantes
var READY_STATE_CHANGE = 4
	OK = 200;

//Variables y Objetos
var ajax = null,
	btnInsertar = document.querySelector("#insertar"),
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
			/*indexOf se usa para buscr texto dentro de una cadena de texto, cuando no encuientra el dato el valor es igual a -1*/
			if(ajax.responseText.indexOf("data-insertar")>-1)
			{
				document.querySelector("#alta-heroe").addEventListener("submit",insertarHeroe);
			}

		}
		else
		{
			//alert("No");
			alert("El servidor no contestó\nError: "+ajax.status+": "+ajax.statusText);
		}
		console.log(ajax);

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

function insertarHeroe(evento)
{
	alert("procesa formulario");
	evento.preventDefault();
	//var datos = "transaccion=insertar&nombre_txt=Nombre del Super héroe&imagen_txt=ruta/del/la/Imagen.png&descripcion_txa=blablabla&editorial_slc=1";
	var datos = "transaccion=insertar";
	ejecutarAjax(datos);
}

function altaHeroe(evento)
{
	evento.preventDefault();
	//alert("Funciona");
	var datos = "transaccion=alta";
	ejecutarAjax(datos);
}

function alCargarDocumento()
{
	btnInsertar.addEventListener("click",altaHeroe);
}

//Eventos
window.addEventListener("load",alCargarDocumento);