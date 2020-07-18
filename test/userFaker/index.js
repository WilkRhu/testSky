const faker = require("faker");

const userFaker = {
    nome: faker.internet.userName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
    telefone: {
        numero: "993949202",
        ddd: "081"
    },
    token: "token"
};

const userUpdate = {
    nome: "Fulano de tal"
};

const userErrorValidation = {
    nome: "fulano",
    email: "fulano@email.br",
    senha: faker.internet.password(),
    telefone: {
        numero: "993949202",
        ddd: "081"
    },
    token: "token"
}


module.exports = {
    userFaker,
    userUpdate,
    userErrorValidation
};