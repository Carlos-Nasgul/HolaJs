let user = {
    id: 1,
    name: 'Charlie',
    city: 'Cazalla',
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let valores = {
    id: 2,
    name: 'Chachi',
    city: 'Sevilla',
}

for (datos in valores) {
    console.log(datos, valores[datos]);
}
