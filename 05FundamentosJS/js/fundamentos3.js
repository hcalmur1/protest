//http://es.wikipedia.org/wiki/Tres_en_linea
//Arreglos
/*
var miArreglo = new Array("hola", 19, true);
console.log(miArreglo);
console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);
*/

//Declaración de Objetos y Variables
var turno = 1;
var queTurno;
var arregloGato = new Array(9);
var celdas = document.getElementsByClassName("gato");
/*
var etiqueta = document.getElementsByTagName("td");
console.log(etiqueta);
*/

//Declaración de Funciones
function ganaJugador(letra)
{
	if(
		(arregloGato[0] == letra && arregloGato[1] == letra && arregloGato[2] == letra) ||
		(arregloGato[3] == letra && arregloGato[4] == letra && arregloGato[5] == letra) ||
		(arregloGato[6] == letra && arregloGato[7] == letra && arregloGato[8] == letra) ||
		(arregloGato[0] == letra && arregloGato[3] == letra && arregloGato[6] == letra) ||
		(arregloGato[1] == letra && arregloGato[4] == letra && arregloGato[7] == letra) ||
		(arregloGato[2] == letra && arregloGato[5] == letra && arregloGato[8] == letra) ||
		(arregloGato[0] == letra && arregloGato[4] == letra && arregloGato[8] == letra) ||
		(arregloGato[2] == letra && arregloGato[4] == letra && arregloGato[6] == letra)
	)
	{
		alert("Jugador "+letra+" GANA!!");
		window.location.reload();
	}
}

function gato(evento)
{
	//alert("Funciona");
	//alert(evento.target.id);
	var celda = evento.target;
	//alert(celda);
	var idCelda = evento.target.id;
	//alert(idCelda); idCelda es una cadena
	//alert(idCelda.length); longitud de la cadena
	//alert(idCelda[0]);

	var posicionAMarcar = idCelda[1]-1;
	//console.log(posicionAMarcar);
	//alert(posicionAMarcar);

	queTurno = turno%2;

	//Turno X (Impares)
	if( queTurno == 1 )
	{
		celda.innerHTML = "X";
		celda.style.background = "#EC673A";
		arregloGato[posicionAMarcar] = "X";
		ganaJugador("X");
	}
	//Turno O (Pares)
	//else if( queTurno == 0 ) este no debería de ir ya que se puede utilizar un solo if else
	else
	{
		celda.innerHTML = "O";
		celda.style.background = "#1C5F81";
		arregloGato[posicionAMarcar] = "O";
		ganaJugador("O");
	}

	console.log(" Valor de turno " +turno," Valor de queTurno " +queTurno," arregloGato "+arregloGato[posicionAMarcar], " posición a marcar "+posicionAMarcar, "Posición en el arregloGato "+arregloGato);

	if( turno == 9 )
	{
		alert("Empate");
		/*
		Para recagar la página es con la instrucción
			windows.location.reload();
		*/
		windows.location.reload();
		console.log(window.location);
		window.locate.reload();

	}
	else
	{
		turno++;
	}


}

function cargarDocumento()
{
	//document.getElementById("c1").addEventListener("click", gato);
	//document.getElementsByClassName("gato").addEventListener("click",gato);
	//console.log(document.getElementsByClassName("gato"));
	//document.getElementsByClassName("gato")[4].addEventListener("click",gato);
	var n = 0;

	while(n < celdas.length)
	{
		//console.log(n,celdas[n]);
		celdas[n].addEventListener("click", gato);
		n++;

	}

}

//Declaración de Eventos
window.addEventListener("load", cargarDocumento);