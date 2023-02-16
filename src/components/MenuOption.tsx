import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface IButtonProps extends PropsWithChildren {
  to: string;
}

export function MenuOption({ children, to }: IButtonProps) {
  return (
    <Link
      to={to}
      className="
        uppercase text-2xl py-2 px-4 rounded-full text-center
        hover:text-blue-500 dark:hover:text-yellow-500"
    >
      {children}
    </Link>
  );
}
