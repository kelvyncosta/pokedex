import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface HomeOptionProps extends PropsWithChildren {
  title: string;
  to: string;
  buttonText: string;
}

export function HomeOption({
  children,
  title,
  to,
  buttonText,
}: HomeOptionProps) {
  return (
    <section className="bg-slate-50 rounded-full pl-16 py-10 pr-8">
      <h2 className="text-3xl text-gray-900">{title}</h2>
      <p className="mt-2 mb-6 mx-0 text-gray-900">{children}</p>
      <Link
        to={to}
        className="py-2 px-10 bg-gray-900 text-gray-50 rounded-full mt-4 hover:bg-gray-700 transition-colors"
      >
        {buttonText}
      </Link>
    </section>
  );
}
