import SearchIcon from '@/assets/images/icons/search-icon.svg?react';

import { SearchBarContainer, SearchIconWrapper, SearchInput } from './search-bar.styled';

export const SearchBar: React.FC = () => {
  return (
    <SearchBarContainer>
      <SearchInput type="text" placeholder="Search User" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchBarContainer>
  );
};
