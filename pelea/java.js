/*console.log("Este es un mensaje desde la consola");
alert("Este es un mensaje usando JavaScript");

var cedula = 200532687;
var estatura = 1.20;
var nombre = "Raul";
var descripcion = "\"Me describo\n como un ladrón\\ \" ";
var gustos = ["robar", "jugar futbol","robar a los compañeros de futbol"];
var liberal = true;

var golpes = {
"udem":60000000,
"udea":[30000000,"Una gasinba", "3 zapatos"],
"unal":{
	"ingenieria":10000000,
	"derecho":15000000,
	"comunicaciones":2000000
}

};
if (cedula > 40000000) 
{
	console.log("Mi nombre es: "+nombre);
	console.log("Mi estatura es: "+estatura);
	console.log(descripcion);
	console.log("Uno de mis gustos es: "+gustos[0]);
}*/

jugador1 = {
	nombre: "Dungeon master",
	elemento: "Fuego",
	exp: 20,
	salud: 100,
	ataque: 3,
	proteccion: 1
};

jugador2 = {
	nombre: "Dungeon Keeper",
	elemento: "Hielo",
	exp: 30,
	salud: 100,
	ataque: 5,
	proteccion: 2
};

/**
 * [selecrfiist description]
 * @param  {[type]} jugador1 [description]
 * @param  {[type]} jugador2 [description]
 * @return {[type]}          [description]
 */
function selecrfirst(jugador1,jugador2)
{
	if (jugador1.exp > jugador2.exp) 
		{
			return jugador1;
		}
		else
		{
			return jugador2;
		}
}
function initbattle()
{
	var primergolpe = selecrfirst(jugador1,jugador2);
	console.log("El primer golpe sera lanzado por" + primergolpe.nombre + " .Mother fucker!!!");
	

	var f = true;
	var critico1 = Math.random();
	var critico =  1 + critico1;
	console.log(critico);
	if (primergolpe == jugador2.nombre)
	{

	
		while((jugador2.salud > 0 || jugador1.salud > 0)&&(f = true))
		{
			jugador2.salud = jugador2.salud - jugador1.ataque + jugador2.proteccion;
			/*console.log("Ataque realizado por:" + jugador2.nombre );*/
			jugador1.salud = jugador1.salud - jugador2.ataque + jugador1.proteccion;
			/*console.log("Ataque realizado por:" + jugador1.nombre );*/
			if (jugador1.salud == 0)
			 {
			 	console.log("EL GANADOR ES:" + jugador2.nombre );
			 	f = false;
			 	break;


			 }
			 else if (jugador2.salud == 0)
			 {
			 	console.log("EL GANADOR ES:" + jugador1.nombre );
			 	f = false;
			 	break;

			 }
		}
	}
	 else 
	 {
	 	while((jugador2.salud > 0 || jugador1.salud > 0)&&(f = true))
		{
			jugador1.salud = jugador1.salud - jugador2.ataque + jugador1.proteccion;
			jugador2.salud = jugador2.salud - jugador1.ataque + jugador2.proteccion;

			if (jugador1.salud == 0)
			 {
			 	console.log("EL GANADOR ES:" + jugador2.nombre );
			 	f = false;
			 	break;

			 }
			 else if (jugador2.salud == 0)
			 {
			 	console.log("EL GANADOR ES:" + jugador1.nombre );
			 	f = false;
			 	break;

			 }
		}
	 }
}


initbattle();
/*

function DPS1(jugador1,jugador2)
{
	var vida  = jugador2.salud - jugador1.ataque + jugador2.proteccion;
	jugador2.salud = vida;
	return jugador2
}
initbattle();

function DPS2(jugador1,jugador2)
{
	var vida  = jugador1.salud - jugador2.ataque + jugador1.proteccion;
	jugador1.salud = vida;
	return jugador1
}
function pelea(jugador1,jugador2)
{
	var vidaa = jugador1.salud;
	var vidab = jugador2.salud;
	while(vidaa < 1 || vidab < 1)
	{
		DPS1();
		DPS2();
	}	
}
pelea();


*/













