const User = require('../models/User');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
      const { nombre, apellido, correo, password, confirmPassword } = req.body;

      if (!nombre || !apellido || !correo || !password || !confirmPassword) {
          return res.status(400).json({ mensaje: 'Todos los campos son requeridos' });
      }

      if (password !== confirmPassword) {
          return res.status(400).json({ mensaje: 'Las contraseñas no coinciden' });
      }

      // Verificar que no sea el correo del admin
      if (correo === process.env.ADMIN_EMAIL) {
          return res.status(400).json({ mensaje: 'Este correo está reservado para el administrador' });
      }

      // Verificar que el correo no esté registrado en ninguna colección
      const existingUser = await User.findOne({ correo });
      const existingAdmin = await Admin.findOne({ correo });
      
      if (existingUser || existingAdmin) {
          return res.status(400).json({ mensaje: 'El correo ya está registrado' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
          nombre,
          apellido,
          correo,
          password: hashedPassword
      });

      await user.save();
      res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
  } catch (error) {
      res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
  }
};

exports.login = async (req, res) => {
    try {
        const { correo, password } = req.body;

        if (!correo || !password) {
            return res.status(400).json({ mensaje: 'Todos los campos son requeridos' });
        }

        const user = await User.findOne({ correo });
        if (!user) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        res.status(200).json({ 
            mensaje: 'Login exitoso',
            rol: 'usuario',
            usuario: {
                nombre: user.nombre,
                apellido: user.apellido,
                correo: user.correo
            }
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
    }
};

exports.solicitarRecuperacion = async (req, res) => {
    try {
        const { correo } = req.body;

        if (!correo) {
            return res.status(400).json({ mensaje: 'El correo es requerido' });
        }

        if (correo === process.env.ADMIN_EMAIL) {
            return res.status(400).json({ mensaje: 'Operación no permitida para admin' });
        }

        const user = await User.findOne({ correo });
        if (!user) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        const codigo = Math.floor(1000 + Math.random() * 9000).toString();
        user.codigoRecuperacion = codigo;
        await user.save();

        res.status(200).json({ 
            mensaje: 'Código de recuperación generado',
            codigo: codigo
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { correo, codigo, newPassword, confirmPassword } = req.body;

        if (!correo || !codigo || !newPassword || !confirmPassword) {
            return res.status(400).json({ mensaje: 'Todos los campos son requeridos' });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ mensaje: 'Las contraseñas no coinciden' });
        }

        const user = await User.findOne({ correo });
        if (!user || user.codigoRecuperacion !== codigo) {
            return res.status(400).json({ mensaje: 'Código inválido' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.codigoRecuperacion = null;
        await user.save();

        res.status(200).json({ mensaje: 'Contraseña actualizada exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
    }
};