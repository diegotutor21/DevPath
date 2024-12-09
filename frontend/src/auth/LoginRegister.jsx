import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("El formato del correo es inválido.");
      return;
    }

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (isRegistering && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setIsLoading(true);

    const url = isRegistering
      ? "http://localhost:3001/api/users/register"
      : "http://localhost:3001/api/users/login";

    const data = isRegistering
      ? { name: `${firstName} ${lastName}`, email, password }
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
        localStorage.setItem("role", result.role);

        setIsLoading(false);
        navigate(result.role === "admin" ? "/admin" : "/");
      } else {
        setError(result.message || "Email o contraseña incorrectos.");
      }
    } catch (err) {
      setError("Error al procesar la solicitud.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoHome = () => navigate("/");

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <form onSubmit={handleSubmit}>
          <h1 className="mb-3 text-center">
            {isRegistering ? "Registrarse" : "Iniciar Sesión"}
          </h1>
          {isRegistering && (
            <>
              <div className="mb-3">
                <label htmlFor="firstName">Nombre</label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName">Apellido</label>
                <input
                  type="text"
                  id="lastName"
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
          </div>
          {isRegistering && (
            <div className="mb-3">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmar Contraseña"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : isRegistering ? "Registrar" : "Entrar"}
          </button>
          <p className="mt-3 text-center">
            {isRegistering
              ? "¿Ya tienes una cuenta?"
              : "¿No tienes una cuenta?"}
            <button
              type="button"
              onClick={toggleForm}
              className="btn btn-link p-0"
            >
              {isRegistering ? "Inicia Sesión" : "Regístrate"}
            </button>
          </p>
          {error && <p className="text-danger text-center">{error}</p>}
        </form>
        <a href="/recuperar" className="d-block text-center mt-2">
          ¿Olvidaste tu contraseña?
        </a>
        <button onClick={handleGoHome} className="btn btn-secondary mt-3 w-100">
          Volver al Home
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
