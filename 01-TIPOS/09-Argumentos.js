function suma2(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado = suma2(15, 26, 7, 3);
console.log(resultado);

console.log(typeof suma2);
