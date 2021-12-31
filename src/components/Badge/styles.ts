import styled from 'styled-components';
import { PokemonTypes } from '../../shared/types/pokemon';

interface IComponentProps {
  type: PokemonTypes;
}

export const Component = styled.div<IComponentProps>`
  padding: 0.1rem 0.5rem;
  border-radius: 0.25rem;
  background-color: ${({ theme, type }) => theme.badges[type]};
  display: flex;
  align-items: center;
  gap: 0.25rem;

  p {
    text-transform: capitalize;
  }
`;
