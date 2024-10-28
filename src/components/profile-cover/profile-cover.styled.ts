import styled from 'styled-components';

export const CoverWrapper = styled.div`
  width: 100%;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  overflow: hidden;
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
