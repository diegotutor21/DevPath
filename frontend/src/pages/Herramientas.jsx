import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Backend = () => {
  const technologies = [
    {
      title: "Git-GitHub",
      description:
        "Sistema de control de versiones que permite gestionar y colaborar en proyectos de software de manera eficiente.",
      image: "images/Git-GitHub.png",
      link: "/git-github",
    },
    {
      title: "Fundamentos de Diseño UI/UX",
      description:
        "Conocimientos fundamentales de Diseño UI/UX para crear interfaces de usuario intuitivas y atractivas.",
      image: "images/Diseño.webp",
      link: "/fundamentos-diseño-ui-ux",
    },
    {
      title: "Metodologías Ágiles (Scrum/Kanban)",
      description:
        "Teóricas y prácticas para mejorar la eficiencia, calidad y colaboración en el desarrollo de software.",
      image: "images/SK.webp",
      link: "/metodologias-agiles",
    },
    {
      title: "VS Code + Extensiones",
      description:
        "Extensiones de desarrollo web para mejorar la experiencia del usuario.",
      image: "images/VS.png",
      link: "/vs-code-extensiones",
    },
    {
      title: "Conceptos básicos de Inteligencia Artificial",
      description:
        "Conceptos fundamentales de Inteligencia Artificial para mejorar la inteligencia del software.",
      image: "images/IAs.jpeg",
      link: "/conceptos-basicos-de-inteligencia-artificial",
    },
    {
      title: "CI/CD (Integración y despliegue continuo) ",
      description:
        "Teóricas y prácticas para mejorar la eficiencia, calidad y colaboración en el desarrollo de software.",
      image: "images/CI-CD.jpg",
      link: "/ci-cd",
    },
  ];

  return (
    <Container className="py-5">
      {/* Sección explicativa del Backend */}
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h2 className="fw-bold text-primary">
            Herramientas y Buenas Prácticas
          </h2>
          <p className="fs-5">
            Las herramientas y buenas prácticas en desarrollo web mejoran la
            eficiencia, organización y calidad del código. Esto incluye el uso
            de Git, GitHub, metodologías ágiles y entornos de desarrollo como VS
            Code. También es importante considerar UX/UI y inteligencia
            artificial para una mejor experiencia del usuario.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <Image src="/images/herramientas.png" alt="Backend" fluid rounded />
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

export default Backend;
