import { PropsWithChildren } from 'react';

import { PokemonProvider } from './pokemon';

function AppProvider({ children }: PropsWithChildren) {
  return <PokemonProvider>{children}</PokemonProvider>;
}

export { AppProvider };
