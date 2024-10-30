import testProfile from '@/assets/images/profile-image.png';

import { Button } from '../ui/button';
import { Link } from '../ui/link';
import { ProfileImage } from '../ui/profile-image';

import {
  ActionsWrapper,
  Bio,
  Container,
  Details,
  Email,
  Follows,
  FollowsCount,
  ProfileImageWrapper,
  TopBio,
  UserName,
} from './profile.styled';

type ProfileBioProps = {
  name: string;
  email: string;
  onEditProfile: () => void;
  bio?: string;
  telegramLink?: string;
  profileImage?: string;
};

export const ProfileBio: React.FC<ProfileBioProps> = ({
  name,
  email,
  onEditProfile,
  bio,
  telegramLink,
  profileImage,
}) => {
  return (
    <Container>
      <TopBio>
        <ProfileImageWrapper>
          <ProfileImage src={profileImage || testProfile} alt="Profile image" />
        </ProfileImageWrapper>
        <ActionsWrapper>
          <Button variant="outline" size="small" onClick={onEditProfile}>
            Edit profile
          </Button>
        </ActionsWrapper>
      </TopBio>
      <Details>
        <UserName>{name}</UserName>
        <Email>{email}</Email>
        {telegramLink && <Link to={telegramLink}>{telegramLink}</Link>}
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
