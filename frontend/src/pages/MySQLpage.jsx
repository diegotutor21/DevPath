import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const MySQLPage = () => {
  return (
    <Container className="mt-5">
      <Card className="bg-primary text-white mb-4">
        <Card.Body>
          <h1 className="text-center">
            MySQL: La Base de Datos que Da Forma a tus Proyectos
          </h1>
          <p className="text-center">
            Aprende cómo usar MySQL, el sistema de gestión de bases de datos
            relacional más popular, y organiza tus datos de forma eficiente.
          </p>
        </Card.Body>
      </Card>

      {/* Sección 1: ¿Qué es MySQL? */}
      <Row className="gy-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="text-primary">¿Qué es MySQL?</h3>
              <p>
                MySQL es un software que permite crear, gestionar y consultar
                bases de datos relacionales. Estas bases de datos organizan la
                información en tablas, las cuales contienen filas (registros) y
                columnas (atributos). MySQL es conocido por su rapidez,
                confiabilidad y facilidad de uso.
              </p>
              <ul>
                <li>Open Source (código abierto).</li>
                <li>
                  Compatible con múltiples plataformas (Windows, macOS, Linux).
                </li>
                <li>Amplio soporte de la comunidad y documentación.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img
            src="images/mysql.webp"
            alt="Logo de MySQL"
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      {/* Sección 2: Conceptos Básicos */}
      <Row className="gy-4 mt-4">
        <Col md={12}>
          <Card className="bg-light">
            <Card.Body>
              <h3 className="text-dark">Conceptos Básicos de MySQL</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Base de Datos:</strong> Contenedor donde se almacenan
                  datos relacionados.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Tabla:</strong> Conjunto organizado de datos en filas
                  y columnas.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Registro (Fila):</strong> Una entrada completa dentro
                  de una tabla.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Columna (Campo):</strong> Un atributo específico de
                  los registros.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Consulta (Query):</strong> Instrucción para
                  interactuar con la base de datos.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección 3: Comandos Básicos */}
      <Row className="gy-4 mt-4">
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="text-primary">Comandos Básicos de MySQL</h3>
              <p>
                Aquí tienes algunos comandos esenciales para comenzar a trabajar
                con MySQL, junto con una breve descripción de lo que hacen:
              </p>
              <ul>
                <li>
                  <strong>Crear una base de datos:</strong> Crea una nueva base
                  de datos para almacenar tus datos.
                  <pre className="bg-light p-2 rounded">
                    CREATE DATABASE nombre_base;
                  </pre>
                </li>
                <li>
                  <strong>Seleccionar una base de datos:</strong> Cambia el
                  contexto de trabajo a una base de datos específica.
                  <pre className="bg-light p-2 rounded">USE nombre_base;</pre>
                </li>
                <li>
                  <strong>Mostrar bases de datos:</strong> Lista todas las bases
                  de datos disponibles.
                  <pre className="bg-light p-2 rounded">SHOW DATABASES;</pre>
                </li>
                <li>
                  <strong>Crear una tabla:</strong> Define una nueva tabla con
                  columnas y sus tipos de datos.
                  <pre className="bg-light p-2 rounded">
                    {`CREATE TABLE nombre_tabla (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  edad INT
);`}
                  </pre>
                </li>
                <li>
                  <strong>Mostrar tablas:</strong> Lista todas las tablas en la
                  base de datos seleccionada.
                  <pre className="bg-light p-2 rounded">SHOW TABLES;</pre>
                </li>
                <li>
                  <strong>Insertar datos en una tabla:</strong> Agrega nuevos
                  registros a una tabla existente.
                  <pre className="bg-light p-2 rounded">
                    INSERT INTO nombre_tabla (nombre, edad) VALUES
                    (&#39;Juan&#39;, 25);
                  </pre>
                </li>
                <li>
                  <strong>Consultar datos:</strong> Recupera información de una
                  tabla.
                  <pre className="bg-light p-2 rounded">
                    SELECT * FROM nombre_tabla;
                  </pre>
                </li>
                <li>
                  <strong>Actualizar datos:</strong> Modifica registros
                  existentes en una tabla.
                  <pre className="bg-light p-2 rounded">
                    UPDATE nombre_tabla SET edad = 30 WHERE nombre =
                    &#39;Juan&#39;;
                  </pre>
                </li>
                <li>
                  <strong>Eliminar datos:</strong> Borra registros específicos
                  de una tabla.
                  <pre className="bg-light p-2 rounded">
                    DELETE FROM nombre_tabla WHERE nombre = &#39;Juan&#39;;
                  </pre>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección 4: Buenas Prácticas */}
      <Row className="gy-4 mt-4">
        <Col md={12}>
          <Card className="bg-light">
            <Card.Body>
              <h3 className="text-dark">Buenas Prácticas en MySQL</h3>
              <ul>
                <li>
                  Siempre respalda tus datos antes de realizar cambios
                  importantes.
                </li>
                <li>Usa nombres descriptivos para tus tablas y columnas.</li>
                <li>Evita duplicar información (normalización).</li>
                <li>Aprende a usar índices para mejorar el rendimiento.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección 5: Conclusión */}
      <Row className="gy-4 mt-4">
        <Col md={12}>
          <Card className="bg-primary text-white">
            <Card.Body>
              <h3 className="text-center">Instalación de MySQL</h3>
              <p>
                Antes de comenzar, necesitas instalar MySQL en tu computadora:
              </p>
              <ul>
                <li>
                  Descarga MySQL desde el sitio oficial de{" "}
                  <a href="https://dev.mysql.com/downloads/.">MySQL</a>
                </li>
                <li>
                  Durante la instalación, asegúrate de configurar un nombre de
                  usuario y una contraseña.
                </li>
              </ul>
              <p>
                <b>Nota: </b>También puedes usar herramientas gráficas como
                phpMyAdmin o MySQL Workbench para facilitar el trabajo.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Row className="gy-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="text-primary">Herramientas Adicionales</h3>
              <p>Para facilitar el aprendizaje y la práctica:</p>
              <ul>
                <li>Usa MySQL Workbench para una interfaz gráfica amigable.</li>
                <li>
                  Prueba consultas en plataformas como DB Fiddle o W3Schools SQL
                  Tryit Editor.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="text-primary">Temas Avanzados</h3>
              <p>Una vez que domines lo básico, puedes profundizar en:</p>
              <ul>
                <li>Procedimientos almacenados (Stored Procedures).</li>
                <li>Triggers.</li>
                <li>Optimización de consultas.</li>
                <li>Seguridad y permisos de usuario.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default MySQLPage;
