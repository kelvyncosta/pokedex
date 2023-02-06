interface GameMessageProps {
  correct?: boolean;
  pokemonName: string;
}

export function GameMessage({
  correct = false,
  pokemonName,
}: GameMessageProps) {
  return correct ? (
    <span>Yeah! That&apos;s correct.</span>
  ) : (
    <span>
      Oh No! Was{' '}
      <span className="font-semibold capitalize text-red-500">
        {pokemonName}
      </span>
    </span>
  );
}
