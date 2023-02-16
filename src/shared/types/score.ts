import { Pokemon } from './pokemon';

export type Attempt = {
  options: Pokemon[];
  chooseOption: Pokemon;
  correctOption: Pokemon;
  elapsedTime: number;
  isCorrect: boolean;
};

type Statistics = {
  attempts: Attempt[];
  score: number;
  bestSequel: number;
};

export type Score = {
  currentScore: number;
  currentSequel: number;
  bestScore: number;
  bestSequel: number;
  statistics: Statistics;
};
