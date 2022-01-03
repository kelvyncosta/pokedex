import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .imageContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      height: 250px;
    }
  }
`;
