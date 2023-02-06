import pokemonLogo from 'assets/logo.png';

export function Header() {
  return (
    <header className="w-full h-48 flex items-center justify-center">
      <img
        className="h-36"
        src={pokemonLogo}
        alt="Pokemon Logo"
        loading="lazy"
      />
    </header>
  );
}
