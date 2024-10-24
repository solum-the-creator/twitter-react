import LogoImage from '@/assets/images/twitter-logo.svg?react';

import { LogoStyled } from './logo.styled';

export const Logo: React.FC = () => {
  return (
    <LogoStyled>
      <LogoImage />
    </LogoStyled>
  );
};
