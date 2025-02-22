const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/registro', userController.register);
router.post('/login', userController.login);
router.post('/recuperar-cuenta', userController.solicitarRecuperacion);
router.post('/reset-password', userController.resetPassword);

module.exports = router;