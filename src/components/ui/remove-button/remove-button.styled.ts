import styled from 'styled-components';

export const RemoveButtonStyled = styled.button`
  background-color: rgba(255, 0, 0, 0.5);
  padding: 0.6rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 0, 0, 0.7);
  }
`;
