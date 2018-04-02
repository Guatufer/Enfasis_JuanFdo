//------------------------------>
var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n','ñ', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var animales= ["abeja","aguila","araña","ballena","bufalo","burro","caballo","camello","canario","cangrejo","canguro","caracol","ciervo","cocodrilo","elefante","escarabajo","escorpion","gallina","gato","hipopotamo","jabali","jirafa","loro","mosquito","oveja","perdiz","pingüino"];
var paises = ["afganistan", "albania", "alemania", "argentina", "turquia", "australia", "austria", "belgica", "bolivia", "brasil", "canada", "china", "colombia", "ecuador" ,"egipto", "eeuu", "inglaterra", "españa" ,"irlanda", "jamaica", "mexico", "noruega", "portugal", "paraguay", "peru", "rusia", "uruguay", "suiza"];
var colores = ["rojo", "amarillo", "azul","naranja","morado", "verde", "blanco", "negro", "gris","rosado", "marron", "plata"];
var palabras = [];
//var letra_click = "";
letra_ingresada = [];
tab = [];
items = document.querySelectorAll("#listaA li");
vidas;
oportunidades = document.getElementById('vidas');
win = 0;
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
alto = 200;
ancho = 250;
//------------------------------>


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
f = function()
{
    vidas = 10;
    mp();
}
m = function()
{
    vidas = 5;
    mp();
}
d = function()
{
    vidas = 3;
    mp();
}

reiniciar = function()
{

}

//------------------------------------------------->
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
window.onload  = function()
{
    canvas = document.getElementById("lienzo");
    contextoCanvas = canvas.getContext("2d");
    canvas.width = ancho;
    canvas.height = alto;
    var i = 0;
    alfabeto_vacio = document.getElementById('alfabeto');//obtenemos lo que hay en "alfabeto", pero esta vacio, por ende, vamos empezar a llevarno con las variables
    letras = document.createElement('ol');//creamos una lista ordenada que 
    while(i < alfabeto.length)
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

ver = function()
{
    lista.onclick = function()
    {
        var items = document.querySelectorAll("#listaAA li");
        for(var i = 0; i < items.length; i++)
        {
            tab.push(items[i].innerHTML);
        }
        //console.log(tab);
        //console.log(items);
        var i = 0;
        //console.log(this);
        letra_click = this.innerHTML;
        this.setAttribute('class','activo');
        //console.log(letra_click);
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

elegirfrase = function()
{
    aleatorio = Math.floor(Math.random() * palabras.length);
    palabra = palabras[aleatorio];
    console.log(palabra);
    crearespacio();

}

crearespacio = function()
{
    //console.log("entre");
    var i = 0;
    palabra_vacia = document.getElementById('letra_vacia');
    palabra_ = document.createElement('ul');
    palabra_.id = 'listaAA';
    while(i < palabra.length)
    {      
      listaA = document.createElement('li');
      listaA.id = 'letraA';
      listaA.innerHTML = "_";
      palabra_vacia.appendChild(palabra_);
      palabra_.appendChild(listaA);
      i = i + 1;
    }
}

vida = function()
{
    oportunidades.innerHTML = "Usted tiene: " + vidas + " vidas";
    if (vidas < 1)
    {
        oportunidades.innerHTML = "Game Over";
    }
    else if(win == palabra.length)
    {
        oportunidades.innerHTML = "¡You win!";
        contextoCanvas.drawImage(imgwin,0,0,200,200);
    }

}
reset = function()
{

}
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

stickman = [muerte ,dies, nueve ,ocho, siete, seis, cinco, cuatro, tres ,dos ,uno];

animacion  = function()
{
    dibujo = vidas;
    stickman[dibujo]();
}
jugar_de_nuevo = function()
{
    
    alfa.parentNode.removeChild(alfa);
    listaAA.parentNode.removeChild(listaAA);    
    tab = [];
    letra_ingresada = [];
    win = 0;
    vidas = 10;
    document.getElementById('hanhan').style.display = "block";
    window.onload();

}
restart.onclick = function()
{
    jugar_de_nuevo();
}





