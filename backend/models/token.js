const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600, // El token se elimina automáticamente después de 1 hora
    },
});

const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;
