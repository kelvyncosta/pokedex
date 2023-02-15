import { PokemonTypes } from 'shared/types/pokemon';

interface StatCircleProps {
  stat: string;
  value: number;
  type: PokemonTypes;
}

export function StatCircle({ stat, value, type }: StatCircleProps) {
  const percentage = value > 100 ? 1 : value / 100;
  const offset = 437 - 437 * percentage;

  return (
    <div className="w-40 h-40 relative">
      <div className="w-40 h-40 rounded-full p-5">
        <div className="w-[120px] aspect-square rounded-full flex flex-col justify-center items-center">
          <p className="font-semibold text-gray-700 dark:text-slate-200 text-stat">
            {value}
          </p>
          <p>{stat}</p>
        </div>
      </div>

      <svg width={160} height={160} className="absolute top-0 left-0">
        <circle
          cx={80}
          cy={80}
          r={70}
          strokeLinecap="round"
          fill="none"
          strokeWidth={3}
          className="stroke-slate-400 dark:stroke-gray-400"
        />
      </svg>

      <svg
        width={160}
        height={160}
        className="absolute top-0 left-0 -rotate-[90deg]"
      >
        <circle
          cx={80}
          cy={80}
          r={70}
          strokeLinecap="round"
          fill="none"
          strokeWidth={20}
          strokeDasharray={437}
          strokeDashoffset={-offset}
          className={`stroke-${type}`}
        />
      </svg>
    </div>
  );
}
