import React from 'react';

import { PokemonProvider } from './pokemon';

const AppProvider: React.FC = ({ children }) => (
  <PokemonProvider>{children}</PokemonProvider>
);

export { AppProvider };
