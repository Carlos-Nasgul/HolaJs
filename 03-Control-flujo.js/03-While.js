/**
 * SI QUEREMOS USAR 
 * UNA PORCION DE CODIGO MAS DE UNA VEZ 
 * TENEMOS LOS LOOPS
 */
let i = 0;
while (i < 10) {
    if (i % 2 == 0) {
        console.log('Numeros pares', i);

    }
    i++;// fuera del if
}

console.log('Fuera del while');