import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Component = styled.button`
  position: relative;
  background: ${({ theme }) => theme.colors.yellow};
  height: 56px;
  padding: 0 2rem;
  border-radius: 10px;
  border: 0;
  font-size: 1rem;
  transition: background-color 0.2s;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.default};
`;
