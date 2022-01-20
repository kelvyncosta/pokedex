import { Pokemon } from 'shared/types/pokemon';
import { Component } from './styles';

interface IItemProps {
  pokemon: Pokemon;
}

function Item({ pokemon }: IItemProps): JSX.Element {
  return (
    <Component>
      <div className="imageContainer">
        <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
      </div>
    </Component>
  );
}

export { Item };
