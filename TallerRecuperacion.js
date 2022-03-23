console.log ("Solucion punto 1");
var litrosP = prompt ("Por favor digite la cantidad de litros caben en su piscina");
var piscina ;
piscina = litrosP/145;
console.log ("La cantidad de horas que tarda en llenar su piscina es " + piscina + " horas");

console.log("Solucion punto 2");
var me = prompt ("Por favor digite el valor a convertir en metros");
var ml;
ml = me*1000;
console.log ("su valor convertido es " + ml + " milimetros");

console.log ("solucion punto 3");
var dc;
dc = me*10;
console.log ("su valor convertido es " + dc + " decimetros");

console.log ("solucion punto 4");
var kl;
kl = dc/10000;
console.log ("su valor convertido es " + kl + " kilometros");

console.log ("solucion punto 5");
var tiempo = prompt("¿cuantos minutos duro la llamada?");
var cost;
cost = 120*tiempo;
console.log("el costo total de su llamada es de " + cost + " pesos");

console.log("solucion punto 6");
var horas = prompt ("¿cuantas horas dura la clase?");
var costoN;
costoN = (horas-1)*25000 + 40000;
console.log("el total a pagar por la clase es de " + costoN + " pesos");




