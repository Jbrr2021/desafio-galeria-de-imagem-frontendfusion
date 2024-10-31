import React, { useState, useEffect } from 'react';
import fetchData from '../util/fetchdata'; // Verifique se o caminho está correto
import Image from './Image'; // Verifique se o componente Image está correto

function ImageCard({ heading }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchData(setPhotos, 1); // Carrega a primeira página
  }, []);

  return (
    <div className='bg-blue-900 text-white py-10 px-2 lg:p-10 rounded-2xl'>
      <h1 className='text-center text-yellow-600 underline decoration-dashed my-6 text-3xl md:text-5xl'>{heading}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {photos.map(photo => (
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


