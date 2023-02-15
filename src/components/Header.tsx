import { Link } from 'react-router-dom';

import pokemonLogo from 'assets/logo.png';

export function Header() {
  return (
    <header className="w-full h-48 flex items-center justify-center z-50 relative">
      <Link to="/">
        <img
          className="h-36"
          src={pokemonLogo}
          alt="Pokemon Logo"
          loading="lazy"
        />
      </Link>
    </header>
  );
}
