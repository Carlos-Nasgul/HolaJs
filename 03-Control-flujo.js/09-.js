/*let users = [{
    id: 1,
    name: 'Charlie',
    city: 'Cazalla',
}
];*/

// Agregar un nuevo usuario al final!!! del array



let users = [
    {
        id: 1,
        name: 'Charlie',
        city: 'Cazalla',
    },
    {
        id: 2,
        name: 'Lola',
        city: 'Ejemploville',
    },
    {
        id: 3,
        name: 'Carlos',
        city: 'Ciudad X',
    }
];

console.log(users);


users.push({
    id: 4,
    name: 'Eva',
    city: 'Ejemploville',
});

console.log(users);

for (prop of users) {
    console.log(prop);
};


for (prop in users) {
    if (prop == 1) {
        continue;
    }
    console.log(prop, users[prop]);
};