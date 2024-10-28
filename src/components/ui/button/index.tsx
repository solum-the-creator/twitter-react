import { ButtonVariant, Size } from '@/types/types';

import { IconSpan, StyledButton } from './button.styled';

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: Size;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      $fullWidth={fullWidth}
      $size={size}
      disabled={disabled}
      onClick={onClick}>
      {icon && <IconSpan>{icon}</IconSpan>}
      {children}
    </StyledButton>
  );
};
