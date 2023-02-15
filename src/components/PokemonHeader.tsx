import { Badge } from 'components/Badge';
import { Pokeball } from 'components/Pokeball';
import { usePokemon } from 'hooks/pokemon';
import { formatPokemonId } from 'shared/utils/formatPokemonId';

export function PokemonHeader() {
  const { pokemon } = usePokemon();

  return (
    <section className="relative flex flex-col justify-center items-center pt-4 pr-5 pb-0 pl-5">
      <h1 className="relative z-[5] mb-2 capitalize text-slate-50 text-4xl">
        {pokemon.name}
      </h1>

      <div className="flex gap-2">
        {pokemon.types.map(type => (
          <Badge key={type} type={type} />
        ))}
      </div>

      <div className="h-52 z-[999] transition-all">
        <img
          className="h-56 mt-4"
          src={pokemon.image}
          alt={pokemon.name}
          loading="lazy"
        />
      </div>

      <div className="absolute left-1/2 top-24 -translate-x-1/2 z-[1]">
        <Pokeball />
      </div>

      <div className="absolute w-full flex justify-between right-0 top-0 text-4xl font-semibold text-slate-50 opacity-20 py-4 px-3">
        <p>{formatPokemonId(pokemon.id)}</p>
        <p>{pokemon.generation} gen</p>
      </div>
    </section>
  );
}
