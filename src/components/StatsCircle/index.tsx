import { PokemonTypes } from '../../shared/types/pokemon';
import { Component } from './styles';

interface StatsCircleProps {
  stat: string;
  value: number;
  type: PokemonTypes;
}

function StatsCircle({ stat, value, type }: StatsCircleProps): JSX.Element {
  return (
    <Component value={value} type={type}>
      <div className="outer">
        <div className="inner">
          <p className="value">{value}</p>
          <p className="stat">{stat}</p>
        </div>
      </div>

      <svg width={160} height={160}>
        <circle cx={80} cy={80} r={70} strokeLinecap="round" />
      </svg>
    </Component>
  );
}

export { StatsCircle };
