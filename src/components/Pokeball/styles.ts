import styled from 'styled-components';

interface IComponentProps {
  opacity: number;
}

export const Component = styled.div<IComponentProps>`
  opacity: ${({ opacity }) => opacity};
`;
