import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"; // Actualizamos FaTwitter a FaXTwitter

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#032030", padding: "20px 0", color: "white" }}>
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 &lt;/&gt;DevPath. Todos los derechos reservados.</p>
          </Col>
          <Col md={6}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
                <FaYoutube size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer" style={{ color: "white", margin: "0 10px" }}>
                <FaTwitter size={24} /> {/* Logo de X (anteriormente Twitter) */}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
