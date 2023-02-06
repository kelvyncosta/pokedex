import classNames from 'classnames';
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';

import { BasePage } from 'components/BasePage';
import { Card } from 'components/Card';
import { Loader } from 'components/Loader';
import { usePokemon } from 'hooks/pokemon';
import {
  GENERATIONS,
  MAX_POKEMON_ID,
  STORAGE_GENERATION,
} from 'shared/constants';
import { getLocalItem } from 'shared/utils/localStorage';
import { Generation } from 'shared/types/generation';

export function Pokedex() {
  const {
    currentPokemons,
    activeGeneration,
    allPokemons,
    loadPokemons,
    filterPokemonsByGeneration,
    searchPokemon,
  } = usePokemon();

  const searchRef = useRef<HTMLInputElement>(null);

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(() => {
      const value = searchRef.current?.value;

      searchPokemon(value);
    }, 500),
    [searchPokemon],
  );

  return (
    <BasePage>
      <div className="w-full flex justify-around items-end">
        <section>
          <p className="font-bold">Select Generation</p>

          <div className="flex bg-slate-50 shadow-lg rounded-xl overflow-hidden">
            {GENERATIONS.map(generation => {
              const itemClasses = classNames({
                generation__item: true,
                'generation__item--selected':
                  generation.text === activeGeneration.text,
              });

              return (
                <div
                  key={generation.text}
                  className={itemClasses}
                  onClick={() => filterPokemonsByGeneration(generation)}
                  aria-hidden="true"
                >
                  {generation.text}
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <p className="font-semibold">Search</p>

          <div className="flex items-center justify-between py-3 px-1 rounded-xl shadow-lg bg-slate-50">
            <input
              ref={searchRef}
              name="search"
              type="text"
              placeholder="Enter a Pokémon name or ID"
              className="border-0 outline-none text-sm py-0 px-1 bg-transparent"
              onKeyUp={handleSearch}
            />
          </div>
        </section>
      </div>

      <section className="h-full w-full flex justify-center items-center flex-wrap gap-12 py-24 px-0">
        {currentPokemons ? (
          currentPokemons.map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <Loader />
        )}
      </section>
    </BasePage>
  );
}