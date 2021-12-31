import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Pokemons } from '../pages/Pokemons';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pokemons" component={Pokemons} />s
  </Switch>
);

export { Routes };
