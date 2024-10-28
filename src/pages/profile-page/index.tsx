import { Header } from '@/components/header';
import { ProfileBio } from '@/components/profile-bio';
import { ProfileCover } from '@/components/profile-cover';

import { HeaderInfo, HeaderName, HeaderTweetCount, ProfileContainer } from './profile.styled';

export const ProfilePage: React.FC = () => {
  return (
    <ProfileContainer>
      <Header>
        <HeaderInfo>
          <HeaderName>Profile</HeaderName>
          <HeaderTweetCount>0 Tweets</HeaderTweetCount>
        </HeaderInfo>
      </Header>
      <ProfileCover />
      <ProfileBio />
    </ProfileContainer>
  );
};
