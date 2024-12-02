const User = require('../models/user');

// Enviar código de recuperación
exports.sendRecoveryCode = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'El correo no está registrado' });
        }

        // Generar código de recuperación
        const recoveryCode = Math.floor(1000 + Math.random() * 9000);
        user.recoveryCode = recoveryCode;
        await user.save();

        console.log(`Código enviado a ${email}: ${recoveryCode}`); // Simulación
        res.json({ message: 'Código enviado', code: recoveryCode });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al enviar el código de recuperación' });
    }
};

// Cambiar contraseña
exports.changePassword = async (req, res) => {
    const { email, code, newPassword } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || user.recoveryCode !== parseInt(code, 10)) {
            return res.status(400).json({ error: 'Código de recuperación inválido o expirado' });
        }

        user.password = newPassword; // Asegúrate de hashear la nueva contraseña
        user.recoveryCode = null; // Limpia el código de recuperación
        await user.save();

        res.json({ message: 'Contraseña cambiada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al cambiar la contraseña' });
    }
};
