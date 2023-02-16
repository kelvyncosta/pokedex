import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { BaseGamePage } from 'components/BaseGamePage';
import { GameBoard } from 'pages/GameBoard';
import { GameMenu } from 'pages/GameMenu';
import { GameStatistics } from 'pages/GameStatistics';
import { Home } from 'pages/Home';
import { Pokedex } from 'pages/Pokedex';
import { Pokemon } from 'pages/Pokemon';

export function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="pokedex" element={<Pokedex />} />
      <Route path="pokemon/:name" element={<Pokemon />} />
      <Route path="whos-that-pokemon" element={<BaseGamePage />}>
        <Route index element={<GameMenu />} />
        <Route path="board" element={<GameBoard />} />
        <Route path="statistics" element={<GameStatistics />} />
      </Route>
    </ReactRoutes>
  );
}
