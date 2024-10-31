import React from 'react';
import { Link } from 'react-router-dom';

const SearchInput = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Pesquise por imagem"
    value={value}
    onChange={onChange}
    className="border border-gray-300 rounded px-2 py-1 w-full md:w-64 focus:outline-none focus:ring focus:border-blue-500 text-black"
    aria-label="Procurar por imagem"
  />
);

const AuthorSelect = ({ authors, value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
    className="ml-2 border border-gray-300 rounded px-2 py-1 w-full md:w-auto focus:outline-none focus:ring focus:border-blue-500 text-black"
    aria-label="Selecionar autor"
  >
    <option value="">Todos os Autores</option>
    {authors.map(author => (
      <option key={author} value={author}>
        {author}
      </option>
    ))}
  </select>
);

const Navbar = ({ searchTerm, handleSearch, authors, handleAuthorChange }) => {
  return (
    <nav className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg rounded">
      <div className="container mx-auto flex justify-between items-center">
        <SearchInput value={searchTerm} onChange={handleSearch} />
        <AuthorSelect authors={authors} value={searchTerm} onChange={handleAuthorChange} />
        <Link to="/saved" className="ml-2">
          <button className="transition duration-300 ease-in-out bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700">
            FAVORITOS
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

