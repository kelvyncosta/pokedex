import { useCallback, useRef } from 'react';

import { usePokemon } from 'hooks/pokemon';

import { Component } from './styles';

function SearchContainer(): JSX.Element {
  const { searchPokemon } = usePokemon();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(async () => {
    const value = inputRef.current?.value;

    searchPokemon(value);
  }, [searchPokemon]);

  return (
    <Component>
      <p>Filter</p>

      <div className="input">
        <input
          ref={inputRef}
          name="name"
          type="text"
          placeholder="Enter a Pokémon name or ID"
          onKeyUp={handleSearch}
        />
      </div>
    </Component>
  );
}

export { SearchContainer };
