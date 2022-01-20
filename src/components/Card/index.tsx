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
  return (
    <Component type={pokemon.types[0]}>
      <ImageContainer>
        <img src={pokemon.image} alt={pokemon.name} />
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
