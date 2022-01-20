import { useEffect, useState } from 'react';
import { FiArrowLeft, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { isEmpty } from 'lodash';
import { usePokemon } from 'hooks/pokemon';
import { formatPokemonId } from 'shared/utils/formatPokemonId';
import { IPreviousNextPokemon } from 'shared/types/pokemon';
import { Badge } from 'components/Badge';
import { Tabs } from 'components/Tabs';
import { Pokeball } from 'components/Pokeball';

import {
  Component,
  ImageContainer,
  ModalContent,
  ModalHeader,
  Overlay,
  ModalFooter,
} from './styles';

interface IModalProps {
  active: boolean;
}

function Modal({ active }: IModalProps): JSX.Element {
  const [nextPreviousPokemon, setNextPreviousPokemon] =
    useState<IPreviousNextPokemon>({} as IPreviousNextPokemon);

  const {
    selectedPokemon: pokemon,
    clearSelectedPokemon,
    getNextAndPreviousPokemon,
    findPokemon,
  } = usePokemon();

  useEffect(() => {
    (async () => {
      const tempNextPreviousProkemon = await getNextAndPreviousPokemon(pokemon);

      setNextPreviousPokemon(tempNextPreviousProkemon);
    })();
  }, [getNextAndPreviousPokemon, pokemon]);

  return (
    <>
      <Component active={active} type={pokemon.types[0]}>
        <ModalHeader>
          <FiArrowLeft onClick={() => clearSelectedPokemon()} />

          <p>{formatPokemonId(pokemon.id)}</p>
        </ModalHeader>

        <ModalContent>
          <h1>{pokemon.name}</h1>
          <div className="badges">
            {pokemon.types.map(type => (
              <div key={type}>
                <Badge type={type} />
              </div>
            ))}
          </div>

          <ImageContainer className="img-container">
            <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
          </ImageContainer>
        </ModalContent>

        <Tabs />

        {!isEmpty(nextPreviousPokemon) && (
          <ModalFooter>
            <button
              type="button"
              className="button previousPokemon"
              onClick={() => {
                findPokemon(nextPreviousPokemon.previous.name);
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
                findPokemon(nextPreviousPokemon.next.name);
              }}
            >
              <div>
                <p>{formatPokemonId(nextPreviousPokemon.next.id)}</p>
                <p>{nextPreviousPokemon.next.name}</p>
              </div>
              <FiChevronRight />
            </button>
          </ModalFooter>
        )}
        <div className="pokeball">
          <Pokeball size="200px" />
        </div>
      </Component>
      <Overlay active={active} onClick={() => clearSelectedPokemon()} />
    </>
  );
}

export { Modal };
