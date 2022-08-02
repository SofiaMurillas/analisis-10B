console.log("Hola");
function saludo(){
    console.log("¿Que tal?")
}
saludo();

function suma(){
    var num1 = 2;
    var num2 = 4;
    console.log(num1+num2);
}
suma();

function sumita(){
    var nume1 = 10;
    var nume2=  22;
    return nume1 + nume2;
}
console.log(sumita());

function sumar(numer1, numer2){
    return numer1+numer2;
}
//console.log (sumar(20, 10));
function main(){
    numero1 =parseFloat(prompt("Ingrese el primer numero"));
    var numero2 = parseFloat(prompt("Ingrese el segundo numero"));
    console.log(sumar(numero1, numero2))
}

