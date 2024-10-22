import styled, { css } from 'styled-components';

const variantStyles = {
  primary: css`
    background-color: #1da1f2;
    color: white;
    border: none;

    &:hover {
      background-color: #0d8de1;
    }

    &:disabled {
      background-color: #a8d8f0;
      cursor: not-allowed;
    }
  `,
  secondary: css`
    background-color: #eff3f4;
    color: #0f1419;
    border: none;

    &:hover {
      background-color: #d4dadd;
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
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 6px;
  `,
  large: css`
    padding: 1.5rem 2rem;
    font-size: 1.5rem;
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
