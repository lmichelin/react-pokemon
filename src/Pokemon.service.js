// import React from 'react';

// import react here breaks import in ./src/components/Pokemon.js
// Attempted import error: 'getFirstAbility' is not exported from '../Pokemon.service'.

module.exports = {

	// getImage (pokemon) {
	// 	return pokemon.sprites ? (<img src={pokemon.sprites.front_default} alt={pokemon.name} />) : ''
	// },

	getImageSrc (pokemon) {
		return pokemon.sprites ? pokemon.sprites.front_default : ''
	},

	getFirstAbility (pokemon) {
		if (pokemon.abilities && pokemon.abilities.length) {
			return pokemon.abilities[0].ability.name
		}
		return null
	},

	convertPoundsToKilograms (kilos) {
		return kilos == null ? null : Math.round(kilos / 2.205 * 10) / 10
	},

}
