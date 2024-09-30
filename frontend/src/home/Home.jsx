import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* Banner Principal */}
      <header className="bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-4">Bienvenido a <b>&lt;/&gt;DevPath</b></h1>
          <p className="lead">
            Descubre lo esencial para comenzar tu camino en el desarrollo web
          </p>
          <Button variant="light" size="lg" className="mt-3">
            Explorar Tareas
          </Button>
        </Container>
      </header>

      {/* Secciones Destacadas */}
      <Container className="my-5">
        <Row>
          <Col md={6} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Frontend Essentials</Card.Title>
                <Card.Text>
                  Aprende las bases del desarrollo frontend: HTML, CSS,
                  JavaScript y frameworks.
                </Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Backend Basics</Card.Title>
                <Card.Text>
                  Explora las tecnologías de backend: Node.js, APIs, bases de
                  datos y más.
                </Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Blog con artículos educativos */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Últimos artículos educativos</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="images/que-es-html.jpg" />
              <Card.Body>
                <Card.Title>¿Qué es HTML y por qué es importante?</Card.Title>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="images/react.png" />
              <Card.Body>
                <Card.Title>Primeros pasos con React</Card.Title>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="images/rest_api.png" />
              <Card.Body>
                <Card.Title>Introducción a REST APIs</Card.Title>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Ruta de Aprendizaje */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Ruta de Aprendizaje</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Etapa</th>
              <th>Contenido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aprender HTML y CSS</td>
            </tr>
            <tr>
              <td>2</td>
              <td>JavaScript</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Frameworks (React, Vue)</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Backend y APIs</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      {/* Foro de Preguntas */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Foro de Preguntas</h2>
        <Row className="text-center">
          <Col>
            <Button variant="primary" size="lg">
              Haz una pregunta
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
