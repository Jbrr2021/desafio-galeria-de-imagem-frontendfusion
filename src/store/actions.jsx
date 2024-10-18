// actions.js
export const addFavorite = (image) => ({
    type: 'ADD_FAVORITE',
    payload: image,
  });
  
  export const removeFavorite = (id) => ({
    type: 'REMOVE_FAVORITE',
    payload: id,
  });
  
  // reducers.js
  const initialState = { favorites: [] };
  
  const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return { ...state, favorites: [...state.favorites, action.payload] };
      case 'REMOVE_FAVORITE':
        return { ...state, favorites: state.favorites.filter(fav => fav.id !== action.payload) };
      default:
        return state;
    }
  };
  
  export default favoritesReducer;
  