/*
SEGUIR ESTA REGLA: PRIMERO DECLARACIÓN DEVARAIBLES, LUEGO DECLARACIÓN DE FUNCIONES Y POR ÚLTIMO ASIGNACIÓN DE EVENTOS
*/

//DECLARACIÓN DE VARIABLES
var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");

var numero = document.getElementById("numero");

//DECLARACIÓN DE FUNCIONES
//Esta es una manera de hacer las funciones pero también se puede asignar en los eventos, es decir se copia tal cuál a la función como anónima
function eventoClick(evento)
{
	//alert("Has presionado el botón");
	alert("Has presionado el botón en el evento '"+evento.type+"' con el objeto de nombre '"+ evento.target.id+"'");
	console.log(evento);

	evento.target.style.borderRadius = "1em";
	evento.target.style.fontSize = "2em";

	boton2.removeEventListener("click", eventoClick);
	boton2.addEventListener("dblclick", otroEventoClick);
}


function otroEventoClick(evento)
{
	alert("Has presionado el botón en el evento '"+evento.type+"' con el objeto de nombre '"+ evento.target.id+"'");
	console.log(evento);

	evento.target.style.background = "black";
	evento.target.style.color = "white";


}

function parImpar()
{
	var numero = prompt("Ingresa un número");

	//isNaN = is Not a Number true si el valor es alfanuméico, falso si es númerico
	if(isNaN(numero))
	{
		alert("No me engañes, eso no es un número");
	}
	else
	{
		//alert("Es un número");
		var modulo = numero%2;
		//var tipo = (modulo==0)?"Par":"Impar";
		var tipo = (modulo==1)?"Impar":"Par";
		alert("El número " +numero+" es "+tipo);

	}
}

//ASIGNACIÓN DE EVENTOS
//Los manejadores de eventos semánticos se ejecutan a la carga del documento
//Función anónima > window.onload = function() {};
//Función ya declarada > window.onload = eventoClick;
window.onload = function() {
	boton.onclick = eventoClick;
	boton.onclick = otroEventoClick;

	boton2.addEventListener("click", eventoClick);

	numero.addEventListener("click", parImpar);
}
