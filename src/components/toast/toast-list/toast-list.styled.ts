import styled from 'styled-components';

export const ToastListWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  z-index: 10;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
