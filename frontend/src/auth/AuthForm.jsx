import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/AutoForm.css";

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
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>{isRegistering ? "Registrarse" : "Iniciar Sesión"}</h1>
          {isRegistering && (
            <>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Nombre"
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Apellido"
                required
              />
            </>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
          {isRegistering && (
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar Contraseña"
              required
            />
          )}
          <button type="submit">
            {isRegistering ? "Registrar" : "Entrar"}
          </button>
          <p>
            {isRegistering
              ? "¿Ya tienes una cuenta?"
              : "¿No tienes una cuenta?"}
            <a href="#" onClick={toggleForm}>
              {isRegistering ? "Inicia Sesión" : "Regístrate"}
            </a>
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
