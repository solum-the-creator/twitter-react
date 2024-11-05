import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.25rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }

  @media screen and (max-width: 992px) {
    padding: 0;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const UserName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const UserEmail = styled.span`
  max-width: 12rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 0.875rem;
  font-weight: 400;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
