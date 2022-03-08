console.log("Hola Mundo");//imprimir por consola
//comentario en linea;
/*comentario
en
varias
lineas
o
multilinea
*/

//variables
/*son espacios de memoria que almacenan datos o información
existen varios tipos de variables en js normalmente se utilizan los siguientes:
string: almacena cadenas de texto. se debe declarar o asignar el valor entre comillas
int: almacena numeros enteros
double: almacena numeros reales 
boolean: almacena valores de verdad(true o false)
*/ 

/* declarar variable
declarar una variable es crearla, decirle al lenguaje como se llama la variable e indicarle que ya existe.
para declarar una variable se puede utilizar ya sea la palabra reservada var o let 
*/
var nombre
console.log(nombre);
/* inicializar variable
para inicializar variables es necesario asignar un  valor cuando se crea esta variable
*/
var apellido = "Maldonado, Murillas";
console.log(apellido)

/* asignar un valor:
asignar un valor se hace mediante el signo igual,se debe hacer sobre una variable que ya fue declarada
*/
nombre = "Karla, Sofia";
console.log(nombre + " , " + apellido)

//desde otra variable 
var edad = 16;
var edadEstudiante = edad;

//desde el teclado 
var gradoEstudiante = prompt(" ingrese el grado: ");
console.log ("el grado es: " + gradoEstudiante);

/*constantes 
son valores que una vez inicializados no pueden cambiar lo que almacenan. se crean con la palabra reservada const, el nombre de las constantes se escribe todo en mayuscula para diferenciarlo de las variables
*/ 
const PI = 3.1416;
//PI = 5;
console.log ("mensaje");
console.log (nombre);
//concatenado
console.log ("la edad es " + edad + " años");

//operadores

//suma
var suma;
suma = 5+3;
console.log(suma);

suma = 5+3;
let a = 10;
suma = 8+a;
suma = a+8;
console.log(suma);

let b =20;
suma = a + b;
console.log(suma);

//resta
var resultado;
resultado = a-b;
console.log (resultado);
resultado = b - a;
console.log(resultado);

//orden de operacion
var res;
res = a*2;
console.log(res);
res = a*2 - 1;//19
console.log(res);
res = a*2 - 1;//10
console.log(res);

//residuo
var residuo;
residuo = 12 % 2; //0
console.log(residuo);

//contadores
//incrementos
var incre = 1;
console.log(incre);
incre = incre + 1;
console.log(incre);
incre +=1;
console.log(incre);
incre ++; 
console.log(incre);

//contadores
//decremento
var decre =4;
console.log(decre);
decre = decre - 1;
console.log(decre);
decre -= 1;
console.log(decre);
decre --;
console.log(decre);

//operaciones aumentadas
//son operaciones que se le realizan a una variable y el resultado se guarda en si misma. La variable debe tener un valor antes de realizar la operacion 


var SumaAumento = 0;
SumaAumento += 1;
SumaAumento += 48;
console.log(SumaAumento);

var restaAumento = 20;
restaAumento -= 1;
restaAumento -= 8;
console.log(restaAumento);

var productoAumento = 20;
productoAumento *= 1;
productoAumento *= 8;
console.log(productoAumento);

var cocienteAumento = 20;
cocienteAumento /= 1;
cocienteAumento /= 8;
console.log(cocienteAumento);

var exp;
exp = 3**2; //3^2
console.log(exp);
exp = 3**3; //3^3
console.log(exp);

//cadenas o textos
//suma de cadenas 
var nombre = "Sofia, Karla";
var apellido = "Maldonado, Murillas";
var nomCompleto = nombre + " , " + apellido;
console.log(nomCompleto);

var cadenita1 = "3";
var cadenita2 = "5";
var cadenitaTotal = cadenita1 + cadenita2;
console.log(cadenitaTotal);  //los numeros no van en comillas, no los sumaria si no que los une: "2" + "5" = 25

//.length
//permite conocer la longitud de una cadena o el tamaño de un vector 

console.log(nomCompleto.length);

console.log(nombre[0]); //S

//para encontrar el caracter en la ultima posocion de una cadena o un vector se  debe buscar la longitud -1 (.length-1)

console.log(nombre [nombre.length-1]);








