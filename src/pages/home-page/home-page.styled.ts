import styled from 'styled-components';

export const TweetsLoader = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};
`;
