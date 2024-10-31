import React from 'react';
import GalleryImage from './Components/GalleryImage';
import Favoritos from './Components/Favoritos';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto p-4">
        <h1 className="bg-black text-white text-center py-16 text-3xl font-bold mb-4">Galeria de imagens</h1>
        
        <GalleryImage />
        
        <Favoritos />
      </div>
    </div>
  );
}

export default App;



