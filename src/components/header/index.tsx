import { HeaderContainer } from './header.styled';

type HeaderProps = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
