import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Chama a função de pesquisa com o valor da barra
    setQuery(''); // Limpa a barra de pesquisa
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar imagens..."
        className="border border-gray-300 rounded-l-lg p-2"
      />
      <button type="submit" className="bg-blue-600 text-white rounded-r-lg px-4">
        Pesquisar
      </button>
    </form>
  );
}

export default SearchBar;
