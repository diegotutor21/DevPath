import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  Accordion,
} from "react-bootstrap";

const RestApiPage = () => {
  return (
    <Container fluid className="py-5 bg-light">
      {/* Cabecera */}
      <header className="text-center mb-5">
        <Image
          src="images/rest_api.png"
          alt="REST API Logo"
          width="200"
          className="mb-3"
        />
        <h1 className="display-5 fw-bold text-primary">
          REST APIs: Comunicando el Futuro
        </h1>
        <p className="lead text-secondary">
          REST (Representational State Transfer) es un estándar de arquitectura
          que permite la comunicación eficiente entre aplicaciones a través de
          recursos accesibles por HTTP.
        </p>
      </header>
      {/* Introducción a REST APIs */}
      <section id="intro" className="mb-5">
        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="shadow-lg">
              <Card.Body>
                <h3 className="text-success">¿Qué son las REST APIs?</h3>
                <p>
                  Una **REST API** es una interfaz basada en el protocolo HTTP,
                  diseñada para permitir que aplicaciones se comuniquen
                  intercambiando recursos. Los recursos se identifican por URLs
                  únicas, y las operaciones se realizan mediante métodos
                  estándar como **GET**, **POST**, **PUT** y **DELETE**.
                </p>
                <h5 className="text-success mt-4">
                  Características principales:
                </h5>
                <ul>
                  <li>
                    **Basadas en HTTP**: Universales y soportadas por todos los
                    navegadores.
                  </li>
                  <li>
                    **Stateless (sin estado)**: Cada solicitud es independiente
                    y no guarda información de solicitudes anteriores.
                  </li>
                  <li>
                    **Formatos estándar como JSON**: Facilita la
                    interoperabilidad.
                  </li>
                  <li>
                    **Escalables y rápidas**: Ideales para aplicaciones
                    modernas.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section id="structure">
        <Col lg={10} className="mx-auto">
          <Card className="shadow-lg mt-4">
            <Card.Body>
              <h4 className="text-warning">
                Estructura básica de una REST API
              </h4>
              <p>
                Una REST API utiliza los siguientes componentes principales para
                su funcionamiento:
              </p>
              <ul>
                <li>
                  <strong>Endpoint:</strong> Es la URL que representa un
                  recurso, por ejemplo,
                  <code>https://api.example.com/users</code>.
                </li>
                <li>
                  <strong>Método HTTP:</strong> Define la acción a realizar
                  sobre el recurso (<code>GET</code>, <code>POST</code>,{" "}
                  <code>PUT</code>, <code>DELETE</code>).
                </li>
                <li>
                  <strong>Cabeceras (Headers):</strong> Contienen información
                  adicional, como el formato de datos aceptado (
                  <code>Content-Type</code>).
                </li>
                <li>
                  <strong>Cuerpo (Body):</strong> Usado en métodos como{" "}
                  <code>POST</code> o<code>PUT</code> para enviar datos al
                  servidor en formato JSON o XML.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </section>
      <br />
      {/* Métodos HTTP Básicos */}
      <section id="methods" className="mb-5 bg-primary text-white py-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <h3 className="text-center">Principales Métodos HTTP</h3>
            <Row className="mt-4">
              <Col md={6}>
                <Card className="text-dark shadow-sm">
                  <Card.Body>
                    <h5>GET</h5>
                    <p>
                      Recupera información de un recurso, como datos de
                      usuarios.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="text-dark shadow-sm">
                  <Card.Body>
                    <h5>POST</h5>
                    <p>Crea un nuevo recurso, como agregar un nuevo usuario.</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={6}>
                <Card className="text-dark shadow-sm">
                  <Card.Body>
                    <h5>PUT</h5>
                    <p>
                      Actualiza un recurso existente, como editar datos de un
                      perfil.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="text-dark shadow-sm">
                  <Card.Body>
                    <h5>DELETE</h5>
                    <p>Elimina un recurso, como borrar un usuario.</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section className="mb-5">
        <Col lg={10} className="mx-auto">
          <Card className="shadow-lg mt-4">
            <Card.Body>
              <h4 className="text-danger">Códigos de Estado HTTP</h4>
              <p>
                Las REST APIs devuelven códigos de estado para indicar el
                resultado de una solicitud:
              </p>
              <ul>
                <li>
                  <strong>200 OK:</strong> La solicitud fue exitosa.
                </li>
                <li>
                  <strong>201 Created:</strong> Se creó un nuevo recurso.
                </li>
                <li>
                  <strong>400 Bad Request:</strong> La solicitud contiene
                  errores o datos inválidos.
                </li>
                <li>
                  <strong>401 Unauthorized:</strong> Se requiere autenticación
                  para acceder al recurso.
                </li>
                <li>
                  <strong>404 Not Found:</strong> El recurso solicitado no
                  existe.
                </li>
                <li>
                  <strong>500 Internal Server Error:</strong> Error en el
                  servidor al procesar la solicitud.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </section>{" "}
      {/* Ejemplo Práctico */}
      <section id="example" className="mb-5">
        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="shadow-lg">
              <Card.Body>
                <h3 className="text-info">Ejemplo Práctico</h3>
                <p>
                  Aquí tienes un ejemplo típico de una REST API para gestionar
                  usuarios:
                </p>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <strong>GET /users</strong>: Recuperar todos los usuarios
                    </Accordion.Header>
                    <Accordion.Body>
                      Devuelve una lista de todos los usuarios disponibles en el
                      sistema.
                      <pre>
                        <code>
                          {`GET /users HTTP/1.1
Host: example.com
Response:
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]`}
                        </code>
                      </pre>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <strong>POST /users</strong>: Crear un nuevo usuario
                    </Accordion.Header>
                    <Accordion.Body>
                      Envía datos en el cuerpo de la solicitud para crear un
                      nuevo usuario.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <strong>PUT /users/{`{id}`}</strong>: Actualizar usuario
                    </Accordion.Header>
                    <Accordion.Body>
                      Modifica la información de un usuario específico usando su
                      identificador.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <strong>DELETE /users/{`{id}`}</strong>: Eliminar usuario
                    </Accordion.Header>
                    <Accordion.Body>
                      Elimina un usuario específico de la base de datos.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Button variant="info" className="mt-4">
                  Explorar Más Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section id="auth">
        <Col lg={10} className="mx-auto">
          <Card className="shadow-lg mt-4">
            <Card.Body>
              <h4 className="text-primary">Autenticación en REST APIs</h4>
              <p>
                Para proteger los recursos, las REST APIs a menudo requieren
                autenticación. Métodos comunes incluyen:
              </p>
              <ul>
                <li>
                  <strong>Token-Based Authentication:</strong> El cliente envía
                  un token (por ejemplo, JWT) en las cabeceras de la solicitud (
                  <code>Authorization: Bearer TOKEN</code>).
                </li>
                <li>
                  <strong>OAuth:</strong> Protocolo estándar para delegar
                  autorización mediante terceros (por ejemplo, Google o
                  Facebook).
                </li>
                <li>
                  <strong>API Keys:</strong> Una clave única generada para
                  identificar y autenticar al cliente.
                </li>
              </ul>
              <p className="mt-3">
                Ejemplo de cabecera con autenticación basada en token:
              </p>
              <div className="bg-dark text-light p-3 rounded">
                <pre>
                  <code>
                    {`GET /users HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsIn...`}
                  </code>
                </pre>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </section>
      <section id="best-practices">
        <Col lg={10} className="mx-auto">
          <Card className="shadow-lg mt-4">
            <Card.Body>
              <h4 className="text-success">
                Buenas Prácticas al Diseñar REST APIs
              </h4>
              <ul>
                <li>
                  <strong>Usar Nombres de Recursos Plurales:</strong>
                  Las URLs deben ser descriptivas y usar plural para los
                  recursos (<code>/users</code> en lugar de <code>/user</code>).
                </li>
                <li>
                  <strong>Hacer uso de los Métodos HTTP:</strong> Asignar
                  operaciones específicas a métodos estándar (<code>GET</code>{" "}
                  para leer, <code>POST</code> para crear, etc.).
                </li>
                <li>
                  <strong>Habilitar Paginación:</strong> Para recursos con
                  muchos datos, incluir parámetros como{" "}
                  <code>?page=1&limit=10</code>.
                </li>
                <li>
                  <strong>Incluir Versionado:</strong> Añadir la versión en la
                  URL para mantener compatibilidad (<code>/v1/users</code>).
                </li>
                <li>
                  <strong>Retornar Mensajes Claros:</strong> Asegurarse de que
                  las respuestas incluyan suficiente información sobre errores o
                  éxito.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </section>
    </Container>
  );
};

export default RestApiPage;
