import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ImageCards from './Components/ImageCards'; 
import ImageCardDetails from './Components/ImageCardDetails';

function App() {
  return (
    <Routes>
        <Route path="/" element={<ImageCards heading="Galeria de Imagens" />} />
        <Route path="/detailPage/:id" element={<ImageCardDetails />} />
    </Routes>
  );
}

export default App;

