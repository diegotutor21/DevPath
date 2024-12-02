import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

const JWTPage = () => {
  return (
    <Container className="mt-5">
      {/* Título Principal */}
      <Row className="mb-4">
        <Col>
          <div className="text-center">
            <h1 className="text-success">
              JWT: La Llave Maestra para la Seguridad Web
            </h1>
            <p>
              Un JSON Web Token (JWT) es un estándar abierto (RFC 7519) para
              transmitir información de forma compacta, segura y confiable entre
              partes. Su diseño basado en JSON lo hace flexible y fácil de usar
              en aplicaciones modernas.
            </p>
          </div>
        </Col>
      </Row>

      {/* Sección de Flujo de JWT */}
      <Row className="justify-content-center mb-5">
        <Col lg={10}>
          <Card className="p-4 shadow-sm">
            <h3 className="text-center text-primary">Cómo Funciona JWT</h3>
            <ProgressBar striped variant="success" now={100} className="mb-4" />
            <Row>
              <Col md={4} className="text-center">
                <div className="p-3 border rounded-circle bg-light shadow-sm">
                  <h4>1. Creación</h4>
                  <p>
                    El servidor genera un token firmado, incluyendo información
                    como el ID del usuario o permisos.
                  </p>
                </div>
              </Col>
              <Col md={4} className="text-center">
                <div className="p-3 border rounded-circle bg-light shadow-sm">
                  <h4>2. Transmisión</h4>
                  <p>
                    El cliente guarda el token (en <code>localStorage</code> o
                    cookies) y lo envía con cada solicitud.
                  </p>
                </div>
              </Col>
              <Col md={4} className="text-center">
                <div className="p-3 border rounded-circle bg-light shadow-sm">
                  <h4>3. Verificación</h4>
                  <p>
                    El servidor verifica la firma del token para asegurarse de
                    que no ha sido modificado.
                  </p>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Características y Uso de JWT */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm border-success">
            <Card.Body>
              <h3 className="text-success">Características de JWT</h3>
              <ul>
                <li>Compacto y fácil de transmitir.</li>
                <li>Seguro mediante firmas digitales (HMAC o RSA).</li>
                <li>Compatible con múltiples lenguajes de programación.</li>
                <li>No requiere almacenamiento en el servidor.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm border-info">
            <Card.Body>
              <h3 className="text-info">¿Dónde se Usa JWT?</h3>
              <ul>
                <li>Autenticación de usuarios (login).</li>
                <li>Control de acceso basado en roles.</li>
                <li>Comunicación segura entre servicios.</li>
                <li>Almacenamiento de datos temporales en clientes.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ventajas y Desventajas */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm border-primary">
            <Card.Body>
              <h3 className="text-primary">Ventajas de JWT</h3>
              <ul>
                <li>No necesita sesiones en el servidor.</li>
                <li>Independencia del backend.</li>
                <li>Formato estándar y ampliamente soportado.</li>
                <li>Escalable en sistemas distribuidos.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm border-danger">
            <Card.Body>
              <h3 className="text-danger">Desventajas de JWT</h3>
              <ul>
                <li>Mayor tamaño en comparación con una cookie.</li>
                <li>No se puede invalidar fácilmente en el servidor.</li>
                <li>Exposición a ataques si se almacena inseguro.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Estructura de un JWT */}
      <Row className="mb-5">
        <Col>
          <Card className="bg-dark text-white text-center p-4 shadow-sm">
            <h3>¿Cómo luce un JWT?</h3>
            <p>
              Un JWT tiene tres partes: <strong>Header</strong>,{" "}
              <strong>Payload</strong> y <strong>Signature</strong>, separadas
              por puntos (<code>.</code>).
            </p>
            <p className="text-break">
              <code>
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
                eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
                SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
              </code>
            </p>
          </Card>
        </Col>
      </Row>

      {/* Ejemplo Práctico */}
      <Row className="mt-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="text-warning">Ejemplo de Uso en Node.js</h3>
              <p>
                Este código genera y verifica un JWT usando la librería{" "}
                <code>jsonwebtoken</code>:
              </p>
              <pre className="bg-light p-3 rounded">
                {`const jwt = require('jsonwebtoken');

// Crear un JWT
const token = jwt.sign(
  { userId: 12345, role: 'admin' },
  'clave_secreta',
  { expiresIn: '1h' }
);

// Verificar el JWT
jwt.verify(token, 'clave_secreta', (err, decoded) => {
  if (err) {
    console.log('Token no válido');
  } else {
    console.log('Datos decodificados:', decoded);
  }
});`}
              </pre>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Futuro de JWT */}
      <Row className="mt-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="text-info">El Futuro de JWT</h3>
              <p>
                A medida que las aplicaciones web y móviles evolucionan, los
                JSON Web Tokens también están adaptándose a nuevos retos y
                oportunidades:
              </p>
              <ul>
                <li>
                  <strong>Firmas más seguras:</strong> Con el avance de
                  algoritmos como EdDSA (Edwards-curve Digital Signature
                  Algorithm), los tokens serán más seguros frente a ataques
                  modernos.
                </li>
                <li>
                  <strong>Uso en IoT:</strong> JWT está ganando popularidad para
                  autenticar dispositivos en el Internet de las Cosas (IoT),
                  donde la ligereza y la escalabilidad son esenciales.
                </li>
                <li>
                  <strong>Autenticación sin contraseña:</strong> La integración
                  con tecnologías como WebAuthn puede mejorar la experiencia del
                  usuario.
                </li>
                <li>
                  <strong>Reemplazo con nuevos estándares:</strong> A pesar de
                  su popularidad, otros estándares como PASETO
                  (Platform-Agnostic Security Tokens) están surgiendo como
                  alternativas más seguras y con menos errores comunes.
                </li>
              </ul>
              <p>
                Aunque JWT sigue siendo una tecnología clave para la
                autenticación y comunicación, su evolución dependerá de las
                demandas de seguridad y la innovación tecnológica en los
                próximos años.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JWTPage;
