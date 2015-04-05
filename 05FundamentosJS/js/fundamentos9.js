//Clases
var Animal = function(t)
{
	var o = this;
	o.tipo = t;

	o.saluda = function(s)
	{
		alert(s);
		var audio = document.createElement("audio");
		audio.src = "activos/"+s+".mp3";
		return audio.play();
	}
}

var Perro = function(n)
{
	var o = this;
	o.nombre = n;
}

var Gato = function(n)
{
	var o = this;
	o.nombre = n;
}

//Con ayuda del prototipo de JS vamos a extender las caracteríscticas de mi clase Animal
Animal.prototype.domestico = false;
Animal.prototype.aparecer = function(n)
{
	var imagen = document.createElement("img");
	imagen.src = "activos/"+n+".jpg";
	imagen.id = n;
	document.body.appendChild(imagen);
	return imagen;
}

var oKenai = new Perro("Kenai");
console.log(oKenai);
//oKenai.saluda("guau");
//Herencia mediante el prototipo de JS
Perro.prototype = new Animal("Mamífero");
Perro.prototype.domestico = true;
Gato.prototype = new Animal("Mamífero");
Gato.prototype.domestico = true;

var pKenai = new Perro("Kenai");
var pmauricio = new Gato("mauricio")
console.log(pKenai);
console.log(pmauricio);
//pKenai.saluda("guau");
//pmauricio.saluda("miau");
pKenai.aparecer("kenai");
pmauricio.aparecer("mauricio");

window.addEventListener("load", function(){
	document.querySelector("#kenai").addEventListener("click", function(){
				pKenai.saluda("guau");
		})
		document.querySelector("#mauricio").addEventListener("click", function(){
				pmauricio.saluda("miau");
		})
});