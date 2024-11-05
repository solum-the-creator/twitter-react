import removeIcon from '@/assets/images/icons/close-icon.svg?react';

import { IconWrapper } from '../icon-wrapper';

import { RemoveButtonStyled } from './remove-button.styled';

type RemoveButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
};

export const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick, ...props }) => {
  return (
    <RemoveButtonStyled onClick={onClick} {...props}>
      <IconWrapper icon={removeIcon} />
    </RemoveButtonStyled>
  );
};
