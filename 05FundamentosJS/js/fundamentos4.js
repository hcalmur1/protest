//DECLARACIÓN DE OBJETOS Y VARIABLES
//var paises = new Array("México", "Colombia", "Peru", "España", "Argentina");
var paises = new Array();
paises[0] = Array(
	"México",
	"u-mx.png",
	"b-mx.png",
	"e-mx.png",
	"Estados Unidos Mexicanos",
	"República Federal Presidencial",
	"Ciudad de México, D.F",
	119426000,
	1964375
);

paises[1] = Array(
	"Colombia",
	"u-co.png",
	"b-co.png",
	"e-co.png",
	"republica de Colombia",
	"República Presidencialista",
	"Bogotá D.C.",
	47665951,
	1141748
);

paises[2] = Array(
	"Perú",
	"u-pe.png",
	"b-pe.png",
	"e-pe.png",
	"Republica del Perú",
	"República Democrática Presidencialista",
	"Lima",
	30814175,
	1285216
);

paises[3] = Array(
	"España",
	"u-es.png",
	"b-es.png",
	"e-es.png",
	"Reina de España",
	"Monarquia Parlamentira",
	"madrid",
	47129783,
	504645
);

paises[4] = Array(
	"Argentina",
	"u-ar.png",
	"b-ar.png",
	"e-ar.png",
	"República Argentina",
	"República Federal Democrática",
	"Buenos Aires",
	42192500,
	2780400
);

//DECLARACIÓN DE FUNCIONES
function mostrarPaises()
{
	//alert(paises);
	//alert(paises[1]);
	//alert(paises.length);
	//alert(paises[1]); El contenido completo del arreglo en la poisicón 1
	//alert(paises[3][6]); Para imprimir el contenido deuna celda en específico
	//alert(paises[4].length); Para saber la longitud de un arreglo

	var listaPaises = "<ol>";
	//listaPaises += "<li>"+paises[0]+"</li>";
	//listaPaises += "<li>"+paises[1]+"</li>";
	//listaPaises += "<li>"+paises[2]+"</li>";
	//listaPaises += "<li>"+paises[3]+"</li>";
	//listaPaises += "<li>"+paises[4]+"</li>";
	//3 partes del for 1)inicialización, 2) Condición 3) Incremento o decremento
	//Siempre hay dos formar de hacer las cosas eb programación
	//for(var n=0; n<paises.length; n++)
	for(n=(paises.length)-1; n>=0; n--)
	{
		listaPaises += "<li>"+paises[n]+"</li>";
	}

	listaPaises += "</ol>";

	document.getElementById("paises").innerHTML = listaPaises;
}

function mostrarInfoPaises()
{

	var infoPais = "";

	for( var n = 0; n<paises.length; n++)
	{
		infoPais += "<article class='pais'>";
			infoPais += "<div>";
				infoPais += "<h1>"+paises[n][0]+"</h1>";
				infoPais += "<img src='activos/"+paises[n][1]+"' />";
			infoPais += "</div>";
			infoPais += "<div>";
				infoPais += "<img src='activos/"+paises[n][2]+"' />";
				infoPais += "<img src='activos/"+paises[n][3]+"' />";
			infoPais += "</div>";
			infoPais += "<div>";
				infoPais += "<p>Nombre oficial: "+paises[n][4]+"</p>";
				infoPais += "<p>Gobierno: "+paises[n][5]+"</p>";
				infoPais += "<p>Capital: "+paises[n][6]+"</p>";
				infoPais += "<p>Habitantes: "+paises[n][7]+"</p>";
				infoPais += "<p>Territorio: "+paises[n][8]+"<sup>2</sup></p>";
			infoPais += "</div>";
		infoPais += "</article>";
	}

	document.getElementById("paises").innerHTML = infoPais;
}

function cargaDocumento()
{
	//mostrarPaises();
	mostrarInfoPaises();
}

//DECLARACION DE EVENTOS
window.addEventListener("load", cargaDocumento);

