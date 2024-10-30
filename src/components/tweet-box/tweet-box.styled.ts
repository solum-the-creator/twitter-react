import styled from 'styled-components';

export const TweetBoxStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke};
`;
