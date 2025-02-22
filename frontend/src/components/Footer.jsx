import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: "#032030" }}>
      <Container>
        <Row className="mb-4">
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 font-weight-bold">DevPath</h5>
            <p className="mb-4">
              Te ayudamos a dar tus primeros pasos en el mundo del desarrollo
              web. Te apoyamos en el proceso de aprendizaje.
            </p>
            <div className="d-flex social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-white"
              >
                <FaFacebook size={20} className="hover-icon" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-white"
              >
                <FaInstagram size={20} className="hover-icon" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-white"
              >
                <FaYoutube size={20} className="hover-icon" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-white"
              >
                <FaTwitter size={20} className="hover-icon" />
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Enlaces Útiles
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/servicios"
                  className="text-white text-decoration-none"
                >
                  Servicios
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/proyectos"
                  className="text-white text-decoration-none"
                >
                  Proyectos
                </a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="text-white text-decoration-none">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="/contacto" className="text-white text-decoration-none">
                  Contacto
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h5 className="text-uppercase mb-4 font-weight-bold">Contacto</h5>
            <p className="mb-3">
              <FaMapMarkerAlt className="me-2" /> San Miguel de Tucumán, Tucumán
            </p>
            <p className="mb-3">
              <FaEnvelope className="me-2" /> info@devpath.com
            </p>
            <p className="mb-3">
              <FaPhone className="me-2" /> +54 381 694-0503
            </p>
          </Col>
        </Row>

        <hr className="mb-4" />

        <Row className="align-items-center">
          <Col md={7} lg={8}>
            <p className="mb-0">
              © 2024 <strong>DevPath</strong>. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={5} lg={4}>
            <ul className="list-inline text-md-end mb-0">
              <li className="list-inline-item">
                <a
                  href="/privacidad"
                  className="text-white text-decoration-none"
                >
                  Privacidad
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="/terminos" className="text-white text-decoration-none">
                  Términos
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="/faq" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <style>{`
        .hover-icon:hover {
          opacity: 0.8;
          transform: scale(1.1);
          transition: all 0.3s ease;
        }
        footer {
          background-color: #032030 !important;
        }
        hr {
          background-color: rgba(255, 255, 255, 0.1);
        }
        a:hover {
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
