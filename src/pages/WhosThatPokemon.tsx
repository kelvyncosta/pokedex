import classnames from 'classnames';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { BasePage } from 'components/BasePage';
import { usePokemon } from 'hooks/pokemon';
import { Pokemon } from 'shared/types/pokemon';
import { shuffle } from 'lodash';
import { GameMessage } from './components/GameMessage';

export function WhosThatPokemon() {
  const { allPokemons } = usePokemon();

  const [revealed, setRevealed] = useState(false);
  const [options, setOptions] = useState<Pokemon[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  const newLevel = useCallback(() => {
    setRevealed(false);
    const shuffledPokemons = shuffle(allPokemons);

    const selectedPokemons = shuffledPokemons.slice(0, 4);
    setOptions(selectedPokemons);

    const correctPokemon = selectedPokemons[Math.floor(Math.random() * 4)];
    setPokemon(correctPokemon);
  }, [allPokemons]);

  useEffect(() => {
    if (revealed) {
      setTimeout(() => {
        newLevel();
      }, 3000);
    } else {
      newLevel();
    }
  }, [newLevel, revealed]);

  const verifyAnswer = useCallback(
    (answer: Pokemon) => {
      setRevealed(true);

      if (answer.id === pokemon.id) {
        toast.success(<GameMessage correct pokemonName={pokemon.name} />);
      } else {
        toast.error(<GameMessage pokemonName={pokemon.name} />);
      }
    },
    [pokemon],
  );

  const imageClasses = useMemo(() => {
    return classnames({
      'h-80': true,
      'brightness-0': !revealed,
    });
  }, [revealed]);

  return (
    <BasePage>
      <div className="w-full bg-slate-50 p-5 shadow-xl rounded-lg">
        <h1 className="text-blue-500 text-3xl mb-6">
          Who&apos;s That Pokémon?
        </h1>

        <section>
          <div className="w-full flex justify-center">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className={imageClasses}
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {options.map(option => (
              <div
                key={option.id}
                className="w-full max-w-md cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-slate-50 capitalize text-center py-4 border-4 border-blue-500"
                onClick={() => verifyAnswer(option)}
                aria-hidden="true"
              >
                {option.name}
              </div>
            ))}
          </div>
        </section>
      </div>
    </BasePage>
  );
}
