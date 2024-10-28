import styled from 'styled-components';

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
`;

export const HeaderName = styled.h1`
  font-family: 'Roboto Serif', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const HeaderTweetCount = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
