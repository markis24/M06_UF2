// Definición de la función que opera sobre un array de colores
function arrayColores() {
    
    // Array Inicial de los Colores
    let colores = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];
    document.write("Este es el array inicial: " + colores);

    // Comprueba si todos los colores son menores que 'marró'
    let todosColoresMenoresQueMarron = colores.every(function (color) {
        return color < 'marró';
    });

    document.write("<p>Tots els colors són menors que 'marró' :  " + todosColoresMenoresQueMarron);

    // Filtra los colores que son menores que 'marró'
    let coloresMenoresQueMarron = colores.filter(function (color) {
        return color < 'marró';
    });

    document.write("<p>Colors menors que 'marró': " + coloresMenoresQueMarron);

    // Mostrar los últimos 2 colores
    let ultimosDosColores = colores.slice(-2);

    document.write("<p>Estos son los últimos 2 colores del array : " + ultimosDosColores);

    // Añadir el color 'turquesa'
    colores.push("turquesa");

    document.write("<p>Array después de añadir el color turquesa: " + colores);

    // Elimina el color 'verd'
    colores.splice(colores.indexOf('verd'), 1);

    document.write("<p>Array con el color verde eliminado : " + colores);
}

// Mensaje indicando que es el ejercicio de un array con 6 colores
document.write("<p>Este es el ejercicio de Array con 6 colores</p>");

// Llamada a la función para ejecutar el código
arrayColores();
