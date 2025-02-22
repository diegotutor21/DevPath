import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Backend = () => {
  const technologies = [
    {
      title: "Node.js",
      description:
        "Entorno de ejecución para JavaScript en el servidor, ideal para construir aplicaciones escalables.",
      image: "images/nodejs.jpg",
      link: "/node",
    },
    {
      title: "Express.js",
      description:
        "Framework minimalista para Node.js que facilita la creación de servidores y APIs REST.",
      image: "images/express.png",
      link: "/express",
    },
    {
      title: "REST APIs",
      description:
        "Modelo de comunicación que permite la interacción entre el frontend y el backend de forma estructurada.",
      image: "images/rest-api.png",
      link: "/rest-apis",
    },
    {
      title: "JWT (JSON Web Tokens)",
      description:
        "Método seguro para autenticación de usuarios mediante tokens en lugar de sesiones.",
      image: "images/jwt.png",
      link: "/jwt",
    },
    {
      title: "Middleware",
      description:
        "Funciones intermedias que procesan las peticiones antes de llegar a su destino final, permitiendo validaciones, transformaciones y control de acceso.",
      image: "images/Middleware.png",
      link: "/middleware",
    },
    {
      title: "MVC",
      description:
        "Patrón de arquitectura que separa la lógica en Modelos (datos), Vistas (interfaz) y Controladores (lógica de negocio) para mejor organización del código.",
      image: "images/MVC.jpg",
      link: "/mvc",
    },
  ];

  return (
    <Container className="py-5">
      {/* Sección explicativa del Backend */}
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h2 className="fw-bold text-primary">¿Qué es el Backend?</h2>
          <p className="fs-5">
            El desarrollo backend se encarga de la lógica del servidor, el
            procesamiento de datos y la comunicación con bases de datos. Es la
            parte &quot;invisible&quot; de una aplicación web que maneja toda la
            lógica de negocio y asegura el funcionamiento correcto del sistema.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <Image src="/images/Backend.webp" alt="Backend" fluid rounded />
        </Col>
      </Row>

      {/* Sección de tarjetas de tecnologías */}
      <h2 className="text-center fw-bold text-secondary mb-4">
        Tecnologías Fundamentales del Backend
      </h2>
      <Row className="justify-content-center g-4">
        {technologies.map((tech, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center">
            <Card
              style={{
                width: "18rem",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              className="shadow-sm border-0"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0px 10px 20px rgba(0, 0, 0, 0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 20px rgba(0, 0, 0, 0.7)";
              }}
            >
              <Card.Img
                variant="top"
                src={tech.image}
                alt={tech.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{tech.title}</Card.Title>
                <Card.Text className="text-muted">{tech.description}</Card.Text>
                <Link to={tech.link} className="btn btn-primary">
                  Leer más
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Backend;
