// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Venta from './pages/Venta';
import Arriendo from './pages/Arriendo';
import Reparacion from './pages/Reparacion';
import Inventario from './pages/Inventario';
import Clientes from './pages/Clientes';
import Equipos from './pages/Equipos';

function App() {
  return (
    <BrowserRouter>
      {/* Agregamos un menú de navegación */}
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#eee' }}>
        <Link to="/">Login</Link>
        <Link to="/register">Registro</Link>
        <Link to="/venta">Venta</Link>
        <Link to="/arriendo">Arriendo</Link>
        <Link to="/reparacion">Reparación</Link>
        <Link to="/inventario">Inventario</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/equipos">Equipos</Link>
      </nav>
      
      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/venta" element={<Venta />} />
        <Route path="/arriendo" element={<Arriendo />} />
        <Route path="/reparacion" element={<Reparacion />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/equipos" element={<Equipos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;