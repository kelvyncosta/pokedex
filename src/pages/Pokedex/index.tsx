import { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaSearch } from 'react-icons/fa';
import { isEmpty } from 'lodash';

import pokemonLogo from '../../assets/logo.png';
import { Input } from '../../components/Input';
import { usePokemon } from '../../hooks/pokemon';

import { Page, Content, SearchContainer } from './styles';
import { Modal } from '../../components/Modal';

interface FindPokemonFormData {
  name: string;
}

function Pokedex(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const { selectedPokemon: pokemon, findPokemon } = usePokemon();

  const handleSubmit = useCallback(
    (data: FindPokemonFormData) => {
      findPokemon(data.name);
    },
    [findPokemon],
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

        {/* <ResultsContainer>
          {!pokemon ? <NoSearchResults /> : }
        </ResultsContainer> */}

        {!isEmpty(pokemon) && <Modal active={!isEmpty(pokemon)} />}
      </Content>
    </Page>
  );
}

export { Pokedex };
