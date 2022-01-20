import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Pokedex } from 'pages/Pokedex';
import { Pokemon } from 'pages/Pokemon';
import { WhosThatPokemon } from 'pages/WhosThatPokemon';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pokedex" component={Pokedex} />
    <Route path="/pokemon/:name" component={Pokemon} />
    <Route path="/whosthatpokemon" component={WhosThatPokemon} />
  </Switch>
);

export { Routes };
