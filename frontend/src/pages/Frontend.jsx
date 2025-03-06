import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Frontend = () => {
  const technologies = [
    {
      title: "HTML",
      description:
        "El lenguaje fundamental de la web. Define la estructura y el contenido de las páginas utilizando etiquetas y elementos semánticos.",
      image: "/images/que-es-html.jpg",
      link: "/html",
    },
    {
      title: "CSS",
      description:
        "El lenguaje de estilos que define la apariencia de las páginas web. Permite diseñar layouts, aplicar colores, tipografías y animaciones.",
      image: "/images/css.png",
      link: "/css",
    },
    {
      title: "JavaScript",
      description:
        "El lenguaje de programación que da vida a las páginas web. Permite agregar interactividad, manejar eventos y manipular el DOM.",
      image: "/images/js.jpg",
      link: "/js",
    },
    {
      title: "Bootstrap",
      description:
        "Un framework CSS que facilita la creación de interfaces modernas y responsivas con un sistema de rejilla y componentes reutilizables.",
      image: "/images/bootstrap.jpg",
      link: "/bootstrap",
    },
    {
      title: "React",
      description:
        "Una biblioteca de JavaScript para construir interfaces dinámicas y reutilizables basadas en componentes.",
      image: "/images/react.png",
      link: "/react",
    },
    {
      title: "TypeScript",
      description:
        "Un superset de JavaScript que agrega tipado estático, mejorando la escalabilidad y mantenibilidad del código.",
      image: "/images/ts.png",
      link: "/typescript",
    },
  ];

  return (
    <Container className="py-5">
      {/* Sección explicativa del Frontend */}
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h2 className="fw-bold text-primary">¿Qué es el Frontend?</h2>
          <p className="fs-5">
            El desarrollo frontend se encarga de la parte visual y de
            interacción de una página web. Se compone de tecnologías como HTML,
            CSS y JavaScript, además de herramientas como frameworks y
            bibliotecas para mejorar la experiencia del usuario.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <Image src="/images/Frontend.png" alt="Frontend" fluid rounded />
        </Col>
      </Row>

      {/* Sección de tarjetas de tecnologías */}
      <h2 className="text-center fw-bold text-secondary mb-4">
        Tecnologías Fundamentales del Frontend
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
                  "0px 5px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0px 2px 10px rgba(0, 0, 0, 0.1)";
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

export default Frontend;