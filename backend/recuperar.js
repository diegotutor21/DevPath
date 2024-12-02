const User = require('../models/User'); // Modelo del usuario

// Enviar el código de recuperación
exports.sendRecoveryCode = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'El correo no está registrado' });
        }

        // Generar un código de 4 dígitos
        const recoveryCode = Math.floor(1000 + Math.random() * 9000);
        user.recoveryCode = recoveryCode;
        await user.save();

        console.log(`Código enviado a ${email}: ${recoveryCode}`); // Simulación de envío
        res.json({ message: 'Código enviado', code: recoveryCode });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
};

// Cambiar la contraseña
exports.changePassword = async (req, res) => {
    const { email, code, newPassword } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || user.recoveryCode !== parseInt(code, 10)) {
            return res.status(400).json({ error: 'Código de recuperación inválido' });
        }

        user.password = newPassword; // Asegúrate de hashear la contraseña
        user.recoveryCode = null; // Limpia el código de recuperación
        await user.save();

        res.json({ message: 'Contraseña cambiada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al cambiar la contraseña' });
    }
};
