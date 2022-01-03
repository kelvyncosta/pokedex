import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr;

  > img {
    width: 300px;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: 680px;
  background: ${({ theme }) => theme.colors.blue};
  box-shadow: ${({ theme }) => theme.shadow.default};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  overflow: hidden;

  .pokeball {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
    transform: translate(40%, 30%);
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StartContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .silhouette {
    > img {
      height: 300px;
      filter: brightness(0);
    }
  }

  .options {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    > div {
      background: red;
      width: 40%;
      padding: 0.5rem 1rem;
      text-align: center;
      border-radius: 0.5rem;
    }
  }
`;
