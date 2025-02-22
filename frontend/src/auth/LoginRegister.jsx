import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginRegister = () => {
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
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("El formato del correo es inválido.");
      return;
    }

    if (isRegistering) {
      if (!firstName.trim() || !lastName.trim()) {
        setError("El nombre y apellido son obligatorios.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden.");
        return;
      }
    }

    setIsLoading(true);

    const apiBaseUrl = "http://localhost:3000/api";
    const url = isRegistering
      ? email === "benjatutor12@gmail.com"
        ? `${apiBaseUrl}/admin/registro`
        : `${apiBaseUrl}/users/registro`
      : email === "benjatutor12@gmail.com"
      ? `${apiBaseUrl}/admin/login`
      : `${apiBaseUrl}/users/login`;

    const data = isRegistering
      ? {
          nombre: firstName,
          apellido: lastName,
          correo: email,
          password,
          confirmPassword,
        }
      : { correo: email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        if (!isRegistering) {
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
          alert("Registro exitoso. Ahora puedes iniciar sesión.");
          setIsRegistering(false);
        }
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
          <h1 className="mb-3 text-center">
            {isRegistering ? "Registrarse" : "Iniciar Sesión"}
          </h1>
          {isRegistering && (
            <>
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
            </>
          )}
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
          {isRegistering && (
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
          )}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isLoading}
          >
            {isLoading
              ? "Procesando..."
              : isRegistering
              ? "Registrar"
              : "Iniciar sesión"}
          </button>
          <p className="mt-3 text-center">
            {isRegistering
              ? "¿Ya tienes una cuenta?"
              : "¿No tienes una cuenta?"}
            <button
              type="button"
              onClick={toggleForm}
              className="btn btn-link p-0 ms-1"
            >
              {isRegistering ? "Inicia Sesión" : "Regístrate"}
            </button>
          </p>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </form>
        {!isRegistering && (
          <a href="/recuperar" className="d-block text-center mt-2">
            ¿Olvidaste tu contraseña?
          </a>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
