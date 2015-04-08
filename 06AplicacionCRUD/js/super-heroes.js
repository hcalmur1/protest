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
	precarga.innerHTML = "<img src='img/loader.gif />";
	/*
		http://es.wikipedia.org/wiki/Anexo:Códigos_de_estado_HTTP
		http://librosweb.es/ajax/capitulo_7/metodos_y_propiedades_del_objeto_xmlhttprequest.html
	 */

	//Se verifica que este listo
	if(ajax.readyState == READY_STATE_CHANGE)
	{
		if(ajax.status == OK)
		{
			alert("Yes");
		}
		else
		{
			alert("No");
		}
	}
}

function ejecutarAjax(datos)
{
	//Para crear el objeto de acuerdo al navegador
	ajax = objetoAJAX();
	//Para detectar cambios de estado
	ajax.onreadystatechange=enviarDatos;
	ajax.open("POST","controlador.php");
	ajax.send(datos);

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