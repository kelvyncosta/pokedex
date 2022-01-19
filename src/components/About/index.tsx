import { usePokemon } from '../../hooks/pokemon';
import { formatHeight } from '../../shared/utils/formatHeight';
import { formatWeight } from '../../shared/utils/formatWeight';
import { Label } from '../Label';
import { Component } from './styles';

function About(): JSX.Element {
  const { selectedPokemon: pokemon } = usePokemon();

  return (
    <Component>
      <h2>About</h2>

      <div className="info">
        <Label title="Height" value={formatHeight(pokemon.about.height)} />
        <Label title="Weight" value={formatWeight(pokemon.about.weight)} />
        <Label title="Abilities" value={pokemon.about.abilities.join(', ')} />
      </div>
    </Component>
  );
}

export { About };
