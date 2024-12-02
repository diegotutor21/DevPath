// example.js
const examples = {
  Estructura: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento HTML Básico</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <p>Este es un documento HTML básico.</p>
  </body>
  </html>`,
  Form: `<form action="/submit" method="post">
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="name" />
    <button type="submit">Enviar</button>
  </form>`,
  Input: `<input type="text" placeholder="Escribe algo aquí..." />`,
  Div: `<div>
    <h2>Este es un contenedor DIV</h2>
    <p>Útil para agrupar elementos y aplicar estilos.</p>
  </div>`,
  Tabla: `<table border="1">
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
    </tr>
    <tr>
      <td>Juan</td>
      <td>25</td>
    </tr>
  </table>`,
  Lista: `<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
  </ul>`,
  Imagen: `<img src="https://via.placeholder.com/150" alt="Imagen de Ejemplo" />`,
  Link: `<a href="https://example.com" target="_blank">Visita Example.com</a>`,
};

export { examples };  // Exportación por defecto
