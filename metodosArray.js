
// Ejercicio 2 

// Probar todos los metodos Array en JavaScript

document.write("<h2> Segundo Ejercicio de Arrays: Probando todos los Metodos de Arrays en JavaScript </h2>")

// Metodo at
function indiceElemento() {
    // Array de frutas
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];

    // Imprimir el contenido del array de días
    document.write("<p>Array frutas: " + frutas + "</p>");

    // Utilizar el método at para obtener el elemento en el índice 2
    document.write("<p>Elemento 2 del Array frutas: " + frutas.at(2));
}

document.write("<p><b>Función para mostrar el índice de un elemento (at)</b></p>");

indiceElemento();


// Metodo concat

function concatenar() {
    // Creación de dos arrays
    let array1 = ["Platano", "Manzana", "Limon", "Mango"];

    let array2 = ["Kiwi", "Mango", "Pera", "Naranja"];

    // Concatenación de los dos arrays utilizando el método concat
    const totalFrutas = array1.concat(array2);

    document.write("<p>Este es el array 1: " + array1 + "</p>");

    document.write("<p>Este es el array 2: " + array2 + "</p>");

    document.write("<p>Nueva Array haciendo la concatenación:  " + totalFrutas + "</p>");
}

document.write("<p>Función para concatenar 2 arrays (concat)</p>");

concatenar();



// Metodo copyWithin

function copiarElementos() {
    // copyWithin
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];

    document.write("<p>Array frutas: " + frutas + "</p>");

    let favFrutas = frutas.copyWithin(2, 0);

    // Imprimir el nuevaArray de favFrutas
    document.write("<p>Este del Array Modificado:  " + favFrutas + "</p>");

}

document.write("<p><b>Funcion para copiar Elementos (copyWithin)</b></p>");
copiarElementos();

// Metodo entries

function mostrarEntradasArray() {
    const frutas = ["Manzana", "Banana", "Cereza"];

    // Utilizar entries para obtener un objeto Iterator de pares clave/valor
    const iterador = frutas.entries();

    // Iterar a través del objeto Iterator y mostrar cada par clave/valor
    for (const entrada of iterador) {
        const [indice, valor] = entrada;
        document.write(`<p>Índice: ${indice}, Valor: ${valor}</p>`);
    }
}

document.write("<p>Funcion para iterar elementos (entries) </p>");
mostrarEntradasArray();



// Metodo every

function todosMayor10() {
    const numeros = [15, 20, 25, 30];

    // Verificar si todos los elementos son mayores que 10
    const todosMayores = numeros.every((numero) => numero > 10);

    document.write(`<p>Array de números: ${numeros}</p>`);
    if (todosMayores) {
        document.write("<p>Todos los números son mayores que 10.</p>");
    } else {
        document.write("<p>Al menos un número no es mayor que 10.</p>");
    }
}

document.write("<p>Funcion comprobando si los elementos del array son mayores de 10 (every)</p>");
todosMayor10();



// Metodo fill
function cambiarElementos() {
    // Cambiar elementos de un Array por otro en diferentes posiciones 
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];
    document.write("<p>Array frutas: " + frutas + "</p>");
    document.write("<p>Array frutas: </p>" + frutas.fill("Kiwi", 0, 3));
}
document.write("Funcion para cambiar elementos en un Array (fill)");
cambiarElementos();


// Metodo filter

function filtrarArray() {
    const array = [2, 8, 15, 4, 10, 5];
    document.write("Este es el array original: " + array);

    // Definir un valor numero para el filtro
    const numero = 7;

    // Utilizar filter para obtener los elementos mayores que el numero
    const arrayFiltrado = array.filter((x) => x > numero);

    document.write(`<p>Filtrando elementos mayores que ${numero}: ${arrayFiltrado}</p>`);
}

document.write("<p>Funcion para filtrar elementos (filter)</p>");
filtrarArray();



// Metodo find

