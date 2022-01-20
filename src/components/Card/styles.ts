import { PokemonTypes } from 'shared/types/pokemon';
import styled from 'styled-components';

interface IComponentProps {
  type: PokemonTypes;
}

export const Component = styled.div<IComponentProps>`
  width: 250px;
  border-radius: 0.75rem;
  padding: 0.75rem;
  position: relative;
  background: ${({ theme, type }) => theme.backgrounds[type]};
  box-shadow: 0 0 1.25rem 0 ${({ theme, type }) => theme.backgrounds[type]};
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  margin: 0 auto;
  width: 170px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translate(-50%);

  img {
    width: 210px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 180px;

  > * {
    margin: 0;
    padding: 0;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    text-transform: capitalize;
    font-size: 1.75rem;
    line-height: 2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    opacity: 0.5;
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`;

export const BadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;
