import { Label } from 'components/Label';
import { StatCircle } from 'components/StatCircle';
import { usePokemon } from 'hooks/pokemon';
import { STATS } from 'shared/constants';
import { formatHeight } from 'shared/utils/formatHeight';
import { formatWeight } from 'shared/utils/formatWeight';

export function PokemonBody() {
  const { pokemon } = usePokemon();

  return (
    <section className="relative p-5 rounded-xl shadow-lg bg-slate-50 z-10 dark:bg-gray-800">
      <section>
        <h2 className={`text-2xl text-${pokemon.types[0]}`}>About</h2>

        <div className="flex justify-between">
          <Label title="Height" value={formatHeight(pokemon.about.height)} />
          <Label title="Weight" value={formatWeight(pokemon.about.weight)} />
          <Label title="Abilities" value={pokemon.about.abilities.join(', ')} />
        </div>
      </section>

      <section>
        <h2 className={`text-2xl text-${pokemon.types[0]}`}>Stats</h2>

        <div className="flex flex-wrap gap-4 justify-between">
          {STATS.map((stat, index) => (
            <StatCircle
              key={stat}
              stat={stat}
              value={pokemon.stats[index]}
              type={pokemon.types[0]}
            />
          ))}
        </div>
      </section>

      <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 h-full flex justify-center items-center">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          loading="lazy"
          className="relative min-h-[400px] h-[95%] z-[2]"
        />
      </div>
    </section>
  );
}
