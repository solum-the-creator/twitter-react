import { useNavigate } from 'react-router-dom';

import { Link } from '@/components/ui/link';
import { ProfileImage } from '@/components/ui/profile-image';
import { getProfilePath } from '@/utils/paths-utils';

import {
  ResultContent,
  ResultEmail,
  ResultImageWrapper,
  ResultItemContainer,
  ResultName,
} from './result-item.styled';

type ResultItemProps = {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
};

export const ResultItem: React.FC<ResultItemProps> = ({ id, name, email, profileImage }) => {
  const navigate = useNavigate();

  const profilePath = getProfilePath(id);

  const onClick = () => {
    navigate(profilePath);
  };

  return (
    <ResultItemContainer onClick={onClick}>
      <ResultImageWrapper>
        <ProfileImage size={50} src={profileImage} alt={name} />
      </ResultImageWrapper>
      <ResultContent>
        <Link to={profilePath} variant="secondary">
          <ResultName>{name}</ResultName>
        </Link>
        <ResultEmail>{email}</ResultEmail>
      </ResultContent>
    </ResultItemContainer>
  );
};
