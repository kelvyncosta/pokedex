import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Pokeball } from 'components/Pokeball';
import { usePokemon } from 'hooks/pokemon';
import { scrollToTop } from 'shared/utils/scrollToTop';
import { Pokemon } from 'shared/types/pokemon';

import { Component } from './styles';

function EvolutionChain(): JSX.Element {
  const { selectedPokemon: pokemon, getEvolutionChain } = usePokemon();

  const [evolutionChain, setEvolutionChain] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      const evolutions = await getEvolutionChain(pokemon.id);

      setEvolutionChain(evolutions);
    })();
  }, [pokemon, getEvolutionChain]);

  return (
    <>
      {!isEmpty(evolutionChain) && (
        <Component type={pokemon.types[0]}>
          <h2>Evolution Chain</h2>

          <div className="chain">
            {evolutionChain.map((pokemonChain, index) => (
              <>
                {index !== 0 && (
                  <div className={`arrow _${index}`}>
                    <FiArrowDown />
                  </div>
                )}

                <div className="chain__item" key={pokemonChain.id}>
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
              </>
            ))}
          </div>
        </Component>
      )}
    </>
  );
}

export { EvolutionChain };
