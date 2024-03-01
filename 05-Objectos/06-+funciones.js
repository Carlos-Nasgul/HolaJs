/**
 * Las funciones javascript tambien son 
 * objetos y además son de 1ª clase
 * 
 pueden ser: asignados a otras variables

 */

function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name); //esto es el nombre de la función
console.log(Usuario.length);//esto su longitud

const UserNuevo = Usuario
let user = new UserNuevo('Paquito');

console.log(user);


/**
 * FUNCTION OF va a recibir otra función como un argumento, en este caso Usuario [^_^},
 */

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Félix');
console.log(user1);

/**
 * Ahora una funcion 'RETURNED'
 */

function returned() {
    return function () {
        console.log('Hola');
    }
}

let saludo = returned();
//console.log(saludo); // --> con esto veo la funcion como esta construida
saludo();
//Hago el llamado de la función saludo(); y ejecuta la función de arriba