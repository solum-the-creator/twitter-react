import styled from 'styled-components';

export const InputWrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input<{ $hasError: boolean }>`
  padding: 1.25rem;
  border-radius: 0.375rem;

  font-size: 1.2rem;

  border: 1px solid ${({ $hasError, theme }) => ($hasError ? theme.colors.error : theme.colors.stroke)};
  color: ${({ $hasError, theme }) => ($hasError ? theme.colors.errorText : theme.colors.primaryText)};
  background-color: ${({ theme }) => theme.colors.primary};
  outline: none;

  &::placeholder {
    color: ${({ $hasError, theme }) => ($hasError ? theme.colors.errorText : theme.colors.placeholder)};
  }

  &:focus {
    border-color: ${({ $hasError, theme }) => ($hasError ? theme.colors.error : theme.colors.accent)};
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ErrorText = styled.span<{ $hasError: boolean }>`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8rem;
  margin-top: 0.25rem;
  height: 1rem;

  visibility: ${({ $hasError }) => ($hasError ? 'visible' : 'hidden')};
`;
