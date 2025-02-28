import { useState } from "react";
import { Container, Row, Col, Card, Button, Accordion, Alert, Modal } from "react-bootstrap";
import CodeEditor from "../pages/Editor";

const HTMLPracticeTasks = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [currentCode, setCurrentCode] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const tasks = [
    {
      id: 1,
      title: "Crear una estructura básica HTML",
      description: "Crea un documento HTML básico que incluya las etiquetas <!DOCTYPE>, <html>, <head>, <title> y <body>.",
      hint: "Recuerda que todo documento HTML debe comenzar con la declaración DOCTYPE.",
      initialCode: "<!-- Escribe tu código aquí -->",
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página</title>
</head>
<body>
    <h1>¡Hola Mundo!</h1>
    <p>Esta es mi primera página web.</p>
</body>
</html>`
    },
    {
      id: 2,
      title: "Trabajar con encabezados y párrafos",
      description: "Crea una página con un título principal (h1), dos subtítulos (h2) y párrafos debajo de cada subtítulo.",
      hint: "Utiliza las etiquetas <h1>, <h2> y <p> para organizar tu contenido.",
      initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Encabezados y párrafos</title>
</head>
<body>
    <!-- Escribe tu código aquí -->
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Encabezados y párrafos</title>
</head>
<body>
    <h1>Mi Blog de Programación</h1>
    
    <h2>HTML Básico</h2>
    <p>HTML es el lenguaje estándar para crear páginas web. Define la estructura básica de una página y su contenido.</p>
    
    <h2>CSS Fundamental</h2>
    <p>CSS es el lenguaje que usamos para dar estilo a un documento HTML. CSS describe cómo los elementos HTML deben ser mostrados.</p>
</body>
</html>`
    },
    {
      id: 3,
      title: "Crear una lista y añadir enlaces",
      description: "Crea una lista no ordenada con 3 elementos. Cada elemento debe contener un enlace a un sitio web diferente.",
      hint: "Usa las etiquetas <ul>, <li> y <a> para crear la lista con enlaces.",
      initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listas y enlaces</title>
</head>
<body>
    <h1>Mis sitios web favoritos</h1>
    <!-- Escribe tu código aquí -->
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listas y enlaces</title>
</head>
<body>
    <h1>Mis sitios web favoritos</h1>
    <ul>
        <li><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></li>
        <li><a href="https://www.w3schools.com" target="_blank">W3Schools</a></li>
        <li><a href="https://css-tricks.com" target="_blank">CSS-Tricks</a></li>
    </ul>
</body>
</html>`
    },
    {
      id: 4,
      title: "Insertar una imagen con atributos",
      description: "Añade una imagen a la página utilizando la etiqueta <img>. Incluye los atributos src, alt, width y height.",
      hint: "No olvides que la etiqueta <img> no tiene etiqueta de cierre y requiere el atributo alt para accesibilidad.",
      initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Imágenes en HTML</title>
</head>
<body>
    <h1>Mi imagen favorita</h1>
    <!-- Escribe tu código aquí -->
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Imágenes en HTML</title>
</head>
<body>
    <h1>Mi imagen favorita</h1>
    <img src="/images/html5-logo.png" alt="Logo de HTML5" width="200" height="200">
    <p>Esta es una imagen del logo de HTML5.</p>
</body>
</html>`
    },
    {
      id: 5,
      title: "Crear una estructura semántica",
      description: "Crea una página con estructura semántica utilizando las etiquetas <header>, <nav>, <main>, <section> y <footer>.",
      hint: "El HTML semántico ayuda a los motores de búsqueda y tecnologías de asistencia a entender el contenido de tu página.",
      initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>HTML Semántico</title>
</head>
<body>
    <!-- Escribe tu código aquí -->
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>HTML Semántico</title>
</head>
<body>
    <header>
        <h1>Mi Sitio Web</h1>
    </header>
    
    <nav>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#acerca">Acerca de</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
    
    <main>
        <section id="inicio">
            <h2>Bienvenido a mi sitio</h2>
            <p>Esta es la página principal con información importante.</p>
        </section>
        
        <section id="acerca">
            <h2>Acerca de nosotros</h2>
            <p>Somos una empresa dedicada a la enseñanza de programación web.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
</body>
</html>`
    }
  ];

  const handleOpenEditor = (task) => {
    setCurrentCode(task.initialCode);
    setCurrentTitle(task.title);
    setShowEditor(true);
  };

  const handleViewSolution = (solution) => {
    setCurrentCode(solution);
    setCurrentTitle("Solución");
    setShowEditor(true);
  };

  return (
    <div className="html-practice-page">
      {/* Sección de cabecera */}
      <div style={{ backgroundColor: "#E44D26" }} className="text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-4 fw-bold">Práctica HTML</h1>
              <p className="lead">
                Pon a prueba tus conocimientos con estos ejercicios prácticos
              </p>
            </Col>
            <Col md={5} className="text-center">
              <img
                src="/images/HTML.png"
                alt="HTML Practice"
                style={{ maxWidth: "180px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Sección de instrucciones */}
      <Container className="py-4">
        <Alert variant="info" className="mb-4">
          <Alert.Heading>Instrucciones</Alert.Heading>
          <p>
            Completa las siguientes tareas prácticas para reforzar tus conocimientos de HTML. 
            Para cada ejercicio:
          </p>
          <ol>
            <li>Lee cuidadosamente la descripción de la tarea</li>
            <li>Haz clic en &quot;Empezar Tarea&quot; para abrir el editor</li>
            <li>Escribe tu código en el editor</li>
            <li>Si necesitas ayuda, consulta la pista o la solución</li>
          </ol>
          <p className="mb-0">
            ¡Recuerda que la práctica es la clave para dominar HTML!
          </p>
        </Alert>

        {/* Lista de tareas */}
        <h2 className="border-bottom border-primary pb-2 mb-4">
          Tareas Prácticas
        </h2>

        <Accordion defaultActiveKey="0" className="mb-5">
          {tasks.map((task, index) => (
            <Accordion.Item eventKey={index.toString()} key={task.id}>
              <Accordion.Header>
                <strong>Tarea {task.id}:</strong> {task.title}
              </Accordion.Header>
              <Accordion.Body>
                <p>{task.description}</p>
                <div className="mb-3">
                  <strong>Pista:</strong> <em>{task.hint}</em>
                </div>
                <div className="d-flex gap-2">
                  <Button 
                    variant="primary" 
                    onClick={() => handleOpenEditor(task)}
                  >
                    <i className="bi bi-code-slash me-2"></i>
                    Empezar Tarea
                  </Button>
                  <Button 
                    variant="outline-success" 
                    onClick={() => handleViewSolution(task.solution)}
                  >
                    <i className="bi bi-eye me-2"></i>
                    Ver Solución
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        {/* Modal para el Editor */}
        <Modal show={showEditor} onHide={() => setShowEditor(false)} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{currentTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CodeEditor initialCode={currentCode} language="html" />
          </Modal.Body>
        </Modal>
      </Container>

      {/* Sección de recursos adicionales */}
      <div style={{ backgroundColor: "#f8f9fa" }} className="py-5">
        <Container>
          <h2 className="text-center mb-4">Recursos Adicionales</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="border-0 shadow">
                <Card.Body>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="bi bi-link-45deg text-primary me-2"></i>
                      <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                        MDN Web Docs - Documentación HTML
                      </a>
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-link-45deg text-primary me-2"></i>
                      <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
                        W3Schools - Tutoriales de HTML
                      </a>
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-link-45deg text-primary me-2"></i>
                      <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">
                        Validador de HTML de W3C
                      </a>
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

export default HTMLPracticeTasks;