import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto 1fr;

  > img {
    width: 300px;
    margin: 0 auto;
  }
`;

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const ResultsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 4rem 0;
`;
