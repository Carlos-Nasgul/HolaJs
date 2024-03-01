let i = 0;
while (i < 9) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

console.log('Fuera de prueba');


do {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
} while (i < 9);

console.log('Out');