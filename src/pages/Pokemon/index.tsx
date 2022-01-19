import { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

import {
  FiArrowDown,
  FiArrowLeft,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { Page } from '../../components/Page';
import pokemonLogo from '../../assets/logo.png';
import { usePokemon } from '../../hooks/pokemon';
import { Badge } from '../../components/Badge';
import { Pokeball } from '../../components/Pokeball';
import { About } from '../../components/About';
import { Stats } from '../../components/Stats';

import {
  Content,
  Details,
  ImageContainer,
  Header,
  Body,
  Footer,
  Chain,
} from './styles';
import { formatPokemonId } from '../../shared/utils/formatPokemonId';
import {
  IPreviousNextPokemon,
  Pokemon as PokemonType,
} from '../../shared/types/pokemon';
import { scrollToTop } from '../../shared/utils/scrollToTop';

interface IPokemonRouteParams {
  name: string;
}

function Pokemon(): JSX.Element {
  const history = useHistory();
  const [evolutionChain, setEvolutionChain] = useState<PokemonType[]>([]);

  const { name } = useParams<IPokemonRouteParams>();

  const [nextPreviousPokemon, setNextPreviousPokemon] =
    useState<IPreviousNextPokemon>({} as IPreviousNextPokemon);

  const {
    selectedPokemon: pokemon,
    findPokemon,
    getNextAndPreviousPokemon,
    clearSelectedPokemon,
    getEvolutionChain,
  } = usePokemon();

  useEffect(() => {
    if (name !== pokemon.name) {
      findPokemon(name);
    }

    if (!isEmpty(pokemon)) {
      (async () => {
        const evolutions = await getEvolutionChain(pokemon.id);

        setEvolutionChain(evolutions);
      })();
    }
  }, [findPokemon, name, pokemon, getEvolutionChain]);

  useEffect(() => {
    (async () => {
      const tempNextPreviousProkemon = await getNextAndPreviousPokemon(pokemon);

      setNextPreviousPokemon(tempNextPreviousProkemon);
    })();
  }, [getNextAndPreviousPokemon, pokemon]);

  return (
    <Page>
      <Content>
        <img src={pokemonLogo} alt="Pokemon Logo" loading="lazy" />

        <Link to="/pokedex" onClick={clearSelectedPokemon}>
          <FiArrowLeft /> Back to Pokédex
        </Link>

        {!isEmpty(pokemon) && (
          <Details type={pokemon.types[0]}>
            <Header>
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
            </Header>

            <Body type={pokemon.types[0]}>
              <About />

              <Stats />

              <div className="imgEcho">
                <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
              </div>
            </Body>

            {!isEmpty(evolutionChain) && (
              <Chain type={pokemon.types[0]}>
                <h2>Evolution Chain</h2>

                <div className="chain">
                  {evolutionChain.map((pokemonChain, index) => (
                    <>
                      {index !== 0 && (
                        <div className={`arrow _${index}`}>
                          <FiArrowDown />
                        </div>
                      )}

                      <div className="chain__item" key={pokemonChain.id}>
                        <div className="chain__item__image">
                          <Link
                            to={`/pokemon/${pokemonChain.name}`}
                            onClick={() => scrollToTop()}
                          >
                            <img
                              src={pokemonChain.image}
                              alt={pokemonChain.name}
                            />
                          </Link>

                          <div className="pokeball">
                            <Pokeball size="175px" />
                          </div>
                        </div>

                        <div className="chain__item__info">
                          <h3>{pokemonChain.name}</h3>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </Chain>
            )}

            {!isEmpty(nextPreviousPokemon) && (
              <Footer>
                <button
                  type="button"
                  className="button previousPokemon"
                  onClick={() => {
                    history.push(
                      `/pokemon/${nextPreviousPokemon.previous.name}`,
                    );
                    scrollToTop();
                  }}
                >
                  <FiChevronLeft />

                  <div>
                    <p>{formatPokemonId(nextPreviousPokemon.previous.id)}</p>
                    <p>{nextPreviousPokemon.previous.name}</p>
                  </div>
                </button>

                <button
                  type="button"
                  className="button nextPokemon"
                  onClick={() => {
                    history.push(`/pokemon/${nextPreviousPokemon.next.name}`);
                    scrollToTop();
                  }}
                >
                  <div>
                    <p>{formatPokemonId(nextPreviousPokemon.next.id)}</p>
                    <p>{nextPreviousPokemon.next.name}</p>
                  </div>
                  <FiChevronRight />
                </button>
              </Footer>
            )}
          </Details>
        )}
      </Content>
    </Page>
  );
}

export { Pokemon };
