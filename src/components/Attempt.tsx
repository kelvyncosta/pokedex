import classNames from 'classnames';
import { MdClose, MdDone } from 'react-icons/md';

import { Attempt as AttemptType } from 'shared/types/score';
import { formatPokemonId } from 'shared/utils/formatPokemonId';

import { Timer } from './Timer';

interface AttemptProps {
  attempt: AttemptType;
  index: number;
}

export function Attempt({ attempt, index }: AttemptProps) {
  return (
    <div className="py-2 px-4 rounded-md border-2">
      <div className="font-semibold text-xs text-gray-500">
        {formatPokemonId(index)}
      </div>

      <div className="flex gap-4 flex-wrap justify-evenly">
        <div className="flex items-center text-3xl w-8">
          {attempt.chooseOption.id === attempt.correctOption.id ? (
            <MdDone className="text-green-500" />
          ) : (
            <MdClose className="text-red-500" />
          )}
        </div>

        <div className="w-28">
          <span className="font-semibold text-xs">Elapsed Time</span>

          <Timer time={attempt.elapsedTime} />
        </div>

        <div className="w-full max-w-lg">
          <span className="font-semibold text-xs flex justify-center">
            Options
          </span>

          <div className="flex flex-wrap">
            {attempt.options.map(option => {
              const attemptClasses = classNames(
                'capitalize w-[50%] text-center',
                {
                  'text-red-500':
                    option.id === attempt.chooseOption.id &&
                    option.id !== attempt.correctOption.id,
                  'text-green-500 font-semibold':
                    option.id === attempt.correctOption.id,
                },
              );

              return <span className={attemptClasses}>{option.name}</span>;
            })}
          </div>
        </div>

        <div>
          <span className="font-semibold text-xs">Your Choice</span>

          <div className="capitalize flex items-center gap-1">
            <span>{attempt.chooseOption.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
