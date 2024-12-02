const Admin = require("../models/admin");

// Agregar un nuevo administrador
exports.addAdmin = async (req, res) => {
    const { email } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ error: "El usuario ya es administrador." });
        }

        const newAdmin = new Admin({ email });
        await newAdmin.save();

        res.status(201).json({ message: "Administrador agregado exitosamente." });
    } catch (error) {
        res.status(500).json({ error: "Error al agregar administrador." });
    }
};

// Obtener la lista de administradores
exports.getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los administradores." });
    }
};

// Eliminar un administrador
exports.removeAdmin = async (req, res) => {
    const { email } = req.body;

    try {
        const admin = await Admin.findOneAndDelete({ email });
        if (!admin) {
            return res.status(404).json({ error: "Administrador no encontrado." });
        }

        res.json({ message: "Administrador eliminado exitosamente." });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar administrador." });
    }
};
