/**
 * SON TIPOS de Datos DE REFERENCIA
 * OSEA Que 
Un aagrupacion de datos
que hacen sentido
tenerlos juntos
*/

//jugador
let nombre = 'Messi';
let deporte = 'Fútbol';
let edad = 35;
let altura = 175;

let jugador = {
    nombre,
    deporte,
    edad,
    altura,
};
console.log(jugador);
console.log(jugador.nombre);
console.log(jugador['deporte']);
console.log(jugador.edad);

//PARA MODIFICAR UNA PROPIEDAD DEL OBJETO

jugador.edad = 31;//más usada
jugador['edad'] = 36;

//PARA BORRAR UNA VARIABLE, nombramos objeto.variable

delete jugador.altura;

console.log(jugador);