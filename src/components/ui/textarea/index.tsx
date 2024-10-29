import { forwardRef } from 'react';

import { HelperText, Label, StyledTextArea, TextAreaWrapper } from './textarea.styled';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  helpText?: string;
  fullWidth?: boolean;
};

export const TextArea: React.FC<TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, helpText, fullWidth, ...props }, ref) => {
    return (
      <TextAreaWrapper $fullWidth={fullWidth}>
        {label && (
          <Label $hasError={!!error} htmlFor={props.id}>
            {label}
          </Label>
        )}
        <StyledTextArea $hasError={!!error} ref={ref} {...props} />
        <HelperText $hasError={!!error}>{error || helpText}</HelperText>
      </TextAreaWrapper>
    );
  },
);

TextArea.displayName = 'TextArea';
