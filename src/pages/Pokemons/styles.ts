import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.85)
    ),
    url('/background.jpg');
  padding: 0 1rem;
`;

export const Content = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto 1fr;

  > img {
    width: 300px;
    margin: 0 auto;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  }

  button {
    background: transparent;
    border: none;
  }

  svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export const ResultsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
