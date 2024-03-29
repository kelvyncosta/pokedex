import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CARD_COLOR } from 'shared/constants';

import { Pokemon } from 'shared/types/pokemon';
import { formatPokemonId } from 'shared/utils/formatPokemonId';
import { Badge } from './Badge';

interface ICardProps {
  pokemon: Pokemon;
}

export function Card({ pokemon }: ICardProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const mainType = pokemon.types[0];
    const anchor = ref.current;

    anchor?.style.setProperty('--card-color', CARD_COLOR[mainType]);
  }, [pokemon.types]);

  return (
    <Link
      ref={ref}
      to={`/pokemon/${pokemon.name}`}
      className="
        group w-64 rounded-xl p-3 relative cursor-pointer transition-all
        bg-slate-300 dark:bg-gray-900
        hover:bg-type hover:shadow-type"
    >
      <section
        className="
          my-0 mx-auto w-[210px] h-[215px] flex justify-center absolute
          top-[-15%] left-1/2 -translate-x-1/2"
      >
        <img
          src={pokemon.image}
          alt={pokemon.name}
          loading="lazy"
          className="w-[210px] h-[215px] transition-all group-hover:scale-110"
        />
      </section>

      <section className="flex flex-col items-center pt-44">
        <h2 className="text-slate-50 capitalize text-3xl leading-8 m-0 p-0">
          {pokemon.name}
        </h2>
        <p className="text-slate-50 font-semibold opacity-50 text-xl leading-5 m-0 mt-1 p-0">
          {formatPokemonId(pokemon.id)}
        </p>
      </section>

      <section className="flex justify-center gap-2 mt-4">
        {pokemon.types.map((type, index) => (
          <Badge key={type} type={pokemon.types[index]} />
        ))}
      </section>
    </Link>
  );
}
