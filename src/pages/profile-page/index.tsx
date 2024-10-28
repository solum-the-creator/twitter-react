import { Header } from '@/components/header';
import { ProfileBio } from '@/components/profile-bio';
import { ProfileCover } from '@/components/profile-cover';
import { selectUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/index';
import { useGetProfileQuery } from '@/store/profile/profileApi';

import { HeaderInfo, HeaderName, HeaderTweetCount, ProfileContainer } from './profile.styled';

export const ProfilePage: React.FC = () => {
  const user = useAppSelector(selectUser);
  const { data: userProfile, isLoading } = useGetProfileQuery(user.uid!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContainer>
      {userProfile && (
        <>
          <Header>
            <HeaderInfo>
              <HeaderName>{userProfile.name}</HeaderName>
              <HeaderTweetCount>0 Tweets</HeaderTweetCount>
            </HeaderInfo>
          </Header>
          <ProfileCover />
          <ProfileBio
            name={userProfile.name}
            email={userProfile.email}
            bio={userProfile.bio}
            profileImage={userProfile.profileImage}
          />
        </>
      )}
    </ProfileContainer>
  );
};
