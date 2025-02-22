// ExpressBasics.jsx
import { Card, Container, Row, Col, Accordion, Alert } from "react-bootstrap";
import expressExamples from "../examples/Express";


const ExpressBasics = () => {

  return (
    <div className="express-basics-page">
      {/* Hero Section */}
      <div style={{ backgroundColor: "#090909" }} className="text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">Express.js</h1>
              <p className="lead">
                Framework web rápido, minimalista y flexible para Node.js que te
                permite construir aplicaciones web y APIs de manera eficiente
              </p>
              <Alert variant="info">
                <strong>Prerequisito:</strong> Necesitas tener Node.js instalado
                para usar Express.js
              </Alert>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="/images/express2.png"
                alt="Express.js Logo"
                style={{ maxWidth: "200px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Instalación y Configuración Básica */}
      <Container className="py-5">
        <section className="mb-5">
          <h2 className="border-bottom border-dark pb-2 mb-4">
            Primeros Pasos con Express.js
          </h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Instalación</Card.Title>
              <Card.Text>
                Para comenzar con Express.js, primero necesitas inicializar tu
                proyecto Node.js y luego instalar Express:
              </Card.Text>
              <pre className="bg-light p-3 rounded">
                <code>{expressExamples.installation}</code>
              </pre>
              <Alert variant="success" className="mt-3">
                <i className="bi bi-lightbulb me-2"></i>
                Tip: También puedes usar npx express-generator para crear un
                proyecto Express completo con estructura predefinida.
              </Alert>
            </Card.Body>
          </Card>
        </section>

        {/* Servidor Básico */}
        <section className="mb-5">
          <h2 className="border-bottom border-dark pb-2 mb-4">
            Creando tu Primer Servidor
          </h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Servidor Express Básico</Card.Title>
              <Card.Text>
                Un servidor Express básico puede manejar diferentes tipos de
                peticiones HTTP (GET, POST, etc.) y responder según la ruta
                solicitada:
              </Card.Text>
              <pre className="bg-light p-3 rounded">
                <code>{expressExamples.basicServer}</code>
              </pre>
              <Alert variant="info" className="mt-3">
                Este ejemplo muestra:
                <ul className="mb-0">
                  <li>Configuración básica del servidor</li>
                  <li>Manejo de rutas GET y POST</li>
                  <li>Uso de parámetros en la URL</li>
                  <li>Respuestas JSON</li>
                </ul>
              </Alert>
            </Card.Body>
          </Card>
        </section>

        {/* Middleware */}
        <section className="mb-5">
          <h2 className="border-bottom border-dark pb-2 mb-4">
            Middleware en Express
          </h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>¿Qué es el Middleware?</Card.Title>
              <Card.Text>
                El middleware son funciones que tienen acceso al objeto de
                solicitud (req), al objeto de respuesta (res) y a la siguiente
                función de middleware (next) en el ciclo de solicitud/respuesta de
                la aplicación.
              </Card.Text>
              <pre className="bg-light p-3 rounded">
                <code>{expressExamples.middleware}</code>
              </pre>
              <Alert variant="warning" className="mt-3">
                <strong>Importante:</strong> El orden de los middleware es crucial.
                Se ejecutan en el orden en que se definen.
              </Alert>
            </Card.Body>
          </Card>
        </section>

        {/* Manejo de Rutas */}
        <section className="mb-5">
          <h2 className="border-bottom border-dark pb-2 mb-4">
            Sistema de Enrutamiento
          </h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Rutas y Parámetros</Card.Title>
              <Card.Text>
                Express proporciona un sistema de enrutamiento robusto que permite
                organizar tu aplicación en módulos:
              </Card.Text>
              <pre className="bg-light p-3 rounded">
                <code>{expressExamples.routing}</code>
              </pre>
            </Card.Body>
          </Card>
        </section>

        {/* Manejo de Errores */}
        <section className="mb-5">
          <h2 className="border-bottom border-dark pb-2 mb-4">
            Manejo de Errores
          </h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Middleware de Error</Card.Title>
              <Card.Text>
                Express tiene un sistema especial para manejar errores a través de
                middleware con cuatro parámetros:
              </Card.Text>
              <pre className="bg-light p-3 rounded">
                <code>{expressExamples.errorHandling}</code>
              </pre>
            </Card.Body>
          </Card>
        </section>

        {/* Conexión con Bases de Datos */}
        <section className="mb-5">
          <h2 className="border-bottom border-dark pb-2 mb-4">
            Conexión con Bases de Datos
          </h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>MongoDB con Mongoose</Accordion.Header>
              <Accordion.Body>
                <pre className="bg-light p-3 rounded">
                  <code>{expressExamples.mongooseConnection}</code>
                </pre>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>MySQL</Accordion.Header>
              <Accordion.Body>
                <pre className="bg-light p-3 rounded">
                  <code>{expressExamples.mysqlConnection}</code>
                </pre>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>

        {/* Mejores Prácticas */}
        <section className="bg-light p-4 rounded-3">
          <h2 className="text-center mb-4">Mejores Prácticas en Express.js</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Estructura del Proyecto</Accordion.Header>
                  <Accordion.Body>
                    <pre className="bg-white p-3 rounded">
                      <code>{expressExamples.projectStructure}</code>
                    </pre>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Seguridad</Accordion.Header>
                  <Accordion.Body>
                    <pre className="bg-white p-3 rounded">
                      <code>{expressExamples.security}</code>
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

export default ExpressBasics;