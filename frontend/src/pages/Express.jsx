import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Express.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const ExpressPage = () => {
  return (
    <Container className="mt-5">
      <Card className="text-white bg-dark">
        <Card.Body>
          <h1 className="text-center text-warning mb-4">
            Express.js: La Ruta Más Rápida Hacia el Backend
          </h1>
          <p className="text-center">
            Con Express.js, puedes construir servidores backend de forma rápida,
            eficiente y con una sintaxis minimalista. Aprende más sobre esta
            poderosa herramienta.
          </p>
        </Card.Body>
      </Card>

      {/* Introducción */}
      <Row className="gy-4 mt-4">
        <Col md={6}>
          <Card className="border-warning">
            <Card.Body>
              <h3 className="text-warning">¿Qué es Express.js?</h3>
              <p>
                Express.js es un framework minimalista de Node.js que simplifica
                la creación de servidores web y APIs. Piensa en Express como una
                herramienta que organiza y facilita el trabajo con Node.js,
                haciendo más rápido y limpio escribir código para tu servidor.
              </p>
              <ul>
                <li>Basado en JavaScript.</li>
                <li>Compatible con middleware personalizable.</li>
                <li>Extremadamente rápido y eficiente.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img src="images/express.png" alt="express" className="imgs" />
        </Col>
      </Row>

      {/* Beneficios */}
      <Row className="gy-4 mt-4">
        <Col md={12}>
          <Card className="bg-light">
            <Card.Body>
              <h3 className="text-dark">¿Por qué usar Express.js?</h3>
              <ol>
                <li>
                  <b>Fácil de aprender y usar:</b> Ideal para principiantes,
                  ligero y directo.
                </li>
                <li>
                  <b>Rápido y flexible:</b> Maneja rutas, solicitudes HTTP y
                  middleware con facilidad.
                </li>
                <li>
                  <b>Ecosistema rico:</b> Gran cantidad de paquetes y
                  herramientas disponibles.
                </li>
                <li>
                  <b>Popularidad y comunidad:</b> Amplia documentación y soporte
                  comunitario.
                </li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ventajas y Desventajas */}
      <Row className="gy-4 mt-4">
        <Col md={6}>
          <Card className="border-success">
            <Card.Body>
              <h3 className="text-success">Ventajas</h3>
              <ul>
                <li>Ligero y minimalista.</li>
                <li>Fácil de aprender y usar.</li>
                <li>Extensible mediante middleware y módulos externos.</li>
                <li>Comunidad activa y gran cantidad de recursos.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="border-danger">
            <Card.Body>
              <h3 className="text-danger">Desventajas</h3>
              <ul>
                <li>No incluye características avanzadas por defecto.</li>
                <li>Puede ser redundante en proyectos pequeños.</li>
                <li>
                  Dependencia de bibliotecas externas para ciertas
                  funcionalidades.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Instalación y primeros pasos */}
      <Row className="gy-4 mt-4">
        <Col md={12}>
          <Card className="bg-warning text-dark">
            <Card.Body>
              <h3 className="text-center">Instalación y Primeros Pasos</h3>
              <p>
                Para usar Express, primero necesitas tener instalado Node.js.
                Luego, instala Express en tu proyecto con:
              </p>
              <pre className="bg-dark text-white p-3">npm install express</pre>
              <p>
                Crea un archivo <code>server.js</code> y escribe el siguiente
                código para iniciar un servidor básico:
              </p>
              <pre className="bg-dark text-white p-3">
                {`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(\`Servidor corriendo en http://localhost:\${PORT}\`);
});`}
              </pre>
              <p>
                Este servidor responde con &quot;¡Hola desde Express!&quot; al
                acceder a la ruta raíz (<code>/</code>) en el navegador.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Rutas y solicitudes HTTP */}
      <Row className="gy-4 mt-4">
        <Col md={12}>
          <Card className="border-warning">
            <Card.Body>
              <h3 className="text-warning">
                Entendiendo Rutas y Solicitudes HTTP
              </h3>
              <p>
                Las rutas en Express definen cómo responde tu aplicación a
                diferentes solicitudes HTTP. Ejemplo:
              </p>
              <pre className="bg-dark text-white p-3">
                {`app.get('/users', (req, res) => {
  res.send('Obtener usuarios');
});

app.post('/users', (req, res) => {
  res.send('Crear un usuario');
});`}
              </pre>
              <p>
                Los métodos más comunes son <b>GET</b> (obtener datos),{" "}
                <b>POST</b> (enviar datos), <b>PUT</b> (actualizar datos) y{" "}
                <b>DELETE</b> (eliminar datos).
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Futuro */}
      <Row className="gy-4 mt-4">
        <Col md={12}>
          <Card className="bg-light">
            <Card.Body>
              <h3 className="text-center">El Futuro de Express.js</h3>
              <p>
                Express.js sigue siendo una opción popular en el desarrollo web
                backend. Sin embargo, frameworks como Fastify y Nest.js están
                ganando terreno debido a características más modernas y mejor
                rendimiento. A pesar de esto, Express.js sigue siendo relevante
                gracias a su simplicidad y amplia adopción. Se espera que
                continúe evolucionando y adaptándose a las necesidades del
                desarrollo moderno.
              </p>
              <p>
                Si estás comenzando, Express.js es una excelente base para
                entender cómo funcionan los frameworks backend antes de avanzar
                a opciones más complejas.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Conclusión */}
      <Row className="gy-4 mt-4">
        <Col md={12}>
          <Card className="bg-dark text-white">
            <Card.Body>
              <h3 className="text-center">Conclusión</h3>
              <p>
                Express.js es una excelente herramienta para cualquier
                desarrollador que desee construir aplicaciones web o APIs con
                Node.js. Es flexible, fácil de usar, y tiene una comunidad
                robusta para apoyarte en cada paso del camino.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default ExpressPage;
