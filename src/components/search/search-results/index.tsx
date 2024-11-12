import { CenteredLoader } from '@/components/centered-loader';
import { UserProfileWithId } from '@/types/user';

import { ResultsList } from './results-list';
import { EmptyResults, ResultsHeader, SearchResultsContainer } from './search-results.styled';

type SearchResultsProps = {
  users: UserProfileWithId[];
  isLoading: boolean;
};

export const SearchResults: React.FC<SearchResultsProps> = ({ users, isLoading }) => {
  const isEmpty = users.length === 0;

  return (
    <SearchResultsContainer data-testid="search-results">
      <ResultsHeader>Search Results</ResultsHeader>
      {isLoading ? (
        <CenteredLoader />
      ) : isEmpty ? (
        <EmptyResults>No results found</EmptyResults>
      ) : (
        <ResultsList users={users} />
      )}
    </SearchResultsContainer>
  );
};
