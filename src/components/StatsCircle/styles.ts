import styled, { keyframes } from 'styled-components';
import { PokemonTypes } from '../../shared/types/pokemon';

const dasharray = 437;

const anim = (value: number) => {
  const percentage = value > 100 ? 1 : value / 100;

  return keyframes`
    100% {
      stroke-dashoffset: ${dasharray - dasharray * percentage};
    }
  `;
};

interface ComponentProps {
  value: number;
  type: PokemonTypes;
}

export const Component = styled.div<ComponentProps>`
  width: 160px;
  aspect-ratio: 1;
  position: relative;

  .outer {
    width: 160px;
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 20px;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  }

  .inner {
    width: 120px;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
      inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
      -0.5px -0.5px 0px rgba(255, 255, 255, 1),
      0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
      0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      padding: 0;
      margin: 0;
    }

    .value {
      font-weight: 600;
      color: #555;
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  circle {
    fill: none;
    stroke: ${({ theme, type }) => `${theme.backgrounds[type]}`};
    stroke-width: 20px;
    stroke-dasharray: ${dasharray};
    stroke-dashoffset: ${dasharray};
    animation: ${({ value }) => anim(value)} 1s
      cubic-bezier(0.41, 1.22, 0.76, 1.17) forwards;
  }
`;
