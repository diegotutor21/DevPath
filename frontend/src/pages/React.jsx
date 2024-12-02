import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const ReactPage = () => {
  return (
    <Container fluid className="mt-5">
      {/* Cabecera con Imagen del Logo */}
      <Row className="bg-primary text-light py-4 text-center">
        <Col>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // Enlace del logo
            alt="React Logo"
            width="120"
            className="mb-3"
          />
          <h1 className="display-5 fw-bold">React</h1>
          <h3 className="text-light">
            Construyendo Interfaces Interactivas con Componentes
          </h3>
        </Col>
      </Row>

      {/* Introducción */}
      <Row className="mt-5">
        <Col lg={8} className="mx-auto">
          <Card className="shadow-lg border-0">
            <Card.Body>
              <h3 className="text-primary">¿Qué es React?</h3>
              <p>
                React es una biblioteca de JavaScript que te permite crear
                interfaces de usuario interactivas y dinámicas. Su principal
                objetivo es facilitar la construcción de aplicaciones rápidas y
                escalables.
              </p>
              <ul>
                <li>
                  <b>Declarativo:</b> Describe cómo debería lucir tu interfaz y
                  React se encarga de los detalles técnicos.
                </li>
                <li>
                  <b>Basado en Componentes:</b> Divide tu aplicación en partes
                  más pequeñas y manejables.
                </li>
                <li>
                  <b>Compatible con SPA:</b> Ideal para crear aplicaciones de
                  una sola página con un flujo rápido y fluido.
                </li>
              </ul>
              <p>
                React se utiliza ampliamente en el desarrollo web moderno debido
                a su capacidad de manejar actualizaciones frecuentes de manera
                eficiente y su soporte para arquitecturas modulares.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Características Clave */}
      <Row className="mt-5 bg-light py-4 shadow-sm">
        <Col md={4} className="text-center">
          <Card className="border-primary">
            <Card.Body>
              <h5 className="text-primary">Basado en Componentes</h5>
              <p>
                Cada parte de la interfaz de usuario es un componente
                independiente que puedes combinar y reutilizar en otros lugares.
              </p>
              <pre>
                <code>
                  {`function Boton() {
  return <button>Haz clic aquí</button>;
}`}
                </code>
              </pre>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card className="border-primary">
            <Card.Body>
              <h5 className="text-primary">Virtual DOM</h5>
              <p>
                React utiliza una representación virtual del DOM real para
                realizar actualizaciones más rápidas y minimizar cambios
                innecesarios.
              </p>
              <p>
                Esto mejora significativamente el rendimiento, especialmente en
                aplicaciones complejas.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card className="border-primary">
            <Card.Body>
              <h5 className="text-primary">Declarativo</h5>
              <p>
                Con React, solo defines cómo debería verse tu aplicación, y la
                biblioteca se encarga de actualizar la interfaz de usuario de
                forma automática cuando los datos cambian.
              </p>
              <pre>
                <code>
                  {`const titulo = "Hola Mundo!";
const elemento = <h1>{titulo}</h1>;`}
                </code>
              </pre>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección: Conceptos Nativos de React */}
      <Row className="mt-5 bg-light py-4">
        <Col lg={8} className="mx-auto">
          <Card className="p-4 bg-secondary text-light shadow">
            <Card.Body>
              <h3>Conceptos Nativos de React</h3>
              <ul>
                <li>
                  <b>JSX:</b> Una extensión de JavaScript que permite escribir
                  código similar a HTML dentro de los componentes.
                  <pre>
                    <code>{`const elemento = <h1>Hola, mundo</h1>;`}</code>
                  </pre>
                </li>
                <li>
                  <b>Hooks:</b> Permiten manejar el estado y los efectos
                  secundarios sin necesidad de clases.
                  <pre>
                    <code>
                      {`import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  return <button onClick={() => setContador(contador + 1)}>Click {contador}</button>;
}`}
                    </code>
                  </pre>
                </li>
                <li>
                  <b>Estado:</b> Una forma de almacenar datos específicos de un
                  componente que pueden cambiar con el tiempo.
                </li>
                <li>
                  <b>Props:</b> Permiten pasar datos de un componente padre a un
                  hijo.
                  <pre>
                    <code>
                      {`const Saludo = ({ nombre }) => <h1>Hola, {nombre}</h1>;`}
                    </code>
                  </pre>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ejemplo Visual */}
      <Row className="my-5">
        <Col lg={8} className="mx-auto">
          <Card className="p-4 bg-secondary text-light shadow">
            <Card.Body>
              <h4>¿Cómo luce un componente React?</h4>
              <p>
                Un componente es una función de JavaScript que devuelve
                elementos React (generalmente JSX). Puede recibir datos (props)
                y renderizarlos dinámicamente.
              </p>
              <pre>
                <code>
                  {`import React from 'react';

const Saludo = ({ nombre }) => {
  return <h1>¡Hola, {nombre}!</h1>;
};

// Uso del componente
<Saludo nombre="Mundo" />`}
                </code>
              </pre>
              <p>
                Este enfoque modular hace que las aplicaciones React sean más
                fáciles de mantener y escalar.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección: ¿Dónde usar React? */}
      <Row className="bg-primary text-light py-4">
        <Col md={10} className="mx-auto">
          <Card className="p-4 border-light shadow">
            <Card.Body>
              <h3>¿Dónde usar React?</h3>
              <Row>
                <Col md={6}>
                  <ul>
                    <li>Aplicaciones web dinámicas.</li>
                    <li>Sitios web con interacción avanzada.</li>
                    <li>Plataformas como Facebook o Instagram.</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul>
                    <li>Aplicaciones móviles con React Native.</li>
                    <li>Desarrollo de dashboards interactivos.</li>
                    <li>Sistemas de gestión de datos complejos.</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección: Ventajas frente a otras bibliotecas */}
      <Row className="my-5">
        <Col lg={8} className="mx-auto">
          <Card className="shadow-lg border-primary">
            <Card.Body>
              <h3 className="text-primary">
                ¿Por qué usar React frente a otras bibliotecas?
              </h3>
              <ul>
                <li>
                  <b>Flexibilidad:</b> A diferencia de frameworks completos como
                  Angular, React permite elegir qué herramientas usar para
                  routing, estado, etc.
                </li>
                <li>
                  <b>Declarativo:</b> React permite describir el &quot;qué&quot;
                  en lugar del &quot;cómo,&quot; simplificando el desarrollo.
                </li>
                <li>
                  <b>React Ecosystem:</b> Herramientas como React Router y Redux
                  amplían su funcionalidad sin forzar su adopción.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección: Ventajas de React */}
      <Row className="mt-5">
        <Col lg={8} className="mx-auto">
          <Card className="shadow-lg border-0">
            <Card.Body>
              <h3 className="text-primary">Ventajas de React</h3>
              <ul>
                <li>
                  <b>Virtual DOM:</b> Actualizaciones rápidas y eficientes
                  gracias al Virtual DOM, que minimiza cambios en el DOM real.
                </li>
                <li>
                  <b>Componentes Reutilizables:</b> Permite dividir la interfaz
                  en componentes reutilizables, reduciendo el código redundante.
                </li>
                <li>
                  <b>Gran Comunidad:</b> React tiene una enorme comunidad y
                  recursos, incluyendo bibliotecas y herramientas
                  complementarias.
                </li>
                <li>
                  <b>Compatibilidad:</b> Puede integrarse con otros frameworks y
                  tecnologías sin problemas.
                </li>
                <li>
                  <b>React Native:</b> Usa los mismos principios para construir
                  aplicaciones móviles nativas.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección: Desventajas de React */}
      <Row className="my-5">
        <Col lg={8} className="mx-auto">
          <Card className="shadow-lg border-danger">
            <Card.Body>
              <h3 className="text-danger">Desventajas de React</h3>
              <ul>
                <li>
                  <b>Curva de Aprendizaje:</b> Aunque es simple para empezar,
                  aprender conceptos avanzados como hooks y estado global puede
                  ser desafiante.
                </li>
                <li>
                  <b>Requiere Configuración:</b> Herramientas como Webpack o
                  Babel suelen ser necesarias para configuraciones
                  personalizadas.
                </li>
                <li>
                  <b>Actualizaciones Frecuentes:</b> Cambios constantes en el
                  ecosistema pueden hacer que el mantenimiento sea más
                  complicado.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReactPage;