function encontrarElemento() {
    const frutas = ["Manzana", "Plátano", "Uva", "Mango", "Pera"];

    // Definir una condición: encontrar la primera fruta que tenga más de 4 letras
    const frutaEncontrada = frutas.find(fruta => fruta.length > 4);

    document.write("<p>Array de frutas: " + frutas + "</p>");

    if (frutaEncontrada) {
        document.write("<p>Primera fruta con más de 4 letras: " + frutaEncontrada + "</p>");
    } else {
        document.write("<p>No se encontró ninguna fruta con más de 4 letras</p>");
    }
}

document.write("<p><b>Funcion para encontrar un elemento en concreto (find) </b></p>");
encontrarElemento();

// Metodo forEach

function tablaMultiplicarArrayForEach() {
    const array = [2, 3, 4, 5, 6];
    document.write("Este es el array inicial: " + array);

    const nuevaArray = [];

    // Utilizar forEach para construir un nuevo array con el elemento original y su multiplicación por 5
    array.forEach((x) => {
        nuevaArray.push(x, x * 5);
    });

    document.write("<p>Hemos pasado el número 5 como parámetro</p>");
    document.write("<p>Aquí tenemos la tabla de 5: " + nuevaArray + "</p>");
}

document.write("<p>Funcion para iterar la tabla del 5 (forEach)</p>");
tablaMultiplicarArrayForEach();



// Metodo flat

function concatenarSubArrays() {
    // Array de arrays (subarrays)
    const subArray = [[1, 2], [3, 4], [5, 6]];

    // Imprimir el contenido del subarray original
    document.write("<p>Este es el SubArray: " + subArray);

    // Utilizar el método flat para convertir el subarray en un array plano
    document.write("<p>Este es el SubArray convertido en Array: " + subArray.flat());
}

document.write("<p>Función para concatenar SubArrays (flat)</p>");

concatenarSubArrays();



// Metodo flatMap

function tablaMultiplicarArray() {
    const array = [2, 3, 4, 5, 6];
    document.write("Este es el array inicial: " + array);

    // Utilizar flatMap para devolver un array para cada elemento (elemento original y su multiplicación por 5)
    const nuevaArray = array.flatMap((x) => [x, x * 5]);

    document.write("<p>Hemos pasado el número 5 como parámetro</p>");
    document.write("<p>Aquí tenemos la tabla de 5: " + nuevaArray + "</p>");
}

document.write("<p>Hemos utilizado el objeto (flatMap)</p>");
tablaMultiplicarArray();



// Metodo from

function stringToArray() {
    // Strin que sera convertido en Array
    const texto = "SPIDERMAN";

    document.write("<p>Este es el String que vamos a convertir en Array: " + texto);

    // Utilizar Array.from para convertir el string en un array
    document.write("<p>Este es el String convertido en Array: " + Array.from(texto));
}

document.write("<p>Metodo para pasar de String a Array (Array.from) </p>");

stringToArray();


// Metodo includes
function elementoArray() {
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];
    document.write("<p>Array frutas: " + frutas + "</p>");
    const favFruta = frutas.includes("Platano")
    document.write("<p>En el array esta incluido el parametro Platano: " + favFruta);
}
document.write("<p>Este es el valor de la Array</p>");

elementoArray();


// Metodos indexOf y lastIndexOf

function buscarElemento() {

    // Array de frutas
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];

    document.write("<p>Array frutas: " + frutas + "</p>");

    // Buscar la posición de "Manzana" en el array usando indexOf
    let a = frutas.indexOf("Manzana");

    // Buscar la posición de "Mango" en el array usando lastIndexOf
    let b = frutas.lastIndexOf("Mango");

    document.write("<p>Posicion de Manzana en el array de frutas: " + a);

    document.write("<p>Posicion de Mango en el array de frutas: " + b);
}

document.write("Funcion para buscar elementos en un array  (indexOf & lastIndexOf)");

buscarElemento();


// Metodo isArray

function esUnArray() {
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];
    document.write("<p>Array frutas: " + frutas + "</p>");

    document.write("<p> Es un array: " + Array.isArray(frutas));
}
document.write("<p><b>Función para saber si es una Array  (isArray)</b></p>");

