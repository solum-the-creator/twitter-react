import styled from 'styled-components';

export const PopupWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadow.default};
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  width: 10rem;
  z-index: 7;
`;

export const ActionItem = styled.button`
  color: ${({ theme }) => theme.colors.primaryText};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;
