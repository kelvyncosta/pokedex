import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { usePokemon } from 'hooks/pokemon';
import { Pokemon } from 'shared/types/pokemon';

import { NavigationButton } from './NavigationButton';

export function PokemonNavigation() {
  const { pokemon, getNextAndPreviousPokemon } = usePokemon();

  const [nextPokemon, setNextPokemon] = useState<Pokemon>({} as Pokemon);
  const [prevPokemon, setPrevPokemon] = useState<Pokemon>({} as Pokemon);

  useEffect(() => {
    (async () => {
      const tempNextPreviousPokemon = await getNextAndPreviousPokemon(pokemon);

      setNextPokemon(tempNextPreviousPokemon.next);
      setPrevPokemon(tempNextPreviousPokemon.previous);
    })();
  }, [getNextAndPreviousPokemon, pokemon]);

  return (
    <section className="flex justify-between z-[1] relative">
      <NavigationButton icon={FiChevronLeft} pokemon={prevPokemon} />

      <NavigationButton icon={FiChevronRight} pokemon={nextPokemon} reverse />
    </section>
  );
}
