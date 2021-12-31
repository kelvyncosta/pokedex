import styled from 'styled-components';

import { PokemonTypes } from '../../shared/types/pokemon';

interface IComponentProps {
  active: boolean;
  type: PokemonTypes;
}

interface IOverlayProps {
  active: boolean;
}

export const Component = styled.div<IComponentProps>`
  top: 50%;
  left: 50%;
  z-index: 101;
  color: white;
  position: fixed;
  max-width: 480px;
  min-width: 460px;
  overflow: hidden;
  max-height: 100vh;
  min-height: 400px;
  border-radius: 0.75rem;
  transition: all 0.2s ease-in;
  transform: translate(-50%, -50%);
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  background-color: ${({ theme, type }) => theme.backgrounds[type]};

  @media (max-width: 480px) {
    min-width: 95%;
    max-width: 345px;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 1.25rem;
  position: absolute;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: -1px;
    opacity: 0.5;
  }

  svg {
    cursor: pointer;
    width: 1.875rem;
    height: 1.875rem;
    opacity: 0.5;
    transition: all 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.25rem 0 1.25rem;

  h1 {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    font-size: 1.5rem;
  }

  .badges {
    display: flex;

    div {
      & + div {
        padding-left: 8px;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  height: 150px;
  z-index: 1000;
  transition: top 0.8s ease;

  img {
    margin-top: 1rem;
    height: 170px;
  }
`;

export const Overlay = styled.div<IOverlayProps>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  position: fixed;
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ active }) => (active ? 1 : 0)};
`;
