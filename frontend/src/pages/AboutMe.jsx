import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      title: "Guía Estructurada",
      description:
        "Camino claro y organizado para comenzar en el desarrollo web, desde los conceptos más básicos hasta tecnologías avanzadas.",
      icon: "🗺️",
    },
    {
      title: "Enfoque Práctico",
      description:
        "Contenido orientado a la aplicación real de conocimientos, con ejemplos y casos de uso comunes en la industria.",
      icon: "⚡",
    },
    {
      title: "Recursos Seleccionados",
      description:
        "Cuidadosa selección de recursos, tutoriales y herramientas para complementar tu aprendizaje.",
      icon: "📚",
    },
    {
      title: "Actualización Constante",
      description:
        "Contenido actualizado regularmente para mantenerse al día con las últimas tendencias y mejores prácticas en desarrollo web.",
      icon: "🔄",
    },
  ];

  const futureFeatures = [
    {
      title: "Comunidad DevPath",
      description:
        "Un espacio para que los desarrolladores principiantes se conecten, compartan experiencias y se apoyen mutuamente.",
      icon: "👥",
    },
    {
      title: "Sistema de Progreso",
      description:
        "Seguimiento personalizado de tu avance a través de los diferentes temas y tecnologías.",
      icon: "📊",
    },
    {
      title: "Proyectos Guiados",
      description:
        "Colección de proyectos paso a paso para aplicar los conocimientos adquiridos.",
      icon: "🚀",
    },
    {
      title: "Mentorías",
      description:
        "Conexión con desarrolladores experimentados para guía personalizada.",
      icon: "🤝",
    },
    {
      title: "Recursos Interactivos",
      description:
        "Ejercicios prácticos y desafíos de código integrados en la plataforma.",
      icon: "💻",
    },
    {
      title: "Paths Especializados",
      description:
        "Rutas de aprendizaje específicas para diferentes áreas del desarrollo web.",
      icon: "🎯",
    },
  ];

  return (
    <div className="overflow-hidden">
      {" "}
      {/* Wrapper para prevenir scroll horizontal */}
      {/* Header Section - Fondo claro */}
      <div className="bg-white">
        <Container className="py-5">
          <Row className="mb-5 align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <Image src="/images/Logo1.png" alt="DevPath Logo" fluid />
            </Col>
            <Col md={6}>
              <p className="fs-4">
                Tu guía inicial en el mundo del desarrollo web
              </p>
              <p className="lead">
                DevPath nace con un propósito claro: ser el punto de partida
                ideal para aquellos que desean adentrarse en el desarrollo web,
                proporcionando una base sólida antes de sumergirse en este
                emocionante campo.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
      {/* Mission Section - Color personalizado */}
      <div style={{ backgroundColor: "#f4fefd" }}>
        <Container className="py-5">
          <Row>
            <Col>
              <div className="p-4">
                <h2 className="text-center mb-4">Nuestra Misión</h2>
                <p className="fs-5 text-center">
                  Facilitar el inicio en el desarrollo web proporcionando una
                  ruta clara y estructurada, eliminando la confusión inicial y
                  construyendo una base sólida de conocimientos fundamentales.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
      {/* Current Features Section - Fondo blanco */}
      <div className="bg-white">
        <Container className="py-5">
          <h2 className="text-center mb-4">¿Qué ofrecemos actualmente?</h2>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={6} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="display-4 mb-3">{feature.icon}</div>
                    <Card.Title className="fw-bold mb-3">
                      {feature.title}
                    </Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <hr />
      {/* Future Features Section - Color personalizado */}
      <div style={{ backgroundColor: "#f4fefd" }}>
        <Container className="py-5">
          <h2 className="text-center mb-4">Próximamente en DevPath</h2>
          <p className="text-center fs-5 mb-4">
            Estamos trabajando constantemente para mejorar tu experiencia de
            aprendizaje. Estas son algunas de las características que estamos
            desarrollando:
          </p>
          <Row className="g-4">
            {futureFeatures.map((feature, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="h1 mb-3">{feature.icon}</div>
                    <Card.Title className="fw-bold mb-3">
                      {feature.title}
                    </Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <hr />
      {/* Vision Section - Fondo blanco */}
      <div className="bg-white">
        <Container className="py-5">
          <Row>
            <Col>
              <div className="text-center">
                <h2 className="mb-4">Nuestra Visión</h2>
                <p className="fs-5">
                  Aspiramos a ser la plataforma de referencia para quienes dan
                  sus primeros pasos en el desarrollo web, proporcionando no
                  solo conocimientos técnicos sino también una clara dirección
                  en su viaje de aprendizaje.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
      {/* Call to Action - Fondo azul */}
      <div className="bg-primary">
        <Container className="py-5">
          <Row>
            <Col className="text-center">
              <div className="text-white p-5">
                <h2 className="mb-3">¿Listo para comenzar tu viaje?</h2>
                <p className="fs-5 mb-4">
                  Explora nuestros recursos y comienza tu camino en el
                  desarrollo web con una base sólida.
                </p>
                <Link to="/" className="btn btn-light btn-lg">
                  Explorar Recursos
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
