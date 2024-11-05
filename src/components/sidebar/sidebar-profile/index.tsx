import { useNavigate } from 'react-router-dom';

import defaultProfile from '@/assets/images/default-profile.png';
import { CenteredLoader } from '@/components/centered-loader';
import { ProfileImage } from '@/components/ui/profile-image';
import { useGetAuthProfile } from '@/hooks/use-get-auth-profile';
import { getProfilePath } from '@/utils/paths-utils';

import { ProfileContainer, UserEmail, UserInfo, UserName } from './sidebar-profile.styled';

export const SidebarProfile: React.FC = () => {
  const navigate = useNavigate();
  const { uid, userProfile, isLoading } = useGetAuthProfile();

  const onClick = () => {
    navigate(getProfilePath(uid));
  };

  if (isLoading) {
    return <CenteredLoader />;
  }

  const name = userProfile?.name || '';
  const profileImg = userProfile?.profileImage || defaultProfile;

  return (
    <ProfileContainer onClick={onClick}>
      <ProfileImage size={45} src={profileImg} alt={name} />
      <UserInfo>
        <UserName>{name}</UserName>
        <UserEmail>{userProfile?.email}</UserEmail>
      </UserInfo>
    </ProfileContainer>
  );
};
