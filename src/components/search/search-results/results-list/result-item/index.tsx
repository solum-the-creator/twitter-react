import { Link } from '@/components/ui/link';
import { ProfileImage } from '@/components/ui/profile-image';

import {
  ResultContent,
  ResultEmail,
  ResultImageWrapper,
  ResultItemContainer,
  ResultName,
} from './result-item.styled';

export const ResultItem: React.FC = () => {
  return (
    <ResultItemContainer>
      <ResultImageWrapper>
        <ProfileImage size={50} />
      </ResultImageWrapper>
      <ResultContent>
        <Link to="/" variant="secondary">
          <ResultName>John Doe</ResultName>
        </Link>
        <ResultEmail>dexs.kostukevi4@mail.ru</ResultEmail>
      </ResultContent>
    </ResultItemContainer>
  );
};
