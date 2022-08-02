//Sofia Murillas, Karla Maldonado, Juam Sebastian Castaño

function Suma(n1,n2){
    var resultado = n1 + n2;
    return resultado;
}

function Resta(n1,n2){
    var resultado = n1 - n2;
    return resultado;
}

function Multiplicacion(n1,n2){
    var resultado = n1 * n2;
    return resultado;
}

function Division(n1,n2){
    var resultado = n1 / n2;
    return resultado;
}

function Potencia(n1,n2){
    var resultado = n1 ** n2;
    return resultado;
}


function main_geometria(){
var menu = prompt("¿Que operacion desea hacer?(digite el numero)\n 1. Hallar Área de una figura\n 2.Hallar Perímetro de una figura"); 

    var menu2 = prompt ("¿Que figura usara para realizar la operacion? \n 1. cuadrado \n 2. Triangulo ")

var num1 = parseFloat(prompt("Ingrese la base"));
var num2 = parseFloat(prompt("Ingrese la altura"));

if(menu==1&&menu2==1){
    console.log(Multiplicacion(num1, num2));
}else if(menu==1&&menu2==2){
    var areaT = Multiplicacion(num1, num2);
    console.log(Division(areaT,2));
}else if (menu==2&&menu2==1){
    var PerimetroC = Suma(num1, num2);
    console.log (Multiplicacion(PerimetroC, 2));
}else if (menu==2&&menu2==2){
    var lado1 = parseFloat(prompt("Ingrese el primer lado"));
    var lado2 = parseFloat(prompt("Ingrese el segundo lado"));
    var lado3 = parseFloat(prompt("Ingrese el tercer lado"));
    var sumaT = Suma (lado1, lado2)
    console.log (Suma(sumaT, lado3));
}
}



