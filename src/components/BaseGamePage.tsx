import { Outlet } from 'react-router-dom';

import { BasePage } from './BasePage';

export function BaseGamePage() {
  return (
    <BasePage>
      <div className="w-full bg-slate-50 p-5 shadow-xl rounded-lg dark:bg-gray-900">
        <h1 className="text-blue-500 text-3xl mb-6 dark:text-slate-50">
          Who&apos;s That Pokémon?
        </h1>

        <Outlet />
      </div>
    </BasePage>
  );
}
