import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;

  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke};
  z-index: 3;
`;
