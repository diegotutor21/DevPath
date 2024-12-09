const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middleware/auth");
const { addAdmin, getAdmins, removeAdmin } = require("../controllers/admin");

// Ruta protegida solo para administradores: Panel de control
router.get("/panel", verifyToken, isAdmin, (req, res) => {
    res.status(200).json({ message: "Bienvenido al panel de administrador" });
});

// Agregar un nuevo administrador (solo administradores)
router.post("/add", verifyToken, isAdmin, addAdmin);

// Obtener la lista de administradores (solo administradores)
router.get("/", verifyToken, isAdmin, getAdmins);

// Eliminar un administrador (solo administradores)
router.delete("/remove", verifyToken, isAdmin, removeAdmin);

module.exports = router;
