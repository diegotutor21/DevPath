const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { 
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'El correo no es válido'
        }
    },
    password: { type: String, required: true },
    codigoRecuperacion: { type: String, default: null }
}, { 
    timestamps: true,
    collection: 'users' // Forzar el nombre de la colección
});

module.exports = mongoose.model('User', userSchema, 'users');