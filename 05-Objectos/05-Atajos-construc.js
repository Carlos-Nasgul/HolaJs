/*let objeto = {};
let objeto2 = new Object();

/**
 * new Array(); []
 * new String(); "", '', 
 * nex Number(); 12
 * new Boolean() true, false;
 */


/*function Usuario() {
    this.nombre = 'Carlitos';
}
let user = new Usuario();
console.log(user.constructor, user.nombre);*/

// Archivo: ejemplo.js

// 1. Objetos Vacíos
let objeto1 = {};
console.log("Objeto 1:", objeto1);

let objeto2 = new Object();
console.log("Objeto 2:", objeto2);

// 2. Objetos con Constructor de Usuario
function Usuario() {
    this.nombre = 'Carlitos';
}

// Crear un objeto Usuario usando la función constructora
let user = new Usuario();
console.log("Objeto Usuario:", user);


// 3. Acceder a propiedades y métodos del objeto creado
console.log("Nombre del Usuario:", user.nombre);

// 4. Verificar el constructor del objeto
console.log("Constructor del Usuario:", user.constructor);

















