import styled from 'styled-components';

interface IComponentProps {
  isActive: boolean;
}

export const Component = styled.div<IComponentProps>`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 50px;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.default};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  cursor: pointer;
`;
