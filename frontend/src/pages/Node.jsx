import {
  Card,
  Container,
  Row,
  Col,
  Accordion,
  Alert,
  Tab,
  Tabs,
} from "react-bootstrap";
import nodeExamples from "../examples/Node";

const NodeBasics = () => {
  return (
    <div className="node-basics-page">
      {/* Hero Section */}
      <div style={{ backgroundColor: "#73c62b" }} className="text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">Node.js</h1>
              <p className="lead">
                Runtime de JavaScript para construir aplicaciones de servidor
                escalables y eficientes
              </p>
              <Alert variant="light" className="text-dark mt-3">
                Node.js te permite ejecutar JavaScript fuera del navegador,
                permitiendo crear desde servidores web hasta herramientas de
                línea de comandos.
              </Alert>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="/images/nodejs.png"
                alt="Node.js Logo"
                style={{ maxWidth: "200px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contenido Principal */}
      <Container className="py-5">
        {/* Introducción */}
        <section className="mb-5">
          <h2 className="border-bottom border-success pb-2 mb-4">
            ¿Qué es Node.js?
          </h2>
          <Card className="mb-4">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h5>Características Principales</h5>
                  <ul>
                    <li>Basado en el motor V8 de Chrome</li>
                    <li>Ejecución asíncrona y orientada a eventos</li>
                    <li>Sistema de módulos incorporado</li>
                    <li>NPM (Node Package Manager) incluido</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h5>Casos de Uso Comunes</h5>
                  <ul>
                    <li>Servidores Web y APIs</li>
                    <li>Aplicaciones en tiempo real</li>
                    <li>Herramientas de línea de comandos</li>
                    <li>Microservicios</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>

        {/* Módulos Fundamentales */}
        <section className="mb-5">
          <h2 className="border-bottom border-success pb-2 mb-4">
            Módulos Fundamentales
          </h2>
          <Tabs className="mb-4">
            <Tab eventKey="fs" title="File System">
              <Card>
                <Card.Body>
                  <Card.Title>Sistema de Archivos (fs)</Card.Title>
                  <Card.Text>
                    El módulo fs permite interactuar con el sistema de archivos
                    de manera síncrona o asíncrona:
                  </Card.Text>
                  <pre className="bg-light p-3 rounded">
                    <code>{nodeExamples.fileSystem}</code>
                  </pre>
                  <Alert variant="info" className="mt-3">
                    <i className="bi bi-info-circle me-2"></i>
                    Siempre es recomendable usar las versiones asíncronas con
                    promises para mejor rendimiento.
                  </Alert>
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="http" title="HTTP">
              <Card>
                <Card.Body>
                  <Card.Title>Servidor HTTP</Card.Title>
                  <Card.Text>
                    Crear servidores web es una de las funcionalidades
                    principales de Node.js:
                  </Card.Text>
                  <pre className="bg-light p-3 rounded">
                    <code>{nodeExamples.httpServer}</code>
                  </pre>
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="events" title="Events">
              <Card>
                <Card.Body>
                  <Card.Title>Sistema de Eventos</Card.Title>
                  <Card.Text>
                    Node.js utiliza un patrón de eventos para manejar
                    operaciones asíncronas:
                  </Card.Text>
                  <pre className="bg-light p-3 rounded">
                    <code>{nodeExamples.events}</code>
                  </pre>
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="path" title="Path">
              <Card>
                <Card.Body>
                  <Card.Title>Manejo de Rutas</Card.Title>
                  <Card.Text>
                    El módulo path ayuda a trabajar con rutas de archivos y
                    directorios:
                  </Card.Text>
                  <pre className="bg-light p-3 rounded">
                    <code>{nodeExamples.path}</code>
                  </pre>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </section>

        {/* Asincronía en Node.js */}
        <section className="mb-5">
          <h2 className="border-bottom border-success pb-2 mb-4">
            Asincronía en Node.js
          </h2>
          <Card className="mb-4">
            <Card.Body>
              <Tabs>
                <Tab eventKey="callbacks" title="Callbacks">
                  <div className="py-3">
                    <h5>Callbacks</h5>
                    <pre className="bg-light p-3 rounded">
                      <code>{nodeExamples.callbacks}</code>
                    </pre>
                  </div>
                </Tab>
                <Tab eventKey="promises" title="Promises">
                  <div className="py-3">
                    <h5>Promises</h5>
                    <pre className="bg-light p-3 rounded">
                      <code>{nodeExamples.promises}</code>
                    </pre>
                  </div>
                </Tab>
                <Tab eventKey="async" title="Async/Await">
                  <div className="py-3">
                    <h5>Async/Await</h5>
                    <pre className="bg-light p-3 rounded">
                      <code>{nodeExamples.asyncAwait}</code>
                    </pre>
                  </div>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </section>

        {/* Manejo de Errores */}
        <section className="mb-5">
          <h2 className="border-bottom border-success pb-2 mb-4">
            Manejo de Errores
          </h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Patrones de Manejo de Errores</Card.Title>
              <pre className="bg-light p-3 rounded">
                <code>{nodeExamples.errorHandling}</code>
              </pre>
              <Alert variant="warning" className="mt-3">
                <i className="bi bi-exclamation-triangle me-2"></i>
                Siempre maneja los errores apropiadamente para evitar que tu
                aplicación se detenga inesperadamente.
              </Alert>
            </Card.Body>
          </Card>
        </section>

        {/* Mejores Prácticas */}
        <section className="bg-light p-4 rounded-3">
          <h2 className="text-center mb-4">Mejores Prácticas en Node.js</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Estructura del Proyecto</Accordion.Header>
                  <Accordion.Body>
                    <pre className="bg-white p-3 rounded">
                      <code>{nodeExamples.projectStructure}</code>
                    </pre>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Variables de Entorno</Accordion.Header>
                  <Accordion.Body>
                    <pre className="bg-white p-3 rounded">
                      <code>{nodeExamples.environmentSetup}</code>
                    </pre>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Seguridad</Accordion.Header>
                  <Accordion.Body>
                    <pre className="bg-white p-3 rounded">
                      <code>{nodeExamples.security}</code>
                    </pre>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default NodeBasics;
