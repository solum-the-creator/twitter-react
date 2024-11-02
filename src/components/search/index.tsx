import { SearchContainer } from './search.styled';
import { SearchBar } from './search-bar';
import { SearchResults } from './search-results';

export const Search: React.FC = () => {
  return (
    <SearchContainer>
      <SearchBar />
      <SearchResults />
    </SearchContainer>
  );
};
