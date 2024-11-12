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
  Telegram,
  TopBio,
  UserName,
} from './profile.styled';

type ProfileBioProps = {
  name: string;
  email: string;
  isOwnProfile: boolean;
  onEditProfile: () => void;
  bio?: string;
  telegramLink?: string;
  profileImage?: string;
};

export const ProfileBio: React.FC<ProfileBioProps> = ({
  name,
  email,
  isOwnProfile,
  onEditProfile,
  bio,
  telegramLink,
  profileImage,
}) => {
  return (
    <Container>
      <TopBio>
        <ProfileImageWrapper>
          <ProfileImage src={profileImage} alt={name} />
        </ProfileImageWrapper>
        {isOwnProfile && (
          <ActionsWrapper>
            <Button variant="outline" size="small" onClick={onEditProfile} data-testid="edit-profile-button">
              Edit profile
            </Button>
          </ActionsWrapper>
        )}
      </TopBio>
      <Details>
        <UserName data-testid="profile-name">{name}</UserName>
        <Email data-testid="profile-email">{email}</Email>
        <Telegram data-testid="profile-telegram">
          {telegramLink && <Link to={telegramLink}>{telegramLink}</Link>}
        </Telegram>
        <Bio data-testid="profile-bio">{bio}</Bio>

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
