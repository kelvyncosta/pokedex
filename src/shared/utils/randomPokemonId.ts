import { MAX_POKEMON_ID } from '../constants';

const randomPokemonId = (): number => {
  const maximum = MAX_POKEMON_ID + 1;

  return Math.floor(Math.random() * maximum) + 1;
};

export { randomPokemonId };
