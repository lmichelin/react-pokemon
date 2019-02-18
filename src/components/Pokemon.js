import React, { Component } from 'react';
import { getImageSrc, getFirstAbility, convertPoundsToKilograms } from "../Pokemon.service";

class Pokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon_data: {}
    }
    this.getPokemon()
  }

  // conditional rendering what are the best practices ?

  render() {
    return (
      <div>
        <h2>
          {this.state.pokemon_data.name}
        </h2>
        <img src={getImageSrc(this.state.pokemon_data)} alt={this.state.pokemon_data.name} />
        <p>
          First ability: <b>{getFirstAbility(this.state.pokemon_data)}</b>
        </p>
        <p>
          Weight: <b>{convertPoundsToKilograms(this.state.pokemon_data.weight)}</b> kg
        </p>
        ––––––––
      </div>
    );
  }

  async getPokemon() {
    try {
      let pokemon_data = await (await fetch("https://pokeapi.co/api/v2/pokemon/" + this.props.idPokemon)).json()
      this.setState({ pokemon_data })

    } catch (error) {
      alert(error)
    }
  }

}

export default Pokemon;
