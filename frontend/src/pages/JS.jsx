import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const JavaScriptPage = () => {
  return (
    <Container fluid className="mt-5">
      {/* Cabecera */}
      <Row className="bg-warning text-dark py-5 text-center">
        <Col>
          <h1 className="display-4">
            <Badge bg="dark" text="warning">
              JavaScript
            </Badge>{" "}
            <span>El Corazón Dinámico de la Web</span>
          </h1>
          <p className="lead">
            Aprende a darle vida a tus aplicaciones web con JavaScript: un
            lenguaje versátil, dinámico y omnipresente, esencial para cualquier
            desarrollador web.
          </p>
        </Col>
      </Row>

      {/* Primera Sección: ¿Qué es JavaScript? */}
      <Row className="my-5">
        <Col lg={8} className="mx-auto">
          <Card className="shadow-lg p-4 border-0">
            <Card.Body>
              <h3 className="text-warning">¿Qué es JavaScript?</h3>
              <p>
                JavaScript es un lenguaje de programación que permite crear
                contenido interactivo en las páginas web. Es ligero, potente y
                ampliamente utilizado en el desarrollo moderno.
              </p>
              <ul>
                <li>Manipula dinámicamente el DOM (Document Object Model).</li>
                <li>Crea experiencias interactivas y animaciones visuales.</li>
                <li>
                  Funciona tanto en el cliente (navegadores) como en el servidor
                  (Node.js).
                </li>
                <li>
                  Es compatible con una amplia gama de bibliotecas y frameworks.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Segunda Sección: Características Clave */}
      <Row className="my-5 bg-light p-4 shadow-sm">
        <Col md={4} className="text-center">
          <Card className="border-dark">
            <Card.Body>
              <h4 className="text-warning">Interpretado</h4>
              <p>
                JavaScript no requiere compilación, lo que permite probar y
                depurar código de manera inmediata.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card className="border-dark">
            <Card.Body>
              <h4 className="text-warning">Orientado a Objetos</h4>
              <p>
                Utiliza objetos, prototipos y clases para estructurar el código
                de manera eficiente y reutilizable.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card className="border-dark">
            <Card.Body>
              <h4 className="text-warning">Event-driven</h4>
              <p>
                Diseñado para responder a eventos como clics, movimientos del
                ratón y acciones del usuario.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-5">
        <Col lg={10} className="mx-auto">
          <Card className="p-4 border-warning shadow-sm">
            <Card.Body>
              <h4 className="text-warning">Declaración de Variables</h4>
              <p>
                En JavaScript, puedes declarar variables usando las palabras
                clave <code>var</code>, <code>let</code> o <code>const</code>:
              </p>
              <pre>
                <code>
                  {`// Ejemplo de declaración de variables
let nombre = "Juan"; // Variable que puede cambiar
const edad = 30;     // Variable constante
var ciudad = "Madrid"; // Declaración más antigua`}
                </code>
              </pre>
              <p>
                Usa <code>let</code> para valores que pueden cambiar, y{" "}
                <code>const</code> para valores constantes.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-5">
        <Col lg={10} className="mx-auto">
          <Card className="p-4 border-warning shadow-sm">
            <Card.Body>
              <h4 className="text-warning">Tipos de Datos</h4>
              <p>Los principales tipos de datos en JavaScript son:</p>
              <ul>
                <li>
                  <b>String</b>: Texto entre comillas (
                  <code>&quot;Hola&quot;</code>)
                </li>
                <li>
                  <b>Number</b>: Números enteros o decimales (<code>42</code>,{" "}
                  <code>3.14</code>)
                </li>
                <li>
                  <b>Boolean</b>: Valores <code>true</code> o <code>false</code>
                </li>
                <li>
                  <b>Array</b>: Lista de elementos (<code>[1, 2, 3]</code>)
                </li>
                <li>
                  <b>Object</b>: Conjunto de pares clave-valor (
                  <code>{`{nombre: "Juan", edad: 30}`}</code>)
                </li>
                <li>
                  <b>Undefined</b>: Una variable que no tiene valor.
                </li>
                <li>
                  <b>Null</b>: Representa la ausencia intencionada de un valor.
                </li>
              </ul>
              <pre>
                <code>
                  {`// Ejemplo de tipos de datos
let texto = "Hola Mundo"; // String
let numero = 42;          // Number
let esActivo = true;      // Boolean
let lista = [1, 2, 3];    // Array
let persona = { nombre: "Ana", edad: 25 }; // Object`}
                </code>
              </pre>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-5">
        <Col lg={10} className="mx-auto">
          <Card lg={10} className="p-4 border-warning shadow-sm">
            <Card.Body>
              <h4 className="text-warning">Funciones</h4>
              <p>
                Las funciones son bloques de código que realizan tareas
                específicas. Pueden aceptar parámetros y devolver resultados.
              </p>
              <pre>
                <code>
                  {`// Declaración de una función
function saludar(nombre) {
  return "Hola, " + nombre;
}

// Llamada a la función
let mensaje = saludar("María");`}
                </code>
              </pre>
              <p>
                También puedes usar funciones flecha, una forma más concisa de
                escribir funciones:
              </p>
              <pre>
                <code>
                  {`// Función flecha
const sumar = (a, b) => a + b;
let resultado = sumar(5, 7);`}
                </code>
              </pre>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-5">
        <Col lg={10} className="mx-auto">
          <Card lg={10} className="p-4 border-warning shadow-sm">
            <Card.Body>
              <h4 className="text-warning">Estructuras de Control</h4>
              <p>
                JavaScript tiene estructuras como <code>if</code>,{" "}
                <code>else</code>, <code>for</code>, y <code>while</code> para
                controlar el flujo del código:
              </p>
              <pre>
                <code>
                  {`// Estructura condicional
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Ciclo for
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tercera Sección: Ejemplo Visual */}
      <Row className="bg-dark text-light py-4">
        <Col lg={6} className="mx-auto">
          <Card className="bg-secondary text-white shadow-lg">
            <Card.Body>
              <h4>¿Cómo luce un script en JavaScript?</h4>
              <p>
                Aquí tienes un ejemplo básico de cómo cambiar el color de un
                botón al hacer clic:
              </p>
              <pre>
                <code>
                  {`// Cambiar el color de un botón al hacer clic
document.getElementById('myButton').addEventListener('click', function() {
  this.style.backgroundColor = 'yellow';
});`}
                </code>
              </pre>
              <p>
                Este ejemplo muestra cómo usar un evento y manipular estilos
                dinámicamente.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Cuarta Sección: ¿Dónde usar JavaScript? */}
      <Row className="my-5">
        <Col lg={10} className="mx-auto">
          <Card className="p-4 border-warning shadow-sm">
            <Card.Body>
              <h3 className="text-warning">¿Dónde usar JavaScript?</h3>
              <Row>
                <Col md={6}>
                  <h5 className="text-primary">Frontend</h5>
                  <ul>
                    <li>Interactividad con React, Angular o Vue.</li>
                    <li>Estilización dinámica con frameworks como Tailwind.</li>
                    <li>Integración de APIs para contenido dinámico.</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h5 className="text-primary">Backend y Otros</h5>
                  <ul>
                    <li>Desarrollo de servidores con Node.js.</li>
                    <li>Automatización de tareas con scripts.</li>
                    <li>Creación de aplicaciones móviles con React Native.</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quinta Sección: Recursos Recomendados */}
      <Row className="my-5 bg-light p-4 shadow">
        <Col lg={8} className="mx-auto">
          <Card className="p-4 border-info">
            <Card.Body>
              <h3 className="text-warning">Recursos Recomendados</h3>
              <p>
                Si quieres profundizar más, te recomendamos los siguientes
                recursos:
              </p>
              <ul>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Documentación oficial de MDN
                  </a>
                </li>
                <li>
                  <a
                    href="https://javascript.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Modern JavaScript Tutorial
                  </a>
                </li>
                <li>
                  <a
                    href="https://nodejs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sitio oficial de Node.js
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JavaScriptPage;
