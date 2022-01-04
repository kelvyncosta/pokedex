import styled from 'styled-components';
import { PokemonTypes } from '../../shared/types/pokemon';

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > img {
    width: 300px;
    margin: 0 auto;
  }

  > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.25rem 1rem;
    border-radius: 2rem;
    box-shadow: ${({ theme }) => theme.shadow.default};
  }
`;

interface IDetailsProps {
  type: PokemonTypes;
}

interface IBodyProps {
  type: PokemonTypes;
}

export const Details = styled.div<IDetailsProps>`
  width: 100%;
  max-width: 720px;
  background-color: ${({ theme, type }) => theme.backgrounds[type]};
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.shadow.default};
  margin-bottom: 3rem;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.25rem 0 1.25rem;

  h1 {
    position: relative;
    z-index: 5;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.white};
  }

  .badges {
    display: flex;

    div {
      & + div {
        padding-left: 8px;
      }
    }
  }

  .pokemonId {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    right: 0;
    top: 0;
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.2;
    padding: 1rem 0.75rem;
  }

  .pokeball {
    position: absolute;
    left: 50%;
    top: 95px;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

export const Body = styled.div<IBodyProps>`
  position: relative;
  padding: 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 0.5rem 0 rgb(0 0 0 / 40%);
  background: ${({ theme }) => theme.colors.white};
  z-index: 4;

  h2 {
    color: ${({ theme, type }) => theme.backgrounds[type]};
  }

  .imgEcho {
    position: absolute;
    z-index: 1;
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

export const Footer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;

  .button {
    border: none;
    position: relative;
    width: 50%;
    margin-top: -20px;
    padding: 2rem 1rem 0.75rem;
    background: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    z-index: 1;

    svg {
      font-size: 1.5rem;
    }

    p {
      text-transform: capitalize;
      margin: 0;
      padding: 0;
      line-height: 1rem;

      &:first-child {
        color: ${({ theme }) => theme.colors.darkGray};
        font-weight: 600;
      }

      &:last-child {
        font-size: 1.25rem;
      }
    }

    &.previousPokemon {
      p {
        text-align: left;
      }
    }

    &.nextPokemon {
      justify-content: flex-end;

      p {
        text-align: right;
      }
    }

    &:hover {
      background: ${({ theme }) => theme.colors.lightBlue};
    }
  }
`;

export const ImageContainer = styled.div`
  height: 200px;
  z-index: 1000;
  transition: top 0.8s ease;

  img {
    margin-top: 1rem;
    height: 220px;
  }
`;
