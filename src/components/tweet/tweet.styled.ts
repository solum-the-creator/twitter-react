import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const UserImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ActionsWrapper = styled.div`
  width: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ActionButton = styled.button`
  width: 2rem;
  height: 2rem;

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
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;

export const TweetHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  margin-bottom: 0.25rem;
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
`;

export const MetaInfo = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.125rem;
`;

export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};

  margin-bottom: 0.5rem;
  word-break: break-word;
`;

export const TweetFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

export const Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const LikeCount = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.125rem;
`;
