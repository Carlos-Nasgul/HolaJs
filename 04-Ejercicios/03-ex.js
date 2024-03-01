/*construir una funcion 
que nos permita obtener
un elemento por su indice
*/
function obtenerElementoPorIndice(array, indice) {
    // Verificar si el índice está dentro de los límites del array
    if (indice >= 0 && indice < array.length) {
        // Devolver el elemento en el índice proporcionado
        return array[indice];
    } else {
        // Si el índice está fuera de los límites, mostrar un mensaje de error
        console.error("Índice fuera de los límites del array");
        return null; // Puedes elegir devolver null u otro valor que indique un error
    }
}

// Ejemplo de uso:
let miArray = [
    "Manzana",
    "Banana",
    "Naranja",
    "Uva",
    "Sandía",
    "Fresa",
    "Pera",
    "Kiwi",
    "Melocotón",
    "Cereza",
    "Piña",
    "Mango",
    "Papaya",
    "Limón",
    "Coco",
    "Aguacate",
    "Granada",
    "Pomelo",
    "Ciruela",
    "Pomelo",
    "Frambuesa"
];


let elementoEnIndice2 = obtenerElementoPorIndice(miArray, 5);

// Imprimir el resultado en la consola
console.log(elementoEnIndice2);



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}