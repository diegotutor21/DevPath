import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import "../assets/css/Frontend.css";

const Frontend = () => {
  const technologies = [
    {
      title: "HTML",
      description:
        "Lenguaje de marcado para estructurar el contenido de la web.",
      image: "images/que-es-html.jpg",
      link: "/html",
    },
    {
      title: "CSS",
      description:
        "Estilos en cascada para diseñar y darle formato a las páginas web.",
      image: "images/css.avif",
      link: "/css",
    },
    {
      title: "JavaScript",
      description:
        "Lenguaje de programación para agregar interactividad a los sitios web.",
      image: "images/js.jpg",
      link: "/js",
    },
    {
      title: "React",
      description:
        "Librería de JavaScript para construir interfaces de usuario.",
      image: "images/react.png",
      link: "/react",
    },
    {
      title: "Bootstrap",
      description:
        "Framework CSS para crear sitios web responsivos rápidamente.",
      image: "images/bootstrap.jpg",
      link: "/bootstrap",
    },
    {
      title: "Git-GitHub",
      description:
        "Herramienta de control de versiones para gestionar el código de manera eficiente, y plataforma de colaboración para compartir y contribuir en proyectos de desarrollo.",
      image: "images/Git-GitHub.png",
      link: "/git-github",
    },
  ];

  return (
    <Container>
      {/* Sección de texto explicativo con imagen */}
      <Row className="my-5 align-items-center">
        <Col md={6}>
          <h2>¿Qué es el Frontend?</h2>
          <p>
            El desarrollo frontend se refiere a la creación de la parte visual
            de una página web, es decir, lo que los usuarios ven e interactúan.
            Las tecnologías frontend permiten estructurar contenido, aplicar
            estilos y añadir interactividad a las páginas web.
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="images/Frontend.png" // Coloca la ruta correcta de la imagen explicativa
            alt="Imagen explicativa del Frontend"
            fluid
          />
        </Col>
      </Row>

      {/* Sección de tarjetas de tecnologías */}
      <h2 className="my-5 text-center">
        Tecnologías Fundamentales del Frontend
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

export default Frontend;
