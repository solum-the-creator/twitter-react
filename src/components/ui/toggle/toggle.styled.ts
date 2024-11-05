import styled from 'styled-components';

export const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ToggleSlider = styled.div<{ $checked: boolean }>`
  position: absolute;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 1.6rem;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: '';
    left: 3px;
    top: 3px;
    width: calc(1.6rem - 6px);
    height: calc(1.6rem - 6px);
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;

export const ToggleInput = styled.input`
  display: none;

  &:checked + ${ToggleSlider} {
    background-color: ${({ theme }) => theme.colors.accent};
    &::before {
      transform: translateX(1.5rem);
      background-color: #fff;
    }
  }
`;
