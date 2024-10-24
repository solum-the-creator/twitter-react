import { forwardRef } from 'react';

import { ErrorText, InputWrapper, Label, StyledInput } from './input.styled';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
};

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth, ...props }, ref) => {
    return (
      <InputWrapper $fullWidth={fullWidth}>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <StyledInput $hasError={!!error} ref={ref} {...props} />
        <ErrorText $hasError={!!error}>{error}</ErrorText>
      </InputWrapper>
    );
  },
);

Input.displayName = 'Input';
