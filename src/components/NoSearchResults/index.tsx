import { Container } from './styles';

import pokeball from '../../assets/pokeball.svg';

function NoSearchResults(): JSX.Element {
  return (
    <Container>
      <img src={pokeball} alt="Pokeball" loading="lazy" />
      <div>
        <h1>No search results</h1>
        <p>Try again for other pokémon name</p>
      </div>
    </Container>
  );
}

export { NoSearchResults };
