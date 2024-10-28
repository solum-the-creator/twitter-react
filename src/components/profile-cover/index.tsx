import testBackground from '@/assets/images/bg-default.jpg';

import { Cover, CoverWrapper } from './profile-cover.styled';

export const ProfileCover: React.FC = () => {
  return (
    <CoverWrapper>
      <Cover src={testBackground} alt="Profile cover" />
    </CoverWrapper>
  );
};
