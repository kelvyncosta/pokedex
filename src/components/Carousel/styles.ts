import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
  height: 300px;
  max-width: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};

  .swiper {
    margin: 0;
    width: 100%;
  }
`;
