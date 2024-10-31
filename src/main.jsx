import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './util/global.css';
import App from './App';
import Favoritos from './Components/Favoritos'

// Configurando o ponto de entrada da aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizando o aplicativo
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/saved" element={<Favoritos />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
