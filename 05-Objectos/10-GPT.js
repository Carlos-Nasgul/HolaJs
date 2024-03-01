// Clase Punto en un Plano Cartesiano
class Punto {
    // Constructor para inicializar las coordenadas x e y
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Método para dibujar el punto en el plano
    dibujar() {
        console.log(`Punto en (${this.x}, ${this.y})`);
    }

    // Método para obtener el cuadrante del punto
    obtenerCuadrante() {
        if (this.x > 0 && this.y > 0) {
            return "Cuadrante I";
        } else if (this.x < 0 && this.y > 0) {
            return "Cuadrante II";
        } else if (this.x < 0 && this.y < 0) {
            return "Cuadrante III";
        } else if (this.x > 0 && this.y < 0) {
            return "Cuadrante IV";
        } else if (this.x === 0 && this.y === 0) {
            return "Origen";
        } else if (this.x === 0) {
            return "Eje Y";
        } else {
            return "Eje X";
        }
    }
}

// Crear instancias de la clase Punto
let puntoA = new Punto(3, 4);
let puntoB = new Punto(-2, 5);

// Llamar a métodos y acceder a propiedades
puntoA.dibujar(); // Imprime: Punto en (3, 4)
console.log("Cuadrante:", puntoA.obtenerCuadrante()); // Imprime: Cuadrante I

puntoB.dibujar(); // Imprime: Punto en (-2, 5)
console.log("Cuadrante:", puntoB.obtenerCuadrante()); // Imprime: Cuadrante II
