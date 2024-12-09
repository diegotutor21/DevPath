const jwt = require("jsonwebtoken");
const Token = require("../models/token"); // Importa el modelo si usas persistencia

// Generar un nuevo token
exports.generateToken = async (req, res) => {
    try {
        const { email, role } = req.body;

        if (!email || !role) {
            return res.status(400).json({ error: "Faltan datos: email y role son requeridos." });
        }

        const token = jwt.sign(
            { email, role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Guardar el token en la base de datos (opcional)
        await new Token({ token }).save();

        res.status(201).json({ message: "Token generado exitosamente.", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al generar el token." });
    }
};

// Validar un token
exports.validateToken = async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: "Token es requerido." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Verifica si el token existe en la base de datos (opcional)
        const tokenExists = await Token.findOne({ token });
        if (!tokenExists) {
            return res.status(401).json({ error: "Token no válido o expirado." });
        }

        res.status(200).json({ message: "Token válido.", decoded });
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "Token inválido." });
    }
};
