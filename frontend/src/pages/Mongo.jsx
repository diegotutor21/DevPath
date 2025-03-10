import { Container, Row, Col, Alert, Card, ListGroup, Tabs, Tab, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const MongoDBPage = () => {
  const isAuthenticated = () => {
    const userInfo = localStorage.getItem("userInfo");
    console.log("User Info:", userInfo); // Para debuggear

    // Parsea el JSON y verifica que no esté vacío
    return userInfo && JSON.parse(userInfo) !== null;
  };

  return (
    <div className="mongodb-concepts-page">
      {/* Hero Section */}
      <div style={{ backgroundColor: "#001e2b" }} className="text-dark py-5">
        <Container>
          <Row className="align-items-center" style={{ color: "white" }}>
            <Col md={6}>
              <h1 className="display-4 fw-bold">MongoDB</h1>
              <p className="lead">
                Base de datos NoSQL orientada a documentos, diseñada para
                aplicaciones modernas que requieren flexibilidad y escalabilidad
              </p>
              <Alert variant="info">
                <strong>¿Por qué MongoDB?</strong> La solución perfecta para
                aplicaciones que necesitan adaptarse rápidamente a cambios y
                manejar datos no estructurados.
              </Alert>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="/images/mongodb.jpg"
                alt="MongoDB Logo"
                style={{ maxWidth: "75%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Qué es MongoDB - Sección visible para todos */}
      <Container className="py-5">
        <section className="mb-5">
          <h2 className="border-bottom border-success pb-2 mb-4">
            ¿Qué es MongoDB?
          </h2>
          <Row>
            <Col md={8}>
              <p>
                MongoDB es una base de datos{" "}
                <strong>NoSQL orientada a documentos</strong> que almacena datos
                en documentos flexibles similares a JSON, lo que significa que
                los campos pueden variar de un documento a otro y la estructura
                de datos puede cambiar con el tiempo.
              </p>
              <p>
                A diferencia de las bases de datos relacionales tradicionales,
                MongoDB no requiere un esquema predefinido, permitiendo una
                mayor flexibilidad y adaptabilidad a medida que evolucionan las
                aplicaciones.
              </p>
              <Alert variant="success">
                <strong>Dato clave:</strong> El nombre &quot;MongoDB&quot;
                proviene de &quot;humongous&quot; (enorme), reflejando su
                capacidad para manejar grandes volúmenes de datos.
              </Alert>
            </Col>
            <Col md={4}>
              <Card className="bg-light">
                <Card.Body>
                  <Card.Title>Características Principales</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Documentos tipo JSON (BSON)</ListGroup.Item>
                    <ListGroup.Item>Esquemas dinámicos</ListGroup.Item>
                    <ListGroup.Item>Escalabilidad horizontal</ListGroup.Item>
                    <ListGroup.Item>Alta disponibilidad</ListGroup.Item>
                    <ListGroup.Item>Índices secundarios</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* El resto del contenido requiere autenticación */}
        {!isAuthenticated() && (
          <div className="text-center my-5 py-5">
            <Container>
              <Card className="shadow border-0 p-4">
                <Card.Body>
                  <h3 className="mb-3 text-primary">
                    ¿Quieres aprender más sobre MongoDB?
                  </h3>
                  <p className="fs-5 mb-4">
                    Para acceder al contenido completo sobre MongoDB, sus casos de uso,
                    conceptos fundamentales y comparativas con bases SQL, inicia sesión o
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

        {/* Contenido adicional visible solo para usuarios autenticados */}
        {isAuthenticated() && (
          <>
            {/* Para qué sirve MongoDB */}
            <section className="mb-5">
              <h2 className="border-bottom border-success pb-2 mb-4">
                ¿Para qué sirve MongoDB?
              </h2>
              <Tabs defaultActiveKey="casos" className="mb-3">
                <Tab eventKey="casos" title="Casos de Uso">
                  <Row className="g-4">
                    <Col md={4}>
                      <Card className="h-100">
                        <Card.Header className="bg-primary text-white">
                          <i className="bi bi-globe me-2"></i>
                          Aplicaciones Web
                        </Card.Header>
                        <Card.Body>
                          <p>
                            Ideal para aplicaciones web modernas que manejan datos
                            heterogéneos y requieren tiempos de desarrollo cortos
                            con esquemas que evolucionan rápidamente.
                          </p>
                          <Badge bg="secondary">E-commerce</Badge>{" "}
                          <Badge bg="secondary">Redes Sociales</Badge>{" "}
                          <Badge bg="secondary">Portales de Contenido</Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="h-100">
                        <Card.Header className="bg-success text-white">
                          <i className="bi bi-graph-up me-2"></i>
                          Big Data y Análisis
                        </Card.Header>
                        <Card.Body>
                          <p>
                            Excelente para almacenar y procesar grandes volúmenes de
                            datos no estructurados, facilitando el análisis en
                            tiempo real y la integración con herramientas de BI.
                          </p>
                          <Badge bg="secondary">Análisis Predictivo</Badge>{" "}
                          <Badge bg="secondary">IoT</Badge>{" "}
                          <Badge bg="secondary">Logs de Aplicaciones</Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="h-100">
                        <Card.Header className="bg-warning text-dark">
                          <i className="bi bi-phone me-2"></i>
                          Aplicaciones Móviles
                        </Card.Header>
                        <Card.Body>
                          <p>
                            Perfecta para desarrollar backends de aplicaciones
                            móviles gracias a su modelo de datos flexible y soporte
                            para sincronización offline con MongoDB Realm.
                          </p>
                          <Badge bg="secondary">Geolocalización</Badge>{" "}
                          <Badge bg="secondary">Notificaciones</Badge>{" "}
                          <Badge bg="secondary">Sincronización</Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="ventajas" title="Ventajas">
                  <Card className="mb-4">
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          <h5>Ventajas Técnicas</h5>
                          <ul>
                            <li>
                              <strong>Rendimiento:</strong> Consultas más rápidas al
                              almacenar datos relacionados juntos
                            </li>
                            <li>
                              <strong>Escalabilidad:</strong> Escalado horizontal
                              mediante fragmentación (sharding)
                            </li>
                            <li>
                              <strong>Flexibilidad:</strong> No requiere migraciones
                              complejas al cambiar la estructura
                            </li>
                            <li>
                              <strong>Consultas avanzadas:</strong> Framework de
                              agregación potente para análisis complejos
                            </li>
                          </ul>
                        </Col>
                        <Col md={6}>
                          <h5>Ventajas para el Negocio</h5>
                          <ul>
                            <li>
                              <strong>Time-to-market:</strong> Desarrollo más rápido
                              con esquemas adaptativos
                            </li>
                            <li>
                              <strong>Reducción de costos:</strong> Infraestructura
                              más eficiente que bases SQL tradicionales
                            </li>
                            <li>
                              <strong>Adaptabilidad:</strong> Evoluciona fácilmente
                              con los requisitos cambiantes
                            </li>
                            <li>
                              <strong>Soporte:</strong> Robusto ecosistema comercial
                              y comunidad activa
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab>
              </Tabs>
            </section>

            {/* Conceptos Fundamentales */}
            <section className="mb-5">
              <h2 className="border-bottom border-success pb-2 mb-4">
                Conceptos Fundamentales de MongoDB
              </h2>
              <Row className="g-4">
                <Col lg={6}>
                  <Card className="mb-3">
                    <Card.Header className="bg-primary text-white">
                      Documentos, Colecciones y Bases de Datos
                    </Card.Header>
                    <Card.Body>
                      <p>
                        En MongoDB, los datos se organizan en{" "}
                        <strong>documentos</strong> (objetos similares a JSON), que
                        se agrupan en <strong>colecciones</strong> (equivalente a
                        tablas en SQL). Las colecciones existen dentro de una{" "}
                        <strong>base de datos</strong>.
                      </p>
                      <div className="bg-light p-3 rounded">
                        <h6>Jerarquía de datos en MongoDB:</h6>
                        <p>
                          Base de Datos → Colecciones → Documentos → Campos →
                          Valores
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header className="bg-info text-white">
                      Esquemas Dinámicos
                    </Card.Header>
                    <Card.Body>
                      <p>
                        Los documentos en una misma colección pueden tener
                        <strong> estructuras diferentes</strong>. Esto permite:
                      </p>
                      <ul>
                        <li>Polimorfismo natural a nivel de datos</li>
                        <li>Evolución incremental del modelo de datos</li>
                        <li>
                          Representación de relaciones jerárquicas y complejas
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6}>
                  <Card className="mb-3">
                    <Card.Header className="bg-success text-white">
                      Modelado de Datos
                    </Card.Header>
                    <Card.Body>
                      <p>
                        El modelado en MongoDB sigue diferentes patrones que en
                        bases SQL:
                      </p>
                      <ul>
                        <li>
                          <strong>Datos embebidos:</strong> Almacenar datos
                          relacionados en un solo documento
                        </li>
                        <li>
                          <strong>Referencias:</strong> Mantener referencias entre
                          documentos cuando es necesario
                        </li>
                      </ul>
                      <Alert variant="warning">
                        <strong>Regla general:</strong> Prioriza datos embebidos
                        para mejorar rendimiento, pero usa referencias para datos
                        compartidos o muy grandes.
                      </Alert>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header className="bg-secondary text-white">
                      Escalabilidad y Replicación
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col xs={6}>
                          <h6>Replicación</h6>
                          <p>
                            Copias redundantes de datos en múltiples servidores para
                            alta disponibilidad y recuperación ante desastres.
                          </p>
                        </Col>
                        <Col xs={6}>
                          <h6>Sharding</h6>
                          <p>
                            Distribución de datos en múltiples servidores para
                            escalar horizontalmente y manejar grandes volúmenes de
                            datos.
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </section>

            {/* MongoDB vs SQL */}
            <section className="mb-5">
              <h2 className="border-bottom border-success pb-2 mb-4">
                MongoDB vs. Bases de Datos Relacionales
              </h2>
              <Card className="mb-4">
                <Card.Body>
                  <table className="table table-striped">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th>Concepto</th>
                        <th>MongoDB (NoSQL)</th>
                        <th>Bases SQL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Modelo de datos</td>
                        <td>Documentos BSON (flexible)</td>
                        <td>Tablas y filas (rígido)</td>
                      </tr>
                      <tr>
                        <td>Esquema</td>
                        <td>Dinámico (schema-less)</td>
                        <td>Predefinido y estricto</td>
                      </tr>
                      <tr>
                        <td>Relaciones</td>
                        <td>Documentos embebidos o referencias</td>
                        <td>Joins entre tablas</td>
                      </tr>
                      <tr>
                        <td>Transacciones</td>
                        <td>
                          ACID a nivel de documento (multi-documento desde v4.0)
                        </td>
                        <td>ACID completo</td>
                      </tr>
                      <tr>
                        <td>Escalabilidad</td>
                        <td>Horizontal (sharding nativo)</td>
                        <td>Principalmente vertical</td>
                      </tr>
                      <tr>
                        <td>Casos ideales</td>
                        <td>Datos no estructurados, aplicaciones ágiles</td>
                        <td>Datos estructurados, reporting, BI</td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </section>

            {/* Soluciones MongoDB */}
            <section className="mb-5">
              <h2 className="border-bottom border-success pb-2 mb-4">
                El Ecosistema MongoDB
              </h2>
              <Row className="g-4 mb-4">
                <Col md={4}>
                  <Card className="h-100">
                    <Card.Header className="bg-primary text-white text-center">
                      MongoDB Atlas
                    </Card.Header>
                    <Card.Body>
                      <div className="text-center mb-3">
                        <i className="bi bi-cloud fs-1 text-primary"></i>
                      </div>
                      <p>
                        Base de datos como servicio (DBaaS) completamente gestionada
                        en la nube. Ofrece escalabilidad automática, copias de
                        seguridad, y despliegue en AWS, Azure o Google Cloud.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100">
                    <Card.Header className="bg-success text-white text-center">
                      MongoDB Compass
                    </Card.Header>
                    <Card.Body>
                      <div className="text-center mb-3">
                        <i className="bi bi-tools fs-1 text-success"></i>
                      </div>
                      <p>
                        Interfaz gráfica para explorar y manipular datos. Permite
                        visualizar esquemas, ejecutar consultas, optimizar
                        rendimiento y analizar datos con gráficos interactivos.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100">
                    <Card.Header className="bg-warning text-dark text-center">
                      MongoDB Realm
                    </Card.Header>
                    <Card.Body>
                      <div className="text-center mb-3">
                        <i className="bi bi-phone fs-1 text-warning"></i>
                      </div>
                      <p>
                        Plataforma para desarrollo de aplicaciones móviles y web.
                        Incluye sincronización offline, autenticación, funciones
                        serverless y disparadores para automatizar flujos de
                        trabajo.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </section>

            {/* Call to Action */}
            <section className="bg-light p-4 rounded-3 text-center mb-5">
              <h2 className="mb-3">Empieza con MongoDB</h2>
              <p className="lead">
                Descubre cómo MongoDB puede ayudarte a construir aplicaciones
                modernas y escalables
              </p>
              <div className="mt-4">
                <a
                  href="https://www.mongodb.com/try/download/community"
                  target="_blank"
                  className="btn btn-primary btn-lg mx-2"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-cloud-download me-2"></i>
                  Descargar MongoDB
                </a>
                <a
                  href="https://www.mongodb.com/es/lp/cloud/atlas/try4"
                  target="_blank"
                  className="btn btn-success btn-lg mx-2"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-book me-2"></i>
                  Documentación
                </a>
                <a href="#" className="btn btn-info btn-lg mx-2 text-white">
                  <i className="bi bi-play-circle me-2"></i>
                  Tutorial
                </a>
              </div>
            </section>
          </>
        )}
      </Container>
    </div>
  );
};

export default MongoDBPage;