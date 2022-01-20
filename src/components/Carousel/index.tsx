/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import { usePokemon } from 'hooks/pokemon';

import { Item } from './Item';
import { Component } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay]);

function Carousel(): JSX.Element {
  const { featuredPokemons, loadFeaturedPokemons } = usePokemon();

  useEffect(() => {
    loadFeaturedPokemons();
  }, [loadFeaturedPokemons]);

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
        {featuredPokemons.map(pokemon => (
          <SwiperSlide key={pokemon.id}>
            <Item pokemon={pokemon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Component>
  );
}

export { Carousel };
