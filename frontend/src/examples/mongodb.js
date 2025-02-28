const mongoExamples = {
  installation: {
    local: `# Instalación en Windows
  1. Descargar MongoDB Community Server de mongodb.com
  2. Ejecutar el instalador
  3. Agregar MongoDB a las variables de entorno
  
  # Instalación en MacOS
  brew tap mongodb/brew
  brew install mongodb-community
  
  # Instalación en Ubuntu
  sudo apt update
  sudo apt install mongodb
  
  # Verificar la instalación
  mongod --version
  
  # Iniciar el servidor MongoDB
  sudo service mongodb start    # Linux
  brew services start mongodb  # MacOS`,

    atlas: `// Conexión a MongoDB Atlas
  const mongoose = require('mongoose');
  
  // URL de conexión de Atlas (reemplazar con tus credenciales)
  const uri = 'mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/miapp';
  
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error de conexión:', err));`,
  },

  crud: {
    create: `// Insertar un documento
  db.usuarios.insertOne({
    nombre: "Juan",
    email: "juan@ejemplo.com",
    edad: 25
  });
  
  // Insertar múltiples documentos
  db.usuarios.insertMany([
    {
      nombre: "María",
      email: "maria@ejemplo.com",
      edad: 30
    },
    {
      nombre: "Pedro",
      email: "pedro@ejemplo.com",
      edad: 28
    }
  ]);
  
  // Con Mongoose
  const usuario = new Usuario({
    nombre: "Juan",
    email: "juan@ejemplo.com",
    edad: 25
  });
  
  await usuario.save();`,

    read: `// Encontrar todos los documentos
  db.usuarios.find();
  
  // Encontrar con filtros
  db.usuarios.find({ edad: { $gt: 25 } });
  
  // Encontrar uno específico
  db.usuarios.findOne({ email: "juan@ejemplo.com" });
  
  // Con Mongoose
  // Encontrar todos
  const usuarios = await Usuario.find();
  
  // Encontrar con filtros y seleccionar campos
  const usuario = await Usuario.findOne({ email: "juan@ejemplo.com" })
    .select('nombre email');
  
  // Búsqueda paginada
  const usuarios = await Usuario.find()
    .skip(10)  // Saltar los primeros 10
    .limit(5); // Traer 5 documentos`,

    update: `// Actualizar un documento
  db.usuarios.updateOne(
    { email: "juan@ejemplo.com" },
    { $set: { edad: 26 } }
  );
  
  // Actualizar múltiples documentos
  db.usuarios.updateMany(
    { edad: { $lt: 25 } },
    { $inc: { edad: 1 } }
  );
  
  // Con Mongoose
  // Actualizar y obtener el documento actualizado
  const usuario = await Usuario.findOneAndUpdate(
    { email: "juan@ejemplo.com" },
    { $set: { edad: 26 } },
    { new: true } // Retorna el documento actualizado
  );`,

    delete: `// Eliminar un documento
  db.usuarios.deleteOne({ email: "juan@ejemplo.com" });
  
  // Eliminar múltiples documentos
  db.usuarios.deleteMany({ edad: { $lt: 25 } });
  
  // Con Mongoose
  // Eliminar y obtener el documento eliminado
  const usuario = await Usuario.findOneAndDelete({ email: "juan@ejemplo.com" });
  
  // Eliminar múltiples
  const resultado = await Usuario.deleteMany({ edad: { $lt: 25 } });`,
  },

  mongoose: {
    schema: `const mongoose = require('mongoose');
  
  // Definición del esquema
  const usuarioSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function(v) {
          return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v);
        },
        message: props => \`\${props.value} no es un email válido\`
      }
    },
    edad: {
      type: Number,
      min: [18, 'Edad mínima 18 años'],
      max: [100, 'Edad máxima 100 años']
    },
    activo: {
      type: Boolean,
      default: true
    },
    roles: [{
      type: String,
      enum: ['usuario', 'admin', 'editor']
    }],
    fechaCreacion: {
      type: Date,
      default: Date.now
    }
  });
  
  // Middleware (hooks)
  usuarioSchema.pre('save', function(next) {
    console.log('Antes de guardar:', this.nombre);
    next();
  });
  
  // Métodos personalizados
  usuarioSchema.methods.nombreCompleto = function() {
    return \`\${this.nombre} \${this.apellido}\`;
  };
  
  // Métodos estáticos
  usuarioSchema.statics.buscarPorEmail = function(email) {
    return this.findOne({ email });
  };
  
  const Usuario = mongoose.model('Usuario', usuarioSchema);`,

    middleware: `// Ejemplo de middleware pre y post
  usuarioSchema.pre('save', async function(next) {
    // Encriptar contraseña antes de guardar
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });
  
  usuarioSchema.post('save', function(doc, next) {
    console.log('Usuario guardado:', doc.nombre);
    next();
  });
  
  // Middleware para queries
  usuarioSchema.pre('find', function() {
    this.where({ activo: true });
  });`,
  },

  advanced: {
    filters: `// Operadores de comparación
  db.usuarios.find({
    edad: { $gt: 25 },    // mayor que
    edad: { $lt: 30 },    // menor que
    edad: { $in: [25, 30, 35] }  // en el array
  });
  
  // Operadores lógicos
  db.usuarios.find({
    $or: [
      { edad: { $lt: 25 } },
      { email: /gmail.com$/ }
    ]
  });
  
  // Con Mongoose y expresiones regulares
  const usuarios = await Usuario.find({
    $and: [
      { edad: { $gte: 18 } },
      { 
        $or: [
          { email: /gmail.com$/ },
          { roles: 'admin' }
        ]
      }
    ]
  }).sort({ edad: -1 });`,

    aggregation: `// Pipeline de agregación
  db.ventas.aggregate([
    // Etapa 1: Filtrar documentos
    { 
      $match: { 
        fecha: { 
          $gte: new Date('2024-01-01') 
        } 
      }
    },
    
    // Etapa 2: Agrupar y calcular
    {
      $group: {
        _id: "$categoria",
        totalVentas: { $sum: "$monto" },
        promedioVenta: { $avg: "$monto" },
        cantidadVentas: { $sum: 1 }
      }
    },
    
    // Etapa 3: Ordenar resultados
    {
      $sort: { totalVentas: -1 }
    }
  ]);
  
  // Con Mongoose y $lookup
  const resumen = await Venta.aggregate([
    {
      $lookup: {
        from: 'productos',
        localField: 'productoId',
        foreignField: '_id',
        as: 'producto'
      }
    },
    {
      $unwind: '$producto'
    },
    {
      $group: {
        _id: '$producto.categoria',
        totalVentas: { $sum: '$monto' },
        promedioVenta: { $avg: '$monto' },
        cantidadVentas: { $sum: 1 }
      }
    },
    {
      $sort: { totalVentas: -1 }
    }
  ]);`,

    population: `// Definir esquemas con referencias
  const autorSchema = new mongoose.Schema({
    nombre: String,
    email: String
  });
  
  const libroSchema = new mongoose.Schema({
    titulo: String,
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Autor'
    },
    categorias: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categoria'
    }]
  });
  
  // Población básica
  const libro = await Libro.findOne({ titulo: 'Mi Libro' })
    .populate('autor');
  
  // Población múltiple
  const libro = await Libro.findOne({ titulo: 'Mi Libro' })
    .populate('autor')
    .populate('categorias');
  
  // Población con filtros
  const libro = await Libro.findOne({ titulo: 'Mi Libro' })
    .populate({
      path: 'autor',
      match: { activo: true },
      select: 'nombre email -_id'
    });`,
  },

  bestPractices: `// 1. Índices para mejorar el rendimiento
  usuarioSchema.index({ email: 1 }, { unique: true });
  usuarioSchema.index({ edad: 1, nombre: 1 });
  
  // 2. Manejo de errores y validación
  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
  } catch (error) {
    console.error('Error:', error);
    // Manejo apropiado del error
  }
  
  // 3. Transacciones para operaciones atómicas
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const usuario = await Usuario.create([{ nombre: 'Juan' }], { session });
    const cuenta = await Cuenta.create([{ usuario: usuario[0]._id }], { session });
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
  
  // 4. Optimización de consultas
  const usuarios = await Usuario.find({ edad: { $gt: 25 } })
    .select('nombre email')    // Proyección
    .lean()                    // Retorna objetos simples
    .hint({ edad: 1 })        // Forzar uso de índice
    .explain();               // Analizar la consulta
  
  // 5. Paginación eficiente
  const pagina = 1;
  const porPagina = 10;
  const usuarios = await Usuario.find()
    .skip((pagina - 1) * porPagina)
    .limit(porPagina)
    .select('nombre email');`,
};

export default mongoExamples;
