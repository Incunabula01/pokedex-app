import React from 'react';

import PokedexContainer from './Components/Pokedex/PokedexContainer';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <PokedexContainer />
    </div>
  );
}

export default App;
