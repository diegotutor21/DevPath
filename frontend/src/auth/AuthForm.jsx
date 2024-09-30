import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const url = isRegistering
      ? "http://localhost:3001/api/users/register"
      : "http://localhost:3001/api/users/login";

    const data = isRegistering
      ? { firstName, lastName, email, password }
      : { email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("token", result.token);
        navigate("/"); // Redirigir a la página principal
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("Ocurrió un error al procesar la solicitud.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <h1 className="mb-3 text-center">{isRegistering ? "Registrarse" : "Iniciar Sesión"}</h1>
          {isRegistering && (
            <>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Apellido"
                  required
                />
              </div>
            </>
          )}
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
          </div>
          {isRegistering && (
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmar Contraseña"
                required
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100">
            {isRegistering ? "Registrar" : "Entrar"}
          </button>
          <p className="mt-3 text-center">
            {isRegistering
              ? "¿Ya tienes una cuenta?"
              : "¿No tienes una cuenta?"}
            <a href="#" onClick={toggleForm} className="text-primary">
              {isRegistering ? "Inicia Sesión" : "Regístrate"}
            </a>
          </p>
          {error && <p className="text-danger text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
