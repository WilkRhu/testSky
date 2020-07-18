require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
require("../config/database/connectMongo");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res) => {
    res.status(404).send({
        error: "Rota não encontrada"
    });
});

app.use(router);
app.use(cors());

module.exports = app;