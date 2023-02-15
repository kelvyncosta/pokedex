import { isEmpty } from 'lodash';
import { useEffect, useRef } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import { BasePage } from 'components/BasePage';
import { PokemonHeader } from 'components/PokemonHeader';
import { PokemonBody } from 'components/PokemonBody';
import { PokemonEvolutionChain } from 'components/PokemonEvolutionChain';
import { PokemonNavigation } from 'components/PokemonNavigation';
import { usePokemon } from 'hooks/pokemon';
import { CARD_COLOR } from 'shared/constants';

export function Pokemon() {
  const ref = useRef<HTMLDivElement>(null);
  const { name } = useParams<string>();

  const { pokemon, findPokemon, clearSelectedPokemon } = usePokemon();

  useEffect(() => {
    if (name && name !== pokemon.name) {
      findPokemon(name);
    }
  }, [name, pokemon, findPokemon]);

  useEffect(() => {
    if (!isEmpty(pokemon)) {
      const mainType = pokemon.types[0];
      const div = ref.current;

      div?.style.setProperty('--card-color', CARD_COLOR[mainType]);
    }
  }, [pokemon]);

  return (
    <BasePage>
      <div className="my-0 mx-auto flex flex-col items-center gap-4">
        <Link
          to="/pokedex"
          onClick={clearSelectedPokemon}
          className="no-underline flex items-center gap-2 text-xl bg-blue-500 hover:bg-blue-400 dark:bg-gray-900 dark:hover:bg-gray-800 text-slate-50 py-2 px-4 rounded-full shadow-pokemon"
        >
          <FiArrowLeft /> Back to Pokédex
        </Link>

        {!isEmpty(pokemon) && (
          <div
            ref={ref}
            className="w-full max-w-[720px] overflow-hidden rounded-xl mb-12 shadow-xl bg-type"
          >
            <PokemonHeader />

            <PokemonBody />

            <PokemonEvolutionChain />

            <PokemonNavigation />
          </div>
        )}
      </div>
    </BasePage>
  );
}
