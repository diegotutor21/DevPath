import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Recuperar = () => {
  const [email, setEmail] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Paso 1: Enviar código de recuperación
  const handleCheckEmail = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("El formato del correo es inválido");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3001/api/recuperar/send-recovery-code",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert(`Tu código de recuperación es: ${result.code}`);
        setRecoveryCode(result.code); // Asignar automáticamente el código
        setStep(2);
      } else {
        setError(result.error || "No se pudo enviar el código");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    } finally {
      setIsLoading(false);
    }
  };

  // Paso 2: Cambiar la contraseña
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (newPassword.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3001/api/recuperar/change-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, code: recoveryCode, newPassword }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert("Contraseña cambiada con éxito. Redirigiendo al login...");
        window.location.href = "/login";
      } else {
        setError(result.error || "No se pudo cambiar la contraseña");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        {step === 1 && (
          <form onSubmit={handleCheckEmail}>
            <fieldset>
              <legend className="mb-3 text-center">Recuperar Contraseña</legend>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  aria-label="Email"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar Código"}
              </button>
              {error && <p className="text-danger text-center mt-3">{error}</p>}
            </fieldset>
            <button type="button" className="btn btn-secondary w-100 mt-3" onClick={() => window.location.href = "/login"}>Cancelar</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleChangePassword}>
            <fieldset>
              <legend className="mb-3 text-center">Cambiar Contraseña</legend>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={recoveryCode}
                  onChange={(e) => setRecoveryCode(e.target.value)}
                  placeholder="Código de Recuperación"
                  aria-label="Código de Recuperación"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Nueva Contraseña"
                  aria-label="Nueva Contraseña"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirmar Contraseña"
                  aria-label="Confirmar Contraseña"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isLoading}
              >
                {isLoading ? "Cambiando..." : "Cambiar Contraseña"}
              </button>
              {error && <p className="text-danger text-center mt-3">{error}</p>}
            </fieldset>
            <button type="button" className="btn btn-secondary w-100 mt-3" onClick={() => window.location.href = "/login"}>Cancelar</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Recuperar;
