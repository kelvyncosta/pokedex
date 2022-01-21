// import { useCallback, useState } from 'react';

import pokemonLogo from 'assets/logo.png';
// import { usePokemon } from 'hooks/pokemon';
// import { Button } from 'components/Button';
import { Page } from 'components/Page';
import { Pokeball } from 'components/Pokeball';
// import { randomPokemonId } from 'shared/utils/randomPokemonId';

import { Container, Content } from './styles';

function WhosThatPokemon(): JSX.Element {
  // const [inGame, setInGame] = useState(false);
  // const { pokemon } = usePokemon();

  // const startGame = useCallback(() => {
  //   const pokemonId = randomPokemonId();

  //   setInGame(true);
  // }, []);

  return (
    <Page>
      <Content>
        <img src={pokemonLogo} alt="Pokemon Logo" loading="lazy" />

        <Container>
          <div className="pokeball">
            <Pokeball size="500px" />
          </div>

          <h1>Who&apos;s That Pokémon?</h1>

          {/* {!inGame ? (
            <StartContainer>
              <Button onClick={startGame}>Start</Button>
            </StartContainer>
          ) : (
            <GameContainer>
              <div className="silhouette">
                <img src={pokemon.image} alt="Pokemon" />
              </div>

              <div className="options">
                <div>Option 1</div>
                <div>Option 2</div>
                <div>Option 3</div>
                <div>Option 4</div>
              </div>

              <div className="actions">
                <Button>Confirm</Button>
              </div>
            </GameContainer>
          )} */}
        </Container>
      </Content>
    </Page>
  );
}

export { WhosThatPokemon };
