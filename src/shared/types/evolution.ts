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
    evolves_to: EvolvesTo[];
  };
};
