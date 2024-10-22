import { forwardRef } from 'react';

import { ErrorText, Label, SelectWrapper, StyledOption, StyledSelect } from './select.styled';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  options: Array<{ value: string | number; label: string }>;
};

export const Select: React.FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, fullWidth, options, ...props }, ref) => {
    return (
      <SelectWrapper $fullWidth={fullWidth}>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <StyledSelect $hasError={!!error} {...props} ref={ref}>
          {options.map(({ value, label }) => (
            <StyledOption key={value} value={value}>
              {label}
            </StyledOption>
          ))}
        </StyledSelect>
        {error && <ErrorText>{error}</ErrorText>}
      </SelectWrapper>
    );
  },
);
