/*
SEGUIR ESTA REGLA: PRIMERO DECLARACIÓN DEVARAIBLES, LUEGO DECLARACIÓN DE FUNCIONES Y POR ÚLTIMO ASIGNACIÓN DE EVENTOS
*/

//DECLARACIÓN DE VARIABLES
var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");

//DECLARACIÓN DE FUNCIONES
//Esta es una manera de hacer las funciones pero también se puede asignar en los eventos, es decir se copia tal cuál a la función como anónima
function eventoClick(evento)
{
	//alert("Has presionado el botón");
	alert("Has presionado el botón en el evento '"+evento.type+"' con el objeto de nombre '"+ evento.target.id+"'");
	console.log(evento);

	evento.target.style.borderRadius = "1em";
	evento.target.style.fontSize = "2em";
}

//ASIGNACIÓN DE EVENTOS
//Los manejadores de eventos semánticos se ejecutan a la carga del documento
//Función anónima > window.onload = function() {};
//Función ya declarada > window.onload = eventoClick;
window.onload = function() {
	boton.onclick = eventoClick;
}
