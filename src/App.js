import React, { Component } from 'react';
import PokemonsList from "./components/PokemonsList";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Pokemons list
          </h1>
          <PokemonsList idsPokemons={[1,2,3,4,5,6,7,8,9]} />
        </header>
      </div>
    );
  }

}

export default App;
