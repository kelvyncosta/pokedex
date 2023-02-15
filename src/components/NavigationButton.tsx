import classNames from 'classnames';
import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import { useNavigate } from 'react-router-dom';

import { Pokemon } from 'shared/types/pokemon';
import { formatPokemonId } from 'shared/utils/formatPokemonId';
import { scrollToTop } from 'shared/utils/scrollToTop';

interface NavigationButtonProps {
  pokemon: Pokemon;
  icon: ComponentType<IconBaseProps>;
  reverse?: boolean;
}

export function NavigationButton({
  pokemon,
  icon: Icon,
  reverse = false,
}: NavigationButtonProps) {
  const navigate = useNavigate();

  const buttonClasses = classNames(
    '-mt-4 pt-8 pb-4 px-2 relative w-1/2 bg-gray-400 text-slate-50 cursor-pointer flex items-center gap-3 z-[1] hover:bg-blue-400 group',
    {
      'flex-row-reverse': reverse,
    },
  );

  return pokemon ? (
    <button
      type="button"
      className={buttonClasses}
      onClick={() => {
        navigate(`/pokemon/${pokemon.name}`, {
          replace: true,
        });
        scrollToTop();
      }}
    >
      <Icon className="text-3xl" />

      <div>
        <p className="text-gray-500 text-left text-sm font-semibold group-hover:text-gray-700 capitalize leading-4">
          {formatPokemonId(pokemon.id)}
        </p>
        <p className="text-lg capitalize leading-4">{pokemon.name}</p>
      </div>
    </button>
  ) : null;
}
