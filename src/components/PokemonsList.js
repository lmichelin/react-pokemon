import React, { Component } from 'react';
import Pokemon from "./Pokemon";

class PokemonsList extends Component {

  // inline for rendering ???

  render() {
    return (
      <div>
        {this.props.idsPokemons.map(idPokemon =>
          <Pokemon idPokemon={idPokemon} key={idPokemon} />
        )}
      </div>
    );
  }

}

export default PokemonsList;
