import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const ImageCard = ({ image }) => {
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const isFavorited = favorites.some(fav => fav.id === image.id);

  const handleFavorite = () => {
    if (isFavorited) {
      removeFavorite(image.id);
    } else {
      addFavorite(image);
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 m-2 w-48"> {/* Definindo largura fixa */}
      <div className="w-full h-32 rounded-lg overflow-hidden">
        <img 
          src={image.download_url} 
          alt={image.author} 
          className="w-full h-full object-cover rounded-lg" 
        />
      </div>
      <div className="p-2">
        <h3 className="font-bold text-sm">{image.author}</h3>
        <button 
          onClick={handleFavorite} 
          className={`mt-1 px-3 py-1 ${isFavorited ? 'bg-red-500' : 'bg-blue-500'} text-white rounded text-xs`}>
          {isFavorited ? 'Remover Favorito' : 'Adicionar Favorito'}
        </button>
      </div>
    </div>
  );
};

export default ImageCard;





