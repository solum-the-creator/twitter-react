import { ResultItem } from './result-item';
import { List } from './results-list.styled';

export const ResultsList: React.FC = () => {
  return (
    <List>
      <ResultItem />
      <ResultItem />
      <ResultItem />
    </List>
  );
};
