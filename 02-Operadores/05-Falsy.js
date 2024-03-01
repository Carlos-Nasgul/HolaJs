/**
 * con los operadores 
 * logicos podemos crear
 * cortocircuitos
 * short-circuit
 */
//falso
/**
 * que da falso? -->se le llama FALSY <--
 * false
 * 0
 * "" vacios
 * null
 * undefined
 * NaN
Ejemplo de or ||--> 
*/
let nombre = 'Paco';
let username = nombre || 'Usuario';
console.log(username);

//ejemplo de and && -->
function fn1() {
    console.log('soy funcion 1')
    return false;
}
function fn2() {
    console.log('soy funcion 2')
    return true;
}

//let estaVariable = fn1() && fn2(); 
let estaVariable = fn1() && fn2(); 