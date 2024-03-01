/**
 * PARA CREAR OBJETOS DE MANERA SENCILLA
 */
// Factory Function para crear objetos 'Persona'
/*function crearPersona(nombre, edad, trabajo) {
    // El objeto que se creará y devolverá
    const persona = {};

    // Propiedades del objeto 'Persona'
    persona.nombre = nombre;
    persona.edad = edad;
    persona.trabajo = trabajo;

    // Método para mostrar información sobre la persona
    persona.mostrarInfo = function () {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Trabajo: ${this.trabajo}`);
    };

    // Método para cambiar el trabajo de la persona
    persona.cambiarTrabajo = function (nuevoTrabajo) {
        this.trabajo = nuevoTrabajo;
    };

    // Devolver el objeto creado
    return persona;
}

// Crear una persona usando la Factory Function
const persona1 = crearPersona("Juan", 30, "Desarrollador");

// Acceder a propiedades y métodos del objeto creado
console.log(persona1.nombre); // Juan
console.log(persona1.edad); // 30
persona1.mostrarInfo(); // Nombre: Juan, Edad: 30, Trabajo: Desarrollador

// Cambiar el trabajo de la persona usando el método
persona1.cambiarTrabajo("Diseñador");
persona1.mostrarInfo(); // Nombre: Juan, Edad: 30, Trabajo: Diseñador
*/

function crearUsuario(nombre, email, edad) {
    return {
        nombre,
        email,
        edad,
        recuperaClave: function () {
            console.log('recuperando clave...');
        }


    };
}

let user1 = crearUsuario('Carlos', 'garcia@gmail.com');
let user2 = crearUsuario('Flori', 'flori@hotmail.es', 55);


console.log(user1, user2);
console.log(user1.nombre);