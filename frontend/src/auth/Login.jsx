import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    setIsLoading(true);

    const apiBaseUrl = "http://localhost:3000/api";
    const url =
      email === "benjatutor12@gmail.com"
        ? `${apiBaseUrl}/admin/login`
        : `${apiBaseUrl}/users/login`;

    const data = { correo: email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            nombre: result.usuario.nombre,
            apellido: result.usuario.apellido,
            correo: result.usuario.correo,
            rol: result.rol,
          })
        );
        navigate(result.rol === "admin" ? "/admin" : "/");
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
          <h1 className="mb-3 text-center">Iniciar Sesión</h1>
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
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isLoading}
          >
            {isLoading ? "Procesando..." : "Iniciar sesión"}
          </button>
          <p className="mt-3 text-center">
            ¿No tienes una cuenta?{" "}
            <Link to="/registrar" className="btn btn-link p-0">
              Regístrate
            </Link>
          </p>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </form>
        <a href="/recuperar" className="d-block text-center mt-2">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
};

export default Login;
