import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
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

  // Función para verificar si el usuario está autenticado
  const isAuthenticated = () => {
    const userInfo = localStorage.getItem("userInfo");
    console.log("User Info:", userInfo); // Para debuggear

    // Parsea el JSON y verifica que no esté vacío
    return userInfo && JSON.parse(userInfo) !== null;
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

      {/* Sección de Conceptos Básicos - Visible para todos */}
      <Container className="py-5">
        {/* Introducción a HTML */}
        <section className="mb-5">
          <h2 className="border-bottom border-primary pb-2 mb-4">
            ¿Qué es HTML?
          </h2>
          <div className="bg-light p-4 rounded-3 mb-4">
            <p>
              <strong>HTML (HyperText Markup Language)</strong> es el lenguaje
              estándar utilizado para crear y estructurar el contenido en la
              web. Es el bloque fundamental de cualquier página web.
            </p>

            <h5 className="mt-4 font-bold">Características principales:</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>Es un lenguaje de marcado, no un lenguaje de programación</li>
              <li>
                Utiliza elementos o etiquetas para definir la estructura y el
                contenido
              </li>
              <li>
                Los navegadores interpretan el HTML para mostrar el contenido al
                usuario
              </li>
              <li>
                Es el estándar oficial para la creación de páginas web,
                mantenido por el W3C
              </li>
            </ul>

            <h5 className="mt-4 font-bold">Para qué se utiliza:</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>Crear la estructura básica de páginas web</li>
              <li>
                Organizar contenido como texto, imágenes, videos y formularios
              </li>
              <li>
                Definir la jerarquía y relación entre diferentes contenidos
              </li>
              <li>Establecer enlaces entre páginas (hipertexto)</li>
              <li>
                Proporcionar una base para aplicar estilos (CSS) y funcionalidad
                (JavaScript)
              </li>
            </ul>

            <div className="bg-white p-3 rounded border border-gray-300 mt-4">
              <p className="font-semibold mb-2">Dato importante:</p>
              <p className="mb-0">
                HTML trabaja junto con CSS (para el diseño visual) y JavaScript
                (para la interactividad) para crear experiencias web completas.
                Mientras HTML se encarga de la estructura, estos otros lenguajes
                complementan para crear sitios web modernos y funcionales.
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* Contenido que requiere autenticación */}
      {isAuthenticated() ? (
        <>
          {/* Sección de Conceptos Detallados - Solo para usuarios autenticados */}
          <Container className="py-5">
            {/* Estructura Básica */}
            <section className="mb-5">
              <h2 className="border-bottom border-primary pb-2 mb-4">
                Estructura Básica HTML
              </h2>
              <div className="bg-light p-4 rounded-3 mb-4">
                <p>
                  La estructura básica de un documento HTML consiste en una
                  serie de elementos anidados que definen la organización
                  fundamental de una página web:
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
                  estructura del documento y es esencial para crear páginas web
                  bien formadas.
                </p>
              </div>
              <Button
                variant="primary"
                onClick={() =>
                  handleShowExample(
                    htmlExamples.structure,
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
                    htmlExamples.essentialTags,
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
                  Los atributos proporcionan información adicional o modifican
                  el comportamiento de las etiquetas HTML:
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
                  Los atributos siempre se especifican en la etiqueta de
                  apertura y siguen el formato nombre=&quot;valor&quot;.
                </p>
              </div>
              <Button
                variant="primary"
                onClick={() =>
                  handleShowExample(htmlExamples.attributes, "Atributos HTML")
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
                  handleShowExample(htmlExamples.semantic, "HTML Semántico")
                }
              >
                Ver Ejemplo <i className="bi bi-code-slash ms-2"></i>
              </Button>
            </section>
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
                          Usar etiquetas semánticas apropiadas para cada
                          contenido
                        </li>
                        <li className="mb-3">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Incluir atributos alt en las imágenes para
                          accesibilidad
                        </li>
                        <li className="mb-3">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Mantener una estructura jerárquica clara de
                          encabezados
                        </li>
                        <li className="mb-3">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Utilizar indentación adecuada para mejorar la
                          legibilidad
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

          {/* Sección de llamada a la acción para ir a las tareas prácticas */}
          <div
            style={{ backgroundColor: "#E44D26" }}
            className="text-white py-4"
          >
            <Container className="text-center">
              <h2 className="mb-3">
                ¿Listo para poner en práctica lo aprendido?
              </h2>
              <p className="mb-4">
                Completa las tareas prácticas para reforzar tus conocimientos de
                HTML
              </p>
              <Link to="/htmlpractice">
                <Button variant="light" size="lg">
                  <i className="bi bi-code-slash me-2"></i>
                  Ir a las Tareas Prácticas
                </Button>
              </Link>
            </Container>
          </div>
        </>
      ) : (
        /* Mensaje para usuarios no autenticados */
        <div className="text-center my-5 py-5">
          <Container>
            <Card className="shadow border-0 p-4">
              <Card.Body>
                <h3 className="mb-3 text-primary">
                  ¿Quieres aprender más sobre HTML?
                </h3>
                <p className="fs-5 mb-4">
                  Para acceder al contenido completo sobre etiquetas HTML,
                  atributos, HTML semántico y buenas prácticas, inicia sesión o
                  regístrate.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Link to="/login">
                    <Button variant="primary" size="lg">
                      <i className="bi bi-box-arrow-in-right me-2"></i>
                      Iniciar Sesión
                    </Button>
                  </Link>
                  <Link to="/registrar">
                    <Button variant="outline-primary" size="lg">
                      <i className="bi bi-person-plus me-2"></i>
                      Registrarse
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </div>
      )}

      {/* Modal para el Editor - Visible independientemente de la autenticación */}
      <Modal show={showEditor} onHide={() => setShowEditor(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{currentTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CodeEditor initialCode={currentExample} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HTMLBasics;
