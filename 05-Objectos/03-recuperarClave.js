function obtenerValor(objeto, clave) {
    // Verificar si la clave existe en el objeto
    if (clave in objeto) {
        // Devolver el valor asociado a la clave
        return objeto[clave];
    } else {
        // Devolver un mensaje o valor predeterminado si la clave no existe
        return `La clave '${clave}' no existe en el objeto.`;
    }
}

// Ejemplo de uso
const miObjeto = { nombre: "Juan", edad: 30, trabajo: "Desarrollador" };

const valorNombre = obtenerValor(miObjeto, "nombre");
console.log(valorNombre); // Juan

const valorCiudad = obtenerValor(miObjeto, "ciudad");
console.log(valorCiudad); // La clave 'ciudad' no existe en el objeto.
