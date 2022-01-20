import { Label } from 'components/Label';
import { StatsCircle } from 'components/StatsCircle';
import { usePokemon } from 'hooks/pokemon';
import { formatHeight } from 'shared/utils/formatHeight';
import { formatWeight } from 'shared/utils/formatWeight';

import { Component } from './styles';

const stats = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'];

function Body(): JSX.Element {
  const { selectedPokemon: pokemon } = usePokemon();

  return (
    <Component type={pokemon.types[0]}>
      <section>
        <h2>About</h2>

        <div className="info">
          <Label title="Height" value={formatHeight(pokemon.about.height)} />
          <Label title="Weight" value={formatWeight(pokemon.about.weight)} />
          <Label title="Abilities" value={pokemon.about.abilities.join(', ')} />
        </div>
      </section>

      <section>
        <h2>Stats</h2>

        <div className="stats">
          {stats.map((stat, index) => (
            <StatsCircle
              stat={stat}
              value={pokemon.stats[index]}
              type={pokemon.types[0]}
            />
          ))}
        </div>
      </section>

      <div className="imgEcho">
        <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
      </div>
    </Component>
  );
}

export { Body };
