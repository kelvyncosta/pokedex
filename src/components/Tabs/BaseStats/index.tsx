/* eslint-disable no-restricted-syntax */
import { usePokemon } from 'hooks/pokemon';
import { PokemonTypes } from 'shared/types/pokemon';
import { Counter } from './Counter';
import { Range } from './styles';

interface IBaseStatsProps {
  type: PokemonTypes;
}

function BaseStats({ type }: IBaseStatsProps): JSX.Element {
  const { selectedPokemon: pokemon } = usePokemon();

  return (
    <table className="stat">
      <tbody>
        <tr>
          <td>HP</td>
          <td>
            <Counter target={pokemon.stats[0]} />
          </td>
          <td>
            <Range value={pokemon.stats[0]} type={type} />
          </td>
        </tr>
        <tr>
          <td>Attack</td>
          <td>
            <Counter target={pokemon.stats[1]} />
          </td>
          <td>
            <Range value={pokemon.stats[1]} type={type} />
          </td>
        </tr>
        <tr>
          <td>Defense</td>
          <td>
            <Counter target={pokemon.stats[2]} />
          </td>
          <td>
            <Range value={pokemon.stats[2]} type={type} />
          </td>
        </tr>
        <tr>
          <td>Sp. Atk</td>
          <td>
            <Counter target={pokemon.stats[3]} />
          </td>
          <td>
            <Range value={pokemon.stats[3]} type={type} />
          </td>
        </tr>
        <tr>
          <td>Sp. Def</td>
          <td>
            <Counter target={pokemon.stats[4]} />
          </td>
          <td>
            <Range value={pokemon.stats[4]} type={type} />
          </td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>
            <Counter target={pokemon.stats[5]} />
          </td>
          <td>
            <Range value={pokemon.stats[5]} type={type} />
          </td>
        </tr>
        <tr>
          <td>Total</td>
          <td>
            <Counter
              target={pokemon.stats.reduce(
                (previous, current) => previous + current,
                0,
              )}
              increment={5}
            />
          </td>
          <td>
            <Range
              value={
                pokemon.stats.reduce(
                  (previous, current) => previous + current,
                  0,
                ) / 6
              }
              type={type}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export { BaseStats };
