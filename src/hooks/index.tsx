import { PropsWithChildren } from 'react';

import { PokemonProvider } from './pokemon';
import { ThemeProvider } from './theme';

function AppProvider({ children }: PropsWithChildren) {
  return (
    <PokemonProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </PokemonProvider>
  );
}

export { AppProvider };
