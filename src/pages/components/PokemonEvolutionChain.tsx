import { isEmpty } from 'lodash';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Pokeball } from 'components/Pokeball';
import { usePokemon } from 'hooks/pokemon';
import { Pokemon } from 'shared/types/pokemon';
import { scrollToTop } from 'shared/utils/scrollToTop';

export function PokemonEvolutionChain() {
  const { pokemon, getEvolutionChain } = usePokemon();

  const [evolutionChain, setEvolutionChain] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      const evolutions = await getEvolutionChain(pokemon.id);

      setEvolutionChain(evolutions);
    })();
  }, [getEvolutionChain, pokemon]);

  return !isEmpty(evolutionChain) ? (
    <section
      className={`relative -mt-5 pt-10 pb-5 px-5 py-5 shadow-chain z-[4] bg-card-${pokemon.types[0]} rounded-b-xl`}
    >
      <h2 className="text-slate-50 text-2xl mb-4">Evolution Chain</h2>

      <div className="flex flex-col items-center gap-2">
        {evolutionChain.map(pokemonChain => (
          <Fragment key={pokemonChain.id}>
            <div className="relative w-1/2 flex gap-4 rounded-xl odd:flex-row-reverse">
              <div className="relative h-52 aspect-square">
                <Link
                  to={`/pokemon/${pokemonChain.name}`}
                  onClick={() => scrollToTop()}
                  className="h-52 aspect-square"
                >
                  <img
                    src={pokemonChain.image}
                    alt={pokemonChain.name}
                    className="h-44 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"
                  />
                </Link>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Pokeball size="175px" />
                </div>
              </div>
              <div className="h-52 flex items-center">
                <h3 className="text-slate-50 capitalize text-lg">
                  {pokemonChain.name}
                </h3>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  ) : null;
}
