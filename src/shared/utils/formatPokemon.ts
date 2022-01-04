import { Pokemon, PokemonResponse } from '../types/pokemon';
import { getPokemonGeneration } from './getPokemonGeneration';

const formatPokemon = (pokemonResponse: PokemonResponse): Pokemon => {
  const pokemon: Pokemon = {
    id: pokemonResponse.id,
    name: pokemonResponse.name,
    about: {
      height: pokemonResponse.height,
      weight: pokemonResponse.weight,
      abilities: pokemonResponse.abilities.map(ability => ability.ability.name),
    },
    stats: pokemonResponse.stats.map(stat => stat.base_stat),
    types: pokemonResponse.types.map(type => type.type.name),
    image: pokemonResponse.sprites.other.dream_world.front_default
      ? pokemonResponse.sprites.other.dream_world.front_default
      : pokemonResponse.sprites.other['official-artwork'].front_default,
    generation: getPokemonGeneration(pokemonResponse.id),
  };

  return pokemon;
};

export { formatPokemon };
