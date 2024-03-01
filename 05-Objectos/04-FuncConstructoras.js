// Función constructora para crear objetos 'Persona' en UpperCamelCasse!!!
function Persona(nombre, edad, trabajo) {
    // Propiedades del objeto 'Persona'
    this.nombre = nombre;
    this.edad = edad;
    this.trabajo = trabajo;

    // Método para mostrar información sobre la persona
    this.mostrarInfo = function () {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Trabajo: ${this.trabajo}`);
    };

    // Método para cambiar el trabajo o lo que sea ... de la persona, 
    //ESTO ES EL MÉTODO PERSONA(unafunciondentrodeotra)
    this.cambiarTrabajo = function (nuevoTrabajo) {
        this.trabajo = nuevoTrabajo;
    };
    this.cambiarNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
}

// Crear instancias de 'Persona' usando la función constructora 'new' osea al METODO PERSONA
const persona1 = new Persona("Carlos", 49, "Desarrollador");
const persona2 = new Persona("Ana", 45, "Diseñadora");

// Acceder a propiedades y métodos de los objetos creados
//console.log(persona1.nombre); // Juan
//console.log(persona2.edad); // 25
persona1.mostrarInfo(); // Nombre: Juan, Edad: 30, Trabajo: Desarrollador
persona2.mostrarInfo(); // Nombre: Ana, Edad: 25, Trabajo: Ingeniero

// Cambiar el trabajo de la persona usando el método
persona2.cambiarTrabajo("Ingeniera");
persona2.cambiarNombre('Florentina');

persona1.mostrarInfo();
persona2.mostrarInfo();
console.log(persona1, persona2);



