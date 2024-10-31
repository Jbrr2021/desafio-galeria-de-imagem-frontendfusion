import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SavedImage = ({ image, isSaved, onToggleSave }) => (
  <div key={image.id} className="shadow-lg rounded-lg overflow-hidden relative">
    <img src={image.download_url} alt={`Imagem de ${image.author}`} className="w-full h-auto" />
    <button
      onClick={() => onToggleSave(image)}
      className={`absolute top-2 right-2 text-xl ${isSaved ? 'text-red-500' : 'text-gray-500'}`}
    >
      {isSaved ? '❤️' : '🤍'}
    </button>
  </div>
);

const Favoritos = () => {
  const [savedImages, setSavedImages] = useState([]);

  useEffect(() => {
    const images = JSON.parse(localStorage.getItem('savedImages'));
    setSavedImages(Array.isArray(images) ? images : []); // Certifica-se que é um array
  }, []);

  const handleToggleSave = (image) => {
    setSavedImages(prevSavedImages => {
      const isSaved = prevSavedImages.some(savedImage => savedImage.id === image.id);
      const updatedImages = isSaved
        ? prevSavedImages.filter(savedImage => savedImage.id !== image.id)
        : [...prevSavedImages, image];
      
      // Atualiza o localStorage
      localStorage.setItem('savedImages', JSON.stringify(updatedImages));
      return updatedImages;
    });
  };

  return (
    <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg rounded">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">FAVORITAS</h1>
      {savedImages.length === 0 ? (
        <p className="text-center text-gray-300">SEM FAVORITAS</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {savedImages.map(image => (
            <SavedImage
              key={image.id}
              image={image}
              isSaved={true}  // sempre será true aqui, já que estamos mostrando imagens salvas
              onToggleSave={handleToggleSave}
            />
          ))}
        </div>
      )}
      <Link to="/">
        <button className="mt-4 block mx-auto bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
          VOLTAR
        </button>
      </Link>
    </div>
  );
};

export default Favoritos;


