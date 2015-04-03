//DECLARACIÓN DE OBJETOS Y VARIABLES
var btnCalificacion = document.querySelector("#calificacion");
var btnAdivina = document.querySelector("#adivina");
var btnEscribe = document.querySelector("#escribe");

//DECLARACIÓN DE FUNCIONES
function obtenerCalificaciones()
{
	 //alert("Calificaciones");
	 var calificacion = prompt("Cuál es tu calificación");

	 if(isNaN(calificacion))
	 {
	 	alert("No me engañes eso no es una calificación");
	 }
	 else
	 {
	 	var redondear = Math.round(calificacion);
	 	alert("Tu calificación es: "+redondear);
	 }
}

function adivinarNumero()
{
	//alert("adivina");
	var numero = prompt("¿Adivina un número entre 1 y 10?");
	var aleatorio, siAdivine, noAdivine, adivina;

	if(isNaN(numero))
	{
		alert("No me engañes, ese no es un número");
	}
	else
	{
		/*
			aleatorio = Math.random(); Me proporciona un número random entre cero y uno
			aleatorio = Math.random()*10; Me proporciona un número alearotio entre 0 y 10con parte fraccionaria
		*/
		var aleatorio = Math.round(Math.random()*10);

		siAdivine = "!Felcidades Adivinaste!, el número es "+aleatorio;
		noAdivine = "!Suerte para la próxima!, el número es " +aleatorio+" y tu elegiste "+numero;

		adivina = ( aleatorio == numero )? siAdivine : noAdivine;
		alert(adivina);
	}
}

function cadenaTexto()
{
	var cadena = prompt("Escribe algo");
	var longitud = cadena.length;
	var mayusculas = cadena.toUpperCase();
	var minusculas = cadena.toLowerCase();

	alert("cadena original '"+cadena+"' \nLongitud: "+longitud+" \n"+mayusculas+"\n"+minusculas);
}


function cargaDocumento()
{
	btnCalificacion.addEventListener("click", obtenerCalificaciones);
	btnAdivina.addEventListener("click", adivinarNumero);
	btnEscribe.addEventListener("click", cadenaTexto);
}

//DECLARACION DE EVENTOS
window.addEventListener("load", cargaDocumento);