import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/MongoDB.css";
import { Container, Row, Col } from "react-bootstrap";

const MongoDBPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4 text-success">
        <b>MongoDB: Donde tus Datos Respiran</b>
      </h1>
      <p className="text-center text-muted">
        Aprende lo esencial para empezar con MongoDB, la base de datos NoSQL
        líder en flexibilidad y rendimiento.
      </p>

      <Row className="gy-4">
        {/* Sección 1 */}
        <Col md={6}>
          <div className="border p-4 rounded shadow-sm">
            <h3 className="text-success">1. ¿Qué es MongoDB?</h3>
            <p>
              MongoDB es una base de datos NoSQL (No Relacional) que almacena
              datos en formato BSON (una extensión de JSON). A diferencia de las
              bases de datos tradicionales (como MySQL), MongoDB no usa tablas y
              filas, sino documentos y colecciones.
            </p>
            <ul>
              <li>
                <b>Documentos: </b>Los datos en MongoDB se almacenan en
                documentos, que son objetos con clave-valor (como JSON).
              </li>
              <hr />
              <li>
                <b>Colecciones: </b>Son grupos de documentos, análogas a las
                tablas en bases de datos SQL.
              </li>
            </ul>
            <img
              src="images/mongo.png"
              alt="mongo"
              className="img-fluid rounded img"
            />
          </div>
        </Col>

        <Col md={6}>
          <div className="border p-4 rounded shadow-sm">
            <h3 className="text-success">
              2. Principales Conceptos de MongoDB
            </h3>
            <ul>
              <li>
                <b>Base de Datos: </b>Contenedor para colecciones (similar a una
                base de datos en SQL).
              </li>
              <hr />
              <li>
                <b>Colección: </b>Un conjunto de documentos, comparable a una
                tabla en SQL.
              </li>
              <hr />
              <li>
                <b>Documento: </b>El registro o entrada de datos dentro de una
                colección, comparable a una fila en una base de datos
                relacional.
              </li>
              <hr />
              <li>
                <b>Campo: </b>Un par clave-valor dentro de un documento. Los
                valores pueden ser de cualquier tipo, como números, cadenas,
                arrays, objetos, etc.
              </li>
            </ul>
          </div>
        </Col>

        {/* Sección 2*/}
        <Col md={6}>
          <div className="border p-4 rounded shadow-sm">
            <h3 className="text-success">3. Instalación de MongoDB</h3>
            <p>
              Para usar MongoDB, primero debes instalarlo en tu máquina o usar
              un servicio en la nube como MongoDB Atlas (más fácil para empezar,
              ya que no necesitas instalar nada en tu máquina).
            </p>
            <ul>
              <li>
                <b>Descargar MongoDB Community: </b> Mongo Comunity es base de
                datos gratuita y de código abierto que se puede autogestionar y
                alojar en la nube o localmente
              </li>
              <li>
                <a
                  href="https://www.mongodb.com/try/download/community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success"
                >
                  Descargar MongoDB Community
                </a>
              </li>
              <hr />
              <li>
                <b>MongoDB Local: </b>Si quieres instalarlo localmente, puedes
                ir al sitio oficial de MongoDB y seguir las instrucciones.
              </li>
              <li>
                <a
                  href="https://www.mongodb.com/try/download/compass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success"
                >
                  Instalar MongoDB Compass
                </a>
              </li>
              <hr />
              <li>
                <b>MongoDB Atlas: </b>Si prefieres no complicarte con la
                instalación, puedes crear una cuenta gratuita en MongoDB Atlas y
                empezar a usar MongoDB en la nube.
              </li>
              <li>
                <a
                  href="https://www.mongodb.com/atlas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success"
                >
                  Ir a MongoDB Atlas
                </a>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className="border p-4 rounded shadow-sm">
            <h3 className="text-success">
              4. Conexión a MongoDB desde tu Aplicación
            </h3>
            <p>
              Para interactuar con MongoDB, puedes usar varias bibliotecas. La
              más común para aplicaciones Node.js es Mongoose. Mongoose
              proporciona una forma sencilla de definir esquemas para tus
              documentos y realizar operaciones como insertar, leer, actualizar
              y borrar datos.
            </p>
            <ul>
              <li>
                <b>Instalación de Mongoose: </b>En tu proyecto de Node.js,
                puedes instalar Mongoose con npm:
              </li>
              <img
                src="images/npm.png"
                alt="npm"
                className="img-fluid rounded imgs"
              />
              <hr />
              <li>
                <b>Conexión a MongoDB: </b>
              </li>
              <img
                src="images/conexion.png"
                alt="conexion"
                className="img-fluid rounded imgs"
              />
            </ul>
          </div>
        </Col>

        {/* Sección 3 */}
        <Col md={6}>
          <div className="border p-4 rounded shadow-sm">
            <h3 className="text-success">5. Operaciones Básicas en MongoDB</h3>
            <p>Las operaciones más comunes que realizarás son:</p>
            <ul>
              <li>
                <b>Insertar un Documento: </b>
              </li>
              <pre className="bg-light p-3 rounded">
                <code>
                  {`const Producto = mongoose.model('Producto', { nombre: String, precio: Number });
const nuevoProducto = new Producto({ nombre: 'Camiseta', precio: 19.99 });
nuevoProducto.save()
  .then(() => console.log('Producto guardado!'))
  .catch((err) => console.error('Error:', err));`}
                </code>
              </pre>
              <hr />
              <li>
                <b>Leer Documentos: </b>
              </li>
              <pre className="bg-light p-3 rounded">
                <code>
                  {`Producto.find({}).then((productos) => console.log(productos));`}
                </code>
              </pre>
              <hr />
              <li>
                <b>Actualizar un Documento:</b>
              </li>
              <pre className="bg-light p-3 rounded">
                <code>
                  {`Producto.updateOne({ nombre: 'Camiseta' }, { precio: 24.99 }) 
  .then(() => console.log('Producto actualizado!'));`}
                </code>
              </pre>
              <hr />
              <li>
                <b>Eliminar un Documento:</b>
              </li>
              <pre className="bg-light p-3 rounded">
                <code>
                  {`Producto.deleteOne({ nombre: 'Camiseta' }) 
  .then(() => console.log('Producto eliminado!'));`}
                </code>
              </pre>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className="border p-4 rounded shadow-sm">
            <h3 className="text-success">6. Estructura de Datos Flexible</h3>
            <p>
              A diferencia de las bases de datos SQL, MongoDB no necesita un
              esquema fijo. Los documentos en una misma colección pueden tener
              diferentes campos, lo que te da mucha flexibilidad para almacenar
              diferentes tipos de datos.
            </p>
            <p>Ejemplo de un documento:</p>
            <img
              src="images/estructura en mongo.png"
              alt="estructura"
              className="img-fluid rounded imgs"
            />
          </div>
        </Col>

        {/* Sección 4*/}
        <Col md={6}>
          <div className="border p-4 rounded shadow-sm">
            <h3 className="text-success">
              7. ¿Cómo Hacer Consultas en MongoDB?
            </h3>
            <p>
              MongoDB permite hacer consultas complejas para recuperar datos de
              manera eficiente:
            </p>
            <ul>
              <li>Buscar documentos por un campo:</li>
              <img
                src="images/consulta1.png"
                alt="consulta 1"
                className="img-fluid rounded imgs"
              />
              <hr />
              <li>Buscar documentos con condiciones más complejas: </li>
              <img
                src="images/consulta2.png"
                alt="consulta 2"
                className="img-fluid rounded imgs"
              />
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className="border p-4 rounded shadow-sm">
            <h3 className="text-success">8. Indexación</h3>
            <p>
              MongoDB usa índices para mejorar el rendimiento de las consultas.
              Si tienes muchas consultas por un campo específico, puedes crear
              un índice sobre ese campo.
            </p>
            <p>Ejemplo: </p>
            <img
              src="images/indice.png"
              alt="index"
              className="img-fluid imgs"
            />
          </div>
        </Col>

        {/* Sección 5*/}
        <Col md={6}>
          <div className="border p-4 rounded shadow-sm">
            <h3 className="text-success">9. ¿Qué es Mongoose?</h3>
            <p>
              Mongoose es una librería de Node.js que facilita el trabajo con
              MongoDB al proporcionarte una manera fácil de definir modelos y
              trabajar con ellos. Un modelo es básicamente una plantilla que
              defines para los documentos dentro de una colección.
            </p>
            <p>
              Ejemplo de cómo definir un esquema y un modelo con Mongoose: js
              Copiar código
            </p>
            <img
              src="images/mongoose.png"
              alt="mongoose"
              className="img-fluid rounded imgs"
            />
          </div>
        </Col>

        <Col md={6}>
          <div className="border p-4 rounded shadow-sm">
            <h3 className="text-success">10. ¿Por Qué Usar MongoDB?</h3>
            <ul>
              <li>
                <b>Escalabilidad: </b>MongoDB está diseñado para manejar grandes
                cantidades de datos y se puede distribuir fácilmente en
                múltiples servidores.
              </li>
              <hr />
              <li>
                <b>Flexibilidad: </b>No tienes que definir un esquema estricto,
                lo que te da libertad para cambiar la estructura de tus datos
                sin afectar a las aplicaciones.
              </li>
              <hr />
              <li>
                <b>Documentos JSON/BSON: </b>MongoDB utiliza un formato de datos
                que es fácil de entender y trabajar con aplicaciones web.
              </li>
              <hr />
              <li>
                <b>Campo: </b>Un par clave-valor dentro de un documento. Los
                valores pueden ser de cualquier tipo, como números, cadenas,
                arrays, objetos, etc.
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MongoDBPage;
