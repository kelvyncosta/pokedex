import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 0 1rem 0 rgb(0 0 0 / 20%);
  padding: 0.625rem 1rem;
  border-radius: 1.25rem;

  img {
    width: 2.5rem;
    animation: spinBall 0.2s linear 1;
    transition: transform 0.2s ease-in;
  }

  div {
    margin-left: 1rem;
  }

  @keyframes spinBall {
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 365px) {
    min-width: auto;

    label {
      padding: 0 0.5rem 0 0.75rem;
    }
  }
`;
