import LikeIcon from '@/assets/images/icons/like-icon.svg?react';
import MoreIcon from '@/assets/images/icons/more-outline-icon.svg?react';

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

export const Tweet: React.FC = () => {
  return (
    <TweetBox>
      <Container>
        <UserImageWrapper>
          <ProfileImage size={48} src="" alt="" />
        </UserImageWrapper>
        <Content>
          <TweetHeader>
            <Name>John Doe</Name>
            <MetaInfo>@mr.kosukevi4 · Apr 1</MetaInfo>
          </TweetHeader>

          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut mollitia ducimus culpa, accusamus
            ipsa iure in repudiandae tenetur recusandae aperiam velit itaque. Eos modi expedita ipsa fugiat,
            perspiciatis fugit sit?
          </Text>

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
    </TweetBox>
  );
};
