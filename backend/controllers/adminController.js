const Admin = require('../models/Admin');
const User = require('../models/User'); // Añadimos para verificación
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { nombre, apellido, correo, password, confirmPassword } = req.body;

        if (!nombre || !apellido || !correo || !password || !confirmPassword) {
            return res.status(400).json({ mensaje: 'Todos los campos son requeridos' });
        }

        // Verificar que sea el correo de admin
        if (correo !== process.env.ADMIN_EMAIL) {
            return res.status(400).json({ mensaje: 'Este correo no está autorizado como administrador' });
        }

        // Verificar la contraseña de admin
        if (password !== process.env.ADMIN_PASSWORD) {
            return res.status(400).json({ mensaje: 'Contraseña de administrador incorrecta' });
        }

        // Verificar que no exista ya un admin
        const existingAdmin = await Admin.findOne({});
        if (existingAdmin) {
            return res.status(400).json({ mensaje: 'Ya existe un administrador registrado' });
        }

        // Verificar que el correo no esté registrado como usuario
        const existingUser = await User.findOne({ correo });
        if (existingUser) {
            return res.status(400).json({ mensaje: 'Este correo ya está registrado como usuario' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new Admin({
            nombre,
            apellido,
            correo,
            password: hashedPassword
        });

        await admin.save();
        res.status(201).json({ mensaje: 'Administrador registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { correo, password } = req.body;

        if (!correo || !password) {
            return res.status(400).json({ mensaje: 'Todos los campos son requeridos' });
        }

        if (correo !== process.env.ADMIN_EMAIL) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        const admin = await Admin.findOne({ correo });
        if (!admin) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        res.status(200).json({ 
            mensaje: 'Login exitoso',
            rol: 'admin',
            usuario: {
                nombre: admin.nombre,
                apellido: admin.apellido,
                correo: admin.correo
            }
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
    }
};

exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find({}, 'nombre apellido correo');
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
    }
};

exports.eliminarUsuario = async (req, res) => {
    try {
        const { correo } = req.params;

        if (correo === process.env.ADMIN_EMAIL) {
            return res.status(400).json({ mensaje: 'No se puede eliminar al administrador' });
        }

        const resultado = await User.findOneAndDelete({ correo });
        if (!resultado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.status(200).json({ mensaje: 'Usuario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
    }
};