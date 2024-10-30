import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{ size?: number }>`
  display: inline-block;
  width: ${({ size }) => (size ? `${size}px` : '1rem')};
  height: ${({ size }) => (size ? `${size}px` : '1rem')};
  border: 3px solid ${({ theme }) => theme.colors.accentHover};
  border-top-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
