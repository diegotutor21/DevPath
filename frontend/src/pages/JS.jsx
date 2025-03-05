import { useState } from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import CodeEditor from "../pages/Editor";
import jsExamples from "../examples/js";

const JavaScriptBasics = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [currentExample, setCurrentExample] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const handleShowExample = (code, title) => {
    setCurrentExample(code);
    setCurrentTitle(title);
    setShowEditor(true);
  };

  return (
    <div className="javascript-basics-page">
      {/* Hero Section */}
      <div style={{ backgroundColor: "#f7df1e" }} className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">JavaScript</h1>
              <p className="lead">
                El lenguaje de programación que da vida a la web
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="/images/js.png"
                alt="JavaScript Logo"
                style={{ maxWidth: "200px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        {/* Introducción a JavaScript */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            ¿Qué es JavaScript?
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <p>
              <strong>JavaScript (JS)</strong> es el lenguaje de programación
              estándar utilizado para crear interactividad en páginas web. Es
              esencial para desarrollar aplicaciones web dinámicas y
              funcionales.
            </p>

            <h5 className="mt-4 font-bold">Características principales:</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Es un lenguaje de programación completo, orientado a objetos y
                basado en prototipos
              </li>
              <li>
                Se ejecuta en el navegador del cliente, permitiendo modificar el
                contenido en tiempo real
              </li>
              <li>
                Es interpretado (no necesita compilación) y de tipado dinámico
              </li>
              <li>
                Soporta programación funcional, orientada a objetos y basada en
                eventos
              </li>
            </ul>

            <h5 className="mt-4 font-bold">Para qué se utiliza:</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>Crear interactividad y responder a acciones del usuario</li>
              <li>
                Manipular el contenido y estructura de la página dinámicamente
              </li>
              <li>Realizar peticiones asíncronas a servidores (AJAX)</li>
              <li>Validar formularios y procesar datos</li>
              <li>
                Desarrollar aplicaciones web complejas, juegos y experiencias
                interactivas
              </li>
            </ul>

            <div className="bg-white p-3 rounded border border-gray-300 mt-4">
              <p className="font-semibold mb-2">Dato importante:</p>
              <p className="mb-0">
                JavaScript trabaja junto con HTML (para la estructura) y CSS
                (para el diseño visual) para crear experiencias web completas.
                Mientras HTML proporciona el contenido y CSS el aspecto,
                JavaScript añade comportamiento e interactividad, permitiendo
                crear aplicaciones web modernas y dinámicas. Hoy en día,
                JavaScript también se utiliza en desarrollo de servidores
                (Node.js), aplicaciones móviles y de escritorio.
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* Sección de Conceptos Básicos */}
      <Container className="py-5">
        {/* Introducción a JavaScript */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            Introducción a JavaScript
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <p>JavaScript se puede incluir en HTML de tres formas:</p>
            <ul>
              <li>
                <strong>Script interno:</strong> Directamente en el HTML usando
                la etiqueta &lt;script&gt;
              </li>
              <li>
                <strong>Script externo:</strong> En un archivo .js separado
              </li>
              <li>
                <strong>Script en línea:</strong> En atributos HTML como onclick
              </li>
            </ul>
            <p>Conceptos básicos incluyen:</p>
            <ul>
              <li>
                <code>console.log()</code> para depuración
              </li>
              <li>Comentarios de una línea // y múltiples líneas /* */</li>
              <li>Punto y coma al final de las declaraciones (opcional)</li>
            </ul>
          </div>
          <Button
            variant="warning"
            onClick={() =>
              handleShowExample(jsExamples.basicJS, "JavaScript Básico")
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Variables y Tipos de Datos */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            Variables y Tipos de Datos
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <div className="row">
              <div className="col-md-6">
                <h5>Declaración de Variables</h5>
                <ul>
                  <li>
                    <code>let</code> - Variables que pueden cambiar
                  </li>
                  <li>
                    <code>const</code> - Variables que no pueden cambiar
                  </li>
                  <li>
                    <code>var</code> - Forma antigua (no recomendada)
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Tipos de Datos</h5>
                <ul>
                  <li>
                    <code>string</code> - Textos
                  </li>
                  <li>
                    <code>number</code> - Números
                  </li>
                  <li>
                    <code>boolean</code> - true/false
                  </li>
                  <li>
                    <code>array</code> - Listas
                  </li>
                  <li>
                    <code>object</code> - Objetos
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Button
            variant="warning"
            onClick={() =>
              handleShowExample(
                jsExamples.variablesAndTypes,
                "Variables y Tipos de Datos"
              )
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Operadores y Estructuras de Control */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            Operadores y Estructuras de Control
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <div className="row">
              <div className="col-md-4">
                <h5>Operadores</h5>
                <ul>
                  <li>Aritméticos: +, -, *, /, %</li>
                  <li>Comparación: ==, ===, !=, !==</li>
                  <li>Lógicos: &&, ||, !</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Condicionales</h5>
                <ul>
                  <li>if...else</li>
                  <li>switch</li>
                  <li>operador ternario</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Bucles</h5>
                <ul>
                  <li>for</li>
                  <li>while</li>
                  <li>do...while</li>
                </ul>
              </div>
            </div>
          </div>
          <Button
            variant="warning"
            onClick={() =>
              handleShowExample(
                jsExamples.controlStructures,
                "Estructuras de Control"
              )
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Funciones y Eventos */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            Funciones y Eventos
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <div className="row">
              <div className="col-md-6">
                <h5>Tipos de Funciones</h5>
                <ul>
                  <li>Funciones declaradas</li>
                  <li>Funciones expresadas</li>
                  <li>Funciones flecha</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Eventos Comunes</h5>
                <ul>
                  <li>click</li>
                  <li>submit</li>
                  <li>keydown</li>
                  <li>load</li>
                </ul>
              </div>
            </div>
          </div>
          <Button
            variant="warning"
            onClick={() =>
              handleShowExample(
                jsExamples.functionsAndEvents,
                "Funciones y Eventos"
              )
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* DOM */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            Manipulación del DOM
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <p>Métodos principales para manipular el DOM:</p>
            <ul>
              <li>
                <code>document.getElementById()</code>
              </li>
              <li>
                <code>document.querySelector()</code>
              </li>
              <li>
                <code>element.innerHTML</code>
              </li>
              <li>
                <code>element.appendChild()</code>
              </li>
            </ul>
          </div>
          <Button
            variant="warning"
            onClick={() =>
              handleShowExample(jsExamples.domManipulation, "Manipulación DOM")
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Arrays y Objetos */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            Arrays y Objetos
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <div className="row">
              <div className="col-md-6">
                <h5>Métodos de Arrays</h5>
                <ul>
                  <li>push(), pop()</li>
                  <li>map(), filter()</li>
                  <li>reduce(), forEach()</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Manipulación de Objetos</h5>
                <ul>
                  <li>Propiedades y métodos</li>
                  <li>Object.keys()</li>
                  <li>Desestructuración</li>
                </ul>
              </div>
            </div>
          </div>
          <Button
            variant="warning"
            onClick={() =>
              handleShowExample(jsExamples.arraysAndObjects, "Arrays y Objetos")
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Asincronía */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            Fetch API y Promesas
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <ul>
              <li>
                <strong>Promesas:</strong> Para manejar operaciones asíncronas
              </li>
              <li>
                <strong>Fetch API:</strong> Para hacer peticiones HTTP
              </li>
              <li>
                <strong>async/await:</strong> Sintaxis más limpia para promesas
              </li>
            </ul>
          </div>
          <Button
            variant="warning"
            onClick={() =>
              handleShowExample(jsExamples.asyncOperations, "Operaciones Async")
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Buenas Prácticas */}
        <div style={{ backgroundColor: "#f8f9fa" }} className="py-5">
          <Container>
            <h2 className="text-center mb-4">Buenas Prácticas en JavaScript</h2>
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="border-0 shadow">
                  <Card.Body>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Usar const y let en lugar de var
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Escribir código modular y reutilizable
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Evitar variables globales
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Usar === en lugar de ==
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Modal para el Editor */}
        <Modal show={showEditor} onHide={() => setShowEditor(false)} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{currentTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CodeEditor initialCode={currentExample} />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default JavaScriptBasics;
