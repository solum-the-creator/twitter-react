import { useState } from 'react';

import { EditProfileForm } from '@/components/edit-profile-form';
import { Header } from '@/components/header';
import { Modal } from '@/components/modal';
import { ProfileBio } from '@/components/profile-bio';
import { ProfileCover } from '@/components/profile-cover';
import { selectAuthenticatedUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/index';
import { useGetProfileQuery } from '@/store/profile/profileApi';

import { HeaderInfo, HeaderName, HeaderTweetCount, ProfileContainer } from './profile.styled';

export const ProfilePage: React.FC = () => {
  const user = useAppSelector(selectAuthenticatedUser);
  const { data: userProfile, isLoading } = useGetProfileQuery(user.uid);

  const [openModal, setOpenModal] = useState(false);

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
          <ProfileCover coverImage={userProfile.coverImage} />
          <ProfileBio
            name={userProfile.name}
            email={userProfile.email}
            bio={userProfile.bio}
            telegramLink={userProfile.telegramLink}
            profileImage={userProfile.profileImage}
            onEditProfile={() => setOpenModal(true)}
          />
          <Modal isOpen={openModal} onClose={() => setOpenModal(false)} header="Edit profile">
            <EditProfileForm
              uid={user.uid}
              initialValues={userProfile}
              onSuccess={() => setOpenModal(false)}
            />
          </Modal>
        </>
      )}
    </ProfileContainer>
  );
};
