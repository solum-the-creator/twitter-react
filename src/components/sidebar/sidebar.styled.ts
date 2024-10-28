import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.stroke};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100vh;

  @media screen and (max-width: 768px) {
    width: 4.5rem;
    padding: 0.8rem;
  }
`;

export const SidebarMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BottomSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
