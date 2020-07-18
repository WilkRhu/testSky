const faker = require("faker");

const userFaker = {
    nome: faker.internet.userName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
    telefone: {
        numero: faker.phone.phoneNumber(),
        ddd: "081"
    }
};

const userUpdate = {
    nome: "Fulano de tal"
};

module.exports = {
    userFaker,
    userUpdate
};