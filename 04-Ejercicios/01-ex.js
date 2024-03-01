/**
 * CREA UNA FUNCION DE DOS VALORES Y TE DE EL Nº MAYOR
 */

/*function cualEsMayor(a, b) {
    if (a > b)
        console.log(a);
    else
        console.log(b);

}

let mayor = cualEsMayor(10, 5);
console.log(mayor);*/

/*function cualEsMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let mayor = cualEsMayor(10, 5);
console.log('El nº mayor es:', mayor);
*/

function cualEsMayor(a, b) {
    return (a > b) ? a : b;
}

let mayor = cualEsMayor(30, 8);
console.log(mayor);



