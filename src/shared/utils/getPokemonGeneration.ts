export const getPokemonGeneration = (pokemonId: number): string => {
  if (pokemonId >= 1 && pokemonId <= 151) {
    return '1st';
  }
  if (pokemonId >= 152 && pokemonId <= 251) {
    return '2nd';
  }
  if (pokemonId >= 253 && pokemonId <= 386) {
    return '3th';
  }
  if (pokemonId >= 387 && pokemonId <= 493) {
    return '4th';
  }
  if (pokemonId >= 494 && pokemonId <= 649) {
    return '5th';
  }
  if (pokemonId >= 650 && pokemonId <= 721) {
    return '6th';
  }
  if (pokemonId >= 722 && pokemonId <= 809) {
    return '7th';
  }
  if (pokemonId >= 810 && pokemonId <= 905) {
    return '8th';
  }
  return '9th';
};
