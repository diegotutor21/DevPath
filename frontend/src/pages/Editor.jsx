import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import PropTypes from "prop-types";

const Editor = ({ initialCode }) => {
  const defaultHTML = `<!DOCTYPE html>
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
  <script>
    // Aquí va el código de la página
  </script>
</body>
</html>`;

  const [code, setCode] = useState(initialCode || defaultHTML);
  const [output, setOutput] = useState(code);
  const [isEditing, setIsEditing] = useState(false);

  const runCode = () => {
    setOutput(code);
  };

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
      setOutput(initialCode);
    }
  }, [initialCode]);

  useEffect(() => {
    Prism.highlightAll();
  }, [isEditing, code]);

  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Editor</h3>
            <div>
              <button
                className="btn btn-secondary me-2"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Vista Previa" : "Editar"}
              </button>
              {isEditing && (
                <button className="btn btn-primary" onClick={runCode}>
                  Ejecutar
                </button>
              )}
            </div>
          </div>
          {isEditing ? (
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
          ) : (
            <pre
              className="p-3 bg-light border"
              style={{ height: "75vh", overflow: "auto" }}
            >
              <code className="language-html">{code}</code>
            </pre>
          )}
        </div>

        <div className="col-md-6">
          <h3>Resultado</h3>
          <div
            className="output-container border bg-light"
            style={{ height: "75vh" }}
          >
            <iframe
              className="w-100 h-100"
              sandbox="allow-scripts allow-modals allow-forms"
              title="Resultado"
              srcDoc={output}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

Editor.propTypes = {
  initialCode: PropTypes.string,
};

export default Editor;