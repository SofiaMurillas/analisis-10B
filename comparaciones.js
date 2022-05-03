//console.log("ejercicios")
//x=12;   
//y=7;
//x<15 && y!=7//f
//y>8 && x<20//f
//x==12 && x<18//t
//("lunes" == "Lunes") || (y!=9)//t
//!(x==10) && y>=6//t
//x>6 && y==12 && 2>3//f
//(x*2)>22 && y<(2*4)//t
//(x>10 || x<10) && !(y!=7 && y<21)//t
//((x/2)<=(2*3) || (x*2)>23 ) && (15==="15" && y!=="7")//f

var tocaEduFisica= "no";
var uniforme = "diario";
 
if(tocaEduFisica == "si"){
    uniforme = "edu. física";
}
 
console.log("Mañana debe usar el uniforme de " + uniforme);

var diaSiguiente= "lunes";
var uniforme = "diario";
 
if(diaSiguiente == "martes" || diaSiguiente == "jueves"){
    uniforme = "edu. física";
}
 
console.log("Mañana debe usar el uniforme de " + uniforme);


var hayGaseosa = "si";
var bebida;
 
if(hayGaseosa == "no"){
    bebida = "gaseosa";
}else{
    bebida = "refresco de fruta"
}
 
console.log("la bebida que acompaña su pedido es " + bebida);


var diaSiguiente= "jueves";
var cuaderno;
 
if(diaSiguiente == "lunes" || diaSiguiente == "martes"){
    cuaderno="Análisis";
}else if(diaSiguiente == "miercoles"){
    cuaderno="Tecnología";
}else if(diaSiguiente == "jueves"){
    cuaderno="Desarrollo"
}else{
    cuaderno="Ninguno";
}
 
console.log("Para la clase de mañana con el profesor Andres debe guardar el cuaderno de " +cuaderno);





