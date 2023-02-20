import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';

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

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    startGame();
  }, [startGame]);

  useEffect(() => {
    if (revealed) {
      setTimeout(() => {
        newLevel();
        setIsDisabled(false);
      }, 3000);
    }
  }, [newLevel, revealed]);

  const imageClasses = useMemo(() => {
    return classNames('h-80', {
      'brightness-0': !revealed,
    });
  }, [revealed]);

  const optionsClasses = classNames(
    `w-full max-w-md text-blue-500 border-blue-500
  capitalize text-center py-4 border-4
  hover:bg-blue-500 hover:text-slate-50
  dark:text-yellow-500 dark:border-yellow-500
  dark:hover:bg-yellow-500 dark:hover:text-gray-900`,
    `${isDisabled && `cursor-default opacity-0`}`,
  );

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
          <button
            type="button"
            key={option.id}
            disabled={isDisabled}
            className={optionsClasses}
            onClick={() => {
              verifyAnswer({ chooseOption: option });
              setIsDisabled(true);
            }}
          >
            {option.name}
          </button>
        ))}
      </div>

      <Score />
    </section>
  );
}
