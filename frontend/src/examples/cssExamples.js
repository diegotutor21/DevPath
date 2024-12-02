export const cssExamples = {
    "Sintaxis Básica": `
  /* CSS */
  body {
    font-family: Arial, sans-serif;
    color: black;
  }
  
  /* HTML */
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sintaxis Básica</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: black;
      }
    </style>
  </head>
  <body>
    <h1>Hola Mundo</h1>
    <p>Este es un ejemplo básico de CSS aplicado al HTML.</p>
  </body>
  </html>`,

    "Colores y Fondos": `
  /* CSS */
  body {
    background-color: lightblue;
    color: darkblue;
  }
  
  /* HTML */
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colores y Fondos</title>
    <style>
      body {
        background-color: lightblue;
        color: darkblue;
      }
    </style>
  </head>
  <body>
    <h1>Colores en CSS</h1>
    <p>Este es un ejemplo de cómo aplicar colores y fondos con CSS.</p>
  </body>
  </html>`,

    "Tipografía": `
  /* CSS */
  h1 {
    font-size: 2.5em;
    font-family: 'Georgia', serif;
  }
  
  /* HTML */
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tipografía</title>
    <style>
      h1 {
        font-size: 2.5em;
        font-family: 'Georgia', serif;
      }
    </style>
  </head>
  <body>
    <h1>Tipografía Personalizada</h1>
    <p>Este texto muestra el uso de fuentes, tamaños y estilos en CSS.</p>
  </body>
  </html>`,

    "Espaciado": `
  /* CSS */
  div {
    margin: 20px;
    padding: 10px;
    border: 1px solid black;
  }
  
  /* HTML */
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Espaciado</title>
    <style>
      div {
        margin: 20px;
        padding: 10px;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div>Este es un ejemplo de espaciado con márgenes y relleno.</div>
  </body>
  </html>`,

    "Modelo de Caja": `
  /* CSS */
  div {
    width: 200px;
    height: 100px;
    border: 2px solid black;
    padding: 10px;
    margin: 15px;
  }
  
  /* HTML */
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modelo de Caja</title>
    <style>
      div {
        width: 200px;
        height: 100px;
        border: 2px solid black;
        padding: 10px;
        margin: 15px;
      }
    </style>
  </head>
  <body>
    <div>Ejemplo del modelo de caja en CSS.</div>
  </body>
  </html>`,

    "Estilo de Bordes": `
  /* CSS */
  div {
    border: 3px dotted red;
    border-radius: 10px;
  }
  
  /* HTML */
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estilo de Bordes</title>
    <style>
      div {
        border: 3px dotted red;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <div>Ejemplo de bordes personalizados con CSS.</div>
  </body>
  </html>`,

    "Flexbox": `
  /* CSS */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  /* HTML */
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox</title>
    <style>
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Ejemplo de Flexbox.</p>
    </div>
  </body>
  </html>`,

    "CSS Grid": `
  /* CSS */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  
  /* HTML */
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid</title>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }
      .grid-item {
        background-color: lightgray;
        border: 1px solid black;
        padding: 10px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
    </div>
  </body>
  </html>`,

    "Pseudo-clases y Pseudo-elementos": `
  /* CSS */
  a:hover {
    color: red;
  }
  p::first-line {
    font-weight: bold;
  }
  
  /* HTML */
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pseudo-clases</title>
    <style>
      a:hover {
        color: red;
      }
      p::first-line {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <p>Pasa el ratón sobre este enlace para ver el efecto.</p>
    <a href="#">Enlace de prueba</a>
  </body>
  </html>`
};
