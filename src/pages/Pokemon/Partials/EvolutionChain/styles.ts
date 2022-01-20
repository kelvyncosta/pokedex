import styled from 'styled-components';

import { PokemonTypes } from 'shared/types/pokemon';

interface IComponentProps {
  type: PokemonTypes;
}

export const Component = styled.div<IComponentProps>`
  position: relative;
  padding: 1.25rem;
  border-radius: 0 0 0.75rem 0.75rem;
  box-shadow: 0 0 0.5rem 0 rgb(0 0 0 / 40%);
  background: ${({ theme, type }) => theme.backgrounds[type]};
  z-index: 3;

  h2 {
    color: ${({ theme }) => theme.colors.white};
  }

  .chain {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    .arrow {
      transform: rotate(-30deg);

      &._2 {
        transform: rotate(30deg);
      }

      svg {
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }

    .chain__item {
      position: relative;
      width: 50%;
      display: flex;
      gap: 1rem;
      border-radius: 0.75rem;

      &:nth-child(3) {
        flex-direction: row-reverse;
        justify-content: flex-end;
      }

      .chain__item__image {
        position: relative;
        height: 200px;
        width: 200px;

        .pokeball {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        a {
          height: 200px;
          width: 200px;
          background-color: green;

          img {
            height: 175px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
          }
        }
      }

      .chain__item__info {
        height: 200px;
        display: flex;
        align-items: center;

        h3 {
          text-transform: capitalize;
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`;
