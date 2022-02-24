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










