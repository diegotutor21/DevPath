// examples/html.js

const htmlExamples = {
  structure: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prueba tu codificación</title>
</head>
<style>
  /* Aquí va el estilo de la página */
</style>
<body>
  <!-- Aquí va el contenido de la página -->
  Esa es su estructura básica
  <script>
    // Aquí va el código de la página
  </script>
</body>
</html>`,

  essentialTags: `<!-- Ejemplos de etiquetas esenciales HTML -->
<div class="container">
    <!-- Encabezados -->
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
    
    <!-- Párrafos y texto -->
    <p>Este es un párrafo con <span class="destacado">texto destacado</span>.</p>
    
    <!-- Enlaces e imágenes -->
    <a href="https://ejemplo.com">Visita nuestra página</a>
    <img src="imagen.jpg" alt="Descripción de la imagen">
    
    <!-- Listas -->
    <ul>
        <li>Elemento de lista 1</li>
        <li>Elemento de lista 2</li>
    </ul>
</div>`,

  attributes: `<!-- Ejemplos de atributos HTML -->
<div id="contenedor-principal" class="container">
    <!-- Ejemplo de imagen con atributos -->
    <img src="imagen.jpg" 
         alt="Descripción de la imagen"
         width="300"
         height="200">
    
    <!-- Ejemplo de enlace con atributos -->
    <a href="https://ejemplo.com"
       target="_blank"
       rel="noopener noreferrer">
        Visitar sitio
    </a>
    
    <!-- Ejemplo de input con atributos -->
    <input type="text"
           name="username"
           placeholder="Ingrese su nombre"
           required>
</div>`,

  semantic: `<!-- Ejemplo de HTML Semántico -->
<header>
    <nav>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h1>Título del Artículo</h1>
        <section>
            <h2>Primera Sección</h2>
            <p>Contenido de la primera sección.</p>
        </section>
        
        <section>
            <h2>Segunda Sección</h2>
            <p>Contenido de la segunda sección.</p>
        </section>
    </article>
    
    <aside>
        <h3>Contenido Relacionado</h3>
        <ul>
            <li>Artículo relacionado 1</li>
            <li>Artículo relacionado 2</li>
        </ul>
    </aside>
</main>

<footer>
    <p>© 2025 Mi Sitio Web</p>
</footer>`,
};

export default htmlExamples;