esUnArray();


// Metodo join
function unirArray() {
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];

    // Unir los elementos del array con un separador
    const cadenaUnida = array.join(" - ");

    document.write("<p>Array original: " + frutas + "</p>");
    document.write("<p>Array unido con separador '-':  " + cadenaUnida + "</p>");
}

document.write("<p>Funcion para separa los elementos del array con un -  gracias al metodo (join)</p>");
unirArray();


// Metodo keys

function mostrarClavesArray() {
    const array = [2, 3, 4, 5, 6];
    document.write("Este es el array inicial: " + array);

    // Obtener las claves del array usando keys y mostrarlas
    for (const key of array.keys()) {
        document.write(`<p>Clave: ${key}, Valor: ${array[key]}</p>`);
    }
}

document.write("<p>Hemos utilizado el método (keys) en un array</p>");
mostrarClavesArray();


// Metodo length

function longitudArray() {
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];
    document.write("<p>Array frutas: " + frutas + "</p>");
    document.write("La longitud del array frutas es: " + frutas.length);
}
document.write("<p><b>Función para saber la longitud de un Array  (length)</b></p>");

longitudArray();

// Metodo map

function tablaMultiplicarArray() {
    const array = [2, 3, 4, 5, 6];
    document.write("Este es el array inicial: " + array);

    // Multiplicar cada elemento por 5 usando map
    const nuevaArray = array.map((x) => x * 5);

    document.write("<p>Hemos pasado el número 5 como parámetro</p>");
    document.write("<p>Aquí tenemos la tabla de 5: " + nuevaArray + "</p>");
}

document.write("<p>Funcion para tener tabla multiplicar (map)</p>");
tablaMultiplicarArray();

// Metodo pop

function ultimoElementoArray() {
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];
    document.write("<p>Array frutas: " + frutas + "</p>");

    document.write("Array final de frutas: " + frutas.pop());
}
document.write("<p><b>Función para solo quedarte con el ultimo elemento (pop)</b></p>");

ultimoElementoArray();


// Metodo push

function agregarElementoAlArray() {
    // Crear un array
    const miArray = [1, 2, 3, 4];

    // Mostrar el array original
    document.write("<p>Array original: " + miArray + "</p>");

    // Agregar un nuevo elemento al final del array usando push
    const nuevoElemento = 5;
    miArray.push(nuevoElemento);

    // Mostrar el array después de agregar el nuevo elemento
    document.write("<p>Array después de agregar " + nuevoElemento + ": " + miArray + "</p>");
}
document.write("<p>Hemos utilizado el método (push) para añadir un elemento al array</p>");

// Llamar a la función para ver el resultado
agregarElementoAlArray();


// Metodo reduce

function sumarElementosArray() {
    const array = [2, 3, 4, 5, 6];
    document.write("Este es el array inicial: " + array);

    // Utilizar reduce para sumar todos los elementos del array
    const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);

    document.write("<p>La suma de todos los elementos del array es: " + suma + "</p>");
}

document.write("<p>Hemos utilizado el método (reduce) para sumar elementos de un array</p>");
sumarElementosArray();


// Metodo reduceRight

function multiplicarPorDosConReduceRight(arrayOriginal) {
    // Utilizar reduceRight para construir un nuevo array multiplicando cada elemento por 2
    const nuevoArray = arrayOriginal.reduceRight((result, elemento) => {
        result.push(elemento * 2);
        return result;
    }, []);

    document.write(`<p>Array original: ${arrayOriginal}</p>`);
    document.write(`<p>Array multiplicado por 2 usando reduceRight: ${nuevoArray}</p>`);
}

document.write("<p><b>Función para multiplicar elementos en un array por 2  (reduceRight)</b></p>");
const arrayOriginal = [1, 2, 3, 4, 5];
multiplicarPorDosConReduceRight(arrayOriginal);


// Metodo reverse

