export const decodeToken = (token) => {
    try {
      // Divide el token en sus tres partes (header, payload, signature)
      const payload = token.split('.')[1];
      if (!payload) {
        throw new Error("El token no tiene un payload válido.");
      }
  
      // Decodifica la parte del payload usando Base64
      const decodedPayload = atob(payload);
      return JSON.parse(decodedPayload); // Convierte el JSON decodificado en un objeto
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      return null;
    }
  };
  