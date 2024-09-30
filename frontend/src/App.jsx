import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import AuthForm from './auth/AuthForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthForm />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
