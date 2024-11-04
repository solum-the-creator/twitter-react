import { UserProfileWithId } from '@/types/user';

import { ResultItem } from './result-item';
import { List } from './results-list.styled';

type ResultsListProps = {
  users: UserProfileWithId[];
};
export const ResultsList: React.FC<ResultsListProps> = ({ users }) => {
  return (
    <List>
      {users.map(({ uid, name, email, profileImage }) => (
        <ResultItem key={uid} id={uid} name={name} email={email} profileImage={profileImage} />
      ))}
    </List>
  );
};
