import {
  createContext,
  useCallback,
  useState,
  useContext,
  PropsWithChildren,
  useMemo,
} from 'react';
import { pokeapi } from 'services/api';
import {
  GENERATIONS,
  MAX_POKEMON_ID,
  PERSISTED_GENERATION,
  PERSISTED_POKEMONS,
} from 'shared/constants';
import { EvolutionResponse } from 'shared/types/evolution';
import { Generation } from 'shared/types/generation';
import {
  IPreviousNextPokemon,
  Pokemon,
  PokemonListResponse,
  PokemonResponse,
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
  pokemon: Pokemon;
  currentPokemons: Pokemon[] | undefined;
  activeGeneration: Generation;
  findPokemon(name: string): void;
  loadPokemons(params: ILoadPokemonsParams): Promise<void>;
  searchPokemon(value?: string): void;
  clearSelectedPokemon(): void;
  getNextAndPreviousPokemon(
    currentPokemon: Pokemon,
  ): Promise<IPreviousNextPokemon>;
  getEvolutionChain(pokemonId: number): Promise<Pokemon[]>;
  filterPokemonsByGeneration(generation: Generation): void;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

function PokemonProvider({ children }: PropsWithChildren) {
  const [activeGeneration, setActiveGeneration] = useState<Generation>(() => {
    const storagedGeneration = getLocalItem<Generation>(PERSISTED_GENERATION);

    if (storagedGeneration) {
      return storagedGeneration;
    }

    setLocalItem(PERSISTED_GENERATION, GENERATIONS[0]);
    return GENERATIONS[0];
  });

  const [allPokemons, setAllPokemons] = useState<Pokemon[]>(() => {
    const pokemons = getLocalItem<Pokemon[]>(PERSISTED_POKEMONS);

    if (!pokemons) {
      return [];
    }

    return pokemons;
  });

  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  const [currentPokemons, setCurrentPokemons] = useState<Pokemon[]>();

  const callPokemon = useCallback(async (name: string): Promise<Pokemon> => {
    const { data } = await pokeapi.get<PokemonResponse>(`/pokemon/${name}`);

    return formatPokemon(data);
  }, []);

  const loadPokemons = useCallback(
    async ({ limit, offset }: ILoadPokemonsParams): Promise<void> => {
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

        setLocalItem(PERSISTED_POKEMONS, pokemonsList);
        setAllPokemons(pokemonsList);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        throw new Error(String(error));
      }
    },
    [callPokemon],
  );

  const findPokemon = useCallback(
    (name: string): void => {
      const findedPokemon = allPokemons.find(item => item.name === name);

      if (findedPokemon) {
        setPokemon(findedPokemon);
      }
    },
    [setPokemon, allPokemons],
  );

  const filterPokemonsByGeneration = useCallback(
    (generation: Generation): void => {
      const { offset, limit } = generation;
      setActiveGeneration(generation);
      setLocalItem(PERSISTED_GENERATION, generation);
      setCurrentPokemons(allPokemons.slice(offset, limit));
    },
    [allPokemons],
  );

  const searchPokemon = useCallback(
    (value: string | undefined): void => {
      if (!value) {
        filterPokemonsByGeneration(activeGeneration);
      } else {
        const pokemons = allPokemons.filter(
          item =>
            item.name.indexOf(value) !== -1 || item.id.toString() === value,
        );

        setCurrentPokemons(pokemons);
      }
    },
    [allPokemons, filterPokemonsByGeneration, activeGeneration],
  );

  const clearSelectedPokemon = useCallback(() => {
    setPokemon({} as Pokemon);
  }, []);

  const getNextAndPreviousPokemon = useCallback(
    async (currentPokemon: Pokemon): Promise<IPreviousNextPokemon> => {
      const currentId = currentPokemon.id;

      const nextPokemon =
        currentId === MAX_POKEMON_ID ? allPokemons[0] : allPokemons[currentId];

      const previousPokemon =
        currentId === 1
          ? allPokemons[MAX_POKEMON_ID - 1]
          : allPokemons[currentId - 2];

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
    [allPokemons],
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

        const [pokemonN1] = allPokemons.filter(
          item => item.name === pokemonN1Name,
        );

        evolutionChain.push(pokemonN1);

        // EVOLUTION 1
        const pokemonN2Name = chain.evolves_to[0].species.name;

        const [pokemonN2] = allPokemons.filter(
          item => item.name === pokemonN2Name,
        );

        evolutionChain.push(pokemonN2);

        // EVOLUTION 2
        if (chain.evolves_to[0].evolves_to.length > 0) {
          const pokemonN3Name = chain.evolves_to[0].evolves_to[0].species.name;

          const [pokemonN3] = allPokemons.filter(
            item => item.name === pokemonN3Name,
          );

          evolutionChain.push(pokemonN3);
        }

        return evolutionChain;
      }

      return [];
    },
    [allPokemons],
  );

  const contextValue = useMemo(
    () => ({
      activeGeneration,
      allPokemons,
      pokemon,
      currentPokemons,
      findPokemon,
      searchPokemon,
      clearSelectedPokemon,
      getNextAndPreviousPokemon,
      getEvolutionChain,
      loadPokemons,
      filterPokemonsByGeneration,
    }),
    [
      activeGeneration,
      allPokemons,
      pokemon,
      currentPokemons,
      findPokemon,
      searchPokemon,
      clearSelectedPokemon,
      getNextAndPreviousPokemon,
      getEvolutionChain,
      loadPokemons,
      filterPokemonsByGeneration,
    ],
  );

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
}

function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  if (!context)
    throw new Error('usePokemon must be used within an PokemonProvider');

  return context;
}

export { PokemonProvider, usePokemon };
