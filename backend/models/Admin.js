const mongoose = require('mongoose');
const validator = require('validator');

const adminSchema = new mongoose.Schema({
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
    password: { type: String, required: true }
}, { 
    timestamps: true,
    collection: 'admin' // Forzar el nombre de la colección
});

module.exports = mongoose.model('Admin', adminSchema, 'admin');