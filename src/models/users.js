const mongoose = require("mongoose");
const {uuid} = require("uuidv4");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    _id: {
        type: String,
    },
    nome: {
        type: String,
        required: true,
        min: 1,
        max: 100,
    },

    email: {
        type: String,
        required: true,

    },

    senha: {
        type: String,
        required: true
    },
    telefones: [{
        numero: {
            type: Number,
            min: 1,
            max: 10
        },
        ddd: {
            type: Number,
            min: 1,
            max: 3
        }
    }],
    created_at: {
        type: String,
        default: Date.now
    },
    updated_at: {
        type: Date
    }
});

userSchema.pre("save", async function(next){
    let user = this;
    const saltRoung = 10;
    user.senha = await bcrypt.hash(user.senha, saltRoung);
    user._id = uuid();
    return next();
});

module.exports = mongoose.model("User", userSchema);