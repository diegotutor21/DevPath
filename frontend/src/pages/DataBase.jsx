import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Database = () => {
  const technologies = [
    {
      title: "MongoDB",
      description:
        "Base de datos NoSQL orientada a documentos, ideal para aplicaciones que requieren escalabilidad y flexibilidad en el esquema de datos.",
      image: "images/mongodb.png",
      link: "/mongodb",
    },
    {
      title: "MySQL",
      description:
        "Sistema de gestión de bases de datos relacional más popular, perfecto para aplicaciones que requieren relaciones complejas entre datos.",
      image: "images/mysql.webp",
      link: "/mysql",
    },
    {
      title: "SQLite",
      description:
        "Base de datos SQL ligera y autocontenida, excelente para aplicaciones móviles y desarrollo local que no requieren un servidor separado.",
      image: "images/sqlite.png",
      link: "/sqlite",
    },
    {
      title: "PostgreSQL",
      description:
        "Sistema de base de datos relacional avanzado con características robustas para datos complejos y alta concurrencia.",
      image: "images/postgreSQL.png",
      link: "/postgresql",
    },
  ];

  return (
    <Container className="py-5">
      {/* Sección explicativa de Bases de Datos */}
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h2 className="fw-bold text-primary">Bases de Datos</h2>
          <p className="fs-5">
            Las bases de datos son fundamentales en el desarrollo web,
            permitiendo almacenar y gestionar la información de manera
            eficiente. Cada tipo de base de datos tiene sus propias fortalezas y
            casos de uso ideales.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <Image src="/images/database.jpg" alt="Database" fluid rounded />
        </Col>
      </Row>

      {/* Sección de tarjetas de tecnologías */}
      <h2 className="text-center fw-bold text-secondary mb-4">
        Sistemas de Bases de Datos Populares
      </h2>
      <Row className="justify-content-center g-4">
        {technologies.map((tech, index) => (
          <Col
            key={index}
            md={6} // Para 2 cards por línea
            // md={4}  <- Para 3 cards por línea
            className="d-flex justify-content-center"
          >
            <Card
              style={{
                width: "24rem", // Tarjetas más anchas para 2 por línea
                // width: "18rem",  <- Tamaño original para 3 por línea
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
                style={{ height: "200px", objectFit: "cover" }} // Altura aumentada para 2 por línea
                // style={{ height: "180px", objectFit: "cover" }}  <- Altura original para 3 por línea
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

export default Database;
