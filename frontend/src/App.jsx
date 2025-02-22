import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import LoginRegister from "./auth/LoginRegister";
import Recuperar from "./auth/Recuperar";
import Home from "./home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import DataBase from "./pages/DataBase";
import Herramientas from "./pages/Herramientas";
import Editor from "./pages/Editor";
import About from "./pages/AboutMe";
import AdminPanel from "./pages/AdminPanel";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import JS from "./pages/JS";
import Node from "./pages/Node";
import Express from "./pages/Express";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const hideNavFooter =
    location.pathname === "/login" || location.pathname === "/recuperar";

  const userInfo = localStorage.getItem("userInfo");
  const isAdmin = userInfo && JSON.parse(userInfo).rol === "admin";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/recuperar" element={<Recuperar />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/database" element={<DataBase />} />
          <Route path="/herramientas" element={<Herramientas />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/about" element={<About />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/js" element={<JS />} />
          <Route path="/node" element={<Node />} />
          <Route path="/express" element={<Express />} />
          <Route
            path="/admin"
            element={isAdmin ? <AdminPanel /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default App;
