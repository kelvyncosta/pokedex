import styled from 'styled-components';

export const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0 1.5rem;
`;

export const PageBackground = styled.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 40%;
  right: 0;
  top: 0;
  background: ${({ theme }) => theme.colors.blue};

  &:before {
    content: '';
    border-top-left-radius: 50% 100%;
    border-bottom-left-radius: 50% 100%;
    position: absolute;
    top: 0;
    left: -15%;
    width: 20%;
    background: ${({ theme }) => theme.colors.blue};
    height: 100%;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  height: 100%;

  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    'header header'
    'info featured';
  grid-gap: 2rem;
`;

export const Header = styled.div`
  grid-area: header;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  img {
    height: 80px;
  }
`;

export const Info = styled.div`
  grid-area: info;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    font-size: 2rem;
  }

  p {
    margin: 0.25rem 0;
  }

  a {
    padding: 0.3rem 2.5rem;
    text-decoration: none;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 2rem;
  }
`;

export const Featured = styled.div`
  grid-area: featured;
  width: 100%;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
