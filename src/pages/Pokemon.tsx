import { useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import { BasePage } from 'components/BasePage';
import { usePokemon } from 'hooks/pokemon';
import { isEmpty } from 'lodash';

import { PokemonHeader } from './components/PokemonHeader';
import { PokemonBody } from './components/PokemonBody';
import { PokemonEvolutionChain } from './components/PokemonEvolutionChain';
import { PokemonNavigation } from './components/PokemonNavigation';

export function Pokemon() {
  const { name } = useParams<string>();

  const { pokemon, findPokemon, clearSelectedPokemon } = usePokemon();

  useEffect(() => {
    if (name && name !== pokemon.name) {
      findPokemon(name);
    }
  }, [name, pokemon, findPokemon]);

  return (
    <BasePage>
      <div className="my-0 mx-auto flex flex-col items-center gap-4">
        <Link
          to="/pokedex"
          onClick={clearSelectedPokemon}
          className="no-underline flex items-center gap-2 text-xl bg-blue-500 text-slate-50 py-1 px-4 rounded-full shadow-pokemon"
        >
          <FiArrowLeft /> Back to Pokédex
        </Link>

        {!isEmpty(pokemon) && (
          <div
            className={`w-full max-w-[720px] bg-card-${pokemon.types[0]} overflow-hidden rounded-xl mb-12 shadow-xl`}
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
