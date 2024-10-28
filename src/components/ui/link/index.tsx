import { LinkVariant } from '@/types/types';

import { StyledLink } from './link.styled';

export type LinkProps = {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
  variant?: LinkVariant;
};

export const Link: React.FC<LinkProps> = ({ children, to, onClick, variant = 'primary' }) => {
  return (
    <StyledLink to={to} onClick={onClick} variant={variant}>
      {children}
    </StyledLink>
  );
};
