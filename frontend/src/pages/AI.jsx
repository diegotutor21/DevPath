import {
  Card,
  Container,
  Row,
  Col,
  Alert,
  Tab,
  Tabs,
  ListGroup,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const AIConcepts = () => {
  // Función para verificar si el usuario está autenticado
  const isAuthenticated = () => {
    const userInfo = localStorage.getItem("userInfo");
    console.log("User Info:", userInfo); // Para debuggear

    // Parsea el JSON y verifica que no esté vacío
    return userInfo && JSON.parse(userInfo) !== null;
  };

  return (
    <div className="ai-concepts-page">
      {/* Hero Section */}
      <div style={{ backgroundColor: "#192b43" }} className="text-dark py-5">
        <Container>
          <Row className="align-items-center" style={{ color: "white" }}>
            <Col md={6}>
              <h1 className="display-4 fw-bold">Inteligencia Artificial</h1>
              <p className="lead">
                Conceptos fundamentales de Inteligencia Artificial para mejorar
                la inteligencia del software
              </p>
              <Alert variant="info">
                <strong>¿Por qué IA?</strong> La solución perfecta para
                desarrollar sistemas que aprenden, se adaptan y evolucionan para
                resolver problemas complejos.
              </Alert>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="/images/IA.png"
                alt="Inteligencia Artificial"
                style={{ maxWidth: "75%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        {/* Qué es la IA - Diseño más limpio */}
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-4 text-primary">
            ¿Qué es la Inteligencia Artificial?
          </h2>
          <Row>
            <Col md={8}>
              <p className="text-secondary">
                La Inteligencia Artificial (IA) es un campo de la informática
                que se centra en la
                <strong>
                  {" "}
                  creación de sistemas capaces de realizar tareas que
                  normalmente requerirían inteligencia humana
                </strong>
                . Estos sistemas pueden aprender de experiencias, adaptarse a
                nuevas situaciones y ejecutar tareas que van desde el
                reconocimiento del habla hasta la toma de decisiones complejas.
              </p>
              <p className="text-secondary">
                A diferencia de la programación tradicional donde se codifican
                reglas específicas, los sistemas de IA pueden generalizar a
                partir de ejemplos y mejorar su rendimiento con el tiempo sin
                intervención humana explícita.
              </p>
              <Alert variant="success" className="border-0 shadow-sm">
                <strong>Dato clave:</strong> El término &quot;Inteligencia
                Artificial&quot; fue acuñado en 1956 durante la Conferencia de
                Dartmouth, considerada el nacimiento oficial del campo.
              </Alert>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="bg-light rounded">
                  <Card.Title className="text-primary mb-3">
                    Características Principales
                  </Card.Title>
                  <ListGroup variant="flush" className="bg-transparent">
                    <ListGroup.Item className="bg-transparent border-light">
                      Aprendizaje automático
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-light">
                      Razonamiento lógico
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-light">
                      Percepción del entorno
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-light">
                      Procesamiento de lenguaje natural
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-light">
                      Toma de decisiones
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {isAuthenticated() ? (
          <>
            {/* Tipos de IA - Colores más suaves */}
            <section className="mb-5">
              <h2 className="border-bottom pb-2 mb-4 text-primary">
                Tipos de Inteligencia Artificial
              </h2>
              <Tabs defaultActiveKey="clasificacion" className="mb-4 border-0">
                <Tab
                  eventKey="clasificacion"
                  title="Clasificación por Capacidad"
                >
                  <Row className="g-4">
                    <Col md={4}>
                      <Card className="h-100 border-0 shadow-sm">
                        <Card.Header className="bg-primary bg-opacity-75 text-white">
                          <i className="bi bi-calculator me-2"></i>
                          IA Estrecha (ANI)
                        </Card.Header>
                        <Card.Body>
                          <p className="text-secondary">
                            Sistemas diseñados para realizar una tarea
                            específica con gran eficiencia, pero limitados a ese
                            dominio particular sin capacidad de generalización.
                          </p>
                          <Badge bg="light" text="dark" className="me-1 border">
                            Asistentes virtuales
                          </Badge>{" "}
                          <Badge bg="light" text="dark" className="me-1 border">
                            Reconocimiento facial
                          </Badge>{" "}
                          <Badge bg="light" text="dark" className="border">
                            Filtros de spam
                          </Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="h-100 border-0 shadow-sm">
                        <Card.Header className="bg-success bg-opacity-75 text-white">
                          <i className="bi bi-cpu me-2"></i>
                          IA General (AGI)
                        </Card.Header>
                        <Card.Body>
                          <p className="text-secondary">
                            Sistemas con capacidad cognitiva similar a la
                            humana, pudiendo aprender, razonar y adaptarse a
                            cualquier tarea intelectual que pueda realizar un
                            ser humano.
                          </p>
                          <Badge bg="light" text="dark" className="me-1 border">
                            Razonamiento cognitivo
                          </Badge>{" "}
                          <Badge bg="light" text="dark" className="me-1 border">
                            Transferencia de aprendizaje
                          </Badge>{" "}
                          <Badge bg="light" text="dark" className="border">
                            Conciencia contextual
                          </Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card className="h-100 border-0 shadow-sm">
                        <Card.Header className="bg-info bg-opacity-75 text-white">
                          <i className="bi bi-lightning me-2"></i>
                          IA Superinteligente (ASI)
                        </Card.Header>
                        <Card.Body>
                          <p className="text-secondary">
                            Sistemas hipotéticos que superarían
                            significativamente la inteligencia humana en todos
                            los aspectos, incluyendo creatividad, resolución de
                            problemas y juicio social.
                          </p>
                          <Badge bg="light" text="dark" className="me-1 border">
                            Concepto teórico
                          </Badge>{" "}
                          <Badge bg="light" text="dark" className="me-1 border">
                            Singularidad tecnológica
                          </Badge>{" "}
                          <Badge bg="light" text="dark" className="border">
                            Implicaciones éticas
                          </Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="funcionamiento" title="Enfoques de IA">
                  <Card className="mb-4 border-0 shadow-sm">
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          <h5 className="text-primary mb-3">
                            Enfoques Basados en Conocimiento
                          </h5>
                          <ul className="text-secondary">
                            <li className="mb-2">
                              <strong>Sistemas expertos:</strong> Utilizan
                              reglas predefinidas y conocimiento de expertos
                              humanos
                            </li>
                            <li className="mb-2">
                              <strong>Lógica formal:</strong> Utilizan
                              representaciones lógicas y reglas de inferencia
                            </li>
                            <li className="mb-2">
                              <strong>Razonamiento basado en casos:</strong>{" "}
                              Solucionan problemas nuevos basándose en
                              soluciones anteriores
                            </li>
                            <li className="mb-2">
                              <strong>Ontologías:</strong> Representaciones
                              formales de conocimiento en un dominio
                            </li>
                          </ul>
                        </Col>
                        <Col md={6}>
                          <h5 className="text-primary mb-3">
                            Enfoques Basados en Datos
                          </h5>
                          <ul className="text-secondary">
                            <li className="mb-2">
                              <strong>Aprendizaje supervisado:</strong> Aprenden
                              patrones a partir de ejemplos etiquetados
                            </li>
                            <li className="mb-2">
                              <strong>Aprendizaje no supervisado:</strong>{" "}
                              Descubren patrones sin datos etiquetados
                            </li>
                            <li className="mb-2">
                              <strong>Aprendizaje por refuerzo:</strong>{" "}
                              Aprenden mediante ensayo y error con recompensas
                            </li>
                            <li className="mb-2">
                              <strong>Redes neuronales profundas:</strong>{" "}
                              Modelos inspirados en el cerebro con múltiples
                              capas
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab>
              </Tabs>
            </section>

            {/* Conceptos Fundamentales - Formato más espaciado */}
            <section className="mb-5">
              <h2 className="border-bottom pb-2 mb-4 text-primary">
                Conceptos Fundamentales de IA
              </h2>
              <Row className="g-4">
                <Col lg={6}>
                  <Card className="mb-4 border-0 shadow-sm">
                    <Card.Header className="bg-primary bg-opacity-50 text-dark">
                      Machine Learning
                    </Card.Header>
                    <Card.Body>
                      <p className="text-secondary">
                        El <strong>Machine Learning</strong> o Aprendizaje
                        Automático es una rama de la IA que permite a los
                        sistemas aprender patrones a partir de datos sin ser
                        explícitamente programados para ello.
                      </p>
                      <div className="bg-light p-3 rounded">
                        <h6 className="text-primary">Tipos principales:</h6>
                        <p className="text-secondary mb-0">
                          Aprendizaje Supervisado → Aprendizaje No Supervisado →
                          Aprendizaje por Refuerzo
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-info bg-opacity-50 text-dark">
                      Redes Neuronales
                    </Card.Header>
                    <Card.Body>
                      <p className="text-secondary">
                        Las <strong>redes neuronales artificiales</strong> son
                        sistemas inspirados en la estructura del cerebro humano,
                        compuestas por:
                      </p>
                      <ul className="text-secondary">
                        <li>Neuronas artificiales (nodos)</li>
                        <li>Conexiones ponderadas</li>
                        <li>Funciones de activación</li>
                        <li>Arquitecturas en capas</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6}>
                  <Card className="mb-4 border-0 shadow-sm">
                    <Card.Header className="bg-success bg-opacity-50 text-dark">
                      Deep Learning
                    </Card.Header>
                    <Card.Body>
                      <p className="text-secondary">
                        El <strong>Deep Learning</strong> es un subconjunto del
                        Machine Learning basado en redes neuronales con
                        múltiples capas ocultas, capaces de:
                      </p>
                      <ul className="text-secondary">
                        <li>Extraer características automáticamente</li>
                        <li>Aprender representaciones jerárquicas</li>
                        <li>
                          Procesar datos no estructurados (imágenes, audio,
                          texto)
                        </li>
                        <li>
                          Lograr resultados estado del arte en problemas
                          complejos
                        </li>
                      </ul>
                      <Alert variant="warning" className="border-0 mb-0">
                        <strong>Dato clave:</strong> El Deep Learning ha
                        revolucionado campos como la visión por computadora,
                        procesamiento de lenguaje natural y reconocimiento de
                        voz.
                      </Alert>
                    </Card.Body>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-secondary bg-opacity-50 text-dark">
                      Procesamiento de Lenguaje Natural
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col xs={6}>
                          <h6 className="text-primary">NLP</h6>
                          <p className="text-secondary">
                            Permite a las máquinas entender, interpretar y
                            generar lenguaje humano de forma natural.
                          </p>
                        </Col>
                        <Col xs={6}>
                          <h6 className="text-primary">Aplicaciones</h6>
                          <p className="text-secondary">
                            Chatbots, traducción automática, análisis de
                            sentimiento, generación de texto, resumen
                            automático.
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </section>

            {/* IA vs Tradicional - Tabla más suave */}
            <section className="mb-5">
              <h2 className="border-bottom pb-2 mb-4 text-primary">
                IA vs. Programación Tradicional
              </h2>
              <Card className="mb-4 border-0 shadow-sm">
                <Card.Body>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr className="bg-light">
                          <th scope="col">Característica</th>
                          <th scope="col">Inteligencia Artificial</th>
                          <th scope="col">Programación Tradicional</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Enfoque</strong>
                          </td>
                          <td>Aprendizaje a partir de datos</td>
                          <td>Reglas y lógica explícitas</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Desarrollo</strong>
                          </td>
                          <td>Entrenamiento con ejemplos</td>
                          <td>Codificación de algoritmos</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Adaptabilidad</strong>
                          </td>
                          <td>Mejora con experiencia y nuevos datos</td>
                          <td>Cambios requieren reprogramación</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Manejo de incertidumbre</strong>
                          </td>
                          <td>Probabilístico y tolerante a errores</td>
                          <td>Determinista y definido</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Complejidad</strong>
                          </td>
                          <td>
                            Puede manejar problemas difíciles de codificar
                          </td>
                          <td>Limitada por la capacidad de definir reglas</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Explicabilidad</strong>
                          </td>
                          <td>
                            Puede ser una &quot;caja negra&quot; difícil de
                            interpretar
                          </td>
                          <td>Lógica transparente y trazable</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card.Body>
              </Card>
            </section>

            {/* Tecnologías de IA - Diseño más sutil */}
            <section className="mb-5">
              <h2 className="border-bottom pb-2 mb-4 text-primary">
                Tecnologías y Frameworks de IA
              </h2>
              <Row className="g-4">
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Header className="bg-light text-primary">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-diagram-3 me-2"></i>
                        <span className="fw-bold">TensorFlow</span>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-secondary">
                        Framework de código abierto desarrollado por Google para
                        construir y entrenar modelos de machine learning.
                        Proporciona un ecosistema flexible de herramientas y
                        bibliotecas para investigación y producción.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Header className="bg-light text-success">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-fire me-2"></i>
                        <span className="fw-bold">PyTorch</span>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-secondary">
                        Biblioteca de machine learning basada en Python, popular
                        en investigación por su flexibilidad y facilidad de uso.
                        Permite la computación tensorial acelerada por GPU y
                        creación de redes neuronales dinámicas.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Header className="bg-light text-warning">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-gear me-2"></i>
                        <span className="fw-bold">Scikit-learn</span>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-secondary">
                        Biblioteca de Python para machine learning tradicional
                        con interfaces simples y consistentes. Incluye
                        algoritmos de clasificación, regresión, clustering y
                        reducción dimensional, así como herramientas para
                        preprocesamiento de datos.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </section>
          </>
        ) : (
          /* Mensaje para usuarios no autenticados - Diseño más limpio */
          <div className="my-5 py-3">
            <Container>
              <Card className="border-0 shadow-sm p-4 bg-light">
                <Card.Body className="text-center">
                  <h3 className="mb-4 text-primary">
                    ¿Quieres aprender más sobre Inteligencia Artificial?
                  </h3>
                  <p className="fs-5 mb-4 text-secondary">
                    Para acceder al contenido completo sobre Machine Learning,
                    Deep Learning, aplicaciones de IA y conceptos avanzados,
                    inicia sesión o regístrate.
                  </p>
                  <div className="d-flex justify-content-center gap-4 mt-4">
                    <Link to="/login">
                      <Button
                        variant="primary"
                        size="lg"
                        className="px-4 py-2 shadow-sm"
                      >
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Iniciar Sesión
                      </Button>
                    </Link>
                    <Link to="/registrar">
                      <Button
                        variant="outline-primary"
                        size="lg"
                        className="px-4 py-2"
                      >
                        <i className="bi bi-person-plus me-2"></i>
                        Registrarse
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Container>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AIConcepts;
