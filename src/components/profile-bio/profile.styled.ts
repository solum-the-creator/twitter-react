import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke};
`;

export const TopBio = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileImageWrapper = styled.div`
  margin-top: -4rem;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
  border: 0.25rem solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Details = styled.div`
  margin-top: 1rem;
`;

export const UserName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Roboto Serif', serif;
`;

export const Email = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Bio = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryText};
  word-break: break-word;
`;

export const Follows = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const FollowsCount = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};
`;
