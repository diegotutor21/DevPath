import { useEffect, useState } from "react";
import { Card, Button, Spinner, Alert } from "react-bootstrap";
import { Search, Trash2, UserX, Users } from "lucide-react";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/admin/usuarios")
      .then((response) => response.json())
      .then((data) => {
        // Ordenar los usuarios alfabéticamente por nombre al cargarlos
        const sortedData = [...data].sort((a, b) =>
          a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" })
        );
        setUsers(sortedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener usuarios:", err);
        setError("Error al cargar usuarios");
        setLoading(false);
      });
  }, []);

  const handleDelete = (correo) => {
    if (window.confirm("¿Estás seguro de eliminar este usuario?")) {
      fetch(`http://localhost:3000/api/admin/usuarios/${correo}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) throw new Error("Error al eliminar usuario");
          setUsers(users.filter((user) => user.correo !== correo));
        })
        .catch(() => alert("Error eliminando usuario"));
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.correo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-container">
      <Card className="admin-card">
        <Card.Header className="admin-header">
          <div className="d-flex align-items-center">
            <Users size={24} className="me-2" />
            <h1 className="mb-0">Panel de Administración</h1>
          </div>
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar usuarios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </Card.Header>

        <Card.Body className="p-0">
          {loading ? (
            <div className="text-center p-5">
              <Spinner animation="border" variant="primary" />
              <p className="mt-3 mb-0">Cargando usuarios...</p>
            </div>
          ) : error ? (
            <Alert variant="danger" className="m-3">
              <UserX size={20} className="me-2" />
              {error}
            </Alert>
          ) : (
            <div className="table-responsive">
              <table className="table custom-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.correo}>
                      <td>{user.nombre}</td>
                      <td>{user.apellido}</td>
                      <td>{user.correo}</td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(user.correo)}
                          className="delete-btn"
                        >
                          <Trash2 size={16} className="me-1" />
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredUsers.length === 0 && (
                <div className="text-center p-4">
                  <p className="text-muted mb-0">No se encontraron usuarios</p>
                </div>
              )}
            </div>
          )}
        </Card.Body>
      </Card>

      <style>{`
        .admin-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .admin-card {
          border: none;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        }

        .admin-header {
          background-color: #032030;
          color: white;
          padding: 1.5rem;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .admin-header h1 {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .search-container {
          position: relative;
          min-width: 250px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #6c757d;
        }

        .search-input {
          width: 100%;
          padding: 0.5rem 0.75rem 0.5rem 2.5rem;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .search-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .custom-table {
          margin-bottom: 0;
        }

        .custom-table thead {
          background-color: #f8f9fa;
        }

        .custom-table th {
          padding: 1rem;
          font-weight: 600;
          border-bottom: 2px solid #dee2e6;
        }

        .custom-table td {
          padding: 1rem;
          vertical-align: middle;
        }

        .delete-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .delete-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(220, 53, 69, 0.2);
        }

        @media (max-width: 768px) {
          .admin-container {
            padding: 1rem;
          }

          .admin-header {
            padding: 1rem;
            flex-direction: column;
            align-items: stretch;
          }

          .search-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminPanel;
