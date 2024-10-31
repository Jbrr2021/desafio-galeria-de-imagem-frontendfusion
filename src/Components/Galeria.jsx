import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Galeria = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [savedImages, setSavedImages] = useState(() => {
    return JSON.parse(localStorage.getItem('savedImages')) || [];
  });
  const [page, setPage] = useState(1);
  const imagesPerPage = 8;

  // Função para buscar imagens
  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${imagesPerPage}`);
      const data = await response.json();
      setImages(prevImages => [...prevImages, ...data]);
      setFilteredImages(prevImages => [...prevImages, ...data]);
      const uniqueAuthors = Array.from(new Set(data.map(image => image.author)));
      setAuthors(uniqueAuthors);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [page, imagesPerPage]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    const filtered = searchTerm
      ? images.filter(image => image.author.toLowerCase().includes(searchTerm.toLowerCase()))
      : images;
    setFilteredImages(filtered);
  }, [searchTerm, images]);

  useEffect(() => {
    localStorage.setItem('savedImages', JSON.stringify(savedImages));
  }, [savedImages]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleSave = (image) => {
    setSavedImages(prevSavedImages =>
      prevSavedImages.some(savedImage => savedImage.id === image.id)
        ? prevSavedImages.filter(savedImage => savedImage.id !== image.id)
        : [...prevSavedImages, image]
    );
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <Navbar searchTerm={searchTerm} handleSearch={handleSearch} authors={authors} />
      <div className="mb-4 flex justify-center items-center" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.length > 0 ? (
          filteredImages.map(image => (
            <div key={image.id} className="shadow-lg rounded-lg overflow-hidden relative">
              <p className="text-center mb-2">Autor: {image.author}</p>
              <img src={image.download_url} alt={image.author} className="w-full h-auto" />
              <p className="mt-1 text-center">PX: {image.width} x {image.height}</p>
              <button
                onClick={() => toggleSave(image)}
                className={`absolute top-8 right-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-red-500 transition duration-300 ${savedImages.some(savedImage => savedImage.id === image.id) ? 'bg-red-500' : ''}`}
              >
                {savedImages.some(savedImage => savedImage.id === image.id) ? 'Desfavoritar' : 'Favoritar'}
              </button>
            </div>
          ))
        ) : (
          <div className="text-center col-span-full">Nenhuma imagem encontrada.</div>
        )}
      </div>
      <button
        onClick={loadMoreImages}
        className="mt-4 block mx-auto bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Carregar Mais Imagens
      </button>
      <Link to="/saved" className="mt-4 block text-center">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
          Vai para Favoritos
        </button>
      </Link>
    </div>
  );
};

export default Galeria;
 