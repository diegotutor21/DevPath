import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      const user = JSON.parse(userInfo);
      setLoggedIn(true);
      setIsAdmin(user.rol === "admin");

      if (user.rol === "admin" && window.location.pathname === "/login") {
        navigate("/");
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("¿Seguro quieres cerrar sesión?")) {
      localStorage.clear();
      setLoggedIn(false);
      setIsAdmin(false);
      navigate("/");
    }
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar expand="lg" className="navbar-main" variant="dark">
      <Container fluid className="px-3">
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <span className="logo-text">&lt;/&gt;</span>
          <span className="ms-2">DevPath</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            {[
              { path: "/", text: "Inicio" },
              { path: "/frontend", text: "Frontend" },
              { path: "/backend", text: "Backend" },
              { path: "/database", text: "Base de Datos" },
              { path: "/herramientas", text: "Herramientas" },
              { path: "/editor", text: "Editor" },
              { path: "/about", text: "Acerca de" },
            ].map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={`nav-link-custom ${
                  isActiveRoute(item.path) ? "active" : ""
                }`}
              >
                {item.text}
              </Nav.Link>
            ))}

            {isAdmin && (
              <Nav.Link
                as={Link}
                to="/admin"
                className={`nav-link-custom admin-link ${
                  isActiveRoute("/admin") ? "active" : ""
                }`}
              >
                Panel Administrador
              </Nav.Link>
            )}
          </Nav>

          <div className="d-flex align-items-center">
            {loggedIn ? (
              <Button
                variant="outline-light"
                onClick={handleLogout}
                className="auth-button"
              >
                Cerrar sesión
              </Button>
            ) : (
              <Button
                variant="outline-light"
                as={Link}
                to="/login"
                className="auth-button"
              >
                Iniciar sesión
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .navbar-main {
          background-color: #032030;
          padding: 0.75rem 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .brand-logo {
          display: flex;
          align-items: center;
          color: white !important;
          font-weight: 600;
          font-size: 1.3rem;
        }

        .logo-text {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.6rem;
          border-radius: 8px;
          transition: background-color 0.3s ease;
        }

        .brand-logo:hover .logo-text {
          background: rgba(255, 255, 255, 0.2);
        }

        .nav-link-custom {
          color: rgba(255, 255, 255, 0.8) !important;
          padding: 0.5rem 1rem !important;
          margin: 0 0.2rem;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .nav-link-custom:hover {
          color: white !important;
          background: rgba(255, 255, 255, 0.1);
        }

        .nav-link-custom.active {
          color: white !important;
          background: rgba(255, 255, 255, 0.15);
        }

        .admin-link {
          font-weight: 600;
          color: #ffd700 !important;
        }

        .custom-toggler {
          border-color: rgba(255, 255, 255, 0.5) !important;
          padding: 4px 8px;
        }

        .custom-toggler:focus {
          box-shadow: none;
        }

        .auth-button {
          border-radius: 6px;
          padding: 0.5rem 1.2rem;
          transition: all 0.3s ease;
          border-width: 2px;
        }

        .auth-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 991px) {
          .nav-link-custom {
            text-align: center;
            margin: 0.2rem 0;
          }

          .navbar-collapse {
            padding: 1rem 0;
          }

          .d-flex {
            justify-content: center;
            margin-top: 1rem;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default NavBar;
