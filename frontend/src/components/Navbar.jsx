import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../utils/decodeToken"; // Ajusta la ruta según la ubicación del archivo
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = decodeToken(token);
      if (decoded) {
        const { role, exp } = decoded;

        // Verifica si el token ha expirado
        if (Date.now() >= exp * 1000) {
          localStorage.clear();
          setLoggedIn(false);
          setIsAdmin(false);
          alert("Tu sesión ha expirado. Por favor, inicia sesión nuevamente.");
          navigate("/login");
        } else {
          setLoggedIn(true);
          setIsAdmin(role === "admin");
        }
      } else {
        localStorage.clear();
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

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#032030" }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: "#fff" }}>
          <b>&lt;/&gt;DevPath</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: "#fff" }}>
              Inicio
            </Nav.Link>
            <Nav.Link href="/frontend" style={{ color: "#fff" }}>
              Frontend
            </Nav.Link>
            <Nav.Link href="/backend" style={{ color: "#fff" }}>
              Backend
            </Nav.Link>
            <Nav.Link href="/code-editor" style={{ color: "#fff" }}>
              Editor
            </Nav.Link>
            <Nav.Link href="/acerca" style={{ color: "#fff" }}>
              Acerca de
            </Nav.Link>
            {isAdmin && (
              <Nav.Link href="/user-list" style={{ color: "#fff" }}>
                Lista de usuarios
              </Nav.Link>
            )}
          </Nav>
          {loggedIn ? (
            <Button variant="outline-light" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          ) : (
            <Button variant="outline-light" href="/login">
              Iniciar sesión
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
