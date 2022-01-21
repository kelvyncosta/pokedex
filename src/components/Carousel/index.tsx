/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { isEmpty, shuffle } from 'lodash';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import { usePokemon } from 'hooks/pokemon';
import {
  DEFAULT_LIMIT,
  FEATURED_POKEMONS_QUANTITY,
  MAX_POKEMON_ID,
} from 'shared/constants';
import { Pokemon } from 'shared/types/pokemon';

import { Item } from './Item';
import { Component } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay]);

function Carousel(): JSX.Element {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const { allPokemons, loadPokemons } = usePokemon();

  useEffect(() => {
    (async () => {
      try {
        if (isEmpty(allPokemons)) {
          throw new Error('Empty Pokémon List');
        }

        if (allPokemons.length < MAX_POKEMON_ID) {
          throw new Error('Incomplete Pokémon List');
        }

        const shuffledPokemons = shuffle(allPokemons);

        const featuredPokemons = shuffledPokemons.slice(
          0,
          FEATURED_POKEMONS_QUANTITY,
        );

        setPokemons(featuredPokemons);
      } catch (err) {
        await loadPokemons({ limit: MAX_POKEMON_ID, offset: 0 });
      }
    })();
  }, [loadPokemons, allPokemons]);

  return (
    <Component>
      <h1>Featured Pokémons</h1>

      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop
        pagination={{
          clickable: true,
        }}
        direction="vertical"
      >
        {pokemons.map(pokemon => (
          <SwiperSlide key={pokemon.id}>
            <Item pokemon={pokemon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Component>
  );
}

export { Carousel };
