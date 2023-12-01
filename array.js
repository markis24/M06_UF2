
function indiceElemento() {
    // at
    const diasSemana = ["jueves","viernes","sabado"];
    let dia = diasSemana.at(-1);
    console.log(dia);
}

function concatenar() {
    // Concatenar 2 arrays (concat)
    let array1 = ["lunes","martes","miercoles"];
    let array2 = ["jueves","viernes","sabado"];
    const totalDiasSemana = array1.concat(array2);
    console.log(totalDiasSemana);
    }
function cambiarElementos(){
    // Cambiar elementos de un Array por otro en diferentes posiciones 
    // fill
    const frutas = ["Platano","Manzana","Limon","Mango"];
    let kiwi = frutas.fill("Kiwi",0,3);
    console.log(kiwi);
}
function stringToArray() {
    // Array from
    let texto = "SPIDERMAN"
    const array1 = Array.from(texto);
    console.log(array1);
    
}
function concatenarSubArrays() {
    const array1 = [[1,2],[3,4],[5,6]];
    let nuevaArray = array1.flat();
    console.log(array1);
}
function arrayToString() {
    const diasSemana = ["jueves","viernes","sabado"];
    let resultado = diasSemana.toString();
    console.log(resultado);
}
function anadirParametro(params) {
    // join Devuelve un array como String
    const diasSemana = ["jueves","viernes","sabado"];
    let resultado = frutas.join();
    console.log(resultado);
}
function esUnArray() {
    // isArray
    const frutas = ["Platano","Manzana","Limon","Mango"];
    let resultado = Array.isArray(frutas);
    console.log(resultado);
}
function longitudArray() {
    // length
    const frutas = ["Platano","Manzana","Limon","Mango"];
    let longitud = frutas.length;
    console.log(longitud);
}
function buscarElemento(){
    // indexOf lastIndexOf
    let diasSemana = ["jueves","viernes","sabado"];
    let a = diasSemana.indexOf("viernes");
    let b = diasSemana.lastIndexOf("jueves");
    console.log(a);
    console.log(b);

}

function elementoArray(){
    //includes
    const frutas = ["Platano","Manzana","Limon","Mango"];
    const favFruta = frutas.includes("Platano")
    console.log(favFruta);
}


function ordenarFormaAscendente() {
    // Ordena la array sort
    const diasSemana = ["jueves","viernes","sabado"];
    diasSemana.sort();
}
function separarElementos(){
    // slice
    const frutas = ["Platano","Manzana","Limon","Mango"];
    const favFrutas = frutas.slice(0,2)
    console.log(favFrutas);
}
function ordenarFormaDescendente() {
    // Invierte el orden del array (reverse)
    const diasSemana = ["jueves","viernes","sabado"];
    diasSemana.reverse();
}
