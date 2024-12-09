import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./home/Home";
import AuthForm from "./auth/LoginRegister";
import Recuperar from "./auth/Recuperar";
import UserList from "./pages/ListaPage";
import Frontend from "./pages/Frontend";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import JS from "./pages/JS";
import React from "./pages/React";
import Bootstrap from "./pages/Bootstrap";
import GitGithub from "./pages/Git-Github";
import CodeEditor from "./components/CodeEditor";
import Backend from "./pages/Backend";
import Node from "./pages/NodeJS";
import Express from "./pages/Express";
import Mongo from "./pages/MongoDB";
import Mysql from "./pages/MySQLpage";
import RestApis from "./pages/Api";
import Jwt from "./pages/JWT";
import Navbar from "./components/Navbar"; // Importa el Navbar
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  const location = useLocation(); // Hook para obtener la ruta actual
  const isLoginRoute =
    location.pathname === "/login" || location.pathname === "/recuperar"; // Verifica si la ruta es /login

  return (
    <>
      {!isLoginRoute && <Navbar />}{" "}
      {/* Muestra el Navbar si no estás en la ruta /login */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/js" element={<JS />} />
        <Route path="/react" element={<React />} />
        <Route path="/bootstrap" element={<Bootstrap />} />
        <Route path="/git-github" element={<GitGithub />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/node" element={<Node />} />
        <Route path="/express" element={<Express />} />
        <Route path="/mongo" element={<Mongo />} />
        <Route path="/mysql" element={<Mysql />} />
        <Route path="/restapis" element={<RestApis />} />
        <Route path="/jwt" element={<Jwt />} />
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
