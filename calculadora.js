function Suma(n1,n2){
    var resultado = n1 + n2;
    var mensaje = "El total de la suma entre " + n1 + " y " + n2 + " es igual a " + resultado;
    //return mensaje;
    return resultado;
}

function Resta(n1,n2){
    var resultado = n1 - n2;
    var mensaje = "El total de la resta entre  " + n1 + " y " + n2 + " es igual a " + resultado;
    //return mensaje;
    return resultado;
}

function Multiplicacion(n1,n2){
    var resultado = n1 * n2;
    var mensaje = "El total de la multiplicacion entre " + n1 + " y " + n2 + " es igual a " + resultado;
    //return mensaje;
    return resultado;
}

function Division(n1,n2){
    var resultado = n1 / n2;
    var mensaje = "El total de la division entre " + n1 + " y " + n2 + " es igual a " + resultado;
    //return mensaje;
    return resultado;
}

function Potencia(n1,n2){
    var resultado = n1 ** n2;
    var mensaje = "El total de la potencia entre " + n1 + " y " + n2 + " es igual a " + resultado;
    //return mensaje;
    return resultado;
}

function Dobledelasuma(n1,n2){
    var resultado = n1 ** n2;
    var mensaje = "El total de la potencia entre " + n1 + " y " + n2 + " es igual a " + resultado;
    //return mensaje;
    return resultado;
}



function main_calculadora(){
var menu = prompt("¿Que operacion desea hacer?(digite el numero)\n 1.Suma \n 2.Resta \n 3.Multiplicacion \n 4.Divison \n 5.Potencia \n 6.Doble de la suma \n 7.Mitad de potencia \n 8.Producto mas 3");

var numero1 = parseFloat(prompt("Ingrese el primer valor"));
var numero2 = parseFloat(prompt("Ingrese el segundo valor"));

if(menu==1){
    console.log(Suma(numero1, numero2));
}else if(menu==2){
    console.log(Resta(numero1, numero2));
}else if(menu==3){
    console.log(Multiplicacion(numero1, numero2));
}else if(menu==4){
    console.log(Division(numero1, numero2));
}else if(menu==5){
    console.log(Potencia(numero1, numero2));
}else if(menu==6){
    var Dobledelasuma = Suma (numero1, numero2);
    console.log (Multiplicacion(Dobledelasuma, 2))
}else if(menu==7){
    var Mitaddeunapotencia = Potencia (numero1, numero2);
    console.log (Division(Mitaddeunapotencia, 2))
}else if(menu==8){
    var Productomas3 = Multiplicacion (numero1, numero2);
    console.log (Suma(Productomas3, 3))
}
}                
    

