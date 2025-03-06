import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "bootstrap/dist/css/bootstrap.min.css";

const Recuperar = () => {
  const [correo, setCorreo] = useState("");
  const [codigo, setCodigo] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Paso 1: Solicitar código de recuperación
  const handleSolicitarCodigo = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(correo)) {
      setError("El formato del correo es inválido");
      return;
    }

    if (correo === "benjatutor12@gmail.com") {
      setError("No se puede recuperar la contraseña del administrador");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/api/users/recuperar-cuenta",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ correo }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        // El backend nos devuelve el código directamente
        Swal.fire({
          title: "Código Enviado",
          text: `Tu código de recuperación es: ${result.codigo}`,
          icon: "success",
          confirmButtonText: "Aceptar",
        });

        setCodigo(result.codigo);
        setStep(2);
      } else {
        setError(result.mensaje || "Error al solicitar el código");
      }
    } catch {
      setError("Error al conectar con el servidor");
    } finally {
      setIsLoading(false);
    }
  };

  // Paso 2: Resetear la contraseña
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/api/users/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            correo,
            codigo,
            newPassword,
            confirmPassword,
          }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        Swal.fire({
          title: "Contraseña Restablecida",
          text: `Tu contraseña ha sido restablecida correctamente`,
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        navigate("/login");
      } else {
        setError(result.mensaje || "Error al cambiar la contraseña");
      }
    } catch {
      setError("Error al conectar con el servidor");
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
        {step === 1 && (
          <form onSubmit={handleSolicitarCodigo}>
            <h2 className="mb-4 text-center">Recuperar Contraseña</h2>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                id="correo"
                className="form-control"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Ingresa tu correo"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Solicitar Código"}
            </button>
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleResetPassword}>
            <h2 className="mb-4 text-center">Cambiar Contraseña</h2>
            <div className="mb-3">
              <label htmlFor="codigo" className="form-label">
                Código de recuperación
              </label>
              <input
                type="text"
                id="codigo"
                className="form-control"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="Ingresa el código recibido"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">
                Nueva contraseña
              </label>
              <input
                type="password"
                id="newPassword"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Nueva contraseña"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmar contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isLoading}
            >
              {isLoading ? "Actualizando..." : "Cambiar Contraseña"}
            </button>
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
            <button
              type="button"
              className="btn btn-secondary w-100 mt-3"
              onClick={() => navigate("/login")}
            >
              Cancelar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Recuperar;
