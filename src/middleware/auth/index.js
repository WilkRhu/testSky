const jwt = require("jsonwebtoken");
const User = require("../../models/users");


const auth =  (req, res, next) => {
    const token_header = req.headers.berear;
    const { id } = req.params;

    if(!token_header) return res.status(401).send({error: "Token não informado!"});
    
    jwt.verify(token_header, process.env.KEY_SISTEM, async (err, decoded) =>{
        if(err){
            return res.status(401).send({error: "Sessão Inválida!"});  
        } 
        const { email } = decoded;
        const pass = await User.findOne({ _id: id, email: email});
        if(pass){
            res.locals.auth_data = decoded;
            return next();
        } else {
            return res.status(401).json({error: "Não Autorizado!"});
        }
    });
};

module.exports = auth;