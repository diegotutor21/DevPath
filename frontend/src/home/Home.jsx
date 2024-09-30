import "../assets/css/Home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <img src="images/Logo1.png" className="logo" />
        <section className="introduction">
          <div className="contenido">
            <p>
              Este sitio web ha sido diseñado para ser una plataforma de
              aprendizaje interactivo y accesible para aquellos que desean
              adentrarse en el mundo de la programación y el desarrollo web.
              Aquí encontrarás una estructura dividida en dos secciones
              principales:
              <span>Frontend</span> y <span>Backend</span>, donde exploraremos
              las tecnologías más populares y utilizadas en cada área del
              desarrollo.
            </p>
            <img className="img" src="images/codigo.webp" alt="" />
          </div>
          <hr />
          <div className="contenido banner">
            <img src="images/images.png" className="img fb" alt="" />
            <br />
            <ul className="list">
              <li>
                En la sección <span className="span">Frontend</span>,
                descubrirás las herramientas y lenguajes que permiten construir
                la interfaz visual con la que los usuarios interactúan.
                Aprenderás sobre HTML, CSS, JavaScript y los frameworks más
                usados para crear páginas web dinámicas y responsivas.
              </li>
              <br />
              <li>
                En la sección <span className="span">Backend</span>, nos
                enfocamos en el lado servidor de las aplicaciones web. Aquí
                conocerás tecnologías como Node.js, Express, MongoDB, entre
                otras, que son esenciales para gestionar la lógica, la seguridad
                y las bases de datos de cualquier proyecto.
              </li>
            </ul>
          </div>
          <hr />
          <h2 className="title">Foro de preguntas y respuestas</h2>
          <div className="contenido">
            <p>
              Este espacio está diseñado para ofrecerte una visión clara y
              práctica de las tecnologías que forman parte del desarrollo web. A
              través de este sitio, encontrarás información esencial sobre los
              lenguajes, herramientas y marcos que se utilizan tanto en el
              frontend como en el backend de las aplicaciones modernas. Nuestro
              objetivo es simplificar el aprendizaje y proporcionar ejemplos
              reales que te permitan entender cómo funcionan estas tecnologías
              en conjunto.
            </p>
            <img
              src="images/programador-fullstack.jpg"
              className="img"
              alt=""
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
