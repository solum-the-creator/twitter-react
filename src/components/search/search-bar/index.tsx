import SearchIcon from '@/assets/images/icons/search-icon.svg?react';

import { SearchBarContainer, SearchIconWrapper, SearchInput } from './search-bar.styled';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <SearchBarContainer>
      <SearchInput type="text" placeholder="Search User" value={value} onChange={handleSearch} />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchBarContainer>
  );
};
