import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import ImageCard from './ImageCard';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favoritos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

