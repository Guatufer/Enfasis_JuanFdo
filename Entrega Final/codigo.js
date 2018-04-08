//------------------------------>
//listado de las variables necesarias, tanto las palabras del juego, como las variables de control
var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n','ñ', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var animales= ["abeja","aguila","araña","ballena","bufalo","burro","caballo","camello","canario","cangrejo","canguro","caracol","ciervo","cocodrilo","elefante","escarabajo","escorpion","gallina","gato","hipopotamo","jabali","jirafa","loro","mosquito","oveja","perdiz","pinguino"];
var paises = ["afganistan", "albania", "alemania", "argentina", "turquia", "australia", "austria", "belgica", "bolivia", "brasil", "canada", "china", "colombia", "ecuador" ,"egipto", "eeuu", "inglaterra", "españa" ,"irlanda", "jamaica", "mexico", "noruega", "portugal", "paraguay", "peru", "rusia", "uruguay", "suiza"];
var colores = ["rojo", "amarillo", "azul","naranja","morado", "verde", "blanco", "negro", "gris","rosado", "marron", "plata"];
var palabras = [];
var letra_ingresada = [];
var tab = [];
var items = document.querySelectorAll("#listaA li");
var vidas;
var oportunidades = document.getElementById('vidas');
var win = 0;
var yadioclic;
var alto = 200;
var ancho = 250;
//----------------------------->
//imagenes empleadas en el juego
img1 = new Image();
img1.src = "imagenes/1.png";
img2 = new Image();
img2.src = "imagenes/2.png";
img3 = new Image();
img3.src = "imagenes/3.png";
img4 = new Image();
img4.src = "imagenes/4.png";
img5 = new Image();
img5.src = "imagenes/5.png";
img6 = new Image();
img6.src = "imagenes/6.png";
img7 = new Image();
img7.src = "imagenes/7.png";
img8 = new Image();
img8.src = "imagenes/8.png";
img9 = new Image();
img9.src = "imagenes/9.png";
img10 = new Image();
img10.src = "imagenes/10.png";
imgwin = new Image();
imgwin.src = "imagenes/win.png";
imgmuerte = new Image();
imgmuerte.src = "imagenes/muerte.png";

//------------------------------>
//las funciones SP, MP y PLAY son funciones de caracter visual, ya que controlas el contenido 
//que va a estar vible en la pantalla del juegador
sp = function()
{
    document.getElementById('Introduccion').style.display = "block";
    document.getElementById('Categorias').style.display = "none";
    document.getElementById('hanhan').style.display = "none";
}

mp = function()
{
    document.getElementById('Introduccion').style.display = "none";
    document.getElementById('Categorias').style.display = "block";
    document.getElementById('hanhan').style.display = "none";
}
play = function()
{
    document.getElementById('Introduccion').style.display = "none";
    document.getElementById('Categorias').style.display = "none";
    document.getElementById('hanhan').style.display = "block";

}
//----------------------------->
//las siguiente funciones F, M, D son la "dificultad" del juego ya que aquí solo se modifica la cantidad de vidas
//por partida 
f = function()
{
    vidas = 10;
    mp();
}
m = function()
{
    vidas = 6;
    mp();
}
d = function()
{
    vidas = 3;
    mp();
}
//------------------------------------------------->
//Las funciones PLAYP, PLAY A, PLAYC, son funciones donde se elige la categoria a jugar donde 
//hay un vector general (palabras), el cual dependiendo de la seleccion del jugado sera asignada 
//una categoria
playP = function()
{
    palabras = paises;
    elegirfrase();
    vida();
    play(); 
    cate = document.getElementById('cat') 
    cate.innerHTML = "Categoria: Paises"
}
playA = function()
{
    palabras = animales;
    elegirfrase();
    vida();
    play(); 
    cate = document.getElementById('cat') 
    cate.innerHTML = "Categoria: Animales" 
}
playC = function()
{
    palabras = colores;
    elegirfrase();
    vida();
    play();  
    cate = document.getElementById('cat') 
    cate.innerHTML = "Categoria: Colores"
}
//------------------------------------------------->
//al cargar la pagina inicamos el canvas, organizamos el alfabeto, ya que al ser ingresado en 
//html desde js hay que llevarlo,
window.onload  = function()
{
    canvas = document.getElementById("lienzo");
    contextoCanvas = canvas.getContext("2d");
    canvas.width = ancho;
    canvas.height = alto;
    var i = 0;
    alfabeto_vacio = document.getElementById('alfabeto');//obtenemos lo que hay en "alfabeto", pero esta vacio, por ende, vamos empezar a llevarno con las variables
    letras = document.createElement('ol');//creamos una lista ordenada que 
    while(i < alfabeto.length)//en este ciclo vamos creando en html, las casillas acordes a el alfabeto
    {
      letras.id = 'alfa';
      lista = document.createElement('li');
      lista.id = 'letra';
      lista.innerHTML = alfabeto[i];
      alfabeto_vacio.appendChild(letras);
      letras.appendChild(lista);
      ver();
      i = i + 1;
    }
    contextoCanvas.drawImage(img1,0,0,200,200);
    sp();
}
//------------------------------------------------->
//la funcion ver solo tiene un fin y es evitar que en cualquier mom
ver = function()
{
    lista.onclick = function()
    {

        var items = document.querySelectorAll("#listaAA li");
        for(var i = 0; i < items.length; i++)
        {
            tab.push(items[i].innerHTML);
        }
        var i = 0;
        letra_click = this.innerHTML;
        this.setAttribute('id','off');
        this.setAttribute('class','activo');
        if(palabra.indexOf(letra_click) == -1)
        {
            vidas = vidas - 1;
            vida();
            animacion();
        }
        while(i < palabra.length)
        {
            if (letra_click == palabra[i])
             {
                letra_ingresada[i] = letra_click;
                items[i].innerHTML = letra_click;
                tab.push(items[i].innerHTML); 
                win = win + 1;
                vida();
             }
             i = i + 1;
            
        }
    }
}

