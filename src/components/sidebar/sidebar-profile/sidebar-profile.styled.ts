import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 3rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const UserName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const UserEmail = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 0.875rem;
  font-weight: 400;
`;
