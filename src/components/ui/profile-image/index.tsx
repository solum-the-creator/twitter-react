import { ProfileImagePlaceholder, ProfileImageStyled, ProfileImageWrapper } from './profile-image.styled';

type ProfileImageProps = {
  src?: string;
  alt?: string;
  size?: number;
};

export const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt = 'Profile image', size }) => {
  return (
    <ProfileImageWrapper size={size}>
      {src ? <ProfileImageStyled src={src} alt={alt} /> : <ProfileImagePlaceholder />}
    </ProfileImageWrapper>
  );
};
