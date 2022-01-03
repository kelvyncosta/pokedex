import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
  border-radius: 1.25rem;
  justify-content: space-between;
  box-shadow: 0 0 1rem 0 rgb(0 0 0 / 20%);
  background: ${({ theme }) => theme.colors.white};

  > input {
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0 0.31rem;
    background-color: transparent;
  }

  > svg {
    font-size: 1.2rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
