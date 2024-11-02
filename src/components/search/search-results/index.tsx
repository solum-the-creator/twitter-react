import { ResultsList } from './results-list';
import { ResultsHeader, SearchResultsContainer } from './search-results.styled';

export const SearchResults: React.FC = () => {
  return (
    <SearchResultsContainer>
      <ResultsHeader>Search Results</ResultsHeader>
      <ResultsList />
    </SearchResultsContainer>
  );
};
