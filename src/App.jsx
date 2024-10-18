
import React from 'react';
import { FavoritesProvider } from './context/FavoritesContext';
import Gallery from './components/Gallery';
import Favorites from './components/Favorites';
import './index.css'

const App = () => {
  return (
    <FavoritesProvider>
      <div className="App">
        <Gallery />
        <Favorites />
      </div>
    </FavoritesProvider>
  );
};

export default App;

