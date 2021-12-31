const formatPokemonId = (id: string | number): string => {
  return `#${String(id).padStart(4, '0')}`;
};

export { formatPokemonId };
