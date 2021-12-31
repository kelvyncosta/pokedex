import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pokedex" component={Pokedex} />s
  </Switch>
);

export { Routes };
