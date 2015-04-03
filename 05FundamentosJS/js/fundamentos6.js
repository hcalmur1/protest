//DECLARACIÓN DE OBJETOS Y VARIABLES
var btnCalificacion = document.querySelector("#calificacion");
var btnAdivina = document.querySelector("#adivina");
var btnEscribe = document.querySelector("#escribe");

/*Para trabajar con el formulario*/
var frmRFC = document.querySelector("#rfc");
var nombre = document.querySelector("#nombre");
var apaterno = document.querySelector("#apaterno");
var amaterno = document.querySelector("#amaterno");
var nacimiento = document.querySelector("#nacimiento");
var homoclave = document.querySelector("#homoclave");
var enviar = document.querySelector("#enviar");
var respuesta = document.querySelector("#respuesta");

//http://es.wikipedia.org/wiki/Expresion_regular
var expRegNombre = /^[A-Za-zÑñáÁÉéíÍÓóÚúüÜ\s]+$/;
var expRegFecha = /^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-](19|20)\d{2}$/;
var expRegClave = /^[\w][\w][\w]$/;


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

function generarRFC(evento)
{
	/*
		RFC: 13 caracteres
		1)primeros 2 caracteres del apaellido paterno
		2)primer caracter del apellido materno
		3)primer caracter del Nombre
		4)Fecha de nacimiento formato aammdd
		5)Homoclave de 3 caracteres
		alert("Entra");
		El evento preventDefault() Previene las acciones para cualquier evento
	*/

	//console.log(evento);
	//alert("He prevenido el evento submit del formualrio");
	evento.preventDefault();

	var rfc = apaterno.value.substring(0,2);
	rfc += amaterno.value.charAt(0);
	rfc += nombre.value.charAt(0);
	rfc += nacimiento.value.substring(8);
	rfc += nacimiento.value.substring(0,2);
	rfc += nacimiento.value.substring(3,5);
	rfc += homoclave.value;
	respuesta.style.fontSize = "32px";
	respuesta.innerHTML = "Tu RFC es "+rfc.toUpperCase();

}

function validaDatos(evento)
{
	//alert("Probando blur");
	//console.log(evento.target);
	var queCaja = evento.target,
	    validado = true, 
		color;

		if(queCaja.id == "nombre" || queCaja.id == "apaterno" || queCaja.id == "amaterno")
		{
			if(!expRegNombre.exec(queCaja.value))
			{
				alert("El campo "+queCaja.placeholder+" sólo acepta letras y espacios en blanco");
				var validado = false;
				queCaja.focus();
			}
		}
		else if(queCaja.id == "nacimiento")
		{
			if(!expRegFecha.exec(queCaja.value))
			{
				alert("El campo fecha de nacimiento no es válido, el formato debe ser: "+queCaja.placeholder);
				var validado = false;
				queCaja.focus();
			}

		}
		else if(queCaja.id == "homoclave")
		{
			if(!expRegClave.exec(queCaja.value))
			{
				alert("La homoclave "+queCaja.placeholder);
				var validado = false;
				queCaja.focus();
			}

		}


		color = (validado)?"green":"red";
		queCaja.style.outline = "thin solid "+color;
}

function cargaDocumento()
{
	btnCalificacion.addEventListener("click", obtenerCalificaciones);
	btnAdivina.addEventListener("click", adivinarNumero);
	btnEscribe.addEventListener("click", cadenaTexto);
	
	frmRFC.addEventListener("submit", generarRFC);

	nombre.addEventListener("blur", validaDatos);
	apaterno.addEventListener("blur", validaDatos);
	amaterno.addEventListener("blur", validaDatos);
	nacimiento.addEventListener("blur", validaDatos);
	homoclave.addEventListener("blur", validaDatos);
}

//DECLARACION DE EVENTOS
window.addEventListener("load", cargaDocumento);