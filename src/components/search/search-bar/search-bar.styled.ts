import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundGrayLight};
  color: ${({ theme }) => theme.colors.primaryText};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 1.5rem;
`;
