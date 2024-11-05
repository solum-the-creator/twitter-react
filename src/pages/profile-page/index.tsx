import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CenteredLoader } from '@/components/centered-loader';
import { EditProfileForm } from '@/components/edit-profile-form';
import { Header } from '@/components/header';
import { Modal } from '@/components/modal';
import { ProfileBio } from '@/components/profile-bio';
import { ProfileCover } from '@/components/profile-cover';
import { TweetBox } from '@/components/tweet-box';
import { TweetForm } from '@/components/tweet-form';
import { TweetList } from '@/components/tweet-list';
import { selectAuthenticatedUser } from '@/store/auth/authSelectors';
import { useGetProfileQuery } from '@/store/profile/profileApi';
import { useGetTweetsByUserIdQuery } from '@/store/tweets/tweetsApi';

import {
  HeaderInfo,
  HeaderName,
  HeaderTweetCount,
  ProfileContainer,
  ProfileTweets,
  TweetsWrapper,
} from './profile.styled';

export const ProfilePage: React.FC = () => {
  const { uid: authUserId } = useSelector(selectAuthenticatedUser);
  const { userId } = useParams() as { userId: string };

  const isOwnProfile = useMemo(() => userId === authUserId, [userId, authUserId]);

  const { data: userProfile, isFetching } = useGetProfileQuery(userId, {
    refetchOnMountOrArgChange: true,
  });
  const { data: tweets, isFetching: isLoadingTweets } = useGetTweetsByUserIdQuery(userId);

  const [openModal, setOpenModal] = useState(false);

  const tweetsLength = useMemo(() => tweets?.length || 0, [tweets]);

  const handleOpenEditProfileModal = () => {
    setOpenModal(true);
  };

  const handleCloseEditProfileModal = () => {
    setOpenModal(false);
  };

  if (isFetching) {
    return <CenteredLoader />;
  }

  return (
    <ProfileContainer>
      {userProfile && (
        <>
          <Header>
            <HeaderInfo>
              <HeaderName>{userProfile.name}</HeaderName>
              <HeaderTweetCount>{tweetsLength > 0 && `${tweetsLength} Tweets`} </HeaderTweetCount>
            </HeaderInfo>
          </Header>
          <ProfileCover coverImage={userProfile.coverImage} />
          <ProfileBio
            name={userProfile.name}
            email={userProfile.email}
            bio={userProfile.bio}
            telegramLink={userProfile.telegramLink}
            profileImage={userProfile.profileImage}
            isOwnProfile={isOwnProfile}
            onEditProfile={handleOpenEditProfileModal}
          />
          {isOwnProfile && (
            <Modal isOpen={openModal} onClose={handleCloseEditProfileModal} header="Edit profile">
              <EditProfileForm
                uid={userId}
                initialValues={userProfile}
                onSuccess={() => setOpenModal(false)}
              />
            </Modal>
          )}

          {isOwnProfile && (
            <TweetBox>
              <TweetForm />
            </TweetBox>
          )}

          <ProfileTweets>Tweets</ProfileTweets>

          <TweetsWrapper>
            <TweetList tweets={tweets} isLoading={isLoadingTweets} />
          </TweetsWrapper>
        </>
      )}
    </ProfileContainer>
  );
};
