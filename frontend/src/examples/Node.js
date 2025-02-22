const nodeExamples = {
  fileSystem: `// Importar el módulo fs con promises
  const fs = require('fs').promises;
  
  // Leer un archivo
  async function leerArchivo() {
    try {
      // Leer el contenido del archivo
      const contenido = await fs.readFile('archivo.txt', 'utf8');
      console.log('Contenido del archivo:', contenido);
    } catch (error) {
      console.error('Error al leer el archivo:', error);
    }
  }
  
  // Escribir en un archivo
  async function escribirArchivo() {
    try {
      // Escribir contenido en el archivo
      await fs.writeFile('nuevo.txt', 'Hola Mundo!');
      console.log('Archivo creado exitosamente');
  
      // Agregar contenido al final del archivo
      await fs.appendFile('nuevo.txt', '\\nNueva línea agregada');
      console.log('Contenido agregado exitosamente');
    } catch (error) {
      console.error('Error al escribir el archivo:', error);
    }
  }
  
  // Trabajar con directorios
  async function manejarDirectorios() {
    try {
      // Crear un directorio
      await fs.mkdir('nuevoDirectorio');
      
      // Leer el contenido de un directorio
      const archivos = await fs.readdir('nuevoDirectorio');
      console.log('Archivos en el directorio:', archivos);
    } catch (error) {
      console.error('Error al manejar directorios:', error);
    }
  }`,

  httpServer: `const http = require('http');
  
  // Crear un servidor HTTP básico
  const servidor = http.createServer((req, res) => {
    // Configurar cabeceras de respuesta
    res.setHeader('Content-Type', 'application/json');
    
    // Manejar diferentes rutas
    if (req.url === '/') {
      res.writeHead(200);
      res.end(JSON.stringify({
        mensaje: '¡Bienvenido a la API!'
      }));
    } 
    else if (req.url === '/usuarios') {
      // Manejar diferentes métodos HTTP
      switch (req.method) {
        case 'GET':
          res.writeHead(200);
          res.end(JSON.stringify({
            usuarios: ['Usuario 1', 'Usuario 2']
          }));
          break;
        case 'POST':
          let body = '';
          // Recibir datos del request
          req.on('data', chunk => {
            body += chunk.toString();
          });
          // Procesar datos cuando termina la request
          req.on('end', () => {
            const usuario = JSON.parse(body);
            res.writeHead(201);
            res.end(JSON.stringify({
              mensaje: 'Usuario creado',
              usuario
            }));
          });
          break;
        default:
          res.writeHead(405);
          res.end(JSON.stringify({
            error: 'Método no permitido'
          }));
      }
    } 
    else {
      res.writeHead(404);
      res.end(JSON.stringify({
        error: 'Ruta no encontrada'
      }));
    }
  });
  
  // Iniciar el servidor
  const PUERTO = process.env.PORT || 3000;
  servidor.listen(PUERTO, () => {
    console.log(\`Servidor corriendo en http://localhost:\${PUERTO}\`);
  });`,

  events: `const EventEmitter = require('events');
  
  // Crear un emisor de eventos personalizado
  class MiEmisor extends EventEmitter {}
  
  const emisor = new MiEmisor();
  
  // Registrar un manejador de eventos
  emisor.on('mensaje', (datos) => {
    console.log('Mensaje recibido:', datos);
  });
  
  // Registrar un manejador que se ejecuta una sola vez
  emisor.once('unaVez', (datos) => {
    console.log('Este evento solo se ejecuta una vez:', datos);
  });
  
  // Emitir eventos
  emisor.emit('mensaje', { texto: 'Hola Mundo' });
  emisor.emit('unaVez', { texto: 'Primera vez' });
  emisor.emit('unaVez', { texto: 'Segunda vez' }); // No se ejecutará
  
  // Ejemplo práctico: Monitor de archivos
  const fs = require('fs');
  
  class MonitorArchivos extends EventEmitter {
    constructor(directorio) {
      super();
      this.directorio = directorio;
      this.iniciar();
    }
  
    iniciar() {
      fs.watch(this.directorio, (eventType, filename) => {
        this.emit('cambio', {
          tipo: eventType,
          archivo: filename
        });
      });
    }
  }
  
  const monitor = new MonitorArchivos('./');
  monitor.on('cambio', (info) => {
    console.log(\`Archivo \${info.archivo} fue \${info.tipo}\`);
  });`,

  path: `const path = require('path');
  
  // Unir rutas de manera segura
  const rutaCompleta = path.join(__dirname, 'carpeta', 'archivo.txt');
  console.log('Ruta completa:', rutaCompleta);
  
  // Obtener extensión de archivo
  const extension = path.extname('archivo.txt');
  console.log('Extensión:', extension);
  
  // Obtener nombre del archivo
  const nombreArchivo = path.basename('carpeta/archivo.txt');
  console.log('Nombre del archivo:', nombreArchivo);
  
  // Resolver ruta absoluta
  const rutaAbsoluta = path.resolve('carpeta', 'subcarpeta', 'archivo.txt');
  console.log('Ruta absoluta:', rutaAbsoluta);`,

  callbacks: `// Ejemplo de callback hell
  fs.readFile('archivo1.txt', 'utf8', (error1, datos1) => {
    if (error1) {
      console.error('Error leyendo archivo1:', error1);
      return;
    }
    fs.readFile('archivo2.txt', 'utf8', (error2, datos2) => {
      if (error2) {
        console.error('Error leyendo archivo2:', error2);
        return;
      }
      fs.writeFile('resultado.txt', datos1 + datos2, (error3) => {
        if (error3) {
          console.error('Error escribiendo resultado:', error3);
          return;
        }
        console.log('Archivos procesados exitosamente');
      });
    });
  });`,

  promises: `// Ejemplo con promesas
  const procesarArchivos = () => {
    let contenidoArchivo1;
    
    fs.promises.readFile('archivo1.txt', 'utf8')
      .then(datos1 => {
        contenidoArchivo1 = datos1;
        return fs.promises.readFile('archivo2.txt', 'utf8');
      })
      .then(datos2 => {
        return fs.promises.writeFile('resultado.txt', contenidoArchivo1 + datos2);
      })
      .then(() => {
        console.log('Archivos procesados exitosamente');
      })
      .catch(error => {
        console.error('Error procesando archivos:', error);
      });
  };`,

  asyncAwait: `// Ejemplo con async/await
  async function procesarArchivos() {
    try {
      const datos1 = await fs.promises.readFile('archivo1.txt', 'utf8');
      const datos2 = await fs.promises.readFile('archivo2.txt', 'utf8');
      await fs.promises.writeFile('resultado.txt', datos1 + datos2);
      console.log('Archivos procesados exitosamente');
    } catch (error) {
      console.error('Error procesando archivos:', error);
    }
  }`,

  errorHandling: `// Manejo de errores con try-catch
  async function manejoErrores() {
    try {
      const resultado = await operacionRiesgosa();
      console.log('Operación exitosa:', resultado);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error('Error de tipo:', error.message);
      } else if (error instanceof CustomError) {
        console.error('Error personalizado:', error.message);
      } else {
        console.error('Error desconocido:', error);
      }
    } finally {
      console.log('Limpieza de recursos');
    }
  }
  
  // Manejo de errores en eventos
  process.on('uncaughtException', (error) => {
    console.error('Error no capturado:', error);
    // Realizar limpieza
    process.exit(1);
  });
  
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Promesa rechazada no manejada:', reason);
  });`,

  projectStructure: `proyecto/
  ├── node_modules/
  ├── src/
  │   ├── config/
  │   │   └── database.js
  │   ├── controllers/
  │   │   └── usuarioController.js
  │   ├── models/
  │   │   └── Usuario.js
  │   ├── routes/
  │   │   └── api.js
  │   ├── middleware/
  │   │   └── auth.js
  │   ├── utils/
  │   │   └── logger.js
  │   └── app.js
  ├── tests/
  │   └── api.test.js
  ├── .env
  ├── .gitignore
  ├── package.json
  └── README.md`,

  environmentSetup: `// Cargar variables de entorno
  require('dotenv').config();
  
  // Configuración de la aplicación
  const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    environment: process.env.NODE_ENV || 'development',
    
    // Configuración específica por ambiente
    isDevelopment: function() {
      return this.environment === 'development';
    },
    
    isProduction: function() {
      return this.environment === 'production';
    }
  };
  
  module.exports = config;`,

  security: `// Importar módulos de seguridad
  const helmet = require('helmet');
  const rateLimit = require('express-rate-limit');
  const cors = require('cors');
  
  // Configurar middlewares de seguridad
  app.use(helmet()); // Protección de cabeceras HTTP
  app.use(cors({
    origin: process.env.ALLOWED_ORIGINS.split(','),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
  
  // Limitar peticiones por IP
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // límite de 100 peticiones por ventana
  });
  app.use('/api/', limiter);
  
  // Validación de entrada
  const { body, validationResult } = require('express-validator');
  
  app.post('/usuario', [
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Procesar petición...
  });
  
  // Sanitización de salida
  const sanitizeHtml = require('sanitize-html');
  app.get('/contenido', (req, res) => {
    const contenido = obtenerContenido();
    res.json({
      contenido: sanitizeHtml(contenido)
    });
  });`,
};

export default nodeExamples;
