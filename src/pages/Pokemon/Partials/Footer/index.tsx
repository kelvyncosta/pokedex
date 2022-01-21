import { usePokemon } from 'hooks/pokemon';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { IPreviousNextPokemon } from 'shared/types/pokemon';

import { formatPokemonId } from 'shared/utils/formatPokemonId';
import { scrollToTop } from 'shared/utils/scrollToTop';

import { Component } from './styles';

function Footer(): JSX.Element {
  const history = useHistory();

  const { pokemon, getNextAndPreviousPokemon } = usePokemon();

  const [nextPreviousPokemon, setNextPreviousPokemon] =
    useState<IPreviousNextPokemon>({} as IPreviousNextPokemon);

  useEffect(() => {
    (async () => {
      const tempNextPreviousPokemon = await getNextAndPreviousPokemon(pokemon);

      setNextPreviousPokemon(tempNextPreviousPokemon);
    })();
  }, [getNextAndPreviousPokemon, pokemon]);

  return (
    <>
      {!isEmpty(nextPreviousPokemon) && (
        <Component>
          <button
            type="button"
            className="button previousPokemon"
            onClick={() => {
              history.push(`/pokemon/${nextPreviousPokemon.previous.name}`);
              scrollToTop();
            }}
          >
            <FiChevronLeft />

            <div>
              <p>{formatPokemonId(nextPreviousPokemon.previous.id)}</p>
              <p>{nextPreviousPokemon.previous.name}</p>
            </div>
          </button>

          <button
            type="button"
            className="button nextPokemon"
            onClick={() => {
              history.push(`/pokemon/${nextPreviousPokemon.next.name}`);
              scrollToTop();
            }}
          >
            <div>
              <p>{formatPokemonId(nextPreviousPokemon.next.id)}</p>
              <p>{nextPreviousPokemon.next.name}</p>
            </div>
            <FiChevronRight />
          </button>
        </Component>
      )}
    </>
  );
}

export { Footer };
