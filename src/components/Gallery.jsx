import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';


function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}


export default Gallery;