//En esta funcion elegimos la paralabra de forma aleatoria dependiendo
//de la categoria que halla elegido el usuario.
//para ellos usamos una funcion aleatoria y la multiplicamos por la longitud
//del vector para que todas las palabras tengan la misma probabilidad de salir
elegirfrase = function()
{
    aleatorio = Math.floor(Math.random() * palabras.length);
    palabra = palabras[aleatorio];
    console.log(palabra);
    crearespacio();
}
//En esta funcin creamos los espacios en blanco de correspondientes a la palabra de
//la siguiente forma: en html, nos posicionamos div letra_vacia y creamos una lista ul
//(se crea una lista para que cada elemento de la lista sea un letra)
//y vamos creando la cantidad de espacios correspondientes a la longitud de la palabra escogida
crearespacio = function()
{
    //console.log("entre");
    var i = 0;
    palabra_vacia = document.getElementById('letra_vacia');
    palabra_ = document.createElement('ul');
    palabra_.id = 'listaAA';
    while(i < palabra.length)//Ciclo iterativo para crear los espacios correspondientes a la longitud de la palabra
    {      
      listaA = document.createElement('li');
      listaA.id = 'letraA';
      listaA.innerHTML = "_";//El caracter elegico es "_" para hacer referencia a la letra faltante
      palabra_vacia.appendChild(palabra_);
      palabra_.appendChild(listaA);
      i = i + 1;
    }
}

//Esta funcion sirve para mostrar las vidas que tiene el juegador y ademas de esto
//se encarga de mostrar cuando el jugador GANA o PIERDE, y adiciona en el canvas la imagen de 
//ganar o perder
vida = function()
{
    oportunidades.innerHTML = "Usted tiene: " + vidas + " vidas";
    if (vidas < 1)
    {
        oportunidades.innerHTML = "Game Over";
        document.getElementById('alfabeto').style.display = "none";
    }
    else if(win == palabra.length)
    {
        oportunidades.innerHTML = "¡You win!";
        contextoCanvas.drawImage(imgwin,0,0,200,200);
        document.getElementById('alfabeto').style.display = "none";
    }
}
//las funciones de la 1 a la 10 son imagenes que se van superponiendo cuando 
//la persona pierde vida, ademas de esto estan las imagenes para cuando el usuario gana  y pierde
uno = function()
{
    contextoCanvas.drawImage(img1,0,0,200,200);
}
dos = function()
{
    contextoCanvas.drawImage(img2,0,0,200,200);
}
tres = function()
{
    contextoCanvas.drawImage(img3,0,0,200,200);
}
cuatro = function()
{
    contextoCanvas.drawImage(img4,0,0,200,200);
}
cinco = function()
{
    contextoCanvas.drawImage(img5,0,0,200,200);
}
seis = function()
{
    contextoCanvas.drawImage(img6,0,0,200,200);
}
siete = function()
{
    contextoCanvas.drawImage(img7,0,0,200,200);
}
ocho = function()
{
    contextoCanvas.drawImage(img8,0,0,200,200);
}
nueve = function()
{
    contextoCanvas.drawImage(img9,0,0,200,200);
}
dies = function()
{
    contextoCanvas.drawImage(img10,0,0,200,200);
}
muerte = function()
{
    contextoCanvas.drawImage(imgmuerte,0,0,200,200);
}
//Este es un vector de funciones el cual se ejecutra en "animacion" y acorde a las vidas que tenga
//el juegador, se mostrara una imagen
stickman = [muerte ,dies, nueve ,ocho, siete, seis, cinco, cuatro, tres ,dos ,uno];

animacion  = function()
{
    dibujo = vidas;
    stickman[dibujo]();
}
//Esta funcion le corresponde el volver a jugar reiniciando las variables necesarias y llevando
//a el juegado a la pagina principal, donde podra volver a selecionar tanto la dificultad como 
//la categoria en la cual desea jugar
jugar_de_nuevo = function()
{
    
    alfa.parentNode.removeChild(alfa);
    listaAA.parentNode.removeChild(listaAA);    
    tab = [];
    letra_ingresada = [];
    win = 0;
    vidas = 10;
    document.getElementById('hanhan').style.display = "block";
    document.getElementById('alfabeto').style.display = "block";
    window.onload();

}
restart.onclick = function()
{
    jugar_de_nuevo();
}

//Desarrollado por: Juan Fernando Arteaga Acevedo
//Contacto: guatufer@gmail.com



