import styled from 'styled-components';

export const ResultItemContainer = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;

  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundGrayLighter};
  }
`;

export const ResultImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResultContent = styled.div`
  max-width: 12rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ResultName = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

export const ResultEmail = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryText};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