function desordenarArray() {
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];
    document.write("<p>Este es el array ordenado de frutas: " + frutas);
    frutas.reverse();
    document.write("<p>Este es el array desordenado de frutas: " + frutas);
}
// Invierte el orden del array (reverse)

document.write("<p><b>Función para desordenar el Array  (reverse)</b></p>");

desordenarArray();



// Metodo shift
function eliminarPrimerElemento() {
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];

    // Imprimir el array de frutas antes de eliminar el primer elemento
    document.write("<p>Array frutas: " + frutas + "</p>");

    // Eliminar el primer elemento del array y mostrarlo
    document.write(frutas.shift());
}
document.write("<p><b>Función para eliminar solo el primer elemento y mostrarlo (shift)</b></p>");

// Llamar a la función eliminarPrimerElemento
eliminarPrimerElemento();


// Metodo slice

function separarElementos() {

    const frutas = ["Platano", "Manzana", "Limon", "Mango"];
    document.write("<p>Array frutas: " + frutas + "</p>");

    const favFrutas = frutas.slice(0, 2);
    document.write("<p>Array frutas después seleccionar 2 frutas: " + favFrutas + "</p>");
}
document.write("<p><b>Función para obtener 2 frutas por posicion(slice)</b></p>");

separarElementos();

// Metodo some

function verificarNumeroMayor3() {
    // Definir un array de números

    let numeros = [1, 2, 3, 4, 5];

    document.write("<p>Array numeros : " + numeros + "</p>");

    // Comprobar si al menos un número es mayor que 3
    let resultado = numeros.some(numero => numero > 3);

    // Mostrar el resultado en document.write
    document.write("¿Hay algún número mayor que 3? " + resultado);


}

document.write("<p><b>Función para verificar numero mas grande que 3 (some)</b></p>");

verificarNumeroMayor3();


// Metodo sort

function ordenarFormaAscendente() {
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];

    // Imprimir el array de frutas antes de ordenar
    document.write("<p>Array frutas: " + frutas + "</p>");

    // Ordenar el array de frutas en forma ascendente
    frutas.sort();

    // Imprimir el array después de ordenar
    document.write("<p>Array frutas (sort): " + frutas + "</p>");
}
document.write("<p><b>Función para ordenar de forma ascendente los elementos del array (sort)</b></p>");

// Llamar a la función para ordenar de forma ascendente
ordenarFormaAscendente();

// Metodo splice

function eliminar2Elementos() {
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];

    document.write("<p>Array frutas: " + frutas + "</p>");

    // Eliminar los primeros dos elementos del array
    frutas.splice(0, 2);
    document.write("<p>Array frutas después de eliminar dos elementos: " + frutas + "</p>");

}
document.write("<p><b>Función para ordenar de forma ascendente los elementos del array (sort)</b></p>");

eliminar2Elementos();

// Metodo toString

function arrayToString() {

    const frutas = ["Platano", "Manzana", "Limon", "Mango"];

    document.write("<p>Array frutas: " + frutas + "</p>");

    document.write("<p>Este es el valor de la Array: " + frutas.toString() + "</p>");
}
document.write("<p><b>Función para pasar de Array a String (toString)</b></p>");

arrayToString();

// Metodo Unshift

function agregarElementos() {
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];

    document.write("<p>Array frutas: " + frutas + "</p>");

    // Agregar elementos al inicio del array
    frutas.unshift("Kiwi", "Pera");

    // Imprimir el array después de agregar elementos
    document.write("<p>Array frutas después de agregar elementos: " + frutas + "</p>");
}
document.write("<p><b>Función para agregar elementos (unshift)</b></p>");

agregarElementos();


// Metodo Value Of

function valorArray() {
    const frutas = ["Platano", "Manzana", "Limon", "Mango"];

    document.write("<p>Array frutas: " + frutas + "</p>");

    // Imprimir el valor del array utilizando el método valueOf

    document.write("<p>Este es el valor de la Array: " + frutas.valueOf() + "</p>");
}
document.write("<p><b>Funcion para saber el valor de una array (valueOf) </b></p>")

valorArray();

