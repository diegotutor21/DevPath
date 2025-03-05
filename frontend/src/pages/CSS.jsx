// CSS.jsx
import { useState } from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import CodeEditor from "../pages/Editor";
import cssExamples from "../examples/css";

const CSSBasics = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [currentExample, setCurrentExample] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const handleShowExample = (code, title) => {
    setCurrentExample(code);
    setCurrentTitle(title);
    setShowEditor(true);
  };

  return (
    <div className="css-basics-page">
      {/* Hero Section */}
      <div style={{ backgroundColor: "#1471b6" }} className="text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">CSS</h1>
              <p className="lead">
                Hojas de Estilo en Cascada para diseñar y dar vida a tus páginas
                web
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="/images/cssejemplo.png"
                alt="CSS3 Logo"
                style={{ maxWidth: "200px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        {/* Introducción a CSS */}
        <section className="mb-5">
          <h2 className="border-bottom border-primary pb-2 mb-4">
            ¿Qué es CSS?
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <p>
              <strong>CSS (Cascading Style Sheets)</strong> es el lenguaje
              estándar utilizado para definir la presentación y el aspecto
              visual de las páginas web. Es fundamental para el diseño de
              cualquier sitio web moderno.
            </p>

            <h5 className="mt-4 font-bold">Características principales:</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Es un lenguaje de hojas de estilo, no un lenguaje de
                programación
              </li>
              <li>
                Utiliza selectores y declaraciones para definir el aspecto
                visual de los elementos
              </li>
              <li>
                Los navegadores aplican los estilos CSS para mostrar el
                contenido con formato al usuario
              </li>
              <li>
                Es el estándar oficial para el diseño de páginas web, mantenido
                por el W3C
              </li>
            </ul>

            <h5 className="mt-4 font-bold">Para qué se utiliza:</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Definir colores, tamaños, fuentes y espaciados en páginas web
              </li>
              <li>
                Crear diseños responsivos que se adapten a diferentes
                dispositivos
              </li>
              <li>
                Controlar la disposición y posicionamiento de los elementos
              </li>
              <li>Añadir animaciones y efectos visuales</li>
              <li>
                Personalizar la apariencia de los elementos HTML sin modificar
                su estructura
              </li>
            </ul>

            <div className="bg-white p-3 rounded border border-gray-300 mt-4">
              <p className="font-semibold mb-2">Dato importante:</p>
              <p className="mb-0">
                CSS trabaja junto con HTML (para la estructura) y JavaScript
                (para la interactividad) para crear experiencias web completas.
                Mientras HTML se encarga del contenido, CSS se ocupa de toda la
                parte visual y de presentación, permitiendo crear sitios web
                atractivos y profesionales.
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* Sección de Conceptos Básicos */}
      <Container className="py-5">
        {/* CSS Básico */}
        <section className="mb-5">
          <h2 className="border-bottom border-primary pb-2 mb-4">
            Conceptos Básicos de CSS
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <p>CSS se puede aplicar de tres formas diferentes:</p>
            <ul>
              <li>
                <strong>CSS Inline:</strong> Directamente en el atributo style
                del elemento HTML
              </li>
              <li>
                <strong>CSS Interno:</strong> En la sección &lt;style&gt; dentro
                del &lt;head&gt;
              </li>
              <li>
                <strong>CSS Externo:</strong> En un archivo .css separado
              </li>
            </ul>
            <p>Los selectores básicos incluyen:</p>
            <ul>
              <li>
                <code>elemento</code> - Selecciona todos los elementos de ese
                tipo
              </li>
              <li>
                <code>.clase</code> - Selecciona elementos con esa clase
              </li>
              <li>
                <code>#id</code> - Selecciona el elemento con ese ID
              </li>
              <li>
                <code>[atributo]</code> - Selecciona elementos con ese atributo
              </li>
            </ul>
          </div>
          <Button
            variant="primary"
            onClick={() =>
              handleShowExample(cssExamples.basicCSS, "CSS Básico")
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Propiedades Esenciales */}
        <section className="mb-5">
          <h2 className="border-bottom border-primary pb-2 mb-4">
            Propiedades Esenciales
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <div className="row">
              <div className="col-md-4">
                <h5>Colores y Fondos</h5>
                <ul>
                  <li>
                    <code>color</code>
                  </li>
                  <li>
                    <code>background-color</code>
                  </li>
                  <li>
                    <code>opacity</code>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Texto</h5>
                <ul>
                  <li>
                    <code>font-size</code>
                  </li>
                  <li>
                    <code>font-family</code>
                  </li>
                  <li>
                    <code>text-align</code>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Cajas y Espaciado</h5>
                <ul>
                  <li>
                    <code>margin</code>
                  </li>
                  <li>
                    <code>padding</code>
                  </li>
                  <li>
                    <code>border</code>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Button
            variant="primary"
            onClick={() =>
              handleShowExample(
                cssExamples.essentialProperties,
                "Propiedades Esenciales"
              )
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Modelo de Caja */}
        <section className="mb-5">
          <h2 className="border-bottom border-primary pb-2 mb-4">
            Modelo de Caja (Box Model)
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <p>El modelo de caja en CSS consiste en:</p>
            <ul>
              <li>
                <strong>Content:</strong> El contenido real del elemento
              </li>
              <li>
                <strong>Padding:</strong> Espacio entre el contenido y el borde
              </li>
              <li>
                <strong>Border:</strong> El borde que rodea el padding
              </li>
              <li>
                <strong>Margin:</strong> Espacio exterior al borde
              </li>
            </ul>
          </div>
          <Button
            variant="primary"
            onClick={() =>
              handleShowExample(cssExamples.boxModel, "Modelo de Caja")
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Flexbox y Grid */}
        <section className="mb-5">
          <h2 className="border-bottom border-primary pb-2 mb-4">
            Flexbox y Grid
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <div className="row">
              <div className="col-md-6">
                <h5>Flexbox</h5>
                <ul>
                  <li>
                    <code>display: flex</code>
                  </li>
                  <li>
                    <code>justify-content</code>
                  </li>
                  <li>
                    <code>align-items</code>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Grid</h5>
                <ul>
                  <li>
                    <code>display: grid</code>
                  </li>
                  <li>
                    <code>grid-template-columns</code>
                  </li>
                  <li>
                    <code>grid-gap</code>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Button
            variant="primary"
            onClick={() =>
              handleShowExample(cssExamples.layoutExamples, "Flexbox y Grid")
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Animaciones */}
        <section className="mb-5">
          <h2 className="border-bottom border-primary pb-2 mb-4">
            Animaciones y Transiciones
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <ul>
              <li>
                <strong>Transiciones:</strong> Cambios suaves entre estados
              </li>
              <li>
                <strong>Animaciones:</strong> Secuencias de cambios usando
                @keyframes
              </li>
            </ul>
          </div>
          <Button
            variant="primary"
            onClick={() =>
              handleShowExample(
                cssExamples.animations,
                "Animaciones y Transiciones"
              )
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Sección de Buenas Prácticas de CSS */}
        <div style={{ backgroundColor: "#f8f9fa" }} className="py-5">
          <Container>
            <h2 className="text-center mb-4">Buenas Prácticas de CSS</h2>
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="border-0 shadow">
                  <Card.Body>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Usar variables CSS para mantener consistencia
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Crear clases reutilizables
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Evitar el uso excesivo de !important
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Mantener una estructura organizada
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

export default CSSBasics;
