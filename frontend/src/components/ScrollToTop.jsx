import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario baja 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para volver al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="position-fixed"
          style={{
            bottom: "20px",
            right: "20px",
            zIndex: 1030,
            width: "40px",
            height: "40px",
            padding: "0",
            borderRadius: "50%",
            backgroundColor: "#f4fefd",
            borderColor: "#032030",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <i className="bi bi-arrow-up" style={{ color: "#032030", fontSize: "24px", fontWeight: "bold" }}></i>
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
