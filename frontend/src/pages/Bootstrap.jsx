import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

const BootstrapPage = () => {
  return (
    <Container fluid>
      {/* Cabecera con Logo */}
      <header className="bg-dark text-white text-center py-5">
        <Image
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
          alt="Bootstrap Logo"
          width="120"
          className="mb-3"
        />
        <h1 className="display-4 fw-bold">Bootstrap</h1>
        <p className="lead">Diseña con Estilo y Eficiencia</p>
      </header>

      {/* Introducción */}
      <section className="mt-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="shadow-lg">
              <Card.Body>
                <h3 className="text-primary">¿Qué es Bootstrap?</h3>
                <p>
                  Bootstrap es un framework de CSS que facilita la creación de
                  sitios web y aplicaciones responsivas. Proporciona componentes
                  preconstruidos y una estructura modular para agilizar el
                  desarrollo.
                </p>
                <p>
                  Bootstrap ofrece estilos predefinidos que ayudan a los
                  desarrolladores a ahorrar tiempo y enfocarse en la
                  funcionalidad.
                </p>
                <p>
                  Usa una combinación de HTML, CSS y JavaScript para garantizar
                  que tus aplicaciones tengan un diseño profesional desde el
                  principio.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Características Clave */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center text-primary mb-4">
            Características Principales
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center border-primary">
                <Card.Body>
                  <h5 className="text-primary">Grid System</h5>
                  <p>
                    Organiza el contenido de manera responsiva con su sistema de
                    cuadrícula basado en filas y columnas.
                  </p>
                  <pre>
                    <code>
                      {`<Row>
  <Col md={6}>Columna 1</Col>
  <Col md={6}>Columna 2</Col>
</Row>`}
                    </code>
                  </pre>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-primary">
                <Card.Body>
                  <h5 className="text-primary">Componentes Listos</h5>
                  <p>
                    Utiliza botones, tarjetas, modales y más sin necesidad de
                    escribir CSS desde cero.
                  </p>
                  <pre>
                    <code>{`<Button variant="primary">Click me</Button>`}</code>
                  </pre>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-primary">
                <Card.Body>
                  <h5 className="text-primary">Personalización</h5>
                  <p>
                    Personaliza fácilmente colores, fuentes y estilos usando
                    variables Sass.
                  </p>
                  <p>
                    Esto te permite adaptar Bootstrap a las necesidades de tu
                    proyecto sin perder su funcionalidad básica.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Ejemplo Práctico */}
      <section className="py-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="shadow-lg">
              <Card.Body>
                <h4 className="text-primary">
                  Ejemplo de una Tarjeta con Bootstrap
                </h4>
                <div className="bg-light p-3 border rounded">
                  <h5>Card Title</h5>
                  <p>
                    Esta es una tarjeta con estilos de Bootstrap. Agrega tu
                    contenido aquí.
                  </p>
                  <Button variant="primary">Ver más</Button>
                </div>
                <p className="mt-3">
                  Bootstrap proporciona clases para tarjetas que incluyen
                  bordes, sombras y espacios predefinidos.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Beneficios */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <h2 className="text-center">¿Por qué Usar Bootstrap?</h2>
          <Row className="mt-4">
            <Col md={6}>
              <ul>
                <li>
                  <b>Desarrollo rápido:</b> Diseña y prototipa más rápido con
                  clases predefinidas.
                </li>
                <li>
                  <b>Compatibilidad:</b> Funciona bien en navegadores modernos.
                </li>
                <li>
                  <b>Comunidad:</b> Recursos abundantes y soporte comunitario.
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul>
                <li>
                  <b>Responsividad:</b> Ajusta tu diseño automáticamente a
                  diferentes dispositivos.
                </li>
                <li>
                  <b>Flexibilidad:</b> Integración con React, Angular u otros
                  frameworks.
                </li>
                <li>
                  <b>Consistencia:</b> Mantén un diseño uniforme en múltiples
                  proyectos.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Historias de Éxito */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center text-primary mb-4">Historias de Éxito</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="shadow-sm border-primary">
                <Card.Body>
                  <h5 className="text-primary">Airbnb</h5>
                  <p>
                    Airbnb utiliza Bootstrap para crear una experiencia de
                    usuario coherente y escalable en sus interfaces web,
                    ahorrando tiempo y recursos en el desarrollo.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="shadow-sm border-primary">
                <Card.Body>
                  <h5 className="text-primary">Lyft</h5>
                  <p>
                    Lyft integra Bootstrap para garantizar que sus aplicaciones
                    web sean accesibles y funcionales en todos los dispositivos,
                    mejorando la experiencia del cliente.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tutoriales Recomendados */}
      <section className="py-5">
        <Container>
          <h2 className="text-center text-primary mb-4">
            Tutoriales Recomendados
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="text-primary">Introducción a Bootstrap</h5>
                  <p>
                    Aprende los fundamentos de Bootstrap con este tutorial paso
                    a paso ideal para principiantes.
                  </p>
                  <Button
                    variant="primary"
                    href="https://getbootstrap.com/docs/"
                    target="_blank"
                  >
                    Ver Tutorial
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="text-primary">Diseños Responsivos</h5>
                  <p>
                    Descubre cómo utilizar el sistema de cuadrícula para crear
                    diseños adaptables a todos los dispositivos.
                  </p>
                  <Button
                    variant="primary"
                    href="https://getbootstrap.com/docs/5.3/layout/grid/"
                    target="_blank"
                  >
                    Ver Tutorial
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="text-primary">Personalización con Sass</h5>
                  <p>
                    Domina la personalización avanzada de Bootstrap utilizando
                    variables y herramientas Sass.
                  </p>
                  <Button
                    variant="primary"
                    href="https://getbootstrap.com/docs/5.3/customize/sass/"
                    target="_blank"
                  >
                    Ver Tutorial
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Recursos Adicionales */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <h2 className="text-center">Recursos Adicionales</h2>
          <Row className="mt-4">
            <Col md={6}>
              <ul>
                <li>
                  <a
                    href="https://github.com/twbs/bootstrap"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositorio de Bootstrap en GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://getbootstrap.com/docs/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Documentación Oficial
                  </a>
                </li>
                <li>
                  <a
                    href="https://getbootstrap.com/docs/5.3/examples/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ejemplos Oficiales
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul>
                <li>
                  <a
                    href="https://www.youtube.com/results?search_query=bootstrap+tutorial"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tutoriales en YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/questions/tagged/bootstrap"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preguntas Frecuentes en Stack Overflow
                  </a>
                </li>
                <li>
                  <a
                    href="https://bootstrapcreative.com/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Recursos Premium de Bootstrap
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default BootstrapPage;
