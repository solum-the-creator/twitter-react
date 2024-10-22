import { ErrorText, Label, SelectWrapper, StyledOption, StyledSelect } from './select.styled';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  options: Array<{ value: string | number; label: string }>;
};

export const Select: React.FC<SelectProps> = ({ label, error, fullWidth, options, ...props }) => {
  return (
    <SelectWrapper $fullWidth={fullWidth}>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <StyledSelect $hasError={!!error} {...props}>
        {options.map(({ value, label }) => (
          <StyledOption key={value} value={value}>
            {label}
          </StyledOption>
        ))}
      </StyledSelect>
      {error && <ErrorText>{error}</ErrorText>}
    </SelectWrapper>
  );
};
