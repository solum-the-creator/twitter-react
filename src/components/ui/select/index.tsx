import { forwardRef } from 'react';

import { ErrorText, Label, SelectWrapper, StyledOption, StyledSelect } from './select.styled';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  placeholder?: string;
  error?: string;
  fullWidth?: boolean;
  options: Array<{ value: string | number; label: string }>;
};

export const Select: React.FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, fullWidth, options, placeholder, ...props }, ref) => {
    return (
      <SelectWrapper $fullWidth={fullWidth}>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <StyledSelect defaultValue={undefined} $hasError={!!error} {...props} ref={ref}>
          {placeholder && (
            <StyledOption value={undefined} hidden={true}>
              {placeholder}
            </StyledOption>
          )}
          {options.map(({ value, label }) => (
            <StyledOption key={value} value={value}>
              {label}
            </StyledOption>
          ))}
        </StyledSelect>
        <ErrorText $hasError={!!error}>{error}</ErrorText>
      </SelectWrapper>
    );
  },
);
