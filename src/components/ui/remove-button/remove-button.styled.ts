import styled from 'styled-components';

export const RemoveButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  padding: 0.6rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.redHover};
  }
`;
