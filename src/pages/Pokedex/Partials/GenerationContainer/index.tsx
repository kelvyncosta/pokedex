import { usePokemon } from 'hooks/pokemon';
import { useCallback } from 'react';

import { GENERATIONS } from 'shared/constants';
import { Generation } from 'shared/types/generation';

import { Component, ListGeneration, ListItem } from './styles';

function GenerationContainer(): JSX.Element {
  const { activeGeneration, filterPokemonsByGeneration } = usePokemon();

  const handleClick = useCallback(
    (generation: Generation) => {
      filterPokemonsByGeneration(generation);
    },
    [filterPokemonsByGeneration],
  );

  return (
    <Component>
      <p>Select Generation</p>

      <ListGeneration>
        {GENERATIONS.map(generation => (
          <ListItem
            active={generation.text === activeGeneration.text}
            onClick={() => handleClick(generation)}
          >
            {generation.text}
          </ListItem>
        ))}
      </ListGeneration>
    </Component>
  );
}

export { GenerationContainer };
