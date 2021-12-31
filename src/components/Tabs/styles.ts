import styled from 'styled-components';
import { PokemonTypes } from '../../shared/types/pokemon';

export const Component = styled.div`
  padding: 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 0.5rem 0 rgb(0 0 0 / 40%);
  background: #fff;
  color: #333;

  .tabs {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 0.125rem solid rgba(0, 0, 0, 0.05);
  }

  table {
    width: 100%;

    td {
      padding: 0.5rem;
      text-transform: capitalize;

      &:first-child {
        width: 20%;
      }

      &:nth-child(2) {
        width: 10%;
        font-weight: bold;
        text-align: center;
      }

      &:nth-child(3) {
        width: 70%;
      }
    }
  }

  @keyframes fill {
    from {
      width: 0;
    }
  }
`;

interface ITabItemProps {
  active?: boolean;
  type: PokemonTypes;
}

export const TabItem = styled.span<ITabItemProps>`
  border: none;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 700;
  position: relative;
  white-space: nowrap;
  font-family: inherit;
  transition: all 0.3s;
  background: transparent;
  color: ${({ active }) => (active ? '#333' : 'rgba(0, 0, 0, 0.2)')};

  &:after {
    left: 0;
    content: '';
    width: 100%;
    height: 3px;
    bottom: -2px;
    position: absolute;
    transition: all 0.3s;
    background-color: ${({ theme, active, type }) =>
      active && theme.backgrounds[type]};
  }

  &:hover {
    color: '#333';
  }
`;
