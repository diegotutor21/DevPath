const express = require("express");
const { generateToken, validateToken } = require("../controllers/token");

const router = express.Router();

// Ruta para generar un nuevo token
router.post("/generate", generateToken);

// Ruta para validar un token
router.post("/validate", validateToken);

module.exports = router;
