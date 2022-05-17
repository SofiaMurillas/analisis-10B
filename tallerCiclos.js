console.log("Punto #1");

var numero = 0;
 
while(numero < 8){
    console.log(numero);
    numero += 1;
}

console.log("Punto #2");

var numero2 = 0;

while(numero2 < 33){
    console.log(numero2);
    numero2 += 3;
}

console.log("Punto #3");

var numero3 = 0;

while(numero3 < 52){
    console.log(numero3);
    numero3 += 2;
}

console.log("Punto #4");

var nume = 1;
var numeLim = prompt("digite un numero");
while(nume <= numeLim){
    console.log(nume);
    nume += 2;
}

console.log("Punto #5");

var contador=parseInt (prompt("ingrese un numero impar"));

while(contador %2 ==0){
    console.log("el numero " + contador + " es par")
    contador=parseInt(prompt("Ingrese un numero impar"));
}

console.log("Punto #6");
var acu = 0;
var cont = 0;
var estu = prompt("digite el numero de estudiantes");
while (cont < estu){
    var edad = parseInt(prompt("ingrese su edad"));
    acu += edad
    cont += 1;
}
console.log("el acumulado de las edades es " + acu);


console.log("Punto #7");

var rifa = "purpura";
var intento=prompt("ingresa un color");
while(intento != rifa){
    console.log("La respuesta es incorrecta");
    intento=prompt("lo lamento, siguiente turno");
}
console.log("felicidades gano la rifa");

console.log("Punto #8");
var acu2=0;
var cont=0;
var numEst = prompt 
