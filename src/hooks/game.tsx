import { GameMessage } from 'components/GameMessage';
import { shuffle } from 'lodash';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { PERSISTED_SCORE } from 'shared/constants';
import { Pokemon } from 'shared/types/pokemon';
import { Attempt, Score } from 'shared/types/score';
import { getPoints } from 'shared/utils/getPoints';
import { getLocalItem, setLocalItem } from 'shared/utils/localStorage';

import { usePokemon } from './pokemon';

const interval =
  (delay = 0) =>
  (callback: any) =>
    useEffect(() => {
      const id = setInterval(callback, delay);

      return () => clearInterval(id);
    }, [callback]);

const use1Second = interval(1e3);

const defaultScore: Score = {
  bestScore: 0,
  bestSequel: 0,
  currentScore: 0,
  currentSequel: 0,
  statistics: {
    attempts: [],
    bestSequel: 0,
    score: 0,
  },
};

interface UpdateScoreParams {
  isCorrect: boolean;
  chooseOption: Pokemon;
}

interface VerifyAnswerParams {
  chooseOption: Pokemon;
}

interface GameContextData {
  score: Score;
  time: number;
  revealed: boolean;
  options: Pokemon[];
  pokemon: Pokemon;
  running: boolean;
  startGame(): void;
  stopGame(): void;
  newLevel(): void;
  updateScore(params: UpdateScoreParams): void;
  verifyAnswer(params: VerifyAnswerParams): void;
}

const GameContext = createContext<GameContextData>({} as GameContextData);

function GameProvider({ children }: PropsWithChildren) {
  const { allPokemons } = usePokemon();
  const navigate = useNavigate();

  const [score, setScore] = useState(() => {
    const persistedScore = getLocalItem<Score>(PERSISTED_SCORE);

    if (persistedScore) {
      return persistedScore;
    }

    return defaultScore;
  });
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [ticking, setTicking] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [options, setOptions] = useState<Pokemon[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  const updateScore = useCallback(
    ({ isCorrect, chooseOption }: UpdateScoreParams) => {
      const updatedScore = score;

      const attempt: Attempt = {
        options,
        elapsedTime: time,
        chooseOption,
        correctOption: pokemon,
        isCorrect,
      };

      updatedScore.statistics.attempts.push(attempt);

      if (isCorrect) {
        const points = getPoints(time);
        const currentScore = updatedScore.currentScore + points;

        updatedScore.currentScore = currentScore;
        updatedScore.currentSequel += 1;

        if (updatedScore.currentScore > score.bestScore) {
          updatedScore.bestScore = updatedScore.currentScore;
        }

        if (updatedScore.currentSequel > score.bestSequel) {
          updatedScore.bestSequel = updatedScore.currentSequel;
        }

        updatedScore.statistics.score = currentScore;

        if (updatedScore.currentSequel > updatedScore.statistics.bestSequel) {
          updatedScore.statistics.bestSequel = updatedScore.currentSequel;
        }
      } else {
        updatedScore.currentSequel = 0;
      }

      setScore(() => ({ ...score, ...updatedScore }));
      setLocalItem(PERSISTED_SCORE, updatedScore);
    },
    [score, time, options, pokemon],
  );

  const newLevel = useCallback(() => {
    setRevealed(false);
    setTime(0);
    setTicking(true);
    const shuffledPokemons = shuffle(allPokemons);

    const selectedPokemons = shuffledPokemons.slice(0, 4);
    setOptions(selectedPokemons);

    const correctPokemon = selectedPokemons[Math.floor(Math.random() * 4)];
    setPokemon(correctPokemon);
  }, [allPokemons]);

  const startGame = useCallback(() => {
    setScore(current => {
      const { statistics } = current;

      statistics.attempts = [];
      statistics.score = 0;
      statistics.bestSequel = 0;

      return {
        ...current,
        currentScore: 0,
        currentSequel: 0,
        statistics,
      };
    });
    setTicking(true);
    setRunning(true);
    newLevel();

    navigate('/whos-that-pokemon/board', { replace: true });
  }, [newLevel, navigate]);

  const stopGame = useCallback(() => {
    setTicking(false);
    setTime(0);
    setRevealed(false);
    setRunning(false);

    navigate('/whos-that-pokemon', { replace: true });
  }, [navigate]);

  const pauseTimer = useCallback(() => setTicking(false), []);

  const verifyAnswer = useCallback(
    ({ chooseOption }: VerifyAnswerParams) => {
      setRevealed(true);
      pauseTimer();

      const isCorrect = chooseOption.id === pokemon.id;

      if (isCorrect) {
        updateScore({ isCorrect, chooseOption });
        toast.success(<GameMessage correct pokemonName={pokemon.name} />);
      } else {
        updateScore({ isCorrect, chooseOption });
        toast.error(<GameMessage pokemonName={pokemon.name} />);
      }
    },
    [pokemon, updateScore, pauseTimer],
  );

  const contextValue = useMemo(
    () => ({
      score,
      time,
      revealed,
      options,
      pokemon,
      running,
      startGame,
      stopGame,
      newLevel,
      updateScore,
      verifyAnswer,
    }),
    [
      score,
      time,
      revealed,
      options,
      pokemon,
      running,
      startGame,
      stopGame,
      newLevel,
      updateScore,
      verifyAnswer,
    ],
  );

  const tick = useCallback(
    () => (ticking ? setTime(current => current + 1) : undefined),
    [ticking],
  );

  use1Second(tick);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

function useGame(): GameContextData {
  const context = useContext(GameContext);

  if (!context) throw new Error('useGame must be used within an GameProvider');

  return context;
}

export { GameProvider, useGame };
