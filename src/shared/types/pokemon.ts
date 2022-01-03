export type PokemonTypes =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: Array<PokemonTypes>;
  about: {
    height: number;
    weight: number;
    abilities: Array<string>;
  };
  stats: Array<number>;
};

export type SummaryPokemonResponse = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  id: number;
  name: string;
  types: Array<{
    type: {
      name: PokemonTypes;
    };
  }>;
  height: number;
  weight: number;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
  }>;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
};
