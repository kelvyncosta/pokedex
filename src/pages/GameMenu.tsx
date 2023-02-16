import { MenuOption } from 'components/MenuOption';

export function GameMenu() {
  return (
    <div className="flex flex-col items-center gap-4 py-20">
      <MenuOption to="/whos-that-pokemon/board">Start Game</MenuOption>

      <MenuOption to="/whos-that-pokemon/statistics">My Statistics</MenuOption>
    </div>
  );
}
