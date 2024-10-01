import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Card,
  Table,
} from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      {/* Banner Principal */}
      <header className="bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-4">
            <b>Tu ruta del desarrollo</b>
          </h1>
          <p className="lead">
            Descubre lo esencial para comenzar tu camino en el desarrollo web
          </p>
          <Button variant="light" size="lg" className="mt-3">
            Explorar Tareas
          </Button>
        </Container>
      </header>

      {/* Texto sobre la página y logo */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <b>DevPath</b> es tu plataforma educativa para aprender las bases
              del desarrollo web. Aquí aprenderás sobre las tecnologías clave
              que te permitirán convertirte en un desarrollador profesional.
            </p>
            <p>
              Desde la construcción de la interfaz de usuario con las
              tecnologías de <b>Frontend</b>, como HTML, CSS, y JavaScript,
              hasta la gestión de la lógica y datos en el <b>Backend</b>
              con herramientas como Node.js y bases de datos.
            </p>
            <p>
              Explora ambos mundos y crea aplicaciones web completas que
              funcionen a la perfección tanto en la parte visual como en el
              servidor.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="images/Logo1.png" // Asegúrate de cambiar esto por la ruta correcta del logo
              alt="DevPath Logo"
              fluid
            />
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
    </>
  );
};

export default HomePage;
