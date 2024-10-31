import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const GalleryImage = () => {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [imageAuthors, setImageAuthors] = useState([]);
  const [savedImageList, setSavedImageList] = useState(() => {
    return JSON.parse(localStorage.getItem('savedImages')) || [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  const loadGalleryImages = useCallback(async () => {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=${imagesPerPage}`);
      const data = await response.json();
      setImageList(prev => [...prev, ...data]);
      setFilteredList(prev => [...prev, ...data]);
      const uniqueAuthors = Array.from(new Set(data.map(image => image.author)));
      setImageAuthors(uniqueAuthors);
    } catch (error) {
      setFetchError(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, imagesPerPage]);

  useEffect(() => {
    loadGalleryImages();
  }, [loadGalleryImages]);

  useEffect(() => {
    const filtered = searchInput
      ? imageList.filter(image => image.author.toLowerCase().includes(searchInput.toLowerCase()))
      : imageList;
    setFilteredList(filtered);
  }, [searchInput, imageList]);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleImageSaveToggle = (image) => {
    setSavedImageList(prevSaved =>
      prevSaved.some(savedImage => savedImage.id === image.id)
        ? prevSaved.filter(savedImage => savedImage.id !== image.id)
        : [...prevSaved, image]
    );

    // Atualizar o localStorage com a lista de imagens salvas
    localStorage.setItem('savedImages', JSON.stringify(savedImageList));
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  if (isLoading) return <div>Carregando imagens...</div>;
  if (fetchError) return <div>Erro ao carregar imagens: {fetchError.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <Navbar searchTerm={searchInput} handleSearch={handleSearch} authors={imageAuthors} />
      <div className="mb-4 flex justify-center items-center" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredList.length > 0 ? (
          filteredList.map(image => (
            <div key={image.id} className="shadow-lg rounded-lg overflow-hidden relative">
              <p className="text-center mb-2">Autor: {image.author}</p>
              <img src={image.download_url} alt={image.author} className="w-full h-auto" />
              <p className="mt-1 text-center">Dimensões: {image.width} x {image.height}</p>
              <button
                onClick={() => handleImageSaveToggle(image)}
                className={`absolute top-8 right-2 text-xl ${savedImageList.some(savedImage => savedImage.id === image.id) ? 'text-red-500' : 'text-gray-500'}`}
              >
                {savedImageList.some(savedImage => savedImage.id === image.id) ? '❤️' : '🤍'}
              </button>
            </div>
          ))
        ) : (
          <div className="text-center col-span-full">Nenhuma imagem encontrada.</div>
        )}
      </div>
      <button
        onClick={handleLoadMore}
        className="mt-4 block mx-auto bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Carregar Mais Imagens
      </button>
      <Link to="/saved" className="mt-4 block text-center">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
          Ver Favoritos
        </button>
      </Link>
    </div>
  );
};

export default GalleryImage;


 