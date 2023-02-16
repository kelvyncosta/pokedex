import classNames from 'classnames';
import { useEffect, useMemo } from 'react';

import { Score } from 'components/Score';
import { Timer } from 'components/Timer';
import { useGame } from 'hooks/game';

export function GameBoard() {
  const {
    revealed,
    options,
    pokemon,
    time,
    startGame,
    newLevel,
    verifyAnswer,
    stopGame,
  } = useGame();

  useEffect(() => {
    startGame();
  }, [startGame]);

  useEffect(() => {
    if (revealed) {
      setTimeout(() => {
        newLevel();
      }, 3000);
    }
  }, [newLevel, revealed]);

  const imageClasses = useMemo(() => {
    return classNames('h-80', {
      'brightness-0': !revealed,
    });
  }, [revealed]);

  return (
    <section>
      <div className="w-full flex flex-col items-center gap-6">
        <div className="flex justify-evenly w-full">
          <div>
            <Timer time={time} />
          </div>
          <span
            onClick={stopGame}
            aria-hidden="true"
            className="font-orbitron cursor-pointer text-xl hover:text-red-600"
          >
            Stop Game
          </span>
        </div>

        <img src={pokemon.image} alt={pokemon.name} className={imageClasses} />
      </div>

      <div className="flex flex-wrap gap-4 justify-center my-8">
        {options.map(option => (
          <div
            key={option.id}
            className="
        w-full max-w-md cursor-pointer text-blue-500 border-blue-500
        capitalize text-center py-4 border-4
        hover:bg-blue-500 hover:text-slate-50
        dark:text-yellow-500 dark:border-yellow-500
        dark:hover:bg-yellow-500 dark:hover:text-gray-900"
            onClick={() => verifyAnswer({ chooseOption: option })}
            aria-hidden="true"
          >
            {option.name}
          </div>
        ))}
      </div>

      <Score />
    </section>
  );
}
