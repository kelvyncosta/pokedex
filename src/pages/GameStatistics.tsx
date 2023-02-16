import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Attempt } from 'components/Attempt';
import { Statistic } from 'components/Statistic';
import { useGame } from 'hooks/game';

export function GameStatistics() {
  const { score } = useGame();

  return (
    <section>
      <Link
        to="/whos-that-pokemon"
        className="hover:text-blue-500 dark:hover:text-yellow-500 flex items-center gap-1 mb-4"
      >
        <FiArrowLeft /> Back
      </Link>

      <h2 className="mb-2 text-xl">Best Results</h2>

      <div className="flex gap-4 mb-12">
        <Statistic title="Best Score" value={score.bestScore} />
        <Statistic title="Best Sequel" value={score.bestSequel} />
      </div>

      <h2 className="mb-2 text-xl">Last Game</h2>

      <div className="flex gap-4 mb-12">
        <Statistic title="Attempts" value={score.statistics.attempts.length} />
        <Statistic title="Score" value={score.statistics.score} />
        <Statistic title="Best Sequel" value={score.statistics.bestSequel} />
      </div>

      <h2 className="mb-2 text-xl">Last Game Attempts</h2>

      <div className="flex gap-4 mb-12 flex-col">
        {score.statistics.attempts.map((attempt, index) => (
          <Attempt attempt={attempt} index={index + 1} />
        ))}
      </div>
    </section>
  );
}
