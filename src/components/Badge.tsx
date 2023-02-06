import { useState } from 'react';

import { PokemonTypes } from 'shared/types/pokemon';
import { getTypeIcon } from 'shared/utils/getTypeIcon';

interface IBadgeProps {
  type: PokemonTypes;
}

export function Badge({ type }: IBadgeProps) {
  const [Icon] = useState(() => getTypeIcon(type));

  return (
    <div
      className={`relative z-[2] py-[0.1rem] px-2 rounded bg-badge-${type} flex items-center gap-1`}
    >
      <Icon />
      <p className="capitalize">{type}</p>
    </div>
  );
}
