import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import "../assets/css/Backend.css";

const Backend = () => {
  const technologies = [
    {
      title: "Node.js",
      description:
        "Entorno de ejecución para JavaScript en el servidor, que permite construir aplicaciones escalables y rápidas, ideal para aplicaciones en tiempo real.",
      image: "images/nodejs.png",
      link: "/nodejs",
    },
    {
      title: "Express.js",
      description:
        "Framework web minimalista para Node.js que simplifica la creación de APIs y aplicaciones web, facilitando el manejo de rutas y solicitudes HTTP.",
      image: "images/express.png",
      link: "/expressjs",
    },
    {
      title: "MongoDB",
      description:
        "Base de datos NoSQL orientada a documentos, ideal para aplicaciones que manejan grandes volúmenes de datos no estructurados o semiestructurados.",
      image: "images/mongodb.png",
      link: "/mongodb",
    },
    {
      title: "MySQL",
      description:
        "Sistema de gestión de bases de datos relacional, utilizado para almacenar y gestionar datos estructurados. Es conocido por su fiabilidad y rendimiento.",
      image: "images/mysql.webp",
      link: "/mysql",
    },
    {
      title: "REST APis",
      description:
        "Arquitectura para diseñar interfaces de programación de aplicaciones (APIs), que permite la comunicación entre diferentes sistemas a través de HTTP.",
      image: "images/rest_api.png",
      link: "/restapis",
    },
    {
      title: "JWT (JSON Web Tokens)",
      description:
        "Estándar para la creación de tokens seguros que se utilizan para la autenticación y el intercambio de información entre dos partes de forma compacta y segura.",
      image: "images/jwt.png",
      link: "/jwt",
    },
  ];

  return (
    <Container>
      {/* Sección de texto explicativo con imagen */}
      <Row className="my-5 align-items-center">
        <Col md={6}>
          <h2>¿Qué es el Backend?</h2>
          <p>
            El desarrollo backend se refiere a la creación de la parte del
            servidor de una página web, es decir, lo que procesa y responde a
            las solicitudes del cliente. Las tecnologías backend permiten
            gestionar datos, realizar operaciones en la base de datos y
            proporcionar resultados al cliente.
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="images/Backend.webp" // Coloca la ruta correcta de la imagen explicativa
            alt="Imagen explicativa del Backend"
            fluid
          />
        </Col>
      </Row>

      {/* Sección de tarjetas de tecnologías */}
      <h2 className="my-5 text-center">
        Tecnologías Fundamentales del Backend
      </h2>
      <Row className="justify-content-center">
        {technologies.map((tech, index) => (
          <Col
            md={4}
            key={index}
            className="mb-4 d-flex justify-content-center"
          >
            <Card
              style={{ width: "25rem", transition: "box-shadow 0.3s" }}
              className="tech-card"
            >
              <Card.Img
                variant="top"
                src={tech.image}
                alt={tech.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{tech.title}</Card.Title>
                <Card.Text>{tech.description}</Card.Text>
                <Button variant="primary" href={tech.link}>
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Backend;
