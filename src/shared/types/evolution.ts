type EvolvesTo = {
  species: {
    name: string;
  };
  evolves_to: EvolvesTo[];
};

export type EvolutionResponse = {
  species: {
    name: string;
  };
  chain: {
    species: {
      name: string;
    };
    evolves_to: EvolvesTo[];
  };
};
