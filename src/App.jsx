// App.jsx
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ImageCards from './Components/ImageCards'; 
import ImageCardDetails from './Components/ImageCardDetails';
import Favorites from './Components/Favorites';
import fetchData from './util/fetchdata'; // Certifique-se de que o caminho está correto

function App() {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchData(setPhotos, 1); // Carrega a primeira página
  }, []);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id)); // Remove dos favoritos
    } else {
      setFavorites([...favorites, id]); // Adiciona aos favoritos
    }
  };

  return (
    <Routes>
        <Route path="/" element={<ImageCards heading="Galeria de Imagens" favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/detailPage/:id" element={<ImageCardDetails />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} allPhotos={photos} />} />
    </Routes>
  );
}

export default App;



