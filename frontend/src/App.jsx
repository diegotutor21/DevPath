import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./home/Home";
import AuthForm from "./auth/LoginRegister";
import Frontend from "./pages/Frontend";
import HTML from "./pages/HTML";
import CodeEditor from "./components/CodeEditor";
import Backend from "./pages/Backend"; // Importa tu archivo Frontend.jsx
import Navbar from "./components/Navbar"; // Importa el Navbar
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  const location = useLocation(); // Hook para obtener la ruta actual
  const isLoginRoute = location.pathname === "/login"; // Verifica si la ruta es /login

  return (
    <>
      {!isLoginRoute && <Navbar />}{" "}
      {/* Muestra el Navbar si no estás en la ruta /login */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/backend" element={<Backend />} />
        {/* Más rutas aquí si las necesitas */}
      </Routes>
      {!isLoginRoute && <Footer />}{" "}
      {/* Muestra el Footer si no estás en la ruta /login */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
