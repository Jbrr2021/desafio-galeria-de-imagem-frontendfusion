import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
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
    <div className="max-w-xs border rounded-lg overflow-hidden shadow-lg mx-auto">
      <img 
        src={image.download_url} 
        alt={image.author} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="font-bold">{image.author}</h3>
        <button 
          onClick={handleFavorite} 
          className={`mt-2 px-4 py-2 ${isFavorited ? 'bg-red-500' : 'bg-blue-500'} text-white rounded`}>
          {isFavorited ? 'Remover Favorito' : 'Adicionar Favorito'}
        </button>
      </div>
    </div>
  );
};

// Adicionando validações de PropTypes para garantir que as propriedades estejam presentes e no formato correto
ImageCard.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,           // 'id' deve ser uma string obrigatória
    download_url: PropTypes.string.isRequired, // 'download_url' deve ser uma string obrigatória
    author: PropTypes.string.isRequired,       // 'author' deve ser uma string obrigatória
  }).isRequired,                               // O objeto 'image' em si é obrigatório
};

export default ImageCard;








