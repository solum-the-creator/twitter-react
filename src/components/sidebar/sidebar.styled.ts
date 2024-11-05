import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  padding: 1rem 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.stroke};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100vh;
  overflow: auto;

  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: thin;

  @media screen and (max-width: 992px) {
    padding: 0.8rem;
  }
`;

export const SidebarMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  gap: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 992px) {
    height: 3rem;
  }
`;

export const ButtonText = styled.span`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const ButtonIconWrapper = styled.div`
  width: 100%;
  display: none;

  @media screen and (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
