import styled from 'styled-components';

export const TweetFormWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const UserImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;
`;

export const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};
  background: none;
  border: none;
  resize: none;
  overflow: hidden;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const Actions = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.stroke};
`;

export const ActionButton = styled.button`
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

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TweetButtonWrapper = styled.div`
  width: 100%;
  min-width: 8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ContentLength = styled.span`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
