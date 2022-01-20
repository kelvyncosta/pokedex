import { Badge } from 'components/Badge';
import { Pokeball } from 'components/Pokeball';
import { usePokemon } from 'hooks/pokemon';
import { formatPokemonId } from 'shared/utils/formatPokemonId';

import { Component, ImageContainer } from './styles';

function Header(): JSX.Element {
  const { selectedPokemon: pokemon } = usePokemon();

  return (
    <Component>
      <h1>{pokemon.name}</h1>
      <div className="badges">
        {pokemon.types.map(type => (
          <div key={type}>
            <Badge type={type} />
          </div>
        ))}
      </div>

      <ImageContainer className="img-container">
        <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
      </ImageContainer>

      <div className="pokeball">
        <Pokeball />
      </div>

      <div className="pokemonId">
        <p>{formatPokemonId(pokemon.id)}</p>
        <p>{pokemon.generation} gen</p>
      </div>
    </Component>
  );
}

export { Header };
