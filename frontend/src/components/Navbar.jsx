import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token")); // Comprueba si hay token al cargar
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const navigate = useNavigate();

  // Función para mostrar el alert de confirmación
  const handleLogout = () => {
    if (window.confirm("¿Seguro quieres cerrar sesión?")) {
      // Confirmación del cierre de sesión
      localStorage.removeItem("token");
      setLoggedIn(false); // Actualiza el estado para mostrar "Iniciar sesión"
    }
  };

  // Al hacer login
  const handleLogin = () => {
    setLoggedIn(true);
    // Aquí puedes navegar o ejecutar una acción después del login.
    // Ejemplo: guardar el token y cambiar la vista si es necesario
  };

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#032030" }}>
        <Container>
          <Navbar.Brand href="/" style={{ color: "#fff" }}>
            <b>&lt;/&gt;DevPath</b>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ borderColor: "#fff" }}
          />
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
              <Nav.Link href="/foro" style={{ color: "#fff" }}>
                Foro
              </Nav.Link>
              <Nav.Link href="/acerca" style={{ color: "#fff" }}>
                Acerca de
              </Nav.Link>
            </Nav>
            {loggedIn ? (
              <Button variant="outline-light" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            ) : (
              <Button
                variant="outline-light"
                href="/login"
                onClick={handleLogin}
              >
                Iniciar sesión
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
