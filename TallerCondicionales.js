//Juan sebastian c - Sofia Murillas - Karla

//console.log("Solucion #1");

var saludar = "si";
 
if(saludar=="si"){
    console.log("Hola, soy un condicional simple");
}

//console.log("Solucion #2");


var x=20;
 
if(x<=21){
    console.log("La condición es verdadera");
}

//console.log("Solucion #3");

var edad = 22;
 
if(edad>=18){	
    console.log("Bienvenido, puede ingresar");
}else{
    console.log("Lo siento, no tiene edad suficiente para entrar aquí");
}

//console.log("Solucion #4");

var numero1 = 5;
var numero2 = 8;
 
if(numero1 < numero2 ) {
  console.log(+numero1+ " no es mayor que " +numero2);
}
if(numero2 > 0) {
  console.log(+numero2+  " es positivo");
}
if(numero1 < 0) {
  console.log(+numero1+ " es negativo o distinto de cero");
}
if(numero1+1 < numero2 ) {
  console.log("Incrementar en 1 unidad el valor de " +numero1+ " no lo hace mayor o igual que " +numero2);
}

//console.log("Solucion #5");
     
var numerito = 100;
 
if(numerito < 50) {
  console.log(+numerito+ " sí es estrictamente menor que 50");
} 
else if(numerito > 50 & numerito < 80) 
{
  console.log(+numerito+ " sí está entre 50 y 80");
}else if(numerito > 80 & numerito < 100 ) 
{
  console.log(+numerito+ " es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito == 100) 
{
  console.log(+numerito+  " es igual a 100");
}else{
  console.log(+numerito+ " es estrictamente mayor a 100");
}


//console.log("Solucion #9");

//Se necesita un programa en javascript que le recuerde a 
//los estudiantes de décimo cuándo tienen permitido ir al 
//polideportivo durante el descanso. Lo que el programa 
//necesita para entregar el mensaje es conocer qué día es. 
//Solamente los jueves pueden asistir al polideportivo, 
//cualquier otro día debe informarle que no tiene permitido ir.


var diapoli= "martes";
var polideportivo;
 
if(diapoli == "lunes" || diapoli == "martes" || diapoli == "miercoles" || diapoli == "viernes"){
    polideportivo="No";
}else if(diapoli == "jueves"){
    polideportivo="Si";
    console.log(" Hoy les corresponde el polideportivo");

}else if(polideportivo="No");
{
    console.log(" Hoy no les corresponde el polideportivo, su dia es el jueves");
}

//console.log("Solucion #10");

//Desarrolle un algoritmo que dados dos valores numéricos entregue 
//el resultado de la división entre ambos, recuerde que la división 
//entre cero no tiene solución por tanto debe mostrar un mensaje al 
//usuario en caso que digite el cero como divisor.

var dividendo = 6;
var divisor = 0;
var resultadoo;
resultadoo = dividendo / divisor;

if(resultadoo){	
    console.log("Lo siento, Esta division no tiene solucion");
}else if(resultadoo>1){
  console.log("El resultado de la division es " +resultadoo);
}
