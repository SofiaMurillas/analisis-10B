/* Juan sebastian 
Sofia murillas */

console.log ("Punto #1");

var contador= 0;
var num=prompt("Ingrese un numero")
while(contador<=num){
    if(contador%5==0)
    console.log(contador+ " Es multiplo de 5")
    else console.log(contador+" No es multiplo de 5")
    contador +=1;
}

/*console.log ("Punto #2");

var cont = 0
var cantidad=prompt("Ingrese la cantidad de articulos'")
var precio=0
while(cont<cantidad){
var precios=parseFloat(prompt("Ingrese el precio de sus articulos uno a uno"))
precio=precios+precio
cont+=1
}
console.log("El total a pagar de sus productos es de $ " +precio)*/

/*console.log ("Punto #3")

var precio=0

while(confirmar!="si"){
var precios=parseFloat(prompt("Ingrese el precio de sus articulos uno a uno"))
precio=precios+precio
var confirmar=prompt("Si desea parar de ingresesar articulos digite 'si'")
}
console.log("El total a pagar de sus productos es de $ " +precio)*/

console.log ("Punto #4")

var contad = 0
var pfinal=0
var descuento=0
while(cantidad != " si"){
var preciosArt=parseFloat (prompt ("Ingrese el precio de sus articulos uno a uno") )
pfinal=preciosArt+pfinal
var cantidad=prompt ("Si desea parar con la compra diga 'si'")
contad+=1}
if(contad>=8 && contad<15){
console.log("Al aplicar el descuento del 10% el total a pagar es de"+pfinal*0.9)}
else if (contad>-15 && contad<25){
console.log ("Al aplicar el descuento del 15% el total a pagar es de"+pfinal*0.85)}
else if (contad>=25){
console.log("Al aplicar el descuento del 20% el total a pagar es de" +pfinal*0.8) 
}

console.log ("Punto #5    ")
