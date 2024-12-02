import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const GitGitHubPage = () => {
  return (
    <Container fluid className="bg-dark text-white py-5">
      {/* Cabecera */}
      <header className="text-center mb-5">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <Image
            src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png"
            alt="Git Logo"
            width="150"
          />
          <Image
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            width="100"
          />
        </div>
        <h1 className="display-5 fw-bold mt-4">Git & GitHub</h1>
        <p className="lead text-success">
          Versiona, Colabora y Conquista el Código
        </p>
      </header>

      {/* Separador */}
      <div className="bg-success py-2 text-center text-white my-5">
        <h2>¡Git!</h2>
      </div>

      {/* Sección Git */}
      <section id="git" className="mb-5">
        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="bg-secondary text-white shadow-lg">
              <Card.Body>
                <h3 className="text-warning">¿Qué es Git?</h3>
                <p>
                  **Git** es un sistema de control de versiones distribuido que
                  permite a los desarrolladores rastrear los cambios en el
                  código fuente a lo largo del tiempo. Facilita la colaboración
                  y asegura que cada cambio pueda ser revertido si es necesario.
                </p>
                <h5 className="text-warning mt-4">Principales Ventajas:</h5>
                <ul>
                  <li>Seguimiento detallado de los cambios.</li>
                  <li>
                    Capacidad de trabajar en diferentes ramas sin conflictos.
                  </li>
                  <li>
                    Compatible con herramientas de integración y despliegue
                    continuo.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={10} className="mx-auto">
            <Card className="bg-secondary text-white shadow-lg">
              <Card.Body>
                <h4 className="text-warning">Comandos Básicos de Git:</h4>
                <ul>
                  <li>
                    <strong>git init:</strong> Crea un nuevo repositorio local.
                  </li>
                  <li>
                    <strong>git add:</strong> Prepara archivos para el commit.
                  </li>
                  <li>
                    <strong>git commit:</strong> Guarda cambios en el historial
                    de versiones.
                  </li>
                  <li>
                    <strong>git push:</strong> Sube los cambios a un repositorio
                    remoto.
                  </li>
                  <li>
                    <strong>git pull:</strong> Trae los cambios más recientes
                    del repositorio remoto.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Comparación: Git vs GitHub Desktop */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <h2 className="text-center text-primary mb-4">
            Git vs GitHub Desktop
          </h2>
          <Row>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body>
                  <h5 className="text-primary">Ventajas de Git</h5>
                  <ul>
                    <li>Control total desde la línea de comandos.</li>
                    <li>
                      Compatible con herramientas avanzadas y personalización.
                    </li>
                    <li>No requiere interfaz gráfica.</li>
                    <li>Mayor flexibilidad para usuarios avanzados.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body>
                  <h5 className="text-primary">Ventajas de GitHub Desktop</h5>
                  <ul>
                    <li>Interfaz gráfica intuitiva para principiantes.</li>
                    <li>Facilita la gestión de commits y ramas visualmente.</li>
                    <li>Integración directa con GitHub.</li>
                    <li>Ideal para usuarios que no dominan la terminal.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Curiosidades y Datos */}
      <section className="py-5 bg-secondary text-white">
        <Container>
          <h2 className="text-center text-warning mb-4">Curiosidades</h2>
          <Row>
            <Col md={4}>
              <Card className="h-100 bg-dark text-white shadow-sm">
                <Card.Body>
                  <h5 className="text-warning">¿Sabías que?</h5>
                  <p>
                    Git fue creado por Linus Torvalds en 2005, el mismo creador
                    del núcleo de Linux.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 bg-dark text-white shadow-sm">
                <Card.Body>
                  <h5 className="text-warning">Uso Global</h5>
                  <p>
                    Más del 80% de los desarrolladores de software usan Git como
                    su herramienta principal de control de versiones.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 bg-dark text-white shadow-sm">
                <Card.Body>
                  <h5 className="text-warning">Evolución de GitHub</h5>
                  <p>
                    GitHub fue adquirido por Microsoft en 2018 por 7.5 mil
                    millones de dólares, pero sigue operando de forma
                    independiente.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mejores Prácticas */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <h2 className="text-center text-success mb-4">Mejores Prácticas</h2>
          <Row>
            <Col md={4}>
              <Card className="h-100 bg-secondary text-white shadow-sm">
                <Card.Body>
                  <h5 className="text-warning">Usa Commits Descriptivos</h5>
                  <p>
                    Escribe mensajes de commit claros para facilitar el
                    historial de cambios.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 bg-secondary text-white shadow-sm">
                <Card.Body>
                  <h5 className="text-warning">Crea Ramas</h5>
                  <p>
                    Trabaja en ramas separadas para evitar conflictos en la rama
                    principal.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 bg-secondary text-white shadow-sm">
                <Card.Body>
                  <h5 className="text-warning">Revisa Antes de Hacer Push</h5>
                  <p>
                    Asegúrate de probar tu código antes de subirlo al
                    repositorio remoto.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Separador */}
      <div className="bg-success py-2 text-center text-white my-5">
        <h2>¡GitHub!</h2>
      </div>

      {/* Sección GitHub */}
      <section id="github">
        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="bg-secondary text-white shadow-lg">
              <Card.Body>
                <h3 className="text-warning">¿Qué es GitHub?</h3>
                <p>
                  **GitHub** es una plataforma en línea que permite a los
                  desarrolladores almacenar, compartir y colaborar en proyectos
                  de software. Construida sobre Git, GitHub ofrece herramientas
                  para gestionar repositorios, revisar código y automatizar
                  flujos de trabajo.
                </p>
                <p>
                  {" "}
                  Además de ser un espacio de almacenamiento, GitHub fomenta la
                  colaboración entre equipos gracias a sus herramientas como
                  pull requests, issues y GitHub Actions.
                </p>
                <h5 className="text-warning mt-4">Principales Ventajas:</h5>
                <ul>
                  <li>Repositorio remoto confiable para tus proyectos.</li>
                  <li>Colaboración en equipo con revisiones de código.</li>
                  <li>
                    Automatización de flujos de trabajo con GitHub Actions.
                  </li>
                  <li>Amplia comunidad y recursos educativos.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={10} className="mx-auto">
            <Card className="bg-secondary text-white shadow-lg">
              <Card.Body>
                <h4 className="text-warning">Ejemplo Básico de GitHub:</h4>
                <div className="bg-dark p-3 border rounded">
                  <pre className="text-success">
                    <code>
                      git remote add origin URL-DEL-REPO <br />
                      git push -u origin main <br /># Ahora, abre GitHub y
                      visualiza tu proyecto remoto
                    </code>
                  </pre>
                </div>
                <p className="mt-3">
                  Una vez subido el código, podrás crear pull requests, abrir
                  issues y colaborar con otros desarrolladores.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <br />

      {/* Características Principales */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <h2 className="text-center text-primary mb-4">
            Características Clave
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-primary">
                <Card.Body>
                  <h5 className="text-primary">
                    Repositorios Públicos y Privados
                  </h5>
                  <p>
                    Guarda tu código en repositorios públicos o mantenlo privado
                    para proyectos internos.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-primary">
                <Card.Body>
                  <h5 className="text-primary">Pull Requests</h5>
                  <p>
                    Solicita revisiones de código a tus compañeros antes de
                    fusionar cambios.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-primary">
                <Card.Body>
                  <h5 className="text-primary">GitHub Actions</h5>
                  <p>
                    Automatiza tareas como pruebas de software, despliegues o
                    integración continua.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mejores Prácticas para GitHub */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <h2 className="text-center text-primary mb-4">Mejores Prácticas</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center border-success">
                <Card.Body>
                  <h5 className="text-success">Organiza tu Repositorio</h5>
                  <p>
                    Usa carpetas claras, README detallados y etiquetas en los
                    issues para mantener todo ordenado.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-success">
                <Card.Body>
                  <h5 className="text-success">Revisa Código Activamente</h5>
                  <p>
                    Aprovecha las pull requests para fomentar revisiones de
                    calidad y aprendizajes en equipo.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-success">
                <Card.Body>
                  <h5 className="text-success">Protege la Rama Principal</h5>
                  <p>
                    Configura reglas para la rama principal y evita cambios
                    directos sin revisión previa.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default GitGitHubPage;
