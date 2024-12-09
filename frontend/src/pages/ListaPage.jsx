import { useState } from "react";
import { Button, Table, Container } from "react-bootstrap";

const ListaPage = () => {
  // Datos de ejemplo, puedes sustituirlos con datos reales luego
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: "Juan",
      apellido: "Pérez",
      email: "juan.perez@example.com",
    },
    { id: 2, nombre: "Ana", apellido: "Gómez", email: "ana.gomez@example.com" },
    {
      id: 3,
      nombre: "Carlos",
      apellido: "López",
      email: "carlos.lopez@example.com",
    },
  ]);

  const bloquearUsuario = (id) => {
    alert(`Usuario con ID ${id} bloqueado.`);
    // Lógica de bloqueo pendiente de integración
  };

  const eliminarUsuario = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Lista de Usuarios</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={usuario.id}>
              <td>{index + 1}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.email}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => bloquearUsuario(usuario.id)}
                >
                  Bloquear
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarUsuario(usuario.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListaPage;
