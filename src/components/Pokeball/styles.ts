import styled from 'styled-components';

interface IComponentProps {
  size: string;
}

export const Component = styled.div<IComponentProps>`
  opacity: 0.2;
`;
