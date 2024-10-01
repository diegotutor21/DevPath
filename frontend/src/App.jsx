import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import AuthForm from './auth/AuthForm';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend'; // Importa tu archivo Frontend.jsx
import Navbar from './components/Navbar'; // Importa el Navbar
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Incluye el NavBar en todas las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/frontend" element={<Frontend />} /> {/* Ruta hacia Frontend */}
          <Route path="/backend" element={<Backend />} /> {/* Ruta hacia Backend */}
          {/* Puedes agregar más rutas aquí */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
