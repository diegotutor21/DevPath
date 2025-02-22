import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import CodeEditor from "../pages/Editor";
import htmlExamples from "../examples/html";

const HTMLBasics = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [currentExample, setCurrentExample] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const handleShowExample = (code, title) => {
    setCurrentExample(code);
    setCurrentTitle(title);
    setShowEditor(true);
  };

  return (
    <div className="html-basics-page">
      {/* Hero Section con estilo HTML */}
      <div style={{ backgroundColor: "#E44D26" }} className="text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">&lt;HTML&gt;</h1>
              <p className="lead">
                El lenguaje fundamental para estructurar el contenido web
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="/images/HTML.png"
                alt="HTML5 Logo"
                style={{ maxWidth: "200px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Sección de Conceptos Básicos */}
      <Container className="py-5">
        {/* Estructura Básica */}
        <section className="mb-5">
          <h2 className="border-bottom border-primary pb-2 mb-4">
            Estructura Básica HTML
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <p>
              La estructura básica de un documento HTML consiste en una serie de
              elementos anidados que definen la organización fundamental de una
              página web:
            </p>
            <ul className="mb-4">
              <li>
                <strong>&lt;!DOCTYPE html&gt;</strong>: Declara que este
                documento es HTML5
              </li>
              <li>
                <strong>&lt;html&gt;</strong>: El elemento raíz que contiene
                todo el contenido
              </li>
              <li>
                <strong>&lt;head&gt;</strong>: Contiene metadatos, título y
                enlaces a recursos externos
              </li>
              <li>
                <strong>&lt;body&gt;</strong>: Contiene todo el contenido
                visible de la página
              </li>
            </ul>
            <p className="mb-0">
              Cada uno de estos elementos cumple un papel específico en la
              estructura del documento y es esencial para crear páginas web bien
              formadas.
            </p>
          </div>
          <Button
            variant="primary"
            onClick={() =>
              handleShowExample(
                htmlExamples.structure, // Usar htmlExamples en lugar de examples
                "Estructura Básica HTML"
              )
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Etiquetas Esenciales */}
        <section className="mb-5">
          <h2 className="border-bottom border-primary pb-2 mb-4">
            Etiquetas Esenciales
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <p>
              Las etiquetas HTML más comunes que usarás para crear contenido
              incluyen:
            </p>
            <div className="row">
              <div className="col-md-6">
                <h5>Texto y Encabezados</h5>
                <ul>
                  <li>
                    <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>:
                    Encabezados
                  </li>
                  <li>
                    <code>&lt;p&gt;</code>: Párrafos
                  </li>
                  <li>
                    <code>&lt;span&gt;</code>: Texto en línea
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Contenido y Estructura</h5>
                <ul>
                  <li>
                    <code>&lt;div&gt;</code>: Contenedor genérico
                  </li>
                  <li>
                    <code>&lt;img&gt;</code>: Imágenes
                  </li>
                  <li>
                    <code>&lt;a&gt;</code>: Enlaces
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Button
            variant="primary"
            onClick={() =>
              handleShowExample(
                htmlExamples.essentialTags, // Cambiar examples.essentialTags por htmlExamples.essentialTags
                "Etiquetas Esenciales"
              )
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* Atributos */}
        <section className="mb-5">
          <h2 className="border-bottom border-primary pb-2 mb-4">
            Atributos HTML
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <p>
              Los atributos proporcionan información adicional o modifican el
              comportamiento de las etiquetas HTML:
            </p>
            <ul>
              <li>
                <strong>id</strong>: Identificador único para un elemento
              </li>
              <li>
                <strong>class</strong>: Permite aplicar estilos CSS y
                seleccionar elementos
              </li>
              <li>
                <strong>src</strong>: Especifica la fuente de elementos
                multimedia
              </li>
              <li>
                <strong>href</strong>: Define el destino de un enlace
              </li>
              <li>
                <strong>alt</strong>: Texto alternativo para imágenes
              </li>
            </ul>
            <p className="mb-0">
              Los atributos siempre se especifican en la etiqueta de apertura y
              siguen el formato nombre=&quot;valor&quot;.
            </p>
          </div>
          <Button
            variant="primary"
            onClick={() =>
              handleShowExample(
                htmlExamples.attributes, // Cambiar examples.attributes por htmlExamples.attributes
                "Atributos HTML"
              )
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

        {/* HTML Semántico */}
        <section className="mb-5">
          <h2 className="border-bottom border-primary pb-2 mb-4">
            HTML Semántico
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <p>
              El HTML semántico se refiere al uso de etiquetas que dan
              significado al contenido que contienen:
            </p>
            <div className="row">
              <div className="col-md-6">
                <h5>Elementos de Estructura</h5>
                <ul>
                  <li>
                    <code>&lt;header&gt;</code>: Encabezado
                  </li>
                  <li>
                    <code>&lt;nav&gt;</code>: Navegación
                  </li>
                  <li>
                    <code>&lt;main&gt;</code>: Contenido principal
                  </li>
                  <li>
                    <code>&lt;footer&gt;</code>: Pie de página
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Elementos de Contenido</h5>
                <ul>
                  <li>
                    <code>&lt;article&gt;</code>: Contenido independiente
                  </li>
                  <li>
                    <code>&lt;section&gt;</code>: Sección temática
                  </li>
                  <li>
                    <code>&lt;aside&gt;</code>: Contenido relacionado
                  </li>
                </ul>
              </div>
            </div>
            <p className="mb-0">
              El uso de HTML semántico mejora la accesibilidad, el SEO y la
              mantenibilidad del código.
            </p>
          </div>
          <Button
            variant="primary"
            onClick={() =>
              handleShowExample(
                htmlExamples.semantic, // Cambiar examples.semantic por htmlExamples.semantic
                "HTML Semántico"
              )
            }
          >
            Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
          </Button>
        </section>

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

      {/* Sección de Buenas Prácticas */}
      <div style={{ backgroundColor: "#f8f9fa" }} className="py-5">
        <Container>
          <h2 className="text-center mb-4">Buenas Prácticas</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="border-0 shadow">
                <Card.Body>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Usar etiquetas semánticas apropiadas para cada contenido
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Incluir atributos alt en las imágenes para accesibilidad
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Mantener una estructura jerárquica clara de encabezados
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Utilizar indentación adecuada para mejorar la legibilidad
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Validar el código HTML antes de publicar
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HTMLBasics;
