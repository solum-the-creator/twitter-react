import { ButtonVariant, Size } from '@/types/types';

import { LoadingSpinner } from '../loading-spinner';

import { IconSpan, StyledButton } from './button.styled';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
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
  isLoading = false,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      $fullWidth={fullWidth}
      $size={size}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {icon && <IconSpan>{icon}</IconSpan>}
          {children}
        </>
      )}
    </StyledButton>
  );
};
