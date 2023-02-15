import { debounce } from 'lodash';
import { useCallback, useRef } from 'react';

import { usePokemon } from 'hooks/pokemon';

export function PokemonSearcher() {
  const { searchPokemon } = usePokemon();

  const searchRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(() => {
      const value = searchRef.current?.value;

      searchPokemon(value);
    }, 500),
    [searchPokemon],
  );

  return (
    <section>
      <p className="font-semibold">Search</p>

      <div className="flex items-center justify-between py-3 px-1 rounded-xl shadow-lg bg-slate-50 dark:bg-gray-900">
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
  );
}
