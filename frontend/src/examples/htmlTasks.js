// htmlTasks.js - Contiene ejemplos y soluciones para tareas prácticas de HTML

const htmlTasks = {
    // Tarea 1: Estructura básica
    basicStructure: {
      initialCode: "<!-- Escribe tu código aquí -->",
      solution: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mi primera página</title>
  </head>
  <body>
      <h1>¡Hola Mundo!</h1>
      <p>Esta es mi primera página web.</p>
  </body>
  </html>`
    },
    
    // Tarea 2: Encabezados y párrafos
    headingsAndParagraphs: {
      initialCode: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Encabezados y párrafos</title>
  </head>
  <body>
      <!-- Escribe tu código aquí -->
  </body>
  </html>`,
      solution: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Encabezados y párrafos</title>
  </head>
  <body>
      <h1>Mi Blog de Programación</h1>
      
      <h2>HTML Básico</h2>
      <p>HTML es el lenguaje estándar para crear páginas web. Define la estructura básica de una página y su contenido.</p>
      
      <h2>CSS Fundamental</h2>
      <p>CSS es el lenguaje que usamos para dar estilo a un documento HTML. CSS describe cómo los elementos HTML deben ser mostrados.</p>
  </body>
  </html>`
    },
    
    // Tarea 3: Listas y enlaces
    listsAndLinks: {
      initialCode: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Listas y enlaces</title>
  </head>
  <body>
      <h1>Mis sitios web favoritos</h1>
      <!-- Escribe tu código aquí -->
  </body>
  </html>`,
      solution: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Listas y enlaces</title>
  </head>
  <body>
      <h1>Mis sitios web favoritos</h1>
      <ul>
          <li><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></li>
          <li><a href="https://www.w3schools.com" target="_blank">W3Schools</a></li>
          <li><a href="https://css-tricks.com" target="_blank">CSS-Tricks</a></li>
      </ul>
  </body>
  </html>`
    },
    
    // Tarea 4: Imágenes y atributos
    imagesAndAttributes: {
      initialCode: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Imágenes en HTML</title>
  </head>
  <body>
      <h1>Mi imagen favorita</h1>
      <!-- Escribe tu código aquí -->
  </body>
  </html>`,
      solution: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Imágenes en HTML</title>
  </head>
  <body>
      <h1>Mi imagen favorita</h1>
      <img src="/images/html5-logo.png" alt="Logo de HTML5" width="200" height="200">
      <p>Esta es una imagen del logo de HTML5.</p>
  </body>
  </html>`
    },
    
    // Tarea 5: HTML Semántico
    semanticHtml: {
      initialCode: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>HTML Semántico</title>
  </head>
  <body>
      <!-- Escribe tu código aquí -->
  </body>
  </html>`,
      solution: `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>HTML Semántico</title>
  </head>
  <body>
      <header>
          <h1>Mi Sitio Web</h1>
      </header>
      
      <nav>
          <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#acerca">Acerca de</a></li>
              <li><a href="#contacto">Contacto</a></li>
          </ul>
      </nav>
      
      <main>
          <section id="inicio">
              <h2>Bienvenido a mi sitio</h2>
              <p>Esta es la página principal con información importante.</p>
          </section>
          
          <section id="acerca">
              <h2>Acerca de nosotros</h2>
              <p>Somos una empresa dedicada a la enseñanza de programación web.</p>
          </section>
      </main>
      
      <footer>
          <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
  </body>
  </html>`
    }
  };
  
  export default htmlTasks;