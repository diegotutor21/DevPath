import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const NodeJsPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4 text-success">
        <b>Node.js: Tu Compañero del Lado del Servidor</b>
      </h1>
      <p className="text-center">
        Node.js es un entorno de ejecución para JavaScript que te permite
        construir aplicaciones rápidas, escalables y eficientes. Aprende por qué
        es tan popular y cómo puedes usarlo en tus proyectos.
      </p>

      {/* Introducción */}
      <Row className="mb-4">
        <Col md={6}>
          <h3 className="text-success">¿Qué es Node.js?</h3>
          <p>
            Node.js es un entorno que permite ejecutar JavaScript fuera del
            navegador, generalmente en servidores. Fue creado en 2009 por Ryan
            Dahl y revolucionó la manera de construir aplicaciones web al ser
            rápido y escalable.
          </p>
          <p>Con Node.js, puedes crear aplicaciones como:</p>
          <ul>
            <li>Páginas web dinámicas.</li>
            <li>APIs (intermediarios que conectan sistemas).</li>
            <li>Aplicaciones en tiempo real como chats o juegos en línea.</li>
          </ul>
        </Col>
        <Col md={6}>
          <Image
            src="images/nodejs.png"
            alt="Node.js Logo"
            className="img-fluid"
          />
        </Col>
      </Row>
      <hr />
      {/* Por qué es importante */}
      <Row className="mb-4">
        <Col md={12}>
          <h3 className="text-success">¿Por qué es importante?</h3>
          <ul>
            <li>
              <b>JavaScript en el servidor: </b>Antes de Node.js, JavaScript
              solo funcionaba en navegadores. Con Node.js, puedes usar el mismo
              lenguaje en el frontend (navegador) y en el backend (servidor),
              haciendo todo más consistente.
            </li>
            <li>
              <b>Rápido gracias a V8: </b>Node.js utiliza el motor V8, el mismo
              que Google Chrome usa para ejecutar JavaScript. Este motor
              convierte el código a un formato que la computadora entiende
              directamente, lo que lo hace extremadamente rápido.
            </li>
            <li>
              <b>Orientado a eventos: </b>En lugar de ejecutar tareas una por
              una, Node.js escucha eventos (como una solicitud de usuario o un
              archivo cargándose) y responde de inmediato, incluso si aún está
              manejando otras tareas. Esto lo hace perfecto para aplicaciones
              que necesitan manejar muchas conexiones al mismo tiempo.
            </li>
          </ul>
        </Col>
      </Row>
      <hr />
      {/* Lo que se necesita saber */}
      <Row>
        <Col md={12}>
          <h3 className="text-success">¿Qué necesitas saber primero?</h3>
          <ol>
            <li>
              <b>Conoce JavaScript básico: </b>Antes de aprender Node.js,
              asegúrate de dominar conceptos básicos como:
            </li>
            <ul>
              <li>
                <b>Variables y funciones: </b>cómo almacenar y ejecutar código.
              </li>
              <li>
                <b>Callbacks y Promesas: </b>cómo manejar tareas asincrónicas.
              </li>
            </ul>
            <br />
            <li>
              <b>¿Qué es un servidor? </b>Un servidor es una computadora que
              recibe solicitudes (como abrir una página web) y envía respuestas
              (como mostrar el contenido). Con Node.js, puedes construir tu
              propio servidor fácilmente.
            </li>
            <br />
            <li>
              <b>Instalar Node.js: </b>
            </li>
            <ul>
              <li>
                Ve a{" "}
                <a href="https://nodejs.org/en/" target="_blank">
                  nodejs.org
                </a>{" "}
                y descarga la versión recomendada para tu sistema operativo.
              </li>
              <li>
                Luego abre tu terminal y escribe: bash Copiar código{" "}
                <b>node -v</b>. Si ves un número (por ejemplo, v18.0.0),
                significa que Node.js está listo para usarse.
              </li>
            </ul>
          </ol>
        </Col>
      </Row>

      {/* Conceptos clave para empezar */}
      <Row className="mt-5">
        <Col md={12}>
          <h3 className="text-success">Conceptos clave para empezar</h3>
          <ol>
            <li>
              <b>Módulos: </b>Node.js tiene herramientas listas para usar,
              llamadas &quot;módulos&quot;, que puedes cargar según lo
              necesites. Ejemplo:
            </li>
            <ul>
              <li>
                <b>fs: </b>para trabajar con archivos. Esto crea un archivo
                llamado archivo.txt con el contenido &quot;Hola Node.js&quot;.
              </li>
              <br />
              <b>
                <pre>
                  <code>
                    const fs = require(&#39;fs&#39;);
                    fs.writeFileSync(&#39;archivo.txt&#39;, &#39;Hola
                    Node.js&#39;);
                  </code>
                </pre>
              </b>
              <li>
                <b>http: </b>para crear servidores web. Esto inicia un servidor
                en el puerto 3000.
              </li>
              <br />
              <b>
                <pre>
                  <code>
                    const http = require(&#39;http&#39;);
                    http.createServer((req, res) =&gt; &#123;
                    res.end(&#39;¡Servidor funcionando!&#39;);
                    &#125;).listen(3000);
                  </code>
                </pre>
              </b>
            </ul>
            <br />
            <li>
              <b>npm (Node Package Manager): </b>Una herramienta que viene con
              Node.js para instalar paquetes o bibliotecas. Estos paquetes son
              como &quot;bloques de construcción&quot; hechos por otros
              desarrolladores para que no tengas que reinventar la rueda.
            </li>
            <ul>
              <li>
                Ejemplo: Instalar Express (un popular framework de Node.js):
              </li>
              <br />
              <b>
                <pre>
                  <code>npm install express</code>
                </pre>
              </b>
              <br />
              <li>Luego, lo usas en tu código: javascript Copiar código</li>
              <br />
              <b>
                <pre>
                  <code>
                    const express = require(&#39;express&#39;); const app =
                    express(); app.get(&#39;/&#39;, (req, res) =&gt;
                    res.send(&#39;¡Hola desde Express!&#39;)); app.listen(3000);
                  </code>
                </pre>
              </b>
            </ul>
          </ol>
        </Col>
      </Row>

      {/* Adicionales */}
      <Row className="mt-5">
        <Col md={6}>
          <h3 className="text-success">Adicionales</h3>
          <ol>
            <li>
              <b>Middleware: </b>Una capa de código que se ejecuta antes de
              responder a una solicitud.
            </li>
            <ul>
              <li>
                Por ejemplo, en Express puedes usar un middleware para verificar
                si un usuario está autenticado:
              </li>
            </ul>
          </ol>
        </Col>
        <Col md={6}>
          <Image
            src="images/Middleware.png"
            alt="Middleware"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <ol>
            <li>
              <b>Trabajo con bases de datos: </b>Node.js se conecta fácilmente a
              bases de datos como MongoDB, MySQL o PostgreSQL.
            </li>
            <ul>
              <li>
                Ejemplo con MongoDB usando Mongoose: javascript Copiar código
              </li>
            </ul>
          </ol>
        </Col>
        <Col md={6}>
          <Image
            src="images/trabajo.png"
            alt="Trabajo con bases de datos"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <ol>
            <li>
              <b>WebSockets </b>Node.js permite crear conexiones en tiempo real,
              como en chats o videojuegos.
            </li>
            <ul>
              <li>Ejemplo con el paquete ws: </li>
            </ul>
          </ol>
        </Col>
        <Col md={6}>
          <Image
            src="images/web.png"
            alt="WebSockets"
            className="img-fluid"
          />
        </Col>
      </Row>

      {/* Ejemplo básico completo */}
      <Row className="mt-5">
        <Col md={6}>
          <h3 className="text-success">Ejemplo básico completo</h3>
          <p>
            Combina varios conceptos en un pequeño servidor que responda a
            solicitudes y use un archivo:
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="images/ejemploNode.png"
            alt="Node.js"
            className="img-fluid"
          />
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default NodeJsPage;
