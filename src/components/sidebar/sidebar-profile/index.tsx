import defaultProfile from '@/assets/images/default-profile.png';
import { selectUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/index';

import {
  Avatar,
  AvatarWrapper,
  ProfileContainer,
  UserEmail,
  UserInfo,
  UserName,
} from './sidebar-profile.styled';

export const SidebarProfile: React.FC = () => {
  const user = useAppSelector(selectUser);
  const { name, email, photoURL } = user;

  const profileImg = photoURL || defaultProfile;

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
