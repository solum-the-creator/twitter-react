import { StyledLink } from './link.styled';
import { LinkProps } from './link.type';

export const Link: React.FC<LinkProps> = ({ children, to, onClick, variant = 'primary' }) => {
  return (
    <StyledLink to={to} onClick={onClick} variant={variant}>
      {children}
    </StyledLink>
  );
};
