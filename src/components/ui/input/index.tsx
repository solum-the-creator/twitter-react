import { forwardRef } from 'react';

import { HelperText, InputWrapper, Label, StyledInput } from './input.styled';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  helpText?: string;
  fullWidth?: boolean;
};

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helpText, fullWidth, ...props }, ref) => {
    return (
      <InputWrapper $fullWidth={fullWidth}>
        {label && (
          <Label $hasError={!!error} htmlFor={props.id}>
            {label}
          </Label>
        )}
        <StyledInput $hasError={!!error} ref={ref} {...props} />
        <HelperText $hasError={!!error}>{error || helpText}</HelperText>
      </InputWrapper>
    );
  },
);

Input.displayName = 'Input';
