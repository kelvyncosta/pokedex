import { Link } from 'react-router-dom';

import pokemonLogo from 'assets/logo.png';

import {
  Page,
  PageBackground,
  Content,
  Header,
  Info,
  Featured,
} from './styles';

function Home(): JSX.Element {
  return (
    <Page>
      <Content>
        <Header>
          <img src={pokemonLogo} alt="Pokemon Logo" loading="lazy" />
        </Header>

        <Info>
          <div>
            <h2>Pokédex</h2>
            <p>
              The pokédex is a RESTful API interface to highly detailed objects
              built from thousands of lines of data related to Pokémon.
            </p>
            <Link to="/pokedex">Try Pokédex</Link>
          </div>

          <div>
            <h2>Who&apos;s that Pokémon?</h2>
            <p>
              The pokédex is a RESTful API interface to highly detailed objects
              built from thousands of lines of data related to Pokémon.
            </p>
            <button type="button" disabled>
              Start Game
            </button>
          </div>
        </Info>

        <Featured>{/* <Carousel /> */}</Featured>
      </Content>
      <PageBackground />
    </Page>
  );
}

export { Home };
