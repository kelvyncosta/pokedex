import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Badge } from 'components/Badge';
import { Pokemon } from 'shared/types/pokemon';
import { formatPokemonId } from 'shared/utils/formatPokemonId';

import {
  BadgesContainer,
  Component,
  DataContainer,
  ImageContainer,
} from './styles';

interface ICardProps {
  pokemon: Pokemon;
}

function Card({ pokemon }: ICardProps): JSX.Element {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(`/pokemon/${pokemon.name}`);
  }, [history, pokemon]);

  return (
    <Component type={pokemon.types[0]} onClick={handleClick}>
      <ImageContainer>
        <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
      </ImageContainer>

      <DataContainer>
        <h2>{pokemon.name}</h2>
        <p>{formatPokemonId(pokemon.id)}</p>
      </DataContainer>

      <BadgesContainer>
        {pokemon.types.map((type, index) => (
          <Badge key={type} type={pokemon.types[index]} />
        ))}
      </BadgesContainer>
    </Component>
  );
}

export { Card };
