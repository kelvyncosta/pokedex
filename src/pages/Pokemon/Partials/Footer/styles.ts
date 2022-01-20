import styled from 'styled-components';

export const Component = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;

  .button {
    border: none;
    position: relative;
    width: 50%;
    margin-top: -20px;
    padding: 2rem 1rem 0.75rem;
    background: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    z-index: 1;

    svg {
      font-size: 1.5rem;
    }

    p {
      text-transform: capitalize;
      margin: 0;
      padding: 0;
      line-height: 1rem;

      &:first-child {
        color: ${({ theme }) => theme.colors.darkGray};
        font-weight: 600;
      }

      &:last-child {
        font-size: 1.25rem;
      }
    }

    &.previousPokemon {
      p {
        text-align: left;
      }
    }

    &.nextPokemon {
      justify-content: flex-end;

      p {
        text-align: right;
      }
    }

    &:hover {
      background: ${({ theme }) => theme.colors.lightBlue};
    }
  }
`;
