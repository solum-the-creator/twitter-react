import defaultProfile from '@/assets/images/default-profile.png';
import { CenteredLoader } from '@/components/centered-loader';
import { selectAuthenticatedUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/index';
import { useGetProfileQuery } from '@/store/profile/profileApi';

import {
  Avatar,
  AvatarWrapper,
  ProfileContainer,
  UserEmail,
  UserInfo,
  UserName,
} from './sidebar-profile.styled';

export const SidebarProfile: React.FC = () => {
  const { email, uid } = useAppSelector(selectAuthenticatedUser);

  const { data: profile, isLoading } = useGetProfileQuery(uid!);

  if (isLoading) {
    return <CenteredLoader />;
  }

  const name = profile?.name || '';
  const profileImg = profile?.profileImage || defaultProfile;

  return (
    <ProfileContainer>
      <AvatarWrapper>
        <Avatar src={profileImg} alt="User avatar" />
      </AvatarWrapper>
      <UserInfo>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </UserInfo>
    </ProfileContainer>
  );
};
