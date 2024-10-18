import React from 'react';
import { useParams } from 'react-router-dom';

const ImageDetails = ({ images }) => {
  const { id } = useParams();
  const image = images.find(img => img.id === id);

  if (!image) return <div>Imagem não encontrada</div>;

  return (
    <div className="p-4">
      <img src={image.download_url} alt={image.author} className="w-full h-auto" />
      <h2 className="text-2xl mt-4">{image.author}</h2>
      <p>Dimensões: {image.width} x {image.height}</p>
    </div>
  );
};

export default ImageDetails;
