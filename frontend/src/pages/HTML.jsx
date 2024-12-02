import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { examples } from "../examples/example.js"; // Importa correctamente como default

const HTMLpage = () => {
  const goToEditor = (example) => {
    localStorage.setItem("exampleCode", example);
    window.open("/code-editor", "_blank");
  };

  return (
    <Container className="mt-5">
      {/* Título e introducción */}
      <h1 className="text-center mb-4 text-primary">
        Aprende HTML con Ejemplos Prácticos
      </h1>
      <p className="text-center">
        HTML (HyperText Markup Language) es el lenguaje estándar utilizado para
        la creación de páginas web. Fue desarrollado en 1991 por Tim
        Berners-Lee como parte de la creación de la World Wide Web (WWW) y ha
        evolucionado hasta convertirse en una herramienta esencial en el
        desarrollo web moderno.
      </p>
      <p className="text-center">
        HTML permite estructurar el contenido en la web mediante etiquetas que
        definen elementos como encabezados, párrafos, listas, imágenes, tablas,
        formularios y enlaces. En esta página, exploraremos estas etiquetas con
        ejemplos interactivos y descripciones prácticas.
      </p>

      {/* Ventajas y Desventajas */}
      <div className="mt-5">
        <h3 className="text-center text-info">Ventajas y Desventajas de HTML</h3>
        <Row>
          <Col md={6}>
            <h5 className="text-success">Ventajas</h5>
            <ul>
              <li>Fácil de aprender y entender para principiantes.</li>
              <li>Compatible con todos los navegadores modernos.</li>
              <li>No requiere compilación ni instalación de software especial.</li>
              <li>Es la base para trabajar con CSS y JavaScript.</li>
              <li>Permite la integración de contenido multimedia.</li>
            </ul>
          </Col>
          <Col md={6}>
            <h5 className="text-danger">Desventajas</h5>
            <ul>
              <li>Limitado para diseñar interfaces avanzadas sin CSS o JavaScript.</li>
              <li>No es un lenguaje de programación, por lo que no tiene lógica.</li>
              <li>Las actualizaciones pueden generar problemas de compatibilidad.</li>
              <li>La estructura mal diseñada puede afectar la accesibilidad y el SEO.</li>
            </ul>
          </Col>
        </Row>
      </div>

      {/* Lista de ejemplos */}
      <Row className="gy-3 mt-5">
        {Object.entries(examples).map(([key, code], index) => (
          <Col md={6} key={key}>
            <div className="border p-3 rounded shadow-sm">
              <h5 className="text-primary">
                {index + 1}. {key.replace(/([A-Z])/g, " $1")}
              </h5>
              <p>
                <b>{key}</b>: Esta etiqueta se utiliza para{" "}
                <span className="text-secondary">
                  {/* Aquí puedes personalizar la descripción según el ejemplo */}
                  {getDescription(key)}
                </span>
                .
              </p>
              <Button
                variant="primary"
                size="sm"
                onClick={() => goToEditor(code)}
              >
                Ver Ejemplo
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      {/* Consejos prácticos */}
      <div className="mt-5">
        <h3 className="text-center text-warning">Consejos Prácticos para Principiantes</h3>
        <ul>
          <li>
            Siempre utiliza etiquetas semánticas como <code>&lt;header&gt;</code> y{" "}
            <code>&lt;footer&gt;</code> para mejorar la accesibilidad.
          </li>
          <li>
            Mantén tu código limpio y organizado mediante la indentación
            adecuada.
          </li>
          <li>
            Utiliza validadores como el{" "}
            <a
              href="https://validator.w3.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3C Validator
            </a>{" "}
            para verificar errores en tu código HTML.
          </li>
          <li>
            Aprende los conceptos básicos de SEO para estructurar contenido de
            manera amigable para motores de búsqueda.
          </li>
          <li>
            Experimenta con etiquetas nuevas y mantente al día con las últimas
            versiones de HTML.
          </li>
        </ul>
      </div>

      {/* Conclusión */}
      <div className="mt-5">
        <h3 className="text-center text-success">Conclusión</h3>
        <p>
          HTML es un pilar esencial en el desarrollo web, ya que proporciona la
          estructura necesaria para cualquier sitio o aplicación. Aunque por sí
          solo no puede manejar lógica o estilos avanzados, es la base para
          integrar tecnologías como CSS y JavaScript.
        </p>
        <p>
          Conocer HTML no solo te permitirá construir sitios web efectivos,
          sino que también te abrirá la puerta para aprender otras tecnologías
          relacionadas. Recuerda siempre practicar, explorar nuevas etiquetas y
          mantenerte al día con las actualizaciones del estándar.
        </p>
        <p className="text-center">
          ¡Con HTML, estás un paso más cerca de convertirte en un desarrollador
          web experto!
        </p>
      </div>
    </Container>
  );
};

// Función auxiliar para generar descripciones según la etiqueta
const getDescription = (key) => {
  const descriptions = {
    p: "definir párrafos de texto.",
    h1: "establecer títulos principales en la página.",
    div: "crear contenedores para agrupar contenido.",
    a: "añadir enlaces a otras páginas o recursos.",
    img: "insertar imágenes.",
    form: "crear formularios interactivos.",
    input: "añadir campos para la entrada de datos.",
    ul: "definir listas no ordenadas.",
    li: "representar ítems dentro de listas.",
    table: "organizar datos en filas y columnas.",
    nav: "crear barras de navegación.",
    footer: "definir el pie de página del documento.",
    article: "representar contenido independiente.",
    section: "dividir contenido en secciones temáticas.",
    // Agrega más etiquetas según sea necesario
  };

  return descriptions[key] || "realizar tareas específicas en HTML.";
};

export default HTMLpage;
