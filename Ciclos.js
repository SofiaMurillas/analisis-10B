var CantSaludos = 0; //  Se crea la variable y se le asigna un valor
 
while(CantSaludos < 5){ // Mientras el contador de saludos sea menor a 5
    console.log("Hola "); // Se imprime en consola la palabra "Hola"
    CantSaludos += 1; // Se le suma +1 a la variable
}

//¿Qué debe cambiar si quiere que salude 10 veces?

var CantSaludos = 0;
 
while(CantSaludos < 10){
    console.log("Hola ");
    CantSaludos += 1;
}

//¿Cuántas veces saluda si en vez de  CantSaludos += 1 escribe  CantSaludos += 2 ? 
// 5


/*
Tipos de condiciones para el ciclo while:

Condición de comparación con límite de ejecuciones, se compara la variable con un
valor numérico y se va incrementando o disminuyendo el valor de la variable hasta 
que la condición de falsa para romper el ciclo.
var CantSaludos = 0;
 */
while(CantSaludos < 5){
    console.log("Hola ");
    CantSaludos += 1;
}
/*
Condición de comparación con una palabra o valor, se debe preguntar al usuario 
por el valor de la variable con cada ejecución del ciclo. Se detiene cuando la 
condición de falsa.
/*
*/
var respuesta=prompt("ingrese un valor");;
 
while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}

/*
Valor de verdad o booleano, dentro de la condición se evalúa el valor de la variable.
Si es verdadero, se ejecuta el ciclo; si es falso no se ejecuta más.
El valor de la variable debe ser actualizado dentro del ciclo while.
*/
var valor;
var respuesta2=prompt("ingrese un valor 1 verdadero, 0 falso");
    if(respuesta2 == 1){
        valor = true;
    }
 
while(valor){
    console.log("valor es " + valor);
    respuesta2=prompt("ingrese un valor 1 verdadero 0 falso");
    if(respuesta2 == 0){
        valor = false;
    }      
}