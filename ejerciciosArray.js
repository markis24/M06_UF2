
function arraysColores (){
    
    let arrayColores = ['verde','rojo','amarillo','azul','negro','blanco']
    document.write(arrayColores)
    

// Añadiendo el color turquesa
    // Añadimos el elemento turquesa en arrayColores
    let añadirColor = arrayColores.push("turquesa");
    document.write(añadirColor);
    
// Eliminando el color verde
    let eleminarColor = arrayColores.pop("verde");
    document.write(eleminarColor);
}

function indiceElemento() {
    //at
    const diasSemana = ["jueves", "viernes", "sabado"];
    let dia = diasSemana.at(2);
    document.write(dia);
}
document.write("Funcion para mostrar el indice de un elemento(at)")
indiceElemento();
function concatenar() {
    // Concatenar 2 arrays (concat)
    let array1 = ["lunes","martes","miercoles"];
    let array2 = ["jueves","viernes","sabado"];
    const totalDiasSemana = array1.concat(array2);
    document.write(totalDiasSemana);
    }
    document.write("Funcion concatener (concat)");
    concatenar();


function copiarElementos() {
    // copyWithin
    const frutas = ["Platano","Manzana","Limon","Mango"];
    let favFruta = frutas.copyWithin(2,0);
    document.write(favFruta);
    
}

document.write("Funcion para copiar Elementos (copyWithin)");
copiarElementos();


function comprobarArray(){
    // every
    const edad = [20,28,12,9,35];
    edad.every(menorEdad)
    function menorEdad(edad){
        return edad < 18;
    }

}
function cambiarElementos(){
    // Cambiar elementos de un Array por otro en diferentes posiciones 
    // fill
    const frutas = ["Platano","Manzana","Limon","Mango"];
    let kiwi = frutas.fill("Kiwi",0,3);
    document.write(kiwi);
}
document.write("Funcion para cambiar elementos en un Array");
cambiarElementos();

function filtrarEdad() {
    //filter
    const edad = [39,23,19,10,40];
    const result = edad.filter(mayorEdad);

}
function stringToArray() {
    // Array from
    let texto = "SPIDERMAN"
    const array = Array.from(texto);
    console.log(array);
}

document.write("Funcion para pasar de String a Array");

stringToArray();

function concatenarSubArrays() {
    // flat
    const array1 = [[1,2],[3,4],[5,6]];
    let nuevaArray = array1.flat();
    document.write(array1);
}
document.write("Funcion para concatenar subarrays");

concatenarSubArrays();
function anadirParametro(params) {
    // join Devuelve un array como String
    const diasSemana = ["jueves","viernes","sabado"];
    let resultado = diasSemana.join();
    document.write(resultado);
}
function esUnArray() {
    // isArray
    const frutas = ["Platano","Manzana","Limon","Mango"];
    let resultado = Array.isArray(frutas);
    document.write(resultado);
}

function buscarElemento(){
    // indexOf lastIndexOf
    let diasSemana = ["jueves","viernes","sabado"];
    let a = diasSemana.indexOf("viernes");
    let b = diasSemana.lastIndexOf("jueves");
    document.write(a);
    document.write(b);

}
document.write("Funcion para buscar elementos en un array");

buscarElemento();

function elementoArray(){
    //includes
    const frutas = ["Platano","Manzana","Limon","Mango"];
    const favFruta = frutas.includes("Platano")
    document.write(favFruta);
}

function longitudArray() {
    // length
    const frutas = ["Platano","Manzana","Limon","Mango"];
    let longitud = frutas.length;
    document.write(longitud);
}

function eliminarUltimoElemento(){
    // Pop
    // Eliminar ultimo elemento del array
    const frutas = ["Platano","Manzana","Limon","Mango"];
    const ultimoElemento = frutas.pop();
    document.write(ultimoElemento);
}
function ordenarFormaDescendente() {
    // Invierte el orden del array (reverse)
    const diasSemana = ["jueves","viernes","sabado"];
    let resultado = diasSemana.reverse();
    document.write(resultado);
}
function eliminarPrimerElemento(){
    // shift
    const diasSemana = ["jueves","viernes","sabado"];
    let resultado = diasSemana.shift();
    document.write(resultado);
}

function separarElementos(){
    // slice
    const frutas = ["Platano","Manzana","Limon","Mango"];
    const favFrutas = frutas.slice(0,2);
    document.write(favFrutas);
}
function ordenarFormaAscendente() {
    // Ordena la array sort
    const diasSemana = ["jueves","viernes","sabado"];
    let resultado = diasSemana.sort();
    document.write(resultado);
}
function cambiar2Elementos() {
    // splice
    const frutas = ["Platano","Manzana","Limon","Mango"];
    const resultado = frutas.splice(0,2);
    document.write(resultado);
    
}
function arrayToString() {
    // to string
    const diasSemana = ["jueves","viernes","sabado"];
    let resultado = diasSemana.toString();
    document.write(resultado);
}
function eliminarElementos() {
    // Unshift
    const diasSemana = ["jueves","viernes","sabado"];
    let resultado = diasSemana.unshift("lunes","martes");
    document.write(resultado);
}

function valorArray(){
    // valueOf
    // Devuelve el valor del array diasSemana
    const diasSemana = ["jueves","viernes","sabado"];
    let resultado = diasSemana.valueOf();
    document.write(resultado);
}


arrayToString();

eliminarElementos();

valorArray();
