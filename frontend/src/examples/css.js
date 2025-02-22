// examples/css.js

const cssExamples = {
  basicCSS: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Ejemplos CSS Básico</title>
      <style>
          /* Selector de elemento */
          body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 20px;
          }
  
          /* Selector de clase */
          .container {
              max-width: 800px;
              margin: 0 auto;
              padding: 15px;
              background-color: #f5f5f5;
          }
  
          /* Selector de ID */
          #header {
              background-color: #333;
              color: white;
              padding: 1rem;
              text-align: center;
          }
  
          /* Selector de atributo */
          [type="submit"] {
              background-color: #4CAF50;
              color: white;
              padding: 10px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div id="header">
              <h1>Ejemplos de Selectores CSS</h1>
          </div>
          <p>Este es un párrafo con estilo aplicado al elemento body.</p>
          <div class="container">
              <p>Este es un contenedor con clase.</p>
          </div>
          <button type="submit">Botón con selector de atributo</button>
      </div>
  </body>
  </html>`,

  essentialProperties: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Propiedades Esenciales CSS</title>
      <style>
          .container {
              padding: 20px;
              text-align: center;
          }
  
          .custom-button {
              /* Colores y fondos */
              background-color: #4CAF50;
              color: white;
              opacity: 0.9;
  
              /* Texto */
              font-family: 'Arial', sans-serif;
              font-size: 16px;
              text-align: center;
              text-decoration: none;
  
              /* Cajas y espaciado */
              width: 200px;
              height: 50px;
              padding: 10px 20px;
              margin: 10px;
              border: none;
              border-radius: 25px;
              
              /* Sombras */
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
              
              /* Transición suave */
              transition: all 0.3s ease;
              cursor: pointer;
          }
  
          .custom-button:hover {
              opacity: 1;
              transform: translateY(-2px);
              box-shadow: 0 6px 12px rgba(0,0,0,0.2);
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Botón con Propiedades Esenciales</h2>
          <button class="custom-button">Hover sobre mí</button>
      </div>
  </body>
  </html>`,

  boxModel: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Modelo de Caja CSS</title>
      <style>
          .container {
              padding: 20px;
              text-align: center;
          }
  
          .box-model-example {
              /* Contenido */
              width: 200px;
              height: 100px;
              
              /* Padding (espaciado interno) */
              padding: 20px;
              
              /* Border (borde) */
              border: 5px solid #333;
              
              /* Margin (espaciado externo) */
              margin: 30px auto;
              
              /* Estilos adicionales para visualización */
              background-color: #f0f0f0;
              color: #333;
              text-align: center;
              
              /* Mostrar el tamaño total incluyendo padding y border */
              box-sizing: border-box;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Ejemplo del Modelo de Caja</h2>
          <div class="box-model-example">
              <p>Este es el contenido</p>
              <p>Padding: 20px</p>
              <p>Border: 5px</p>
              <p>Margin: 30px</p>
          </div>
      </div>
  </body>
  </html>`,

  layoutExamples: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Flexbox y Grid CSS</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 20px;
          }
  
          h2 {
              color: #333;
              text-align: center;
          }
  
          /* Ejemplo de Flexbox */
          .flex-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-wrap: wrap;
              gap: 20px;
              padding: 20px;
              background-color: #f5f5f5;
              margin-bottom: 40px;
          }
  
          .flex-item {
              flex: 1;
              min-width: 200px;
              padding: 20px;
              background-color: #e0e0e0;
              text-align: center;
              border-radius: 4px;
          }
  
          /* Ejemplo de Grid */
          .grid-container {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              gap: 20px;
              padding: 20px;
              background-color: #f5f5f5;
          }
  
          .grid-item {
              padding: 20px;
              background-color: #e0e0e0;
              text-align: center;
              border-radius: 4px;
          }
      </style>
  </head>
  <body>
      <h2>Ejemplo de Flexbox</h2>
      <div class="flex-container">
          <div class="flex-item">Elemento 1</div>
          <div class="flex-item">Elemento 2</div>
          <div class="flex-item">Elemento 3</div>
      </div>
  
      <h2>Ejemplo de Grid</h2>
      <div class="grid-container">
          <div class="grid-item">Elemento 1</div>
          <div class="grid-item">Elemento 2</div>
          <div class="grid-item">Elemento 3</div>
          <div class="grid-item">Elemento 4</div>
      </div>
  </body>
  </html>`,

  animations: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Animaciones CSS</title>
      <style>
          .container {
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 50vh;
              gap: 50px;
          }
  
          /* Ejemplo de Transiciones */
          .animated-box {
              width: 100px;
              height: 100px;
              background-color: #4CAF50;
              transition: all 0.3s ease;
              cursor: pointer;
          }
  
          .animated-box:hover {
              background-color: #45a049;
              transform: scale(1.1) rotate(5deg);
          }
  
          /* Animación personalizada */
          @keyframes bounce {
              0% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
              100% { transform: translateY(0); }
          }
  
          .bouncing-element {
              width: 100px;
              height: 100px;
              background-color: #2196F3;
              animation: bounce 1s infinite ease-in-out;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div>
              <h3>Hover para ver la transición</h3>
              <div class="animated-box"></div>
          </div>
          <div>
              <h3>Animación continua</h3>
              <div class="bouncing-element"></div>
          </div>
      </div>
  </body>
  </html>`,
};

export default cssExamples;
