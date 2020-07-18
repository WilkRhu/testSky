require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
const mongoose = require("mongoose");
const User = require("../../../src/models/users");
const {userFaker, userUpdate} = require("../../userFaker");

describe("Teste de Usuarios", () => {
    let db;

    beforeAll(async () => {
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useCreateIndex: true
        }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

    test("Criação de Usuario na base de dados", async () => {
        const user = await User.create(userFaker);
        expect(user.nome).toBe(userFaker.nome);
        expect(user.email).toBe(userFaker.email);
    });

    test("Buscar usuarios", async () => {
        const user = await User.create(userFaker);
        const buscarUser = await User.find({});
        expect(buscarUser.length > 0)
    });

    test("Buscar usuario por id", async () => {
        const user = await User.create(userFaker);
        const buscaUserId = await User.findOne({ _id: user._doc._id});
        expect(buscaUserId._doc.nome).toBe(userFaker.nome)
    });

    test("Atualizar usuário criado", async () => {
        const user = await User.create(userFaker);
        const updateUser = await User.updateOne({ _id: user._doc._id}, userUpdate);
        expect(updateUser.ok).toBe(1);
    });

    test("Deletar usuário criado", async () => {
        const user = await User.create(userFaker);
        const deleUser = await User.deleteOne({ _id: user._doc._id});
        expect(deleUser.ok).toBe(1);
    });

    afterEach(async () => {
        await User.deleteMany({});
    });

});