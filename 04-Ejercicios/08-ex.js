/**
 * obtener los pares(llave:valor) del array
 */

const productos = [
    { nombre: "Producto1", precio: 20.99, categoria: "Electrónicos" },
    { nombre: "Producto2", precio: 34.75, categoria: "Ropa" },
    { nombre: "Producto3", precio: 8.50, categoria: "Hogar" },
    { nombre: "Producto4", precio: 49.99, categoria: "Electrónicos" },
    { nombre: "Producto5", precio: 15.00, categoria: "Ropa" }
];
/*
for (const producto of productos) {
    // Imprimir pares clave-valor de cada objeto
    for (const clave in producto) {
        console.log(`${clave}: ${producto[clave]}`);
    }
    console.log("------");  // Separador entre objetos para mayor claridad
}
*/

let pares = [
    [1, { nombre: "Producto1", precio: 20.99, categoria: "Electrónicos" }],
    [2, { nombre: "Producto2", precio: 34.75, categoria: "Ropa" }],
    [3, { nombre: "Producto3", precio: 8.50, categoria: "Hogar" }],
    [4, { nombre: "Producto4", precio: 49.99, categoria: "Electrónicos" }],
    [5, { nombre: "Producto5", precio: 15.00, categoria: "Ropa" }],
];

function toPairs(catalogo) {
    let pairs = [];
    for (idx in catalogo) {
        let elemento = catalogo[idx];
        pairs[idx] = [elemento.nombre, elemento];
    }
    return pairs;
}

let result = toPairs(productos);
console.log(result);