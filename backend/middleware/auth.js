const jwt = require("jsonwebtoken");

// Verificar el token
exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Acceso no autorizado" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Guarda los datos del usuario en la request
        next();
    } catch (error) {
        res.status(403).json({ error: "Token inválido" });
    }
};

// Verificar si el usuario es administrador
exports.isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ error: "Acceso denegado. Solo administradores." });
    }
    next();
};