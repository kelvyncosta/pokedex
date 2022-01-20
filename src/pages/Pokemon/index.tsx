import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { FiArrowLeft } from 'react-icons/fi';

import pokemonLogo from 'assets/logo.png';
import { usePokemon } from 'hooks/pokemon';
import { Page } from 'components/Page';

import { Header } from './Partials/Header';
import { Body } from './Partials/Body';
import { EvolutionChain } from './Partials/EvolutionChain';
import { Footer } from './Partials/Footer';

import { Content, Details } from './styles';

interface IPokemonRouteParams {
  name: string;
}

function Pokemon(): JSX.Element {
  const { name } = useParams<IPokemonRouteParams>();

  const {
    selectedPokemon: pokemon,
    findPokemon,
    clearSelectedPokemon,
  } = usePokemon();

  useEffect(() => {
    if (name !== pokemon.name) {
      findPokemon(name);
    }
  }, [findPokemon, name, pokemon]);

  return (
    <Page>
      <Content>
        <img src={pokemonLogo} alt="Pokemon Logo" loading="lazy" />

        <Link to="/pokedex" onClick={clearSelectedPokemon}>
          <FiArrowLeft /> Back to Pokédex
        </Link>

        {!isEmpty(pokemon) && (
          <Details type={pokemon.types[0]}>
            <Header />

            <Body />

            <EvolutionChain />

            <Footer />
          </Details>
        )}
      </Content>
    </Page>
  );
}

export { Pokemon };
