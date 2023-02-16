import classNames from 'classnames';
import { useMemo } from 'react';

import { useGame } from 'hooks/game';

import { Score } from './Score';
import { Timer } from './Timer';

export function Game() {
  const { time, revealed, options, pokemon, verifyAnswer } = useGame();

  const imageClasses = useMemo(() => {
    return classNames('h-80', {
      'brightness-0': !revealed,
    });
  }, [revealed]);

  return <></>;
}
