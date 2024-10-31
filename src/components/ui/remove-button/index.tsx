import RemoveIcon from '@/assets/images/icons/close-icon.svg?react';

import { RemoveButtonStyled } from './remove-button.styled';

type RemoveButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
};

export const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick, ...props }) => {
  return (
    <RemoveButtonStyled onClick={onClick} {...props}>
      <RemoveIcon />
    </RemoveButtonStyled>
  );
};
