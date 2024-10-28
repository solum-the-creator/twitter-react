import testProfile from '@/assets/images/profile-image.png';

import { Button } from '../ui/button';

import {
  ActionsWrapper,
  Bio,
  Container,
  Details,
  Email,
  Follows,
  FollowsCount,
  ProfileImage,
  ProfileImageWrapper,
  TopBio,
  UserName,
} from './profile.styled';

export const ProfileBio: React.FC = () => {
  return (
    <Container>
      <TopBio>
        <ProfileImageWrapper>
          <ProfileImage src={testProfile} alt="Profile image" />
        </ProfileImageWrapper>
        <ActionsWrapper>
          <Button variant="outline" size="small">
            Edit profile
          </Button>
        </ActionsWrapper>
      </TopBio>
      <Details>
        <UserName>Username</UserName>
        <Email>Email@email.com</Email>
        <Bio>UX&UI designer at @abutechuz</Bio>
        <Follows>
          <div>
            <FollowsCount>5</FollowsCount> Following
          </div>
          <div>
            <FollowsCount>5</FollowsCount> Followers
          </div>
        </Follows>
      </Details>
    </Container>
  );
};
