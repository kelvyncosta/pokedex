import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { usePokemon } from 'hooks/pokemon';
import { IPreviousNextPokemon } from 'shared/types/pokemon';
import { formatPokemonId } from 'shared/utils/formatPokemonId';
import { scrollToTop } from 'shared/utils/scrollToTop';
import { isEmpty } from 'lodash';

export function PokemonNavigation() {
  const { pokemon, getNextAndPreviousPokemon } = usePokemon();
  const navigate = useNavigate();

  const [nextPreviousPokemon, setNextPreviousPokemon] =
    useState<IPreviousNextPokemon>({} as IPreviousNextPokemon);

  useEffect(() => {
    (async () => {
      const tempNextPreviousPokemon = await getNextAndPreviousPokemon(pokemon);

      setNextPreviousPokemon(tempNextPreviousPokemon);
    })();
  }, [getNextAndPreviousPokemon, pokemon]);

  return !isEmpty(nextPreviousPokemon) ? (
    <section className="flex justify-between z-[1] relative">
      <button
        type="button"
        className="button__NextPrevious group"
        onClick={() => {
          navigate(`/pokemon/${nextPreviousPokemon.previous.name}`, {
            replace: true,
          });
          scrollToTop();
        }}
      >
        <FiChevronLeft className="text-3xl" />

        <div>
          <p className="text-gray-500 text-left leading-4 text-sm font-semibold group-hover:text-gray-700">
            {formatPokemonId(nextPreviousPokemon.previous.id)}
          </p>
          <p className="text-lg">{nextPreviousPokemon.previous.name}</p>
        </div>
      </button>

      <button
        type="button"
        className="button__NextPrevious justify-end group"
        onClick={() => {
          navigate(`/pokemon/${nextPreviousPokemon.next.name}`, {
            replace: true,
          });
          scrollToTop();
        }}
      >
        <div>
          <p className="text-gray-500 text-right leading-4 text-sm font-semibold group-hover:text-gray-700">
            {formatPokemonId(nextPreviousPokemon.next.id)}
          </p>
          <p className="text-lg">{nextPreviousPokemon.next.name}</p>
        </div>

        <FiChevronRight className="text-3xl" />
      </button>
    </section>
  ) : null;
}
