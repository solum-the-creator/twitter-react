import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 576px) {
    gap: 0.5rem;
  }
`;

export const UserImageWrapper = styled(Link)`
  width: 100%;
  max-width: 3rem;
  max-height: 3rem;

  @media screen and (max-width: 576px) {
    max-width: 2.5rem;
    max-height: 2.5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ActionsWrapper = styled.div`
  position: relative;
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

  @media screen and (max-width: 576px) {
    width: 1.5rem;
    height: 1.5rem;

    padding: 0;
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

  @media screen and (max-width: 576px) {
    max-width: 10rem;
    font-size: 1rem;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const MetaInfo = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.125rem;

  @media screen and (max-width: 576px) {
    font-size: 0.875rem;
  }
`;

export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};

  margin-bottom: 0.5rem;
  word-break: break-word;

  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
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

export const Like = styled.div<{ $liked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const LikeCount = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.125rem;

  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
`;

export const TweetLoading = styled.div`
  min-height: 10rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
