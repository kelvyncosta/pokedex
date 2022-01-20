import styled from 'styled-components';

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
