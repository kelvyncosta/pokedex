import { useState } from 'react';
import { PokemonTypes } from 'shared/types/pokemon';
import { getTypeIcon } from 'shared/utils/getTypeIcon';
import { Component } from './styles';

interface IBadgeProps {
  type: PokemonTypes;
}

function Badge({ type }: IBadgeProps): JSX.Element {
  const [Icon] = useState(() => getTypeIcon(type));

  return (
    <Component type={type}>
      <Icon />
      <p>{type}</p>
    </Component>
  );
}

export { Badge };
