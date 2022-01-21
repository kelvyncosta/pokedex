import { Fragment, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { FiArrowDown } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Pokeball } from 'components/Pokeball';
import { usePokemon } from 'hooks/pokemon';
import { scrollToTop } from 'shared/utils/scrollToTop';
import { Pokemon } from 'shared/types/pokemon';

import { MAX_POKEMON_ID } from 'shared/constants';
import { Component } from './styles';

function EvolutionChain(): JSX.Element {
  const history = useHistory();
  const { pokemon, allPokemons, getEvolutionChain } = usePokemon();

  const [evolutionChain, setEvolutionChain] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      if (isEmpty(allPokemons) || allPokemons.length < MAX_POKEMON_ID) {
        history.push('/pokedex');
      }

      const evolutions = await getEvolutionChain(pokemon.id);

      setEvolutionChain(evolutions);
    })();
  }, [pokemon, getEvolutionChain, allPokemons, history]);

  return (
    <>
      {!isEmpty(evolutionChain) && (
        <Component type={pokemon.types[0]}>
          <h2>Evolution Chain</h2>

          <div className="chain">
            {evolutionChain.map((pokemonChain, index) => (
              <Fragment key={pokemonChain.id}>
                {index !== 0 && (
                  <div className={`arrow _${index}`}>
                    <FiArrowDown />
                  </div>
                )}

                <div className="chain__item">
                  <div className="chain__item__image">
                    <Link
                      to={`/pokemon/${pokemonChain.name}`}
                      onClick={() => scrollToTop()}
                    >
                      <img src={pokemonChain.image} alt={pokemonChain.name} />
                    </Link>

                    <div className="pokeball">
                      <Pokeball size="175px" />
                    </div>
                  </div>

                  <div className="chain__item__info">
                    <h3>{pokemonChain.name}</h3>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </Component>
      )}
    </>
  );
}

export { EvolutionChain };
