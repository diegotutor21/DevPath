const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middleware/auth");

// Ruta protegida solo para administradores
router.get("/admin-panel", verifyToken, isAdmin, (req, res) => {
    res.status(200).json({ message: "Bienvenido al panel de administrador" });
});

// Ruta protegida para cualquier usuario autenticado
router.get("/user-dashboard", verifyToken, (req, res) => {
    res.status(200).json({ message: "Bienvenido al dashboard del usuario" });
});

module.exports = router;
