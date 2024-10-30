import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ImageCard from './Components/ImageCard'; // Ajuste o nome do arquivo conforme necessário
import ImageCardDetails from './Components/ImageCardDetails';

function App() {
  return (
    <Routes>
        <Route path="/" element={<ImageCard heading="Image Collections" />} />
        <Route path="/detailPage/:id" element={<ImageCardDetails />} />
    </Routes>
  );
}

export default App;

