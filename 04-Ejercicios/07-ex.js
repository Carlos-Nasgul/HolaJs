function sumarConImpuestos(precio, impuestoPorcentaje) {
    // Verificar que el precio y el impuestoPorcentaje sean números positivos
    if (typeof precio !== 'number' || typeof impuestoPorcentaje !== 'number'
        || precio < 0 || impuestoPorcentaje < 0) {
        return "Error: Ingresa valores válidos para precio e impuestoPorcentaje.";
    }

    // Calcular el impuesto
    const impuesto = (precio * impuestoPorcentaje) / 100;

    // Sumar el precio y el impuesto
    const total = precio + impuesto;

    // Devolver el total con impuestos
    return total;
}

// Ejemplo de uso
const precioProducto = 175;
const impuestoProducto = 10; // 10% de impuestos

const totalConImpuestos = sumarConImpuestos(precioProducto, impuestoProducto);

console.log("Precio sin impuestos:", precioProducto);
console.log("Impuesto:", impuestoProducto + "%");
console.log("Total con impuestos:", totalConImpuestos);
