console.log("Punto #1");

var CantSaludos = 0;
while(CantSaludos < 5){
    console.log("2");
    CantSaludos += 1;
}

console.log("Punto #2");

var numero = 0;
 
while(numero < 9){
    console.log(numero);
    numero += 1;
}
 


console.log("Punto #3");

var numero2 = 0;

while(numero2 < 12){
    console.log(numero2);
    numero2 += 2;
}

/*console.log("Punto #4");
var palabra = "seguir";
while(palabra != "ok"){
    palabra=prompt("ingrese ok para parar");
    console.log("dijo "+palabra);
}
*/
// console.log("Dijo ok");

console.log("Punto #5");
var negativo = 0;
while(negativo >= 0){
    negativo=prompt("ingrese un numero negativo");
    console.log("numero es " + negativo);
}

console.log("Punto #6");

var num1;
var num2;
var resultado=0;
while(resultado<=20){
    num1=prompt("valor 1");
    num2=prompt("valor 2");
    resultado=num1+num2;
    console.log("el resultado es " + resultado);
}

console.log("Punto #7");

var contraseña = "t3t4s";
var intento=prompt("ingresa una contraseña");
while(intento != contraseña){
    console.log("La contraseña es incorrecta");
    intento=prompt("ingrese una contraseña nueva");
}
console.log("contraseña correcta");