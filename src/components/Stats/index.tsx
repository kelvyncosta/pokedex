import { usePokemon } from '../../hooks/pokemon';
import { StatsCircle } from '../StatsCircle';

import { Component } from './styles';

function Stats(): JSX.Element {
  const { selectedPokemon: pokemon } = usePokemon();

  return (
    <Component>
      <h2>Stats</h2>

      <div className="stats">
        <StatsCircle
          stat="HP"
          value={pokemon.stats[0]}
          type={pokemon.types[0]}
        />
        <StatsCircle
          stat="Attack"
          value={pokemon.stats[1]}
          type={pokemon.types[0]}
        />
        <StatsCircle
          stat="Defense"
          value={pokemon.stats[2]}
          type={pokemon.types[0]}
        />
        <StatsCircle
          stat="Sp. Atk"
          value={pokemon.stats[3]}
          type={pokemon.types[0]}
        />
        <StatsCircle
          stat="Sp. Def"
          value={pokemon.stats[4]}
          type={pokemon.types[0]}
        />
        <StatsCircle
          stat="Speed"
          value={pokemon.stats[5]}
          type={pokemon.types[0]}
        />
      </div>
    </Component>
  );
}

export { Stats };
