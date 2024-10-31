import React, { useState, useEffect } from 'react';
import fetchData from '../util/fetchdata'; 
import Image from './Image'; 
import SearchBar from './SearchBar'; 

function ImageCard({ heading }) {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData(setPhotos, 1); // Carrega a primeira página
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Aqui você pode implementar a lógica de filtragem das fotos com base no `query`
  };

  const filteredPhotos = photos.filter(photo => 
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='bg-blue-900 text-white py-10 px-2 lg:p-10 rounded-2xl'>
      <h1 className='text-center text-yellow-600 underline decoration-dashed my-6 text-3xl md:text-5xl'>{heading}</h1>
      <SearchBar onSearch={handleSearch} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {filteredPhotos.map(photo => (
          <Image 
            key={photo.id} 
            id={photo.id} 
            download_url={photo.download_url} 
            author={photo.author} 
            className="custom-box-shadow rounded-3xl"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCard;


