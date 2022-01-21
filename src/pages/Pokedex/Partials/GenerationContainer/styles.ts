import styled, { css } from 'styled-components';

export const Component = styled.div`
  p {
    font-weight: 600;
  }
`;

export const ListGeneration = styled.div`
  display: flex;
  box-shadow: 0 0 1rem 0 rgb(0 0 0 / 20%);
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.75rem;
  overflow: hidden;
`;

interface IListItemProps {
  active: boolean;
}

export const ListItem = styled.div<IListItemProps>`
  min-width: 40px;
  text-align: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }

  ${({ active }) =>
    active &&
    css`
      background: #ccc;
      border-bottom: 5px solid ${({ theme }) => theme.colors.blue};
    `}
`;
