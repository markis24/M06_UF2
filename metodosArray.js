
// Ejercicio 2 

// Probar todos los metodos Array en JavaScript

// Definición de la función para mostrar el índice de un elemento (utilizando at)
function indiceElemento() {
    // Array de los días de la semana
    const frutas = ["Platano","Manzana","Limon","Mango"];

    // Imprimir el contenido del array de días
    document.write("<p>Este es el array de las frutas: " + frutas+ "</p>");

    // Utilizar el método at para obtener el elemento en el índice 2
    document.write("<p>nuevaArray del índice del elemento: " + frutas.at(2) + "</p>");
}

// Imprimir un mensaje antes de llamar a la función indiceElemento
document.write("<p>Función mostrar el índice del elemento (at)</p>");

// Llamar a la función indiceElemento
indiceElemento();


// Definición de la función concatenar
function concatenar() {
    // Creación de dos arrays
    let array1 = ["Platano","Manzana","Limon","Mango"];

    let array2 = ["Kiwi", ,"Mango", "Pera","Naranja"];

    // Concatenación de los dos arrays utilizando el método concat
    const totalFrutas = array1.concat(array2);
    
    // Imprimir el contenido del primer array
    document.write("<p>Este es el array 1: " + array1 + "</p>");

    // Imprimir el contenido del segundo array
    document.write("<p>Este es el array 2: " + array2 + "</p>");

    // Imprimir el nuevaArray de la concatenación
    document.write("<p>Esta es la Nueva Array haciendo la concatenación:  " + totalFrutas + "</p>");
}

// Imprimir un mensaje antes de llamar a la función concatenar
document.write("<p>Función concatenar (concat)</p>");

// Llamar a la función concatenar
concatenar();


function copiarElementos() {
    // copyWithin
    const frutas = ["Platano","Manzana","Limon","Mango"];
        // Imprimir el contenido del primer array
        document.write("<p>Array frutas: " + frutas + "</p>");
    let favFrutas = frutas.copyWithin(2,0);
        // Imprimir el nuevaArray de favFrutas
        document.write("<p>Este del array:  " + favFrutas + "</p>");
    
}

document.write("<p><b>Funcion para copiar Elementos (copyWithin)</b></p>");
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
    document.write("<p>Array frutas: " + frutas + "</p>");
    let kiwi = frutas.fill("Kiwi",0,3);
    document.write("<p>Array frutas: </p>" + kiwi);
}
document.write("Funcion para cambiar elementos en un Array");
cambiarElementos();
// Modificar filter 
function filtrarEdad() {
    //filter
    const edad = [39,23,19,10,40];
    const result = edad.filter(mayorEdad);
}
function mayorEdad() {
    return edad >= 18;
}

// Definir una función para convertir un string en un array de caracteres
function stringToArray() {
    // Texto a ser convertido en array
    const texto = "SPIDERMAN";
    
    // Imprimir el string original
    document.write("<p>Este es el String que vamos a convertir en Array </p>" + texto);
    
    // Utilizar Array.from para convertir el string en un array
    document.write("<p>Este es el String convertido en Array </p>" + Array.from(texto));
}

// Imprimir un mensaje antes de llamar a la función stringToArray
document.write("<p>Metodo para pasar de String a Array (Array.from) </p>");

// Llamar a la función stringToArray
stringToArray();



// Definir una función para concatenar subarrays usando flat
function concatenarSubArrays() {
    // Array de arrays (subarrays)
    const subArray = [[1, 2], [3, 4], [5, 6]];

    // Imprimir el contenido del subarray original
    document.write("<p>Esta es la subarray </p>" + subArray);

    // Utilizar el método flat para convertir el subarray en un array plano
    document.write("<p>Este es el subarray convertido en array</p>" + subArray.flat());
}

// Imprimir un mensaje antes de llamar a la función concatenarSubArrays
document.write("<p>Función para concatenar subarrays (flat)</p>");

// Llamar a la función concatenarSubArrays
concatenarSubArrays();


