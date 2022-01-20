import styled from 'styled-components';

export const Component = styled.div`
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

export const ImageContainer = styled.div`
  height: 200px;
  z-index: 1000;
  transition: top 0.8s ease;

  img {
    margin-top: 1rem;
    height: 220px;
  }
`;
