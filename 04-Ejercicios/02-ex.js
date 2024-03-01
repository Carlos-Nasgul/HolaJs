// Definimos la función nombreResolucion que determina el nombre de la resolución
function nombreResolucion(ancho, alto) {
    // Evaluamos las dimensiones y devolvemos el nombre de la resolución
    if (ancho >= 1920 && alto >= 1080) {
        return 'Full HD';
    } else if (ancho >= 1280 && alto >= 720) {
        return 'HD';
    } else {
        return 'Otra resolución';
    }
}

// Ejemplo de uso de la función
let nombre = nombreResolucion(1366, 768);
console.log(nombre); // Salida esperada: HD
