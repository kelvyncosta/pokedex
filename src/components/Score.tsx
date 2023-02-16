import { useGame } from 'hooks/game';

import { Label } from './Label';

export function Score() {
  const { score } = useGame();

  return (
    <>
      <div className="flex justify-evenly gap-6 mb-4">
        <Label title="Current Score" value={score.currentScore.toString()} />
        <Label title="Current Sequel" value={score.currentSequel.toString()} />
      </div>

      <div className="flex justify-evenly gap-6">
        <Label title="Your Best Score" value={score.bestScore.toString()} />
        <Label title="Your Best Sequel" value={score.bestSequel.toString()} />
      </div>
    </>
  );
}
