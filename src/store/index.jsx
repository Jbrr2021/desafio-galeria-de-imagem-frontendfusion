import React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Gallery from '../components/Gallery';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Gallery />
  </Provider>
);

export default App;
