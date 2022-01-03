import React, { ButtonHTMLAttributes } from 'react';

import { Component } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?(): void;
}

function Button({
  children,
  onClick,
}: React.PropsWithChildren<IButtonProps>): JSX.Element {
  return (
    <Component type="button" onClick={() => onClick && onClick()}>
      {children}
    </Component>
  );
}

export { Button };
