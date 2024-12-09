const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Admin = require("../models/admin");

// Registro de usuario
exports.registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "El correo ya está registrado." });
        }

        const newUser = new User({ email, password });
        await newUser.save();

        res.status(201).json({ message: "Usuario registrado con éxito." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al registrar el usuario." });
    }
};

// Inicio de sesión
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ error: "Credenciales incorrectas." });
        }

        // Verificar si el usuario es administrador
        const isAdmin = await Admin.findOne({ email });

        // Generar el token con el rol
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: isAdmin ? "admin" : "user",
            },
            process.env.JWT_SECRET, // Usa la clave secreta
            { expiresIn: "1h" }
        );

        res.json({
            message: "Inicio de sesión exitoso.",
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al iniciar sesión." });
    }
};

// Validar token y obtener datos del usuario
exports.validateToken = (req, res) => {
    try {
        const { user } = req; // Añadido por el middleware verifyToken
        res.json({ email: user.email, role: user.role });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al validar el token." });
    }
};

// Cerrar sesión
exports.logoutUser = (req, res) => {
    // Aquí no es necesario destruir tokens JWT, basta con que el cliente los elimine
    res.json({ message: "Sesión cerrada con éxito." });
};
