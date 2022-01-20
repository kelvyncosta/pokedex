import styled from 'styled-components';

import { PokemonTypes } from 'shared/types/pokemon';

interface IComponentProps {
  type: PokemonTypes;
}

export const Component = styled.div<IComponentProps>`
  position: relative;
  padding: 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 0.5rem 0 rgb(0 0 0 / 40%);
  background: ${({ theme }) => theme.colors.white};
  z-index: 4;

  .info {
    display: flex;
    justify-content: space-between;
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }

  h2 {
    color: ${({ theme, type }) => theme.backgrounds[type]};
  }

  .imgEcho {
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      position: relative;
      min-height: 400px;
      height: 95%;
      z-index: 2;
    }
  }
`;
