import { useState } from 'react';

import LikeIcon from '@/assets/images/icons/like-icon.svg?react';
import MoreIcon from '@/assets/images/icons/more-outline-icon.svg?react';
import { selectAuthenticatedUser } from '@/store/auth/authSelectors';
import { useAppDispatch, useAppSelector } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';
import { useGetProfileQuery } from '@/store/profile/profileApi';
import { useDeleteTweetMutation } from '@/store/tweets/tweetsApi';
import { formatShortDate } from '@/utils/date-utils';

import { CenteredLoader } from '../centered-loader';
import { ImagesPreview } from '../images-preview';
import { TweetBox } from '../tweet-box';
import { TweetPopup } from '../tweet-popup';
import { ProfileImage } from '../ui/profile-image';

import {
  ActionButton,
  ActionsWrapper,
  Container,
  Content,
  Like,
  LikeButton,
  LikeCount,
  MetaInfo,
  Name,
  Text,
  TweetFooter,
  TweetHeader,
  TweetLoading,
  UserImageWrapper,
} from './tweet-item.styled';

type TweetItemProps = {
  id: string;
  content: string;
  imageUrls: string[];
  userId: string;
  timestamp: number;
};

export const TweetItem: React.FC<TweetItemProps> = ({ id, content, imageUrls = [], userId, timestamp }) => {
  const { uid: authUserId } = useAppSelector(selectAuthenticatedUser);

  const dispatch = useAppDispatch();
  const { data: userProfile, isLoading } = useGetProfileQuery(userId);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDeletingLocal, setIsDeletingLocal] = useState(false);

  const [deleteTweet, { isLoading: isDeleting }] = useDeleteTweetMutation();

  const handleDelete = async () => {
    setIsPopupOpen(false);
    setIsDeletingLocal(true);

    try {
      await deleteTweet(id).unwrap();

      dispatch(addNotification({ type: 'success', message: 'Tweet deleted successfully' }));
    } catch (error) {
      setIsDeletingLocal(false);
      const errorMessage = (error as { message: string }).message || 'An unexpected error occurred';
      dispatch(addNotification({ type: 'error', message: errorMessage }));
    }
  };

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  if (isLoading) {
    return (
      <TweetLoading>
        <CenteredLoader />
      </TweetLoading>
    );
  }

  if (isDeleting || isDeletingLocal) {
    return null;
  }

  return (
    <TweetBox>
      {userProfile && (
        <Container>
          <UserImageWrapper>
            <ProfileImage size={48} src={userProfile.profileImage} alt={userProfile.name} />
          </UserImageWrapper>
          <Content>
            <TweetHeader>
              <Name>{userProfile.name}</Name>
              <MetaInfo>· {formatShortDate(timestamp)}</MetaInfo>
            </TweetHeader>

            <Text>{content}</Text>

            <ImagesPreview images={imageUrls} />

            <TweetFooter>
              <Like>
                <LikeButton>
                  <LikeIcon />
                </LikeButton>
                <LikeCount>0</LikeCount>
              </Like>
            </TweetFooter>
          </Content>

          {authUserId === userId && (
            <ActionsWrapper>
              <ActionButton onClick={togglePopup}>
                <MoreIcon />
              </ActionButton>
              <TweetPopup isOpen={isPopupOpen} onClose={togglePopup} onDelete={handleDelete} />
            </ActionsWrapper>
          )}
        </Container>
      )}
    </TweetBox>
  );
};
