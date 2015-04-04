//DECLARACIÓN DE OBJETOS Y VARIABLES
/*
	http://whatsmyuseragent.com/
 	Para saber más acerca de User Agent
*/
var agente = navigator.userAgent.toLowerCase(),
	plataforma = navigator.platform,
	navegador = navigator.appCodeName,
	moviles = /iphone|ipod|ipad|android|blackberry|opera mini|iemobile|mobile/;

//DECLARACIÓN DE FUNCIONES
function detectarDispositivo()
{
	var aDondeVoy;
	//alert("funciona");
	console.log(navigator);
	//document.write("Agente: "+agente+"<br />");
	//document.write("Lenguaje: "+lenguaje+"<br />");
	//document.write(agente.search(moviles));
	if(agente.search(moviles) > -1)
	{
		//alert("Estas en un dispositivo Móvil");
		/*document.write("Agente: "+agente+"<br />");
		document.write("Plataforma: "+plataforma+"<br />");
		document.write("Navegador: "+navegador+"<br />")
		*/
		aDondeVoy = "activos/mobile.html";
	}
	else
	{
		//alert("Estas en un dispositivo de escritorio");
		/*
		document.write("Agente: "+agente+"<br />");
		document.write("Plataforma: "+plataforma+"<br />");
		document.write("Navegador: "+navegador+"<br />")
		*/
		aDondeVoy = "activos/desktop.html";
	}
	window.location.href = aDondeVoy;
}

function detectarUsuario()
{
	document.getElementById("user-agent").innerHTML = agente;
	document.getElementById("plataforma").innerHTML = plataforma;
	document.getElementById("navegador").innerHTML = navegador;
}
//DECLARACION DE EVENTOS
//window.addEventListener("load", cargaDocumento);