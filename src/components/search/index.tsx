import { useEffect, useState } from 'react';

import { useDebounce } from '@/hooks/use-debounce';
import { useSearchUsersQuery } from '@/store/profile/profileApi';
import { UserProfileWithId } from '@/types/user';

import { SearchContainer } from './search.styled';
import { SearchBar } from './search-bar';
import { SearchResults } from './search-results';

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data: fetchedUsers, isFetching: isLoading } = useSearchUsersQuery(debouncedSearchTerm, {
    skip: debouncedSearchTerm === '',
  });

  const [displayedUsers, setDisplayedUsers] = useState<UserProfileWithId[]>([]);

  useEffect(() => {
    if (!isLoading && fetchedUsers) {
      setDisplayedUsers(fetchedUsers);
    }
  }, [fetchedUsers, isLoading]);

  const searchTermIsEmpty = debouncedSearchTerm === '';

  return (
    <SearchContainer>
      <SearchBar onChange={setSearchTerm} value={searchTerm} />
      {!searchTermIsEmpty && <SearchResults users={displayedUsers} isLoading={isLoading} />}
    </SearchContainer>
  );
};