function tablaMultiplicarArray() {
    const array = [1, 2, 3, 4, 5];
    const nuevaArray = array.flatMap((x) => x * 5);
    document.write("<p>Este es el resultado del nuevo Array</p>" + nuevaArray);

}
document.write("<p>Hemos utilizado el objeto (flatMap) </p>");
tablaMultiplicarArray();

function anadirParametro() {
    // join Devuelve un array como String
    const frutas = ["Platano","Manzana","Limon","Mango"];
    let nuevaArray = frutas.join();
    document.write(nuevaArray);
}
function esUnArray() {
    // isArray
    const frutas = ["Platano","Manzana","Limon","Mango"];
    document.write("<p>Este es el array de frutas </p>" + frutas);
    let nuevaArray = Array.isArray(frutas);
    document.write(nuevaArray);
}

function buscarElemento(){
    // indexOf lastIndexOf
    const frutas = ["Platano","Manzana","Limon","Mango"];
    let a = frutas.indexOf("Manzana");
    let b = frutas.lastIndexOf("Limon");
    document.write("<p>Esta es la posicion de Manzana en el array de frutas</p>" + a);
    document.write("<p>Esta es la posicion de Manzana en el array de frutas</p>" + b);

}
document.write("Funcion para buscar elementos en un array");

buscarElemento();

function elementoArray(){
    //includes
    const frutas = ["Platano","Manzana","Limon","Mango"];
    document.write("<p>Este es el valor inicial del array</p>"+ frutas);
    const favFruta = frutas.includes("Platano")
    document.write("<p>En el array esta incluido el parametro Platano </p>"+ favFruta);
}
document.write("<p>Este es el valor de la Array</p>"+ favFruta);
elementoArray();

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
    const frutas = ["Platano","Manzana","Limon","Mango"];
    document.write("<p>Este es el array inicial de frutas</p>"+frutas);
    frutas.reverse();
    document.write("<p>Este es el array final  de frutas</p>"+frutas);
}

document.write("<p>Metodo reverse Array</p>");
ordenarFormaDescendente();
function eliminarPrimerElemento(){
    // shift
    const frutas = ["Platano","Manzana","Limon","Mango"];
    let nuevaArray = frutas.shift();
    document.write(nuevaArray);
}

function separarElementos(){
    // slice
    const frutas = ["Platano","Manzana","Limon","Mango"];
    const favFrutas = frutas.slice(0,2);
    document.write(favFrutas);
}
function ordenarFormaAscendente() {
    // Ordena la array sort
    const frutas = ["Platano","Manzana","Limon","Mango"];
    frutas.sort();
    document.write(frutas);
}
function cambiar2Elementos() {
    // splice
    const frutas = ["Platano","Manzana","Limon","Mango"];
    const nuevaArray = frutas.splice(0,2);
    document.write(nuevaArray);
    
}
function arrayToString() {
    // to string
    const frutas = ["Platano","Manzana","Limon","Mango"];
    document.write("<p>Este es un array de dias</p>" + frutas);
    let nuevaArray = frutas.toString();
    document.write("<p>Este es el valor de la Array</p>"+ nuevaArray);
}
function eliminarElementos() {
    // Unshift
    const diasSemana = ["jueves","viernes","sabado"];
    document.write("<p>Este es un array de dias</p>" + diasSemana);
    let nuevaArray = diasSemana.unshift("lunes","martes");
    document.write("<p>Este es el valor de la Array</p>"+ nuevaArray);
}
function funcionForEach() {
    // For Each 
    const frutas = ["Platano","Manzana","Limon","Mango"];
    document.write("<p>Este es el array inicial </p>" + frutas);
    // Pasamos un For Each del array frutas
    frutas.forEach();

    function pasarElementos() {
        
    }

}
function valorArray(){
    // valueOf
    // Devuelve el valor del array diasSemana
    const frutas = ["Platano","Manzana","Limon","Mango"];
    document.write("<p>Este es un array de dias</p>" + frutas);
    let nuevaArray = diasSemana.valueOf();
    document.write("<p>Este es el valor de la Array</p>"+ nuevaArray);
}
document.write("<p><b>Esta es el objeto valueOf</b></p>")
valorArray();

