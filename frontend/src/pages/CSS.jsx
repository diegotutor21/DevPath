import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { cssExamples } from "../examples/cssExamples.js"; // Importa los ejemplos de CSS correctamente

const CSSpage = () => {
  const goToEditor = (exampleKey) => {
    const exampleCode = cssExamples[exampleKey];
    if (exampleCode) {
      localStorage.setItem("exampleCode", exampleCode);
      window.open("/code-editor", "_blank");
    } else {
      console.error(`El ejemplo para '${exampleKey}' no existe.`);
    }
  };

  return (
    <Container className="mt-5">
      {/* Título e introducción */}
      <h1 className="text-center mb-4 text-primary">
        Aprende CSS con Ejemplos Prácticos
      </h1>
      <p className="text-center">
        CSS (Cascading Style Sheets) es el lenguaje utilizado para describir la
        presentación de un documento HTML. Con CSS, puedes controlar colores,
        tipografía, espaciado, y crear diseños avanzados y dinámicos.
      </p>
      <p className="text-center">
        Desde su introducción en 1996, CSS ha evolucionado para convertirse en
        una herramienta esencial en el diseño web, permitiendo separar el
        contenido de su presentación para lograr mayor flexibilidad y
        mantenimiento.
      </p>

      {/* Ventajas y Desventajas */}
      <div className="mt-5">
        <h3 className="text-center text-info">Ventajas y Desventajas de CSS</h3>
        <Row>
          <Col md={6}>
            <h5 className="text-success">Ventajas</h5>
            <ul>
              <li>Facilita la separación de estilo y contenido.</li>
              <li>Permite el diseño responsive para dispositivos móviles.</li>
              <li>Reduce la duplicación de código con hojas de estilo externas.</li>
              <li>Soporta animaciones y transiciones visuales.</li>
              <li>Mejora el rendimiento al reducir la redundancia en HTML.</li>
            </ul>
          </Col>
          <Col md={6}>
            <h5 className="text-danger">Desventajas</h5>
            <ul>
              <li>
                Puede volverse complejo manejar grandes cantidades de estilos.
              </li>
              <li>La compatibilidad entre navegadores puede ser un desafío.</li>
              <li>
                Algunos desarrolladores encuentran difícil mantener un código
                CSS limpio y organizado.
              </li>
              <li>Requiere aprendizaje continuo debido a nuevas características.</li>
            </ul>
          </Col>
        </Row>
      </div>

      {/* Lista de temas y ejemplos */}
      <Row className="gy-3 mt-5">
        {[
          {
            key: "Sintaxis Básica",
            description: "Conoce la estructura general de CSS.",
          },
          {
            key: "Colores y Fondos",
            description: "Aprende cómo aplicar colores y fondos.",
          },
          {
            key: "Tipografía",
            description: "Personaliza fuentes, tamaños y estilos.",
          },
          {
            key: "Espaciado",
            description: "Controla márgenes y relleno (padding).",
          },
          {
            key: "Modelo de Caja",
            description: "Comprende el box model para diseño preciso.",
          },
          {
            key: "Estilo de Bordes",
            description: "Aplica bordes personalizados a elementos.",
          },
          {
            key: "Diseño de Página",
            description: "Organiza tu contenido con CSS.",
          },
          {
            key: "Flexbox",
            description: "Usa Flexbox para diseños flexibles.",
          },
          {
            key: "CSS Grid",
            description: "Crea diseños avanzados con CSS Grid.",
          },
          {
            key: "Pseudo-clases y Pseudo-elementos",
            description: "Añade efectos avanzados.",
          },
        ].map((point, index) => (
          <Col md={6} key={point.key}>
            <div className="border p-3 rounded shadow-sm">
              <h5 className="text-primary">
                {index + 1}. {point.key}
              </h5>
              <p>{point.description}</p>
              <p>
                CSS te permite estilizar elementos HTML de forma precisa. Este
                ejemplo muestra cómo {point.description.toLowerCase()}.
              </p>
              <ul>
                <li>Optimiza la presentación visual.</li>
                <li>Fácil integración con HTML.</li>
              </ul>
              <Button
                variant="primary"
                size="sm"
                onClick={() => goToEditor(point.key)}
              >
                Ver Ejemplo
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      {/* Consejos prácticos */}
      <div className="mt-5">
        <h3 className="text-center text-warning">Consejos Prácticos para CSS</h3>
        <ul>
          <li>
            Utiliza selectores eficientes y evita el uso excesivo de selectores
            universales (<code>*</code>).
          </li>
          <li>
            Aprende a usar variables CSS para mantener consistencia en tus
            estilos.
          </li>
          <li>
            Organiza tu código en bloques lógicos o módulos, y usa comentarios
            para facilitar el mantenimiento.
          </li>
          <li>
            Aprovecha herramientas como Preprocesadores (SASS/LESS) para
            proyectos complejos.
          </li>
          <li>
            Prueba tus estilos en varios navegadores para garantizar
            compatibilidad.
          </li>
        </ul>
      </div>

      {/* Conclusión */}
      <div className="mt-5">
        <h3 className="text-center text-success">Conclusión</h3>
        <p>
          CSS es una herramienta poderosa que transforma contenido HTML básico
          en páginas atractivas y funcionales. Su aprendizaje no solo mejora
          tus habilidades como desarrollador, sino que también te permite
          destacar en el diseño web.
        </p>
        <p>
          Experimenta con Flexbox, CSS Grid y animaciones para ampliar tus
          conocimientos, y mantente actualizado con las últimas tendencias para
          seguir creando diseños modernos y responsivos.
        </p>
        <p className="text-center">
          ¡Explora los ejemplos y lleva tus habilidades de diseño al siguiente
          nivel!
        </p>
      </div>
    </Container>
  );
};

export default CSSpage;
