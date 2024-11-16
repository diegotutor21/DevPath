import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Card,
  Table,
} from "react-bootstrap";
import "../assets/css/Home.css";

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
              hasta la gestión de la lógica y datos en el <b>Backend </b>
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
            <Card className="carta">
              <Card.Img variant="top" src="images/que-es-html.jpg" />
              <Card.Body>
                <Card.Title>¿Qué es HTML y por qué es importante?</Card.Title>
                <Button variant="primary" href="/html">
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="carta">
              <Card.Img variant="top" src="images/react.png" />
              <Card.Body>
                <Card.Title>Primeros pasos con React</Card.Title>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="carta">
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
        <h2 className="text-center mb-4">Ruta de Aprendizaje en el Frontend</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Etapas</th>
              <th>Contenidos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <b>HTML y CSS:</b> Son las bases de cualquier página web. HTML
                estructura el contenido y CSS lo estiliza.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <b>JavaScript:</b> Después de aprender cómo estructurar y
                diseñar con HTML y CSS, necesitas entender la interactividad en
                la web con JavaScript.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <b>Git-GitHub:</b> Desde el principio, es importante aprender a
                gestionar versiones de tu código y colaborar con otros. Git es
                esencial para el control de versiones, y GitHub para la
                colaboración.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <b>Bootstrap:</b> Una vez entiendas HTML, CSS y JavaScript,
                Bootstrap te permitirá crear interfaces rápidas y responsivas
                utilizando un framework de diseño popular.
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <b>React:</b> Es un framework de JavaScript muy usado para
                desarrollar aplicaciones web interactivas y dinámicas. Es ideal
                para construir componentes reutilizables en la interfaz de
                usuario.
              </td>
            </tr>
          </tbody>
        </Table>
        <h2 className="text-center mb-4">Ruta de Aprendizaje en el Backend</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Etapas</th>
              <th>Contenidos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <b>Node.js:</b> Una vez tengas una buena base en JavaScript,
                Node.js te permite ejecutar JavaScript en el servidor, lo que es
                clave para el desarrollo backend.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <b>Express.js:</b> Es el framework backend más popular para
                Node.js, lo que te facilitará la creación de servidores y APIs.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <b>MongoDB:</b> Al aprender cómo manejar bases de datos, MongoDB
                es una buena opción NoSQL que te permitirá almacenar grandes
                cantidades de datos no estructurados.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <b>MySQL:</b> Aunque MongoDB es muy útil, MySQL te enseñará
                sobre bases de datos relacionales, donde los datos se organizan
                en tablas.
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <b>REST APIs:</b> Una vez sepas manejar servidores y bases de
                datos, necesitarás aprender cómo comunicarte con otras
                aplicaciones o servicios a través de APIs REST.
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <b>JWT (JSON Web Tokens):</b> Cuando tu aplicación requiera
                autenticación y seguridad, aprender a manejar JWT te permitirá
                crear aplicaciones más seguras con sistemas de login y
                autenticación.
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default HomePage;
