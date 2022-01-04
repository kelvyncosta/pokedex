import { usePokemon } from '../../hooks/pokemon';
import { Counter } from './Counter';

import { Component, Range, Stat } from './styles';

function Stats(): JSX.Element {
  const { selectedPokemon: pokemon } = usePokemon();

  return (
    <Component>
      <h2>Stats</h2>

      <div className="stats">
        <Stat>
          <span>HP</span>
          <Range type={pokemon.types[0]} value={pokemon.stats[0]} />
          <Counter target={pokemon.stats[0]} />
        </Stat>
        <Stat>
          <span>Attack</span>
          <Range type={pokemon.types[0]} value={pokemon.stats[1]} />
          <Counter target={pokemon.stats[1]} />
        </Stat>
        <Stat>
          <span>Defense</span>
          <Range type={pokemon.types[0]} value={pokemon.stats[2]} />
          <Counter target={pokemon.stats[2]} />
        </Stat>
        <Stat>
          <span>Sp. Atk</span>
          <Range type={pokemon.types[0]} value={pokemon.stats[3]} />
          <Counter target={pokemon.stats[3]} />
        </Stat>
        <Stat>
          <span>Sp. Def</span>
          <Range type={pokemon.types[0]} value={pokemon.stats[4]} />
          <Counter target={pokemon.stats[4]} />
        </Stat>
        <Stat>
          <span>Speed</span>
          <Range type={pokemon.types[0]} value={pokemon.stats[5]} />
          <Counter target={pokemon.stats[5]} />
        </Stat>
      </div>
    </Component>
  );
}

export { Stats };
