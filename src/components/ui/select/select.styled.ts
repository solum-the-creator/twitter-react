import styled from 'styled-components';

import arrowIcon from '@/assets/images/icons/arrow-icon.svg';

export const SelectWrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  margin-bottom: 0.5rem;
`;

export const StyledSelect = styled.select<{ $hasError: boolean }>`
  padding: 1.25rem;
  font-size: 1.2rem;

  border-radius: 0.375rem;
  border: 1px solid ${({ $hasError, theme }) => ($hasError ? theme.colors.error : theme.colors.stroke)};
  color: ${({ $hasError, theme }) => ($hasError ? theme.colors.errorText : theme.colors.primaryText)};
  background-color: ${({ theme }) => theme.colors.primary};
  outline: none;

  appearance: none;
  background: url(${arrowIcon}) no-repeat right;
  background-position-x: calc(100% - 1rem);

  cursor: pointer;

  &:focus {
    border-color: ${({ $hasError, theme }) => ($hasError ? theme.colors.error : theme.colors.accent)};
  }
`;

export const StyledOption = styled.option`
  color: ${({ theme }) => theme.colors.primaryText};

  &:disabled {
    color: ${({ theme }) => theme.colors.primaryTextDisabled};
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #333;
`;

export const ErrorText = styled.span<{ $hasError: boolean }>`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  height: 1rem;

  visibility: ${({ $hasError }) => ($hasError ? 'visible' : 'hidden')};
`;
