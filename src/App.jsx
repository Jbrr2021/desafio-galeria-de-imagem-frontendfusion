import React from 'react';
import GalleryImage from './Components/GalleryImage';
import Favoritos from './Components/Favoritos';

function App() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundImage: 'url(https://your-image-url.com)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-center py-16 text-3xl font-bold mb-4">Galeria de imagens</h1>
          
          <GalleryImage />
          
          <Favoritos />
        </div>
      </div>
    </div>
  );
}

export default App;




