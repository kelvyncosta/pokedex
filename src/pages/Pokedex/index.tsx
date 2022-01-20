import { useCallback, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaSearch } from 'react-icons/fa';

import pokemonLogo from 'assets/logo.png';
import { usePokemon } from 'hooks/pokemon';
import { Input } from 'components/Input';
import { Page } from 'components/Page';

import { DEFAULT_LIMIT, MAX_POKEMON_ID } from 'shared/constants';
import { Content, SearchContainer } from './styles';

interface FindPokemonFormData {
  name: string;
}

function Pokedex(): JSX.Element {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);
  const { findPokemon, loadPokemons, allPokemons } = usePokemon();

  useEffect(() => {
    (async () => {
      try {
        if (!allPokemons.length) {
          throw new Error('Empty Pokémon List');
        }

        if (allPokemons.length < MAX_POKEMON_ID) {
          throw new Error('Incomplete Pokémon List');
        }
      } catch (error) {
        await loadPokemons({ initial: true, limit: DEFAULT_LIMIT, offset: 0 });

        await loadPokemons({
          limit: MAX_POKEMON_ID - DEFAULT_LIMIT,
          offset: DEFAULT_LIMIT,
        });
      }
    })();
  }, [loadPokemons, allPokemons]);

  const handleSubmit = useCallback(
    async (data: FindPokemonFormData) => {
      const findedPokemon = await findPokemon(data.name);

      history.push(`/pokemon/${findedPokemon.name}`);
    },
    [findPokemon, history],
  );

  return (
    <Page>
      <Content>
        <img src={pokemonLogo} alt="Pokemon Logo" loading="lazy" />

        <SearchContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Type a Pokemon name or ID" />

            <button type="submit">
              <FaSearch />
            </button>
          </Form>
        </SearchContainer>

        {/* {!isEmpty(pokemon) && (
          <div>
            <Card pokemon={pokemon} />
          </div>
        )} */}

        {/* <ResultsContainer>
          {!pokemon ? <NoSearchResults /> : }
        </ResultsContainer> */}

        {/* {!isEmpty(pokemon) && <Modal active={!isEmpty(pokemon)} />} */}
      </Content>
    </Page>
  );
}

export { Pokedex };
