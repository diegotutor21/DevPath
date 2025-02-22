import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaStar,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Row className="mb-5 bg-primary text-white text-center py-5 w-100 mx-0">
        <Col>
          <h1>Bienvenido a &lt;/&gt;DevPath</h1>
          <p>
            <strong>Tu ruta de aprendizaje en desarrollo web.</strong>
          </p>
          <p>
            Descubre las tecnologías y herramientas que necesitas para comenzar
            a desarrollar tus proyectos.
          </p>
        </Col>
      </Row>

      <hr className="w-100 my-5" />

      <Container className="text-center">
        {/* Sección de Tecnologías */}
        <Row className="mb-5">
          <Col>
            <h2>Rutas de Aprendizaje</h2>
          </Col>
          <p>
            Cada tecnología tiene su propia ruta de aprendizaje que te ayudará a
            avanzar en tu carrera.
          </p>
        </Row>
        <Row className="g-4">
          {[
            {
              title: "Frontend",
              color: "#E44D26",
              text: "HTML, CSS, JavaScript, React, Bootstrap y más.",
              icon: <FaCode size={50} color="#E44D26" />,
              link: "/frontend",
            },
            {
              title: "Backend",
              color: "#6E57E0",
              text: "Node.js, Express, WebSockets, JWT y más.",
              icon: <FaServer size={50} color="#6E57E0" />,
              link: "/backend",
            },
            {
              title: "Bases de Datos",
              color: "#F4A261",
              text: "MongoDB, MySQL, PostgreSQL, Firebase.",
              icon: <FaDatabase size={50} color="#F4A261" />,
              link: "/database",
            },
            {
              title: "Herramientas",
              color: "#2D9CDB",
              text: "Git, GitHub, VSCode, Metodologías Ágiles, npm/yarn.",
              icon: <FaTools size={50} color="#2D9CDB" />,
              link: "/herramientas",
            },
          ].map((item, index) => (
            <Col md={3} key={index}>
              <Card
                className="text-center card-hover"
                style={{ height: "100%" }}
              >
                <Card.Body>
                  {item.icon}
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <Card.Link href={item.link}>Leer más</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <hr className="w-100 my-5" />

      {/* Sección del Editor de Código con fondo personalizado */}
      <div className="w-100" style={{ backgroundColor: "#f4fefd" }}>
        <Container>
          <Row className="py-5">
            <Col md={6} style={{ textAlign: "center" }}>
              <h2>Aprende y Experimenta en &lt;/&gt;DevPath</h2>
              <p>
                DevPath cuenta con un editor de código integrado para que puedas
                practicar y experimentar con diferentes tecnologías sin salir de
                la plataforma.
              </p>
            </Col>
            <Col md={6} style={{ textAlign: "center" }}>
              <img
                src="../../public/images/Favicon.png"
                alt="Editor de Código"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <hr className="w-100 my-5" />

      <Container className="text-center">
        {/* Sección de Niveles de Aprendizaje */}
        <Row className="mt-5">
          <Col>
            <h2>Niveles de Aprendizaje</h2>
            <p>
              Identifica qué tecnologías son adecuadas según tu nivel de
              conocimiento en desarrollo web.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {[
            {
              title: "Principiante",
              color: "#28a745",
              text: "HTML, CSS, JavaScript, Git y GitHub.",
              icon: <FaStar size={50} color="#28a745" />,
            },
            {
              title: "Intermedio",
              color: "#ffc107",
              text: "React, Node.js, Express, REST APIs, Bootstrap.",
              icon: <FaChartLine size={50} color="#ffc107" />,
            },
            {
              title: "Avanzado",
              color: "#dc3545",
              text: "WebSockets, PostgreSQL, Docker, JWT, Metodologías Ágiles.",
              icon: <FaRocket size={50} color="#dc3545" />,
            },
          ].map((item, index) => (
            <Col md={4} key={index}>
              <Card
                className="text-center card-hover"
                style={{ height: "100%" }}
              >
                <Card.Body>
                  {item.icon}
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <br />
      </Container>

      <style>
        {`
          .card-hover {
            transition: transform 0.3s ease-in-out;
          }
          .card-hover:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </>
  );
};

export default Home;
