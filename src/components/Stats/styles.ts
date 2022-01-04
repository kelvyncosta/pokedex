import styled, { keyframes } from 'styled-components';
import { PokemonTypes } from '../../shared/types/pokemon';

const fillBar = (value: number) => keyframes`
  from {
    height: 0;
  }
  to {
    height: ${value}%;
  }
`;

interface IRangeProps {
  type: PokemonTypes;
  value: number;
}

export const Component = styled.div`
  .stats {
    display: flex;
    justify-content: space-between;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Range = styled.div<IRangeProps>`
  height: 120px;
  position: relative;
  width: 5px;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);

  &:after {
    content: '';
    border-radius: 10px;
    animation: ${({ value }) => fillBar(value)} 0.75s
      cubic-bezier(0.83, 1.35, 0.9, 1.09);
    position: absolute;
    bottom: 0;
    width: 5px;
    height: ${({ value }) => value}%;
    background-color: ${({ theme, type }) => theme.backgrounds[type]};
  }
`;
