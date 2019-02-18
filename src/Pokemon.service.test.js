import { getFirstAbility, convertPoundsToKilograms } from './Pokemon.service';

const emptyPokemon = {
    // abilities: []
};
const pokemon = {
    abilities: [
        {
            ability: {
                name: "chlorophyll"
            }
        }
    ]
};

describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});

describe('Tests for convertPoundsToKilograms', () => {
    it('Should return 4.5 if for 10 kg', () => {
        expect(convertPoundsToKilograms(10)).toEqual(4.5);
    })
});
