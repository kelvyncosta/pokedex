import { Component } from './styles';

interface ILabelProps {
  value: string;
  title: string;
}

function Label({ value, title }: ILabelProps): JSX.Element {
  return (
    <Component>
      <p>{title}</p>
      <p>{value}</p>
    </Component>
  );
}

export { Label };
