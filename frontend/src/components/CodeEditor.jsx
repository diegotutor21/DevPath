import { useState, useEffect } from "react";
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
  <!-- Escribe tu código HTML aquí -->
</body>
</html>`;

  // Obtén el código del ejemplo de localStorage o usa el inicial
  const [code, setCode] = useState(
    localStorage.getItem("exampleCode") || initialHTML
  );
  const [output, setOutput] = useState(code);

  // Función para ejecutar el código ingresado
  const runCode = () => {
    setOutput(code); // Actualiza el estado que controla el contenido del iframe
  };

  // Limpia el localStorage después de cargar el código
  useEffect(() => {
    const exampleCode = localStorage.getItem("exampleCode");
    if (exampleCode) {
      setCode(exampleCode);
    }
    localStorage.removeItem("exampleCode");
  }, []);

  return (
    <div className="container-fluid my-4">
      <h1 className="text-center mb-4 text-primary">
        Prueba de código HTML / CSS
      </h1>

      <div className="row">
        {/* Área para el editor de código */}
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Editor</h3>
            <button className="btn btn-primary" onClick={runCode}>
              Ejecutar
            </button>
          </div>
          <textarea
            className="form-control"
            style={{
              height: "75vh",
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
          <h3>Resultado</h3>
          <div
            className="output-container border bg-light"
            style={{ height: "75vh" }}
          >
            <iframe
              className="w-100 h-100"
              sandbox="allow-scripts allow-modals"
              title="Resultado"
              srcDoc={output}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
