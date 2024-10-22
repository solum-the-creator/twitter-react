import { ErrorText, InputWrapper, Label, StyledInput } from './input.styled';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
};

export const Input: React.FC<InputProps> = ({ label, error, fullWidth, ...props }) => {
  return (
    <InputWrapper $fullWidth={fullWidth}>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <StyledInput $hasError={!!error} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};
