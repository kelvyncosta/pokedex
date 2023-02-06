import { PropsWithChildren, useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

import { usePokemon } from 'hooks/pokemon';
import { scrollToTop } from 'shared/utils/scrollToTop';

import { getLocalItem } from 'shared/utils/localStorage';
import { Generation } from 'shared/types/generation';
import {
  GENERATIONS,
  MAX_POKEMON_ID,
  STORAGE_GENERATION,
} from 'shared/constants';
import { Header } from './Header';

export function BasePage({ children }: PropsWithChildren) {
  const [showToTop, setShowToTop] = useState(false);

  const { allPokemons, loadPokemons, filterPokemonsByGeneration } =
    usePokemon();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 400 && !showToTop) {
        setShowToTop(true);
      }

      if (window.scrollY <= 400 && showToTop) {
        setShowToTop(false);
      }
    });
  }, [showToTop]);

  useEffect(() => {
    (async () => {
      try {
        if (!allPokemons.length) {
          throw new Error('Empty Pokémon List');
        }

        if (allPokemons.length < MAX_POKEMON_ID) {
          throw new Error('Incomplete Pokémon List');
        }

        const generation = getLocalItem<Generation>(STORAGE_GENERATION);

        filterPokemonsByGeneration(generation || GENERATIONS[0]);
      } catch (error) {
        await loadPokemons({ limit: MAX_POKEMON_ID, offset: 0 });
      }
    })();
  }, [loadPokemons, allPokemons, filterPokemonsByGeneration]);

  return (
    <div className="base_page">
      <Header />

      <main className="w-full max-w-7xl my-0 mx-auto">{children}</main>

      {showToTop && (
        <div
          className="fixed bottom-6 right-6 w-12 h-12 bg-slate-50 shadow-md rounded-full flex justify-center items-center text-2xl cursor-pointer"
          onClick={scrollToTop}
          aria-hidden="true"
        >
          <FiArrowUp />
        </div>
      )}
    </div>
  );
}
