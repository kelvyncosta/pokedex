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

export const Details = styled.div<IDetailsProps>`
  width: 100%;
  max-width: 720px;
  background-color: ${({ theme, type }) => theme.backgrounds[type]};
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.shadow.default};
  margin-bottom: 3rem;
`;

export const Footer = styled.div``;
