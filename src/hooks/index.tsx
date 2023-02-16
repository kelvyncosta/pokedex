import { PropsWithChildren } from 'react';

import { PokemonProvider } from './pokemon';
import { ThemeProvider } from './theme';
import { GameProvider } from './game';

function AppProvider({ children }: PropsWithChildren) {
  return (
    <PokemonProvider>
      <ThemeProvider>
        <GameProvider>{children}</GameProvider>
      </ThemeProvider>
    </PokemonProvider>
  );
}

export { AppProvider };
