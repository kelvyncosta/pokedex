import { useEffect } from 'react';

import pokemonLogo from 'assets/logo.png';
import { usePokemon } from 'hooks/pokemon';
import { Page } from 'components/Page';

import { Loader } from 'components/Loader';
import { Card } from 'components/Card';
import {
  GENERATIONS,
  MAX_POKEMON_ID,
  STORAGE_GENERATION,
} from 'shared/constants';

import { getLocalItem } from 'shared/utils/localStorage';
import { Generation } from 'shared/types/generation';
import { SearchContainer } from './Partials/SearchContainer';

import { Content, Navigation, ResultsContainer } from './styles';
import { GenerationContainer } from './Partials/GenerationContainer';

function Pokedex(): JSX.Element {
  const {
    loadPokemons,
    allPokemons,
    currentPokemons,
    filterPokemonsByGeneration,
  } = usePokemon();

  useEffect(() => {
    (async () => {
      try {
        if (!allPokemons.length) {
          throw new Error('Empty Pokémon List');
        }

        if (allPokemons.length < MAX_POKEMON_ID) {
          throw new Error('Incomplete Pokémon List');
        }

        const generation = getLocalItem<Generation>(STORAGE_GENERATION);

        filterPokemonsByGeneration(generation || GENERATIONS[0]);
      } catch (error) {
        await loadPokemons({ limit: MAX_POKEMON_ID, offset: 0 });
      }
    })();
  }, [loadPokemons, allPokemons, filterPokemonsByGeneration]);

  return (
    <Page>
      <Content>
        <img src={pokemonLogo} alt="Pokemon Logo" loading="lazy" />

        <Navigation>
          <GenerationContainer />

          <SearchContainer />
        </Navigation>

        <ResultsContainer>
          {currentPokemons ? (
            currentPokemons.map(pokemon => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))
          ) : (
            <Loader />
          )}
        </ResultsContainer>
      </Content>
    </Page>
  );
}

export { Pokedex };
