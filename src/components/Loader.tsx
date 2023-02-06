import pokeball from 'assets/pokeball.svg';

export function Loader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={pokeball} alt="Pokeball" className="w-28 animate-bounce" />

      <p className="font-bold text-4xl">Catching Pokémons</p>
    </div>
  );
}
