import { Cover, CoverWrapper } from './profile-cover.styled';

type ProfileCoverProps = {
  coverImage?: string;
};

export const ProfileCover: React.FC<ProfileCoverProps> = ({ coverImage }) => {
  return <CoverWrapper>{coverImage && <Cover src={coverImage} alt="Profile cover" />}</CoverWrapper>;
};
