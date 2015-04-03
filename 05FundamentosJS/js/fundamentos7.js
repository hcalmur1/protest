//DECLARACIÓN DE OBJETOS Y VARIABLES
var down = document.querySelector("#down"),
	press = document.querySelector("#press"),
	up = document.querySelector("#up"),
	leftToRight = 0,
	topToBottom = 0,
	pagina = document.querySelector("#pagina"),
	pantalla = document.querySelector("#pantalla"),
	barra = document.querySelector("#barra"),
	subir = document.querySelector("#subir"),
	mapa = document.querySelector("#mapa"),
	iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61208.1349104572!2d-151.7414903640747!3d-16.50041016636489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bdbd188a4a98ab%3A0x160a089e92d5ce61!2sBora+Bora%2C+Polinesia+Francesa!5e0!3m2!1ses-419!2smx!4v1428100939669" width="600" height="450" frameborder="0" style="border:0"></iframe>';

//DECLARACIÓN DE FUNCIONES
function moverObjeto(queTecla)
{
	//console.log(queTecla);
	if(queTecla == 37) //cursor izquierdo
	{
		//caja.style.left = "-100px";
		leftToRight -= 10;
		caja.style.left = leftToRight+"px";
	}
	else if(queTecla == 38) // cursor arriba
	{
		//caja.style.top = "-100px";
		topToBottom -=10;
		caja.style.top = topToBottom+"px";
	}
	else if(queTecla == 39) // cursor derecha
	{
		//caja.style.left = "100px";
		leftToRight += 10;
		caja.style.left = leftToRight+"px";
	}
	else if(queTecla == 40) // cursor abajo
	{
		//caja.style.top = "100px";
		topToBottom +=10;
		caja.style.top = topToBottom+"px";
	}

	if(queTecla == 82) //r
	{
		caja.style.borderRadius = "100px";
	}
	else if(queTecla == 67) //c
	{
		caja.style.borderRadius = "0px";
	}
}

function teclado(evento)
{
	//console.log("Parámetro: ",evento);
	//Se puede manipular el evento ya sea como parámetro o como objeto, depende de las necesidades
	//console.log("Objeto: ",evento);

	evento = window.event;

	if(evento.type == "keydown")
	{
		down.innerHTML = "Keydown: "+String.fromCharCode(evento.keyCode)+" - "+evento.keyCode;
	}
	else if(evento.type == "keypress")
	{
		press.innerHTML = "Keypress: "+String.fromCharCode(evento.keyCode)+" - "+evento.keyCode;
	}
	else if(evento.type == "keyup")
	{
		up.innerHTML = "Keyup: "+String.fromCharCode(evento.keyCode)+" - "+evento.keyCode;
	}

	moverObjeto(evento.keyCode);
}

function raton(evento)
{
	//console.log(evento);
	evento = window.event;

	pagina.innerHTML = "Coordenadas en la página: (X-"+evento.pageX+") , (Y-"+evento.pageY+")";

	pantalla.innerHTML = "Coordenadas en la pantalla: (X-"+evento.screenX+") , (Y-"+evento.screenY+")";
}

function barrasScroll(evento)
{
	//console.log(evento);
	var barraV = document.body.scrollTop,
		barraH = document.body.scrollLeft;
		barra.innerHTML = "BarraV "+barraV+" BarraH "+barraH;
		console.log(barraH, barraV);

		if(barraV > 100)
		{
			subir.style.opacity = 1;
		}
		else
		{
			subir.style.opacity = 0;
		}
}

function mediaQueries()
{
	//innerWIdth y innerHeight me dan el valor de la pantalla o ventana
	var anchoPantalla = window.innerWidth,
		altoPantalla = window.innerHeight;

	console.log(anchoPantalla, altoPantalla);

	if(anchoPantalla>1024)
	{
		mapa.innerHTML = iframe;
	}
	else
	{
		mapa.innerHTML = null;
	}
}

function cargaDocumento()
{
	document.addEventListener("keydown", teclado);
	document.addEventListener("keypress", teclado);
	document.addEventListener("keyup", teclado);
	document.addEventListener("mousemove", raton);
	window.addEventListener("scroll", barrasScroll);

	subir.addEventListener("click", function(){
		document.body.scrollTop = 0;
		document.body.scrollLeft = 0;
	});

	window.addEventListener("resize", mediaQueries);
}

//DECLARACION DE EVENTOS
window.addEventListener("load", cargaDocumento);