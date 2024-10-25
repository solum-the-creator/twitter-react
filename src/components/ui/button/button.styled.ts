import styled, { css } from 'styled-components';

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentActive};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.accentDisabled};
      cursor: not-allowed;
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.backgroundGray};
    color: #0f1419;
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundGrayDark};
    }

    &:disabled {
      background-color: #e1e8eb;
      cursor: not-allowed;
    }
  `,
  outline: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryText};
    border: 1px solid ${({ theme }) => theme.colors.stroke};

    &:hover {
      border-color: ${({ theme }) => theme.colors.strokeDark};
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.primaryTextDisabled};
      border-color: ${({ theme }) => theme.colors.stroke};
      cursor: not-allowed;
    }
  `,
};

const sizeStyles = {
  small: css`
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 4px;
  `,
  medium: css`
    padding: 1rem 1.5rem;
    font-size: 1rem;
    border-radius: 1.75rem;
  `,
  large: css`
    padding: 1.2rem 1.6rem;
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 2.6rem;
  `,
};

export const StyledButton = styled.button<{
  $variant: 'primary' | 'secondary' | 'outline';
  $size: 'small' | 'medium' | 'large';
  $fullWidth: boolean;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${({ $size }) => sizeStyles[$size || 'medium']}
  ${({ $variant }) => variantStyles[$variant || 'primary']}
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
    cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  &:disabled {
    opacity: 0.7;
  }
`;

export const IconSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;
