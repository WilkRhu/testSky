const User = require("../../models/users");
const userValidate = require("../../service/validationUsers");
const createToken = require("../../service/createToken");

const create = async (req, res) => {
    try {
        const {nome, email, senha, telefones} = req.body;
        const token = createToken(nome, email);
        const { error, value } =  userValidate.validate({nome, email, senha, telefones, token});
        if(!error){
            const verificaUsuario = await User.findOne({email: value.email});
            if(!verificaUsuario) {
                const user = await User.create(value);
                user.senha = undefined;
                return res.status(201).json(user);
            } else {
                return res.json("Email já existente");
            }
        } else {
            return res.status(400).json("Erro de Validação");
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = create;