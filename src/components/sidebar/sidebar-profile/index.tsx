import defaultProfile from '@/assets/images/default-profile.png';
import { CenteredLoader } from '@/components/centered-loader';
import { ProfileImage } from '@/components/ui/profile-image';
import { useGetAuthProfile } from '@/hooks/use-get-auth-profile';

import { ProfileContainer, UserEmail, UserInfo, UserName } from './sidebar-profile.styled';

export const SidebarProfile: React.FC = () => {
  const { userProfile, isLoading } = useGetAuthProfile();

  if (isLoading) {
    return <CenteredLoader />;
  }

  const name = userProfile?.name || '';
  const profileImg = userProfile?.profileImage || defaultProfile;

  return (
    <ProfileContainer>
      <ProfileImage size={50} src={profileImg} alt={name} />
      <UserInfo>
        <UserName>{name}</UserName>
        <UserEmail>{userProfile?.email}</UserEmail>
      </UserInfo>
    </ProfileContainer>
  );
};
