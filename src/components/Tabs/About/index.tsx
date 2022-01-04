import { usePokemon } from '../../../hooks/pokemon';
import { formatHeight } from '../../../shared/utils/formatHeight';
import { formatWeight } from '../../../shared/utils/formatWeight';

function About(): JSX.Element {
  const { selectedPokemon: pokemon } = usePokemon();

  return (
    <table className="about">
      <tbody>
        <tr>
          <td>Types</td>
          <td>{pokemon.types.join(', ')}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{formatHeight(pokemon.about.height)}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{formatWeight(pokemon.about.weight)}</td>
        </tr>
        <tr>
          <td>Abilities</td>
          <td>{pokemon.about.abilities.join(', ')}</td>
        </tr>
      </tbody>
    </table>
  );
}

export { About };
