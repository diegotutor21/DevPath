import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false); // Estado para verificar si el usuario está logueado
  const navigate = useNavigate();

  // useEffect para cargar el estado del token desde localStorage cuando el componente se monta
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true); // Si hay token, el usuario está logueado
    }
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para manejar el logout
  const handleLogout = () => {
    if (window.confirm("¿Seguro quieres cerrar sesión?")) {
      // Confirmación del cierre de sesión
      localStorage.removeItem("token"); // Elimina el token de localStorage
      setLoggedIn(false); // Actualiza el estado para mostrar "Iniciar sesión"
      navigate("/"); // Redirige al home (página principal) después de cerrar sesión
    }
  };

  return (
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
            <Nav.Link href="/code-editor" style={{ color: "#fff" }}>
              Editor
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
