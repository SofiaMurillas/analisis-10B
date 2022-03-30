/*arreglosjs es una estructura que almacena cualquier tipo de dato y en cuaquier cantidad es decir, string, int, double, array, objetos, entre ontros. los arreglos o arrays tienen operaciones Como, insertar, modificar y consultar.Como la declaracion de un arreglo se hace con corchetes//alt+91 y los elementos dentro de el se separan con comas. tamb se crea o se declaracon las palabras recervadas //var o let seguidas del nombre del arreglo*/
var miPrimerArreglo = ["jose",14];
console.log (miPrimerArreglo);
//arreglo de arreglos
var notaEst = [["sofia",4.5], ["mari",4.2]];
console.log(notaEst);
//consultar segun la posicion

//recordar que las posiciones de un vector o arreglo comienzan desde 0
console.log(miPrimerArreglo[0]);
//primero se accede a la posicion del acceso mas grande y luego a las posiciones de los arreglos internos
console.log(notaEst[0][1]);
console.log(notaEst[1][0]);
