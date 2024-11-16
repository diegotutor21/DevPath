import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CodeEditor = () => {
  // Plantilla base de HTML inicial
  const initialHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* Puedes agregar tus estilos CSS aquí */
  
  </style>
</head>
<body>
  
</body>
</html>`;

  const [code, setCode] = useState(initialHTML);
  const [output, setOutput] = useState(initialHTML);

  // Función para ejecutar el código ingresado
  const runCode = () => {
    setOutput(code); // Actualiza el estado que controla el contenido del iframe
  };

  return (
    <div className="container-fluid my-4">
      <h1 className="text-center mb-4">Editor de Código Simple en React</h1>

      <div className="row">
        {/* Área para el editor de código */}
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2>Editor</h2>
            <button
              className="btn"
              style={{ backgroundColor: "#0C68EE", color: "#ffffff" }}
              onClick={runCode}
            >
              Ejecutar
            </button>
          </div>
          <textarea
            className="form-control"
            style={{
              height: "80vh",
              fontFamily: "monospace",
              fontSize: "14px",
              whiteSpace: "pre",
            }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
        </div>

        {/* Área de visualización del resultado */}
        <div className="col-md-6">
          <h2>Resultado</h2>
          <div className="output-container border" style={{ height: "80vh" }}>
            <iframe
              className="w-100 h-100"
              sandbox="allow-scripts allow-modals" // Ajuste del sandbox
              title="Resultado"
              srcDoc={output} // Usando srcDoc para el contenido del iframe
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
