// MongoDBBasics.jsx
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
import mongoExamples from "../examples/mongodb";

const MongoDBBasics = () => {
  return (
    <div className="mongodb-basics-page">
      {/* Hero Section */}
      <div style={{ backgroundColor: "#001e2b" }} className="text-dark py-5">
        <Container>
          <Row className="align-items-center" style={{ color: "white" }}>
            <Col md={6}>
              <h1 className="display-4 fw-bold">MongoDB</h1>
              <p className="lead">
                Base de datos NoSQL orientada a documentos, diseñada para
                almacenar grandes volúmenes de datos de forma flexible y
                escalable
              </p>
              <Alert variant="info">
                <strong>¿Por qué MongoDB?</strong> Perfecta para aplicaciones
                modernas que necesitan adaptar su estructura de datos
                fácilmente.
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

      {/* Instalación y Configuración */}
      <Container className="py-5">
        <section className="mb-5">
          <h2 className="border-bottom border-success pb-2 mb-4">
            Comenzando con MongoDB
          </h2>
          <Tabs defaultActiveKey="local" className="mb-3">
            <Tab eventKey="local" title="Instalación Local">
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Instalación Local de MongoDB</Card.Title>
                  <pre className="bg-light p-3 rounded">
                    <code>{mongoExamples.installation.local}</code>
                  </pre>
                </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="atlas" title="MongoDB Atlas">
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Configuración en MongoDB Atlas</Card.Title>
                  <Card.Text>
                    MongoDB Atlas es la solución en la nube oficial de MongoDB:
                  </Card.Text>
                  <pre className="bg-light p-3 rounded">
                    <code>{mongoExamples.installation.atlas}</code>
                  </pre>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </section>

        {/* Operaciones Básicas */}
        <section className="mb-5">
          <h2 className="border-bottom border-success pb-2 mb-4">
            Operaciones CRUD Básicas
          </h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <i className="bi bi-plus-circle me-2"></i>
                Crear (Create)
              </Accordion.Header>
              <Accordion.Body>
                <pre className="bg-light p-3 rounded">
                  <code>{mongoExamples.crud.create}</code>
                </pre>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <i className="bi bi-search me-2"></i>
                Leer (Read)
              </Accordion.Header>
              <Accordion.Body>
                <pre className="bg-light p-3 rounded">
                  <code>{mongoExamples.crud.read}</code>
                </pre>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <i className="bi bi-pencil me-2"></i>
                Actualizar (Update)
              </Accordion.Header>
              <Accordion.Body>
                <pre className="bg-light p-3 rounded">
                  <code>{mongoExamples.crud.update}</code>
                </pre>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <i className="bi bi-trash me-2"></i>
                Eliminar (Delete)
              </Accordion.Header>
              <Accordion.Body>
                <pre className="bg-light p-3 rounded">
                  <code>{mongoExamples.crud.delete}</code>
                </pre>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>

        {/* Mongoose */}
        <section className="mb-5">
          <h2 className="border-bottom border-success pb-2 mb-4">
            Mongoose: ODM para MongoDB
          </h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Modelado con Mongoose</Card.Title>
              <Alert variant="info">
                Mongoose es un ODM (Object Document Mapper) que facilita el
                trabajo con MongoDB en Node.js, añadiendo validación y
                funcionalidades adicionales.
              </Alert>
              <pre className="bg-light p-3 rounded">
                <code>{mongoExamples.mongoose.schema}</code>
              </pre>
            </Card.Body>
          </Card>
        </section>

        {/* Consultas Avanzadas */}
        <section className="mb-5">
          <h2 className="border-bottom border-success pb-2 mb-4">
            Consultas Avanzadas
          </h2>
          <Tabs defaultActiveKey="filters" className="mb-3">
            <Tab eventKey="filters" title="Filtros">
              <pre className="bg-light p-3 rounded">
                <code>{mongoExamples.advanced.filters}</code>
              </pre>
            </Tab>
            <Tab eventKey="aggregation" title="Agregaciones">
              <pre className="bg-light p-3 rounded">
                <code>{mongoExamples.advanced.aggregation}</code>
              </pre>
            </Tab>
            <Tab eventKey="population" title="Población">
              <pre className="bg-light p-3 rounded">
                <code>{mongoExamples.advanced.population}</code>
              </pre>
            </Tab>
          </Tabs>
        </section>

        {/* Mejores Prácticas */}
        <section className="bg-light p-4 rounded-3">
          <h2 className="text-center mb-4">Mejores Prácticas en MongoDB</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card>
                <Card.Body>
                  <h5>Diseño de Esquemas</h5>
                  <ul>
                    <li>Diseñar pensando en los patrones de acceso</li>
                    <li>Evitar referencias innecesarias</li>
                    <li>Usar índices apropiadamente</li>
                    <li>Considerar el tamaño de los documentos</li>
                  </ul>
                  <pre className="bg-light p-3 rounded">
                    <code>{mongoExamples.bestPractices}</code>
                  </pre>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default MongoDBBasics;
