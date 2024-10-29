import styled from 'styled-components';

export const TextAreaWrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  margin-bottom: 0.5rem;
`;

export const StyledTextArea = styled.textarea<{ $hasError: boolean }>`
  padding: 1.25rem;
  border-radius: 0.375rem;

  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;

  min-height: 8rem;

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

export const Label = styled.label<{ $hasError: boolean }>`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.primaryText)};
`;

export const ErrorText = styled.span<{ $hasError: boolean }>`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8rem;
  margin-top: 0.25rem;
  height: 1rem;

  visibility: ${({ $hasError }) => ($hasError ? 'visible' : 'hidden')};
`;

export const HelperText = styled.span<{ $hasError: boolean }>`
  color: ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.secondaryText)};
  font-size: 0.8rem;
  margin-top: 0.25rem;
  height: 1rem;
`;
