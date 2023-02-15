import { useTheme } from 'hooks/theme';
import { BsMoon, BsSun } from 'react-icons/bs';

export function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      aria-hidden="true"
      className="fixed right-0 top-8 p-3 text-slate-50 dark:text-slate-50 bg-blue-500 hover:bg-blue-400 dark:bg-gray-900 dark:hover:bg-gray-800 text-2xl cursor-pointer rounded-l-lg z-[100]"
    >
      {theme === 'dark' ? <BsSun /> : <BsMoon />}
    </div>
  );
}
