console.log ("punto 1");
var m = prompt ("por favor ingrese la cantidad en metros");
var km;
km = m/1000;
console.log ("La comversión de metros a kilometros es " + km); 

console.log ("punto 2");
var distancia = prompt("Por favor digita le distancia que recorre el avion");
var l;
l = (distancia/100)*290;
console.log ("El total de conbustible que consume el avion es " + l);

console.log ("punto 3");
l = l/1000;
console.log ("El total de conbustible que consume el avion en kilolitros " + l);

console.log("solucion punto 4");
var diame = prompt ("por favor digite el valor del diametro del circulo");
var rad;
var circunferencia;
rad = diame/2
var area3;
area3 = Math.PI*(rad**2);
circunferencia = Math.PI*diame;
console.log("el area del circulo es " + area3);
console.log("la circunferencia del circulo es " + circunferencia);