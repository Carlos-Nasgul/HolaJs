/*Función para obtener el menor y mayor

let array = [
    103, 199, 249, -129, -22, -81, -93, -71, 205, -45, -61, -47, 51, 48, -83, 227, -170, -28, 16,
    120, 173, -132, 21, 111, 201, 243, 246, 205, -333, 12];

function menorMayor(array) {
    let minimo = Infinity;
    let maximo = -Infinity;
    for (i = 0; i < array.length; i++) {
        if (array[i] < minimo) {
            minimo = array[i];
        }

        if (array[i] > maximo) {
            maximo = array[i];
        }

    };

    return {
        mínimo: minimo,
        máximo: maximo
    };
}

let result = menorMayor(array);
console.log(result);
*/
/*const numerosAleatorios = Array.from({ length: 3 },
    () => Math.floor(Math.random() * 501) - 250);

console.log(numerosAleatorios);*/
let array = [
    103, 199, 549, -129, -22, -81, -93, -71, 205, -45, -61, -47, 51, 48, -83, 227, -170, -28, 16,
    120, 173, -132, 21, 111, 201, 243, 246, 205, -533, 12
];
/*
function menorMayor(array) {
    let minimo = Math.min(...array);
    let maximo = Math.max(...array);

    return {
        mínimo: minimo,
        máximo: maximo
    };
}

let result = menorMayor(array);
console.log(result);
*/
function minMax(array) {
    let min = array[0];
    let max = array[0];
    for (numero of array) {
        min = min < numero ? min : numero;
        max = max > numero ? max : numero;
    };
    return [min, max];
};

let result = minMax(array);
console.log(result);