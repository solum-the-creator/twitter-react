import styled from 'styled-components';

export const PopupWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  width: 10rem;
  z-index: 10;
`;

export const ActionItem = styled.button`
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
