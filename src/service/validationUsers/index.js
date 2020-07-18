const Joi = require("@hapi/joi");

const userValidation = Joi.object({
    nome: Joi.string().required().min(1).max(100),
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: {
            allow: ["com", "net"]
        }
    }),
    senha: Joi.string().pattern(new RegExp("^[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{3,30}$")),
    telefones: Joi.object({
        numero: Joi.string(),
        ddd: Joi.string()
    })
});

module.exports = userValidation;