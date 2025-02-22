const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/registro', adminController.register);
router.post('/login', adminController.login);
router.get('/usuarios', adminController.listarUsuarios);
router.delete('/usuarios/:correo', adminController.eliminarUsuario);

module.exports = router;