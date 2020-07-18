const User = require("../../../models/users");
const bcrypt = require("bcrypt");
const createToken = require("../../../service/createToken");

const singIn = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if(!email || !senha) {
            return res.status(400).json("Dados Insuficientes!");
        }

        const user = await User.findOne({email}).select("+password");
        const newToken = createToken(user.nome, user.email);
        await User.updateOne({email}, {token: newToken});

        if(!user) {
            return res.status(400).json("Usuário e/ou senha inválidos!");
        }

        const senha_ok = await bcrypt.compare(senha, user.senha);

        if(!senha_ok) {
            return res.status(401).json("Usuário e/ou senha inválidos");
        }
        user.senha = undefined;
        return res.status(200).json(user);
    } catch (error) {  
        return res.status(400).json(error);
    }

};

module.exports = singIn;