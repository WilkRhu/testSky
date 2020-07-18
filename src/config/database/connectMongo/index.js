const mongoose = require("mongoose");

const url = process.env.URL_DB;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(url, options);
mongoose.set("useCreateIndex", true);
mongoose.connection.on("error", (err) => {
    console.log("Erro na conexão com o banco de dados:" + err);
});
mongoose.connection.on("disconnected", () => {
    console.log("Aplicação desconectada do banco de dados!");
});

mongoose.connection.on("connected", () => {
    console.log(`Aplicação Conectada ao banco de dados de ${process.env.NODE_ENV}!`);
});