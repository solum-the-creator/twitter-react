import LikeIcon from '@/assets/images/icons/like-icon.svg?react';
import MoreIcon from '@/assets/images/icons/more-outline-icon.svg?react';
import { useGetProfileQuery } from '@/store/profile/profileApi';
import { formatShortDate } from '@/utils/date-utils';

import { CenteredLoader } from '../centered-loader';
import { TweetBox } from '../tweet-box';
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
  UserImageWrapper,
} from './tweet.styled';

type TweetProps = {
  id: string;
  content: string;
  userId: string;
  timestamp: number;
};

export const Tweet: React.FC<TweetProps> = ({ content, userId, timestamp }) => {
  const { data: userProfile, isLoading } = useGetProfileQuery(userId);

  if (isLoading) {
    return <CenteredLoader />;
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

            <TweetFooter>
              <Like>
                <LikeButton>
                  <LikeIcon />
                </LikeButton>
                <LikeCount>0</LikeCount>
              </Like>
            </TweetFooter>
          </Content>

          <ActionsWrapper>
            <ActionButton>
              <MoreIcon />
            </ActionButton>
          </ActionsWrapper>
        </Container>
      )}
    </TweetBox>
  );
};
