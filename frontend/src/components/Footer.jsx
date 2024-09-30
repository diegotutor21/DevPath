import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-light py-4" style={{ backgroundColor: "#032030" }}>
      <div className="container text-center">
        <p className="mb-0">
          &copy; 2024 &lt;/&gt;DevPath. Todos los derechos reservados.
        </p>
        <div className="mt-3">
          <b>Siguenos</b>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="fab fa-twitter"></i> X
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="fab fa-youtube"></i> YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
