require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
const request = require("supertest");
const app = require("../../../src/web/app");
const {mongoUri} = require("../../../globalConfig.json");
const mongoose = require("mongoose");
const User = require("../../../src/models/users");
const {userFaker, userUpdate, userErrorValidation} = require("../../userFaker");

describe("Teste de cadastro nos endpoints", () => {
    describe("Rota SingUp", () => {
        let db;

        beforeAll(async () => {
            await mongoose.connect(mongoUri, {
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

        test("Cadastrar Usuario com sucesso", async () =>{
            const createUser = await request(app).post("/singUp")
            .send(userFaker);
            expect(createUser.status).toBe(201);
        });

        test("Erro de validação", async () =>{
            const createUser = await request(app).post("/singUp")
            .send(userErrorValidation);
            expect(createUser.body).toBe("Erro de Validação");
        });

        afterEach(async () => {
            await User.deleteMany({});
        });
    })
})