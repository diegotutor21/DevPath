import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Si el usuario está logueado, cerrar sesión
      setIsLoggedIn(false);
      localStorage.removeItem("token");
    } else {
      // Redirigir al formulario de autenticación
      navigate("/login");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#032030" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          {" "}
          &lt;/&gt;DevPath{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/frontend">
                Frontend
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/backend">
                Backend
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/foro">
                Foro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/acerca-de">
                Acerca de
              </Link>
            </li>
          </ul>
          <button className="btn btn-outline-light" onClick={handleLoginLogout}>
            {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
