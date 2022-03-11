console.log("solución punto 1");
var lado = prompt(" ingrese el valor del lado del cuadrado: ");
var area;
area = lado*lado;
console.log ("el valor del area del cuadrado es: " + area);

var vol;
vol = area**3;
console.log ("el valor del volumen del cubo es " + vol);

console.log ("solución punto 2");
var base = prompt("por favor digite el valor del la base del rectangulo");
var lado2 = prompt("por favor digite el valor del lado del rectangulo");

var area2;
area2 = base*lado2;
console.log("el area del recatangulo es " + area2);

var per;
per = (base*2) + (lado2*2);
console.log("el perimetro del rectangulo es " + per);

console.log("solucion punto 3");
var diame = prompt ("por favor digite el valor del diametro del circulo");
var rad;
rad = diame/2
var area3;
area3 = Math.PI*(rad**2);
console.log("el area del circulo es " + area3);

var vol2;
vol2 = 4/3*Math.PI*(rad**3);
console.log("el volumen de una esfera es " + vol2);

console.log("solucion punto 4");
var bas1 = prompt ("por favor digite el valor de la primera base");
var bas2 = prompt ("por favor digite el valor de la segunda base");
var h = prompt ("por favor digite el valor de la altura");
var area4;
area4 = (bas1+bas2)*h; //calificar formula
console.log("el area del trapezoide es " + area4);

console.log("solucion punto 5");
var anch = prompt ("por favor digite el valor del ancho de la piscina");
var larg = prompt ("por favor digite el valor del largo de la piscina");
var prof = prompt ("por favor digite el valor de la profundidad de la piscina");
var lit;
lit = anch*larg*prof;
console.log("la cantidad de litros que caben en la piscina es " + lit  + " litros");

console.log("solucion punto 6");
var larg2 = prompt ("por favor digite el valor del largo del muro");
var anch2 = prompt ("por favor digite el valor del ancho del muro");
var area6;
area6 = larg2*anch2*22000;
console.log("el valor total que se le debe pagar al pintor es de " + area6);

console.log("solucion punto 7");

var cm = prompt("por favor digite la longitud de centimetros");
var km;
km = cm/100000;
console.log("este es su valor convertido en kilometros " + km);

var dm = prompt("por favor digite el volumen en decimetros");
var l;
l = dm*1;
console.log("este es su valor convertido a litros " + l);

var mg = prompt("por favor digite su valor en microgramos");
var g;
g = mg/ 1e-6;
console.log("este es su valor convertido en gramos " + g);

var k = prompt("por favor digite su valor en kilometros");
var mm;
mm = k*1000000;
console.log("este es su valor ya convertido a milimetros" + mm);





