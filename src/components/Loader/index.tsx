import pokeball from 'assets/pokeball.svg';

import { Component } from './styles';

function Loader(): JSX.Element {
  return (
    <Component>
      <img src={pokeball} alt="Pokeball" />

      <p>Catching Pokémons</p>
    </Component>
  );
}

export { Loader };
