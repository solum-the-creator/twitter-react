import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SidebarWrapper = styled.div`
  flex: 1;
  max-width: 20rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.main`
  flex: 2;
  max-width: 40rem;
  border-right: 1px solid ${({ theme }) => theme.colors.stroke};
  background-color: ${({ theme }) => theme.colors.primary};
  overflow-y: auto;
`;

export const RightSidebarWrapper = styled.div`
  flex: 1;
  max-width: 22rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;
