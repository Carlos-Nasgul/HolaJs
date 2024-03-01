let miObjeto = {
    nombre: "Juan",
    edad: 25,
    trabajo: "Programador",
    saludo: function () {
        console.log("¡Hola!");
    }
};

// Listar propiedades del objeto
for (let prop in miObjeto) {
    console.log(prop); // Imprime: nombre, edad, trabajo, saludar
}
let miObjeto2 = {
    nombre: "Paco",
    edad: 49,
    trabajo: "Desarrollador",
    saludar() {
        console.log("¡Hola!");
    }
};

for (let prop in miObjeto2) {
    if (typeof miObjeto2[prop] === 'function') {
        console.log(prop + ' es un método.');
    } else {
        console.log(prop + ' no es un método.');
    }
}




