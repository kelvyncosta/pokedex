/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext, useCallback, useState, useContext } from 'react';
import { pokeapi } from '../services/api';
import { Pokemon, PokemonResponse } from '../shared/types/pokemon';

interface PokemonContextData {
  selectedPokemon: Pokemon;
  findPokemon(name: string): void;
  clearSelectedPokemon(): void;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

const PokemonProvider: React.FC = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(
    {} as Pokemon,
  );

  const findPokemon = useCallback(async name => {
    try {
      const { data } = await pokeapi.get<PokemonResponse>(`/pokemon/${name}`);

      const findedPokemon: Pokemon = {
        id: data.id,
        name: data.name,
        about: {
          height: data.height,
          weight: data.weight,
          abilities: data.abilities.map(ability => ability.ability.name),
        },
        stats: data.stats.map(stat => stat.base_stat),
        types: data.types.map(type => type.type.name),
        image: data.sprites.other.dream_world.front_default
          ? data.sprites.other.dream_world.front_default
          : data.sprites.other['official-artwork'].front_default,
      };

      setSelectedPokemon(findedPokemon);
    } catch (error) {
      setSelectedPokemon({} as Pokemon);
    }
  }, []);

  const clearSelectedPokemon = useCallback(() => {
    setSelectedPokemon({} as Pokemon);
  }, []);

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, findPokemon, clearSelectedPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  if (!context)
    throw new Error('usePokemon must be used within an PokemonProvider');

  return context;
}

export { PokemonProvider, usePokemon };
