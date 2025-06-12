import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../my-bikes-store/src/pages/Login';
import Register from '../my-bikes-store/src/pages/Register';
import Venta from '../my-bikes-store/src/pages/Venta';
import Arriendo from '../my-bikes-store/src/pages/Arriendo';
import Reparacion from '../my-bikes-store/src/pages/Reparacion';
import Inventario from '../my-bikes-store/src/pages/Inventario';
import Clientes from '../my-bikes-store/src/pages/Clientes';
import Equipos from '../my-bikes-store/src/pages/Equipos';

function App() {
  return (
    <div>
      <h1>Aplicación Personalizada de Bike Shop</h1>
    <BrowserRouter>
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
    </div>
  );
}

export default App;
