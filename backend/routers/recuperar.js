const express = require('express');
const router = express.Router();
const { sendRecoveryCode, changePassword } = require('../controllers/recuperar');

// Ruta para enviar el código de recuperación
router.post('/send-recovery-code', sendRecoveryCode);

// Ruta para cambiar la contraseña
router.post('/change-password', changePassword);

module.exports = router;
