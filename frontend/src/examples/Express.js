// examples/express.js
const expressExamples = {
  installation: `# Inicializar un nuevo proyecto Node.js
npm init -y

# Instalar Express
npm install express

# Dependencias comunes adicionales
npm install cors dotenv helmet morgan`,

  basicServer: `const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta básica GET
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API!');
});

// Ruta GET con parámetros
app.get('/usuarios/:id', (req, res) => {
  // req.params.id contiene el ID del usuario
  res.json({
    id: req.params.id,
    mensaje: \`Obteniendo usuario \${req.params.id}\`
  });
});

// Ruta POST para crear recursos
app.post('/usuarios', (req, res) => {
  // req.body contiene los datos enviados en el cuerpo de la petición
  const nuevoUsuario = req.body;
  res.status(201).json({
    mensaje: 'Usuario creado',
    usuario: nuevoUsuario
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Servidor corriendo en http://localhost:\${PORT}\`);
});`,

  middleware: `// Middleware de registro personalizado
const loggerMiddleware = (req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next(); // Importante: llamar a next() para continuar con la siguiente función
};

// Middleware de autenticación
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No autorizado' });
  }
  
  // Aquí irían las validaciones del token
  next();
};

// Uso de los middleware
app.use(loggerMiddleware); // Se aplica a todas las rutas
app.use('/api', authMiddleware); // Solo se aplica a rutas que empiezan con /api

// Ejemplo de ruta protegida
app.get('/api/perfil', (req, res) => {
  res.json({ mensaje: 'Datos del perfil' });
});`,

  routing: `// routes/usuarios.js
const express = require('express');
const router = express.Router();

// Parámetros de ruta
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId });
});

// Query strings
router.get('/buscar', (req, res) => {
  const { nombre, edad } = req.query;
  res.json({ 
    mensaje: 'Búsqueda de usuarios',
    filtros: { nombre, edad }
  });
});

// Parámetros opcionales
router.get('/:id?', (req, res) => {
  if (req.params.id) {
    res.json({ usuario: \`Usuario \${req.params.id}\` });
  } else {
    res.json({ usuarios: 'Lista de todos los usuarios' });
  }
});

module.exports = router;

// app.js
const usuariosRouter = require('./routes/usuarios');
app.use('/usuarios', usuariosRouter);`,

  errorHandling: `// Middleware para manejo de errores asíncronos
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Ejemplo de ruta con manejo de errores
app.get('/usuario/:id', asyncHandler(async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }
  res.json(usuario);
}));

// Middleware de manejo de errores personalizado
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Error personalizado según el tipo
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Error de validación',
      detalles: err.message
    });
  }

  // Error por defecto
  res.status(500).json({
    error: 'Error interno del servidor',
    mensaje: err.message
  });
});`,

  mongooseConnection: `const mongoose = require('mongoose');

// Configuración de la conexión
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Modelo de usuario
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  edad: Number,
  fechaCreacion: { type: Date, default: Date.now }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Ejemplo de CRUD
app.post('/usuarios', async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,

  mysqlConnection: `const mysql = require('mysql2/promise');

// Configuración de la conexión
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Ejemplo de consultas
app.get('/usuarios', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, email, edad } = req.body;
    const [result] = await pool.query('INSERT INTO usuarios (nombre, email, edad) VALUES (?, ?, ?)', [nombre, email, edad]);
    res.status(201).json({ id: result.insertId, nombre, email, edad });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`
};

export default expressExamples;