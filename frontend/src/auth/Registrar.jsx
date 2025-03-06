import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("El formato del correo es inválido.");
      return;
    }

    if (!firstName.trim() || !lastName.trim()) {
      setError("El nombre y apellido son obligatorios.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setIsLoading(true);

    const apiBaseUrl = "http://localhost:3000/api";
    const url =
      email === "benjatutor12@gmail.com"
        ? `${apiBaseUrl}/admin/registro`
        : `${apiBaseUrl}/users/registro`;

    const data = {
      nombre: firstName,
      apellido: lastName,
      correo: email,
      password,
      confirmPassword,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "Registro exitoso",
          text: `Ahora puedes iniciar sesión.`,
          icon: "success",
          showCancelButton: false,
          confirmButtonText: "Aceptar",
        }).then(() => {
          navigate("/login");
        });
      } else {
        setError(result.mensaje || "Error en la operación");
      }
    } catch (err) {
      console.error(err);
      setError("Error al procesar la solicitud. Verifica tu conexión.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <form onSubmit={handleSubmit}>
          <h1 className="mb-3 text-center">Registrarse</h1>
          <div className="mb-3">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Apellido</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isLoading}
          >
            {isLoading ? "Procesando..." : "Registrar"}
          </button>
          <p className="mt-3 text-center">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="btn btn-link p-0">
              Inicia Sesión
            </Link>
          </p>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Register;
