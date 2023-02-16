import { Generation } from 'shared/types/generation';

export const MAX_POKEMON_ID = 1008;
export const PERSISTED_POKEMONS = '@persisted_pokemons';
export const PERSISTED_GENERATION = '@persisted_generation';
export const PERSISTED_THEME = '@persisted_theme';
export const PERSISTED_SCORE = '@persisted_score';

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

export const CARD_COLOR = {
  dark: '#333333',
  bug: '#C3CE75',
  dragon: '#F9BE00',
  electric: '#FFD86F',
  fairy: '#F469A9',
  fighting: '#EB4971',
  fire: '#FB6C6C',
  flying: '#D6B591',
  ghost: '#735797',
  grass: '#48D0B0',
  ground: '#B1736C',
  ice: '#7FCCEC',
  normal: '#C2C2A1',
  poison: '#7C538C',
  psychic: '#9B7FA6',
  rock: '#A6AAB6',
  steel: '#CCCCDE',
  water: '#609FB5',
};
