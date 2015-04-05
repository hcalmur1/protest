//DECLARACIÓN DE OBJETOS Y VARIABLES
/*
	http://whatsmyuseragent.com/
 	Para saber más acerca de User Agent
*/
var agente = navigator.userAgent.toLowerCase(),
	plataforma,	navegador,
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

function detectarPlataforma()
{
	if(agente.indexOf("win") > -1)
	{
		plataforma = (agente.search(moviles)>-1)?"Windows Phone":"Windows NT";
	}
	else if(agente.indexOf("mac") > -1)
	{
		plataforma = (agente.search(moviles)>-1)?"IOS":"Mac OS";
	}
	else if(agente.indexOf("linux") > -1)
	{
		plataforma = (agente.search(moviles)>-1)?"Android":"Linux";
	}
	else if(agente.indexOf("blackberry") > -1)
	{
		plataforma = "Blackberry";
	}
	else
	{
		plataforma = (agente.search(moviles)>-1)?"Plataforma móvil desconocida":"Plataforma de escritorio desconocida";
	}

	document.getElementById("plataforma").innerHTML = plataforma;
}

function detectarIE()
{
	var posicionIE, versionIE;
	posicionIE = agente.indexOf("msie");
	versionIE = agente.substring(posicionIE+5,posicionIE+8);

	if(agente.indexOf("rv:11") > -1)
	{
		navegador = "IE 11";
	}
	else if(versionIE=="10.")
	{
		navegador = "IE 10";
	}
	else if(versionIE=="9.0")
	{
		navegador = "IE 9.0";
	}
	else if(versionIE=="8.0")
	{
		navegador = "IE 8.0";
	}
	else if(versionIE=="7.0")
	{
		navegador = "IE 7.0";
	}
	else if(versionIE=="6.0")
	{
		navegador = "IE 6.0";
	}
	else 
	{
		navegador = "Más viejo que IE 6.0, NO ME JODAS!!!";
	}

	return navegador;
}

function detectarNavegador()
{
	if( agente.indexOf("chrome") > -1 )
	{
		navegador = "Chrome";
	}
	else if( agente.indexOf("firefox") > -1 )
	{
		navegador = "Firefox";
	}
	else if( agente.indexOf("opera") > -1 )
	{
		navegador = "Opera";
	}
	else if( agente.indexOf("safari") > -1 )
	{
		navegador = "Safari";
	}
	else if( agente.indexOf("msie") > -1 || agente.indexOf("rv:11") >- 1 )
	{
		detectarIE();
	}
	else
	{
		navegador = "navegador desconocido";
	}

	document.getElementById("navegador").innerHTML = navegador;
}

function detectarUsuario()
{
	document.getElementById("user-agent").innerHTML = agente;
	detectarPlataforma();
	detectarNavegador();
}

//DECLARACION DE EVENTOS
//window.addEventListener("load", cargaDocumento);