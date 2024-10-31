import styled from 'styled-components';

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const LikeButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.redHover};
  }
`;

export const LikeCount = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.125rem;
`;
