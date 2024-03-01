//Este es un loop para iterar mejor los elementos de un array
//-->Para iterar los elementos de un listado con for-of<--


let array = ['Aire', 'Agua', 'Fuego', 'Tierra'];
for (elemento of array) {
    console.log(elemento);
}

let i = 0;
while (i < array.length) {
    if (i < 2) {
        console.log(array[i]);
    }

    i++;
}

//<--No utilizar for-in para iterar elementos del array-->
for (let indice in array) {
    console.log(indice, array[indice]);

}

