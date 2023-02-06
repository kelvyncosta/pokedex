import { Generation } from 'shared/types/generation';

export const MAX_POKEMON_ID = 1008;
export const DEFAULT_LIMIT = 151;
export const STORAGE_POKEMONS = '@storage_pokemons';
export const STORAGE_GENERATION = '@storage_generation';
export const FEATURED_POKEMONS_QUANTITY = 10;

export const STATS = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'];

export const GENERATIONS: Generation[] = [
  {
    text: '1st',
    offset: 0,
    limit: 151,
  },
  {
    text: '2nd',
    offset: 151,
    limit: 251,
  },
  {
    text: '3th',
    offset: 251,
    limit: 386,
  },
  {
    text: '4th',
    offset: 386,
    limit: 493,
  },
  {
    text: '5th',
    offset: 493,
    limit: 649,
  },
  {
    text: '6th',
    offset: 649,
    limit: 721,
  },
  {
    text: '7th',
    offset: 721,
    limit: 809,
  },
  {
    text: '8th',
    offset: 809,
    limit: 905,
  },
  {
    text: '9th',
    offset: 905,
    limit: 1008,
  },
];
