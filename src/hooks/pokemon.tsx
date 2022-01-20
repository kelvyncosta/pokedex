import { shuffle } from 'lodash';
import { createContext, useCallback, useState, useContext } from 'react';
import { pokeapi } from 'services/api';
import {
  FEATURED_POKEMONS_QUANTITY,
  MAX_POKEMON_ID,
  STORAGE_POKEMONS,
} from 'shared/constants';
import { EvolutionResponse } from 'shared/types/evolution';
import {
  IPreviousNextPokemon,
  Pokemon,
  PokemonListResponse,
  PokemonResponse,
  SummaryPokemonResponse,
} from 'shared/types/pokemon';
import { SpecieResponse } from 'shared/types/specie';
import { formatPokemon } from 'shared/utils/formatPokemon';
import { getLocalItem, setLocalItem } from 'shared/utils/localStorage';

interface ILoadPokemonsParams {
  initial?: boolean;
  limit: number;
  offset: number;
}

interface PokemonContextData {
  allPokemons: Pokemon[];
  selectedPokemon: Pokemon;
  featuredPokemons: Pokemon[];
  loadPokemons(params: ILoadPokemonsParams): Promise<void>;
  findPokemon(name: string): Promise<Pokemon>;
  clearSelectedPokemon(): void;
  loadFeaturedPokemons(): void;
  getNextAndPreviousPokemon(
    currentPokemon: Pokemon,
  ): Promise<IPreviousNextPokemon>;
  getEvolutionChain(pokemonId: number): Promise<Pokemon[]>;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

const PokemonProvider: React.FC = ({ children }) => {
  const [allPokemons] = useState<Pokemon[]>(() => {
    const temp = getLocalItem<Pokemon[]>(STORAGE_POKEMONS);

    if (!temp) {
      return [];
    }

    return temp;
  });

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(
    {} as Pokemon,
  );

  const [featuredPokemons, setFeaturedPokemons] = useState<Pokemon[]>([]);

  const callPokemon = useCallback(async (name: string): Promise<Pokemon> => {
    const { data } = await pokeapi.get<PokemonResponse>(`/pokemon/${name}`);

    return formatPokemon(data);
  }, []);

  const loadPokemons = useCallback(
    async ({
      limit,
      offset,
      initial = false,
    }: ILoadPokemonsParams): Promise<void> => {
      try {
        const { data } = await pokeapi.get<PokemonListResponse>('/pokemon', {
          params: {
            offset,
            limit,
          },
        });

        const pokemonsList = await Promise.all(
          data.results.map(item => callPokemon(item.name)),
        );

        if (initial) {
          setLocalItem(STORAGE_POKEMONS, [...pokemonsList]);
        } else {
          const storagePokemons = getLocalItem<Pokemon[]>(STORAGE_POKEMONS);

          if (storagePokemons) {
            setLocalItem(STORAGE_POKEMONS, [
              ...storagePokemons,
              ...pokemonsList,
            ]);
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        throw new Error(String(error));
      }
    },
    [callPokemon],
  );

  const getStoragePokemons = useCallback(async (): Promise<
    SummaryPokemonResponse[]
  > => {
    const storagePokemons = localStorage.getItem(STORAGE_POKEMONS);

    if (storagePokemons) {
      return JSON.parse(storagePokemons) as SummaryPokemonResponse[];
    }
    const { data } = await pokeapi.get('/pokemon', {
      params: {
        offset: 0,
        limit: MAX_POKEMON_ID,
      },
    });

    localStorage.setItem(STORAGE_POKEMONS, JSON.stringify(data.results));

    return data.results as SummaryPokemonResponse[];
  }, []);

  const findPokemon = useCallback(
    async (name: string): Promise<Pokemon> => {
      try {
        const findedPokemon = await callPokemon(name);

        setSelectedPokemon(findedPokemon);

        return findedPokemon;
      } catch (error) {
        setSelectedPokemon({} as Pokemon);

        throw new Error('');
      }
    },
    [callPokemon],
  );

  const clearSelectedPokemon = useCallback(() => {
    setSelectedPokemon({} as Pokemon);
  }, []);

  const loadFeaturedPokemons = useCallback(async () => {
    const storagePokemons = await getStoragePokemons();

    const shuffledPokemons = shuffle(storagePokemons);

    const preFeaturedPokemons = shuffledPokemons.slice(
      0,
      FEATURED_POKEMONS_QUANTITY,
    );

    const featured: Pokemon[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for await (const pokemon of preFeaturedPokemons) {
      const { data } = await pokeapi.get<PokemonResponse>(
        `/pokemon/${pokemon.name}`,
      );

      const formattedPokemon = formatPokemon(data);

      featured.push(formattedPokemon);
    }

    setFeaturedPokemons(featured);
  }, [getStoragePokemons]);

  const getNextAndPreviousPokemon = useCallback(
    async (currentPokemon: Pokemon): Promise<IPreviousNextPokemon> => {
      const storagePokemons = await getStoragePokemons();
      const currentId = currentPokemon.id;

      const nextPokemon =
        currentId === MAX_POKEMON_ID
          ? storagePokemons[0]
          : storagePokemons[currentId];

      const previousPokemon =
        currentId === 1
          ? storagePokemons[MAX_POKEMON_ID - 1]
          : storagePokemons[currentId - 2];

      return {
        previous: {
          ...previousPokemon,
          id: currentId === 1 ? MAX_POKEMON_ID : currentId - 1,
        },
        next: {
          ...nextPokemon,
          id: currentId === MAX_POKEMON_ID ? 1 : currentId + 1,
        },
      };
    },
    [getStoragePokemons],
  );

  const getEvolutionChain = useCallback(
    async (pokemonId: number): Promise<Pokemon[]> => {
      const response = await pokeapi.get<SpecieResponse>(
        `/pokemon-species/${pokemonId}`,
      );

      const { data } = await pokeapi.get<EvolutionResponse>(
        response.data.evolution_chain.url,
      );

      const { chain } = data;

      if (chain.evolves_to.length > 0) {
        const evolutionChain: Pokemon[] = [];

        // BASE POKEMON
        const pokemonN1Name = chain.species.name;

        const { data: pokemonN1Data } = await pokeapi.get<PokemonResponse>(
          `/pokemon/${pokemonN1Name}`,
        );

        const pokemonN1 = formatPokemon(pokemonN1Data);

        evolutionChain.push(pokemonN1);

        // EVOLUTION 1
        const pokemonN2Name = chain.evolves_to[0].species.name;

        const { data: pokemonN2Data } = await pokeapi.get<PokemonResponse>(
          `/pokemon/${pokemonN2Name}`,
        );

        const pokemonN2 = formatPokemon(pokemonN2Data);

        evolutionChain.push(pokemonN2);

        // EVOLUTION 2
        if (chain.evolves_to[0].evolves_to.length > 0) {
          const pokemonN3Name = chain.evolves_to[0].evolves_to[0].species.name;

          const { data: pokemonN3Data } = await pokeapi.get<PokemonResponse>(
            `/pokemon/${pokemonN3Name}`,
          );

          const pokemonN3 = formatPokemon(pokemonN3Data);

          evolutionChain.push(pokemonN3);
        }

        return evolutionChain;
      }

      return [];
    },
    [],
  );

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        selectedPokemon,
        featuredPokemons,
        findPokemon,
        clearSelectedPokemon,
        loadFeaturedPokemons,
        getNextAndPreviousPokemon,
        getEvolutionChain,
        loadPokemons,
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
