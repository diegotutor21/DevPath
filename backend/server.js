require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');

// Rutas
const userRouter = require('./routers/user'); // Ruta de autenticación y gestión de usuarios
const recuperarRouter = require('./routers/recuperar'); // Ruta de recuperación de contraseñas
const adminRouter = require('./routers/admin'); // Ruta de administración

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'devpath_secret',
    resave: false,
    saveUninitialized: true,
}));

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conectado a la base de datos MongoDB');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });

// Rutas de la API
app.use('/api/users', userRouter); // Ruta para usuarios
app.use('/api/recuperar', recuperarRouter); // Ruta para recuperación de contraseñas
app.use('/api/admins', adminRouter); // Ruta para administradores

// Inicio del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
