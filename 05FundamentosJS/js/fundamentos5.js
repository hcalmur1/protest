//http://json.org/json-es.html
//DECLARACIÓN DE OBJETOS Y VARIABLES
//var paises = new Array("México", "Colombia", "Peru", "España", "Argentina");
/*var paises = new Array();
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
);*/
var json = 
{
	"paises":
	[
		{
			"nombre":"México",
			"ubicacion":"u-mx.png",
			"bandera":"b-mx.png",
			"escudo":"e-mx.png",
			"oficial":"Estados Unidos Mexicanos",
			"gobierno":"República Federal Presidencial",
			"capital":"Ciudad de México, D.F",
			"habitantes":119426000,
			"territorio":1964375
		},
		{
			"nombre":"Colombia",
			"ubicacion":"u-co.png",
			"bandera":"b-co.png",
			"escudo":"e-co.png",
			"oficial":"republica de Colombia",
			"gobierno":"República Presidencialista",
			"capital":"Bogotá D.C.",
			"habitantes":47665951,
			"territorio":1141748
		},
		{
			"nombre":"Perú",
			"ubicacion":"u-pe.png",
			"bandera":"b-pe.png",
			"escudo":"e-pe.png",
			"oficial":"Republica del Perú",
			"gobierno":"República Democrática Presidencialista",
			"capital":"Lima",
			"habitantes":30814175,
			"territorio":1285216
		},
		{
			"nombre":"España",
			"ubicacion":"u-es.png",
			"bandera":"b-es.png",
			"escudo":"e-es.png",
			"oficial":"Reina de España",
			"gobierno":"Monarquia Parlamentira",
			"capital":"Madrid",
			"habitantes":47129783,
			"territorio":504645
		},
		{
			"nombre":"Argentina",
			"ubicacion":"u-ar.png",
			"bandera":"b-ar.png",
			"escudo":"e-ar.png",
			"oficial":"República Argentina",
			"gobierno":"República Federal Democrática",
			"capital":"Buenos Aires",
			"habitantes":42192500,
			"territorio":2780400
		}
	]
}
//DECLARACIÓN DE FUNCIONES
function mostrarInfoPaises()
{
	/*Esta es una forma de como ir accediendo a los datos
		para poder tratarlos y presentarlos en el FrontEnd
		ya sea a través del uso de console o a través del
		console.log()
	
		alert(json);
		console.log(json);
		console.log(json.length);
		console.log(json[0]);
		console.log(json["paises"][0]);
		console.log(json["paises"].lenght);
		console.log(json["paises"][0].nombre);
		console.log(json["paises"][0][nombre]);
	*/


	var infoPais = "";

	for( var n = 0; n<json["paises"].length; n++)
	{
		infoPais += "<article class='pais'>";
			infoPais += "<div>";
				infoPais += "<h1>"+json["paises"][n]["nombre"]+"</h1>";
				infoPais += "<img src='activos/"+json["paises"][n]["ubicacion"]+"' />";
			infoPais += "</div>";
			infoPais += "<div>";
				infoPais += "<img src='activos/"+json["paises"][n]["bandera"]+"' />";
				infoPais += "<img src='activos/"+json["paises"][n]["escudo"]+"' />";
			infoPais += "</div>";
			infoPais += "<div>";
				infoPais += "<p>Nombre oficial: "+json["paises"][n]["nombre"]+"</p>";
				infoPais += "<p>Gobierno: "+json["paises"][n]["gobierno"]+"</p>";
				infoPais += "<p>Capital: "+json["paises"][n]["capital"]+"</p>";
				infoPais += "<p>Habitantes: "+json["paises"][n]["habitantes"]+"</p>";
				infoPais += "<p>Territorio: "+json["paises"][n]["territorio"]+"<sup>2</sup></p>";
			infoPais += "</div>";
		infoPais += "</article>";
	}

	document.getElementById("paises").innerHTML = infoPais;
}

//DECLARACION DE EVENTOS
window.addEventListener("load", mostrarInfoPaises);

