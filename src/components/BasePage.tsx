import { PropsWithChildren, useEffect } from 'react';

import { usePokemon } from 'hooks/pokemon';
import { getLocalItem } from 'shared/utils/localStorage';
import { Generation } from 'shared/types/generation';
import {
  GENERATIONS,
  MAX_POKEMON_ID,
  PERSISTED_GENERATION,
} from 'shared/constants';
import { Header } from './Header';
import { ToTop } from './ToTop';
import { ThemeButton } from './ThemeButton';

export function BasePage({ children }: PropsWithChildren) {
  const { allPokemons, loadPokemons, filterPokemonsByGeneration } =
    usePokemon();

  useEffect(() => {
    (async () => {
      try {
        if (!allPokemons.length) {
          throw new Error('Empty Pokémon List');
        }

        if (allPokemons.length < MAX_POKEMON_ID) {
          throw new Error('Incomplete Pokémon List');
        }

        const generation = getLocalItem<Generation>(PERSISTED_GENERATION);

        filterPokemonsByGeneration(generation || GENERATIONS[0]);
      } catch (error) {
        await loadPokemons({ limit: MAX_POKEMON_ID, offset: 0 });
      }
    })();
  }, [loadPokemons, allPokemons, filterPokemonsByGeneration]);

  return (
    <>
      <div className="fixed w-screen h-screen -z-10 bg-pattern">
        <div className="h-screen dark:opacity-90 dark:bg-gray-800">&nbsp;</div>
      </div>

      <div className="min-h-screen h-full py-0 px-4 z-10">
        <Header />

        <main className="w-full max-w-7xl my-0 mx-auto">{children}</main>

        <ThemeButton />

        <ToTop />
      </div>
    </>
  );
}
