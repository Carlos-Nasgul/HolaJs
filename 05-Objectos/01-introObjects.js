/*const miObjeto = {};

// Agregar propiedades dinámicamente
miObjeto.nombre = "Juan";
miObjeto.edad = 25;
miObjeto.trabajo = "Desarrollador";
miObjeto['socio'] = true;

console.log(miObjeto.nombre); // Acceso directo
console.log(miObjeto["edad"]); // Acceso dinámico
console.log(miObjeto);

for (const clave in miObjeto) {
    console.log(`${clave}: ${miObjeto[clave]}`);
}





function crearPersona(nombre, edad) {
    const persona = {};
    persona.nombre = nombre;
    persona.edad = edad;
    return persona;
}
const nuevaPersona = crearPersona("Ana", 30);
console.log(nuevaPersona);


const objetoDestino = { a: 1, b: 2 };
const objetoFuente1 = { b: 3, c: 4 };
const objetoFuente2 = { d: 5 };

const resultado = Object.assign(objetoDestino, objetoFuente1, objetoFuente2);

console.log(resultado); // { a: 1, b: 3, c: 4, d: 5 }
console.log(objetoDestino); // { a: 1, b: 3, c: 4, d: 5 }*/
//--------------------------------------------------------------------><------------>
/**EJEMPLO DEL VIDEO 
 * 
 * let email = garc@mail.com;
 * let name = 'Carlitos';
 * let direccion = {
 *      calle: 'LLana',
 *      numero: 13,
 * };
 * 
 * let user = {};
 * 
 02-dinamico*/

const player = { A: 'Estadísticas del jugador' };
player.puntos = 20;
player.asist = 14;
player.Hugo = function () {
    console.log(player);
}
player.Hugo();

const dinamico = {};
dinamico.nombre = 'Hugo';
dinamico.dorsal = 12;
dinamico.imprimePuntos = function () {
    console.log(dinamico);

}

dinamico.imprimePuntos();
