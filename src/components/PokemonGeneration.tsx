import classNames from 'classnames';

import { usePokemon } from 'hooks/pokemon';
import { GENERATIONS } from 'shared/constants';

export function PokemonGeneration() {
  const { activeGeneration, filterPokemonsByGeneration } = usePokemon();

  return (
    <section>
      <p className="font-bold">Select Generation</p>

      <div className="flex bg-slate-50  shadow-lg rounded-xl overflow-hidden dark:bg-gray-900 dark:text-slate-50">
        {GENERATIONS.map(generation => {
          const isSelected = generation.text === activeGeneration.text;

          const itemClasses = classNames(
            'min-w-[40px] text-center p-3 cursor-pointer hover:bg-slate-200',
            'dark:hover:bg-gray-800',
            {
              'bg-slate-300 border-b-4 border-blue-500': isSelected,
              'dark:bg-gray-700 dark:border-yellow-500': isSelected,
            },
          );

          return (
            <div
              key={generation.text}
              className={itemClasses}
              onClick={() => filterPokemonsByGeneration(generation)}
              aria-hidden="true"
            >
              {generation.text}
            </div>
          );
        })}
      </div>
    </section>
  );
}
