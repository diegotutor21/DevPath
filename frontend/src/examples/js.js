const jsExamples = {
  // 1. Introducción a JavaScript
  basicJS: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Introducción a JavaScript</title>
  </head>
  <body>
      <h1>Introducción a JavaScript</h1>
      <p id="demo">Este texto cambiará cuando cargue la página</p>
      
      <script>
          // Mensaje en consola
          console.log("¡Bienvenido a JavaScript!");
          
          // Función que se ejecuta al cargar la página
          window.onload = function() {
              console.log("La página se ha cargado completamente");
              document.getElementById("demo").textContent = "¡JavaScript está funcionando!";
          };
      </script>
  </body>
  </html>`,

  // 2. Variables y Tipos de Datos
  variablesAndTypes: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Variables y Tipos de Datos</title>
      <style>
          .container {
              margin: 20px;
              padding: 20px;
              border: 1px solid #ccc;
          }
          .output {
              margin-top: 10px;
              padding: 10px;
              background-color: #f0f0f0;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Variables y Tipos de Datos</h2>
          <button onclick="saludarUsuario()">¡Salúdame!</button>
          <div id="output" class="output"></div>
  
          <script>
              // Variables y constantes
              const PI = 3.14159;
              let nombre = "Juan";
              let edad = 25;
              let esEstudiante = true;
              
              // Template literals
              let mensaje = \`Hola, me llamo \${nombre} y tengo \${edad} años\`;
              
              // Arrays y objetos
              let colores = ["rojo", "verde", "azul"];
              let persona = {
                  nombre: "Ana",
                  edad: 30,
                  profesion: "desarrolladora"
              };
  
              // Mostrar en el output
              document.getElementById("output").innerHTML = mensaje;
  
              // Función para saludar al usuario
              function saludarUsuario() {
                  let nombre = prompt("¿Cómo te llamas?");
                  if (nombre) {
                      alert(\`¡Hola \${nombre}! Bienvenido a nuestra página\`);
                  }
              }
          </script>
      </div>
  </body>
  </html>`,

  // 3. Operadores y Estructuras de Control
  controlStructures: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Estructuras de Control</title>
      <style>
          .container {
              margin: 20px;
              padding: 20px;
              text-align: center;
          }
          .counter {
              font-size: 24px;
              margin: 20px;
          }
          button {
              margin: 5px;
              padding: 5px 15px;
          }
          .tabla {
              margin-top: 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Contador Interactivo</h2>
          <div class="counter">
              <span id="contador">0</span>
          </div>
          <button onclick="decrementar()">-</button>
          <button onclick="incrementar()">+</button>
  
          <hr>
  
          <h2>Tabla de Multiplicar</h2>
          <input type="number" id="numero" placeholder="Ingresa un número">
          <button onclick="mostrarTabla()">Calcular</button>
          <div id="tablaMultiplicar" class="tabla"></div>
  
          <script>
              let count = 0;
              
              function incrementar() {
                  count++;
                  actualizarContador();
              }
              
              function decrementar() {
                  count--;
                  actualizarContador();
              }
              
              function actualizarContador() {
                  const contadorElement = document.getElementById("contador");
                  contadorElement.textContent = count;
                  
                  // Ejemplo de condicionales
                  if (count > 0) {
                      contadorElement.style.color = "green";
                  } else if (count < 0) {
                      contadorElement.style.color = "red";
                  } else {
                      contadorElement.style.color = "black";
                  }
              }
              
              // Ejemplo de bucle
              function mostrarTabla() {
                  let numero = document.getElementById("numero").value;
                  let resultado = "";
                  
                  for (let i = 1; i <= 10; i++) {
                      resultado += \`\${numero} x \${i} = \${numero * i}<br>\`;
                  }
                  
                  document.getElementById("tablaMultiplicar").innerHTML = resultado;
              }
          </script>
      </div>
  </body>
  </html>`,

  // 4. Funciones y Eventos
  functionsAndEvents: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Funciones y Eventos</title>
      <style>
          .container {
              margin: 20px;
              padding: 20px;
              text-align: center;
          }
          .color-box {
              width: 200px;
              height: 200px;
              margin: 20px auto;
              border: 1px solid #ccc;
              transition: background-color 0.3s;
          }
          button {
              margin: 5px;
              padding: 10px 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Cambio de Colores</h2>
          <div id="colorBox" class="color-box"></div>
          <button id="colorBtn">Cambiar Color</button>
          <button onclick="reiniciarColor()">Reiniciar</button>
          <p>Presiona Enter para ver un mensaje</p>
  
          <script>
              // Función declarada
              function cambiarColor() {
                  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                  document.getElementById('colorBox').style.backgroundColor = randomColor;
              }
              
              // Función flecha
              const reiniciarColor = () => {
                  document.getElementById('colorBox').style.backgroundColor = "white";
              };
              
              // Evento con parámetros
              const manejarTecla = (event) => {
                  if (event.key === "Enter") {
                      alert("¡Presionaste Enter!");
                  }
              };
  
              // Eventos múltiples
              document.addEventListener("DOMContentLoaded", () => {
                  const boton = document.getElementById("colorBtn");
                  boton.addEventListener("click", cambiarColor);
                  boton.addEventListener("mouseover", () => boton.style.cursor = "pointer");
                  document.addEventListener("keydown", manejarTecla);
              });
          </script>
      </div>
  </body>
  </html>`,

  // 5. Manipulación del DOM
  domManipulation: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Manipulación del DOM</title>
      <style>
          .container {
              margin: 20px;
              padding: 20px;
          }
          .lista-tareas {
              margin-top: 20px;
          }
          .tarea-input {
              padding: 5px;
              margin-right: 10px;
          }
          li {
              margin: 10px 0;
              padding: 5px;
              background-color: #f0f0f0;
              display: flex;
              justify-content: space-between;
              align-items: center;
          }
          button {
              margin-left: 10px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Lista de Tareas</h2>
          <div>
              <input type="text" id="nuevaTarea" class="tarea-input" placeholder="Nueva tarea">
              <button onclick="agregarTarea()">Agregar</button>
          </div>
          <ul id="listaTareas" class="lista-tareas"></ul>
  
          <script>
              function agregarTarea() {
                  const input = document.getElementById("nuevaTarea");
                  const lista = document.getElementById("listaTareas");
                  
                  if (input.value.trim() !== "") {
                      // Crear elementos
                      const li = document.createElement("li");
                      const texto = document.createTextNode(input.value);
                      const botonEliminar = document.createElement("button");
                      
                      // Configurar elementos
                      botonEliminar.textContent = "Eliminar";
                      botonEliminar.onclick = function() {
                          li.remove();
                      };
                      
                      // Ensamblar y agregar a la lista
                      li.appendChild(texto);
                      li.appendChild(botonEliminar);
                      lista.appendChild(li);
                      
                      // Limpiar input
                      input.value = "";
                  }
              }
          </script>
      </div>
  </body>
  </html>`,

  // 6. Arrays y Objetos
  arraysAndObjects: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Arrays y Objetos</title>
      <style>
          .container {
              margin: 20px;
              padding: 20px;
          }
          .filtros {
              margin: 20px 0;
          }
          .producto {
              padding: 10px;
              margin: 5px 0;
              background-color: #f0f0f0;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Filtrado de Productos</h2>
          <div class="filtros">
              <label>Precio máximo: </label>
              <input type="number" id="precioMaximo" value="1000">
              <button onclick="filtrarPorPrecio(document.getElementById('precioMaximo').value)">
                  Filtrar
              </button>
          </div>
          <div id="listaProductos"></div>
  
          <script>
              // Lista de productos
              const productos = [
                  { id: 1, nombre: "Laptop", precio: 999.99 },
                  { id: 2, nombre: "Smartphone", precio: 499.99 },
                  { id: 3, nombre: "Tablet", precio: 299.99 },
                  { id: 4, nombre: "Auriculares", precio: 99.99 }
              ];
              
              // Filtrar productos por precio
              function filtrarPorPrecio(precioMaximo) {
                  const productosFiltrados = productos.filter(producto => 
                      producto.precio <= precioMaximo
                  );
                  
                  const listaProductos = document.getElementById("listaProductos");
                  listaProductos.innerHTML = "";
                  
                  productosFiltrados.forEach(producto => {
                      const div = document.createElement("div");
                      div.className = "producto";
                      div.textContent = \`\${producto.nombre} - $\${producto.precio}\`;
                      listaProductos.appendChild(div);
                  });
              }
              
              // Cargar todos los productos al inicio
              filtrarPorPrecio(1000);
          </script>
      </div>
  </body>
  </html>`,

  // 7. Fetch API y Promesas
  asyncOperations: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Operaciones Asíncronas</title>
      <style>
          .container {
              margin: 20px;
              padding: 20px;
          }
          .user-card {
              padding: 10px;
              margin: 10px 0;
              background-color: #f0f0f0;
              border-radius: 5px;
          }
          .loading {
              display: none;
              color: #666;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Lista de Usuarios</h2>
          <button onclick="obtenerUsuarios()">Cargar Usuarios</button>
          <div id="loading" class="loading">Cargando...</div>
          <div id="listaUsuarios"></div>
  
          <script>
              // Obtener datos de una API
              async function obtenerUsuarios() {
                  const loading = document.getElementById('loading');
                  const listaUsuarios = document.getElementById("listaUsuarios");
                  
                  try {
                      loading.style.display = 'block';
                      const response = await fetch('https://jsonplaceholder.typicode.com/users');
                      const usuarios = await response.json();
                      
                      listaUsuarios.innerHTML = "";
                      
                      usuarios.forEach(usuario => {
                          const div = document.createElement("div");
                          div.className = "user-card";
                          div.innerHTML = \`
                              <h3>\${usuario.name}</h3>
                              <p>Email: \${usuario.email}</p>
                              <p>Ciudad: \${usuario.address.city}</p>
                          \`;
                          listaUsuarios.appendChild(div);
                      });
                  } catch (error) {
                      console.error("Error al obtener usuarios:", error);
                      listaUsuarios.innerHTML = "Hubo un error al cargar los usuarios";
                  } finally {
                      loading.style.display = 'none';
                  }
              }
          </script>
      </div>
  </body>
  </html>`,

  // Buenas Prácticas
  bestPractices: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Buenas Prácticas JavaScript</title>
      <style>
          .container {
              margin: 20px;
              padding: 20px;
          }
          .ejemplo {
              margin: 20px 0;
              padding: 15px;
              background-color: #f0f0f0;
              border-radius: 5px;
          }
          .result {
              margin-top: 10px;
              padding: 10px;
              background-color: #e0e0e0;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Buenas Prácticas en JavaScript</h2>
  
          <div class="ejemplo">
              <h3>Comparación Estricta vs No Estricta</h3>
              <div id="comparaciones" class="result"></div>
          </div>
  
          <div class="ejemplo">
              <h3>Calculadora de Impuestos</h3>
              <input type="number" id="monto" placeholder="Monto">
              <input type="number" id="porcentaje" placeholder="Porcentaje">
              <button onclick="calcularImpuestos()">Calcular</button>
              <div id="impuestos" class="result"></div>
          </div>
  
          <div class="ejemplo">
              <h3>Validación de Formulario</h3>
              <input type="text" id="nombre" placeholder="Nombre">
              <input type="email" id="email" placeholder="Email">
              <button onclick="validarFormulario()">Validar</button>          
              <div id="validacion" class="result"></div>
          </div>
      </div>
  
      <script>
          // Comparación Estricta vs No Estricta
          function comparar(a, b) {
              if (a === b) {
                  return "Son iguales";
              } else {
                  return "No son iguales";
              } 
          }
  
          // Calculadora de Impuestos
          function calcularImpuestos() {
              const monto = parseFloat(document.getElementById("monto").value);
              const porcentaje = parseFloat(document.getElementById("porcentaje").value);
              const impuestos = monto * (porcentaje / 100);
              document.getElementById("impuestos").textContent = "Impuestos: $" + impuestos.toFixed(2);
          }
  
          // Validación de Formulario
          function validarFormulario() {
              const nombre = document.getElementById("nombre").value;
              const email = document.getElementById("email").value;
              const validacion = "Nombre: " + nombre + " - Email: " + email;
              document.getElementById("validacion").textContent = validacion;
          }
      </script>
  </body>
  </html>`,
};

export default jsExamples;
