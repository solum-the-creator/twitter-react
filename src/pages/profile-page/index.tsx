import { useState } from 'react';

import { CenteredLoader } from '@/components/centered-loader';
import { EditProfileForm } from '@/components/edit-profile-form';
import { Header } from '@/components/header';
import { Modal } from '@/components/modal';
import { ProfileBio } from '@/components/profile-bio';
import { ProfileCover } from '@/components/profile-cover';
import { TweetBox } from '@/components/tweet-box';
import { TweetForm } from '@/components/tweet-form';
import { TweetList } from '@/components/tweet-list';
import { useGetAuthProfile } from '@/hooks/use-get-auth-profile';

import {
  HeaderInfo,
  HeaderName,
  HeaderTweetCount,
  ProfileContainer,
  ProfileTweets,
  TweetsWrapper,
} from './profile.styled';

export const ProfilePage: React.FC = () => {
  const { uid, userProfile, isLoading } = useGetAuthProfile();

  const [openModal, setOpenModal] = useState(false);

  if (isLoading) {
    return <CenteredLoader />;
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
            <EditProfileForm uid={uid} initialValues={userProfile} onSuccess={() => setOpenModal(false)} />
          </Modal>

          <TweetBox>
            <TweetForm />
          </TweetBox>

          <ProfileTweets>Tweets</ProfileTweets>

          <TweetsWrapper>
            <TweetList />
          </TweetsWrapper>
        </>
      )}
    </ProfileContainer>
  );
};
