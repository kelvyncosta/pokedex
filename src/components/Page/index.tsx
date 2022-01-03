import React from 'react';
import { Component } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPageProps {}

function Page({ children }: React.PropsWithChildren<IPageProps>): JSX.Element {
  return <Component>{children}</Component>;
}

export { Page };
