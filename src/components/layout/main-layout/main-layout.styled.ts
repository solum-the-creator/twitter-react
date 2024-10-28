import styled from 'styled-components';

export const Layout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  max-width: 82rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

export const SidebarWrapper = styled.div`
  flex: 1;
  max-width: 20rem;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  position: sticky;
  top: 0;
`;

export const MainContent = styled.main`
  position: relative;
  flex: 2;
  max-width: 60rem;
  border-right: 1px solid ${({ theme }) => theme.colors.stroke};
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
`;

export const RightSidebarWrapper = styled.div`
  flex: 1;
  max-width: 22rem;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  position: sticky;
  top: 0;
`;
