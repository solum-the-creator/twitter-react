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

type ProfileBioProps = {
  name: string;
  email: string;
  bio?: string;
  profileImage?: string;
};

export const ProfileBio: React.FC<ProfileBioProps> = ({ name, email, bio, profileImage }) => {
  return (
    <Container>
      <TopBio>
        <ProfileImageWrapper>
          <ProfileImage src={profileImage || testProfile} alt={`${name} image`} />
        </ProfileImageWrapper>
        <ActionsWrapper>
          <Button variant="outline" size="small">
            Edit profile
          </Button>
        </ActionsWrapper>
      </TopBio>
      <Details>
        <UserName>{name}</UserName>
        <Email>{email}</Email>
        <Bio>{bio}</Bio>
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
