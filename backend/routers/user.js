const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/user');
const router = express.Router();

// Registro de usuario
router.post('/register', registerUser);

// Inicio de sesión
router.post('/login', loginUser);

// Cierre de sesión
router.post('/logout', logoutUser);

module.exports = router;
