/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { shuffle } from 'lodash';
import { createContext, useCallback, useState, useContext } from 'react';
import { pokeapi } from '../services/api';
import {
  FEATURED_POKEMONS_QUANTITY,
  MAX_POKEMON_ID,
  STORAGE_POKEMONS,
} from '../shared/constants';
import {
  Pokemon,
  PokemonResponse,
  SummaryPokemonResponse,
} from '../shared/types/pokemon';
import { formatPokemon } from '../shared/utils/formatPokemon';

interface PokemonContextData {
  selectedPokemon: Pokemon;
  featuredPokemons: Pokemon[];
  findPokemon(name: string): void;
  clearSelectedPokemon(): void;
  loadFeaturedPokemons(): void;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

const PokemonProvider: React.FC = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(
    {} as Pokemon,
  );

  const [featuredPokemons, setFeaturedPokemons] = useState<Pokemon[]>([]);

  const findPokemon = useCallback(async name => {
    try {
      const { data } = await pokeapi.get<PokemonResponse>(`/pokemon/${name}`);

      const findedPokemon = formatPokemon(data);

      setSelectedPokemon(findedPokemon);
    } catch (error) {
      setSelectedPokemon({} as Pokemon);
    }
  }, []);

  const clearSelectedPokemon = useCallback(() => {
    setSelectedPokemon({} as Pokemon);
  }, []);

  const loadFeaturedPokemons = useCallback(async () => {
    let allPokemons: SummaryPokemonResponse[] = [];
    const storagePokemons = localStorage.getItem(STORAGE_POKEMONS);

    if (storagePokemons) {
      allPokemons = shuffle(
        JSON.parse(storagePokemons),
      ) as SummaryPokemonResponse[];
    } else {
      const { data } = await pokeapi.get('/pokemon', {
        params: {
          offset: 0,
          limit: MAX_POKEMON_ID,
        },
      });

      allPokemons = shuffle(data.results) as SummaryPokemonResponse[];
      localStorage.setItem(STORAGE_POKEMONS, data.results);
    }

    const preFeaturedPokemons = allPokemons.slice(
      0,
      FEATURED_POKEMONS_QUANTITY,
    );

    const featured: Pokemon[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for await (const pokemon of preFeaturedPokemons) {
      const { data } = await pokeapi.get<PokemonResponse>(
        `/pokemon/${pokemon.name}`,
      );

      console.log(data);

      const formattedPokemon = formatPokemon(data);

      featured.push(formattedPokemon);
    }

    setFeaturedPokemons(featured);
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        featuredPokemons,
        findPokemon,
        clearSelectedPokemon,
        loadFeaturedPokemons,
      }}
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
