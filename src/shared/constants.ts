import { Generation } from 'shared/types/generation';

export const MAX_POKEMON_ID = 898;
export const DEFAULT_LIMIT = 151;
export const STORAGE_POKEMONS = '@storage_pokemons';
export const FEATURED_POKEMONS_QUANTITY = 10;

export const GENERATIONS: Generation[] = [
  {
    text: 'I',
    offset: 0,
    limit: 151,
  },
  {
    text: 'II',
    offset: 151,
    limit: 251,
  },
  {
    text: 'III',
    offset: 251,
    limit: 386,
  },
  {
    text: 'IV',
    offset: 386,
    limit: 493,
  },
  {
    text: 'V',
    offset: 493,
    limit: 649,
  },
  {
    text: 'VI',
    offset: 649,
    limit: 721,
  },
  {
    text: 'VII',
    offset: 721,
    limit: 809,
  },
  {
    text: 'VIII',
    offset: 809,
    limit: 898,
  },
];
