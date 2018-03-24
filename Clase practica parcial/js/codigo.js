var ancho = 600;
var alto = 400;
var tecla = 0;

function iniciar()
{


	canvas = document.getElementById("lienzo");
	canvas.width = ancho;
	canvas.height = alto;


	contextoCanvas = canvas.getContext("2d");

	imgHorca = new Image();
	imgHorca.src = "imagenes/horca.png";

	imgHead = new Image();
	imgHead.src = "imagenes/head.png";

	imgBrazo = new Image();
	imgBrazo.src = "imagenes/brazo.png";

	imgHorca.onload = function(){
	contextoCanvas.drawImage(imgHorca,0,0,200,200);
	}	
}


function test(mensaje)
{
	console.log(mensaje)
}
window.addEventListener("load",iniciar);

document.addEventListener("keydown",function(event)
{
	tecla = event.which || event.keycode;
	test("la tecla presionada es: "+tecla);
});