import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;
