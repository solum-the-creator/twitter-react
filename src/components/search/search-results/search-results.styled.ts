import styled from 'styled-components';

export const SearchResultsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundGrayLight};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ResultsHeader = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
`;
